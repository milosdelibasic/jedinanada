import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { siteUrl, cleanRoutes, business, contentUpdated, locales, pageDescription, pageTitle, seoPageKeys } from "../data/site.js";
import sharp from "sharp";
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const decode = text => text.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
const urls = [];
const titlesSeen = new Set();
const descriptionsSeen = new Set();
const pages = new Map();
const pageLinks = new Map();
for (const locale of ["sr", "hu"]) for (const page of seoPageKeys) {
  const route = cleanRoutes[locale][page];
  pages.set(route, await readFile(`out${route}index.html`, "utf8"));
}
for (const locale of ["sr", "hu"]) {
  for (const page of seoPageKeys) {
    const route = cleanRoutes[locale][page];
    const canonical = `${siteUrl}${route}`;
    urls.push(canonical);
    const html = pages.get(route);
    assert.match(html, new RegExp(`<html lang="${locale}"`), `${route}: language must be in static HTML`);
    const titles = [...html.matchAll(/<title>(.*?)<\/title>/g)];
    assert.equal(titles.length, 1);
    const title = pageTitle(locales[locale], page);
    assert.equal(decode(titles[0][1]), title, `${route}: duplicated or wrong title`);
    assert.ok(!titlesSeen.has(title), `${route}: title must be unique`);
    titlesSeen.add(title);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1);
    const links = html.match(/<link\b[^>]*>/g) || [];
    const canonicalTags = links.filter(t => attr(t,"rel") === "canonical");
    assert.equal(canonicalTags.length, 1);
    assert.equal(attr(canonicalTags[0], "href"), canonical);
    for (const lang of ["sr", "hu", "x-default"]) {
      const alternate = links.find(t => attr(t,"hrefLang") === lang || attr(t,"hreflang") === lang);
      assert.equal(attr(alternate || "", "href"), `${siteUrl}${cleanRoutes[lang === "x-default" ? "sr" : lang][page]}`);
    }
    const metas = html.match(/<meta\b[^>]*>/g) || [];
    const meta = name => metas.find(t => attr(t,"name") === name || attr(t,"property") === name);
    const description = pageDescription(locales[locale], page);
    assert.equal(decode(attr(meta("description"), "content")), description);
    assert.ok(!descriptionsSeen.has(description), `${route}: description must be unique`);
    descriptionsSeen.add(description);
    assert.ok(!attr(meta("robots"), "content").includes("noindex"));
    assert.equal(attr(meta("og:url"), "content"), canonical);
    assert.equal(attr(meta("og:image"), "content"), `${siteUrl}/assets/seo/share-${locale}.jpg`);
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.equal(scripts.length, 1);
    const graph = JSON.parse(scripts[0][1])["@graph"];
    const ids = new Set(graph.map(n => n["@id"]));
    assert.equal(ids.size, graph.length);
    const company = graph.find(n => [].concat(n["@type"]).includes("LocalBusiness"));
    assert.equal(company.telephone, business.phone);
    assert.equal(company.address.streetAddress, "Karađorđeva 109");
    assert.ok(!company.priceRange && !company.aggregateRating);
    const inspect = node => {
      if (!node || typeof node !== "object") return;
      if (Object.keys(node).length === 1 && node["@id"]) assert.ok(ids.has(node["@id"]), `Unresolved entity ${node["@id"]}`);
      Object.values(node).forEach(value => Array.isArray(value) ? value.forEach(inspect) : inspect(value));
    };
    graph.forEach(inspect);
    if (page === "home") {
      const questions = graph.find(n => [].concat(n["@type"]).includes("FAQPage")).mainEntity;
      const faq = locales[locale].faq.items;
      assert.equal(questions.length, faq.length);
      for (const q of questions) {
        assert.ok(decode(html).includes(q.name), `Missing visible question: ${q.name}`);
        assert.ok(decode(html).includes(q.acceptedAnswer.text), `Missing visible answer: ${q.name}`);
      }
    }
    const internalPages = [];
    for (const tag of html.match(/<a\b[^>]*>/g) || []) {
      const href = decode(attr(tag, "href") || "");
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const target = new URL(href, canonical);
      if (target.origin !== new URL(siteUrl).origin) continue;
      if (pages.has(target.pathname)) {
        internalPages.push(target.pathname);
        if (target.hash) assert.ok(pages.get(target.pathname).includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${route}: broken anchor ${href}`);
      } else {
        await access(`out${target.pathname}`);
      }
    }
    pageLinks.set(route, internalPages);
    for (const image of html.match(/<img\b[^>]*>/g) || []) {
      assert.ok(/\balt="/.test(image), `${route}: image without alt`);
      assert.ok(attr(image,"width") && attr(image,"height"), `${route}: image without dimensions`);
    }
    for (const source of html.match(/<(?:source|img)\b[^>]*>/g) || []) {
      for (const candidate of (attr(source, "srcSet") || attr(source, "srcset") || "").split(",")) {
        const src = candidate.trim().split(/\s+/)[0];
        if (src.startsWith("/")) await access(`out${src}`);
      }
    }
    for (const tag of html.match(/<(?:img|script|link)\b[^>]*>/g) || []) {
      const path = attr(tag,"src") || (attr(tag,"rel") === "stylesheet" ? attr(tag,"href") : "");
      if (path?.startsWith("/") && !path.startsWith("//")) await access(`out${path.split("?")[0]}`);
    }
    console.log(`PASS ${route}: title, canonical, languages, metadata, graph, content, assets`);
  }
}
const reached = new Set();
const queue = ["/"];
while (queue.length) {
  const route = queue.shift();
  if (reached.has(route)) continue;
  reached.add(route);
  queue.push(...(pageLinks.get(route) || []));
}
assert.deepEqual([...reached].sort(), [...pages.keys()].sort(), "Every indexable page must be reachable through visible links from the homepage");
const sitemap = await readFile("out/sitemap.xml", "utf8");
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]).sort(),urls.sort());
assert.ok(!sitemap.includes('.html'));
for (const entry of sitemap.match(/<url>[\s\S]*?<\/url>/g) || []) {
  assert.ok(entry.includes(`<lastmod>${contentUpdated}</lastmod>`));
  assert.equal([...entry.matchAll(/<xhtml:link\b/g)].length, 3);
  const route = new URL(entry.match(/<loc>(.*?)<\/loc>/)[1]).pathname;
  const page = seoPageKeys.find(key => cleanRoutes.sr[key] === route || cleanRoutes.hu[key] === route);
  for (const language of ["sr", "hu", "x-default"]) assert.ok(entry.includes(`hreflang="${language}" href="${siteUrl}${cleanRoutes[language === "x-default" ? "sr" : language][page]}"`));
}
const robots = await readFile("out/robots.txt", "utf8");
assert.ok(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`) && !robots.includes("Disallow: /"));
for (const locale of ["sr", "hu"]) {
  const image = await sharp(`out/assets/seo/share-${locale}.jpg`).metadata();
  assert.equal(image.width, 1200); assert.equal(image.height,630);
}
for (const [file,route] of [["gallery.html","/gallery/"],["hu.html","/hu/"],["hu/gallery.html","/hu/gallery/"]]) {
  const html = await readFile(`out/${file}`,"utf8");
  assert.ok(html.includes(`rel="canonical" href="${siteUrl}${route}"`));
}
const notFound = await readFile("out/404.html", "utf8");
assert.match(notFound, /name="robots" content="noindex"/);
const redirects = await readFile("out/_redirects", "utf8");
assert.ok(!redirects.includes("/* / 200"), "Do not turn missing pages into soft 404s");
assert.ok(!redirects.split("\n").some(line => /^https?:/.test(line)), "Cloudflare Pages requires domain redirects in zone settings, not _redirects");
console.log(`PASS ${pages.size} reachable pages, unique metadata, sitemap languages/dates, robots, 404, social images and legacy canonical URLs`);
