import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { siteUrl, cleanRoutes, business, locales } from "../data/site.js";
import sharp from "sharp";
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const decode = text => text.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
const urls = [];
for (const locale of ["sr", "hu"]) {
  for (const page of ["home", "gallery"]) {
    const route = cleanRoutes[locale][page];
    const canonical = `${siteUrl}${route}`;
    urls.push(canonical);
    const html = await readFile(`out${route}index.html`, "utf8");
    assert.match(html, new RegExp(`<html lang="${locale}"`), `${route}: language must be in static HTML`);
    const titles = [...html.matchAll(/<title>(.*?)<\/title>/g)];
    assert.equal(titles.length, 1);
    const title = locales[locale].meta[`${page}Title`];
    assert.equal(decode(titles[0][1]), title, `${route}: duplicated or wrong title`);
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
    assert.equal(decode(attr(meta("description"), "content")), locales[locale].meta[`${page}Description`]);
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
      assert.equal(questions.length, locales[locale].faq.items.length);
      for (const q of questions) assert.ok(html.includes(q.acceptedAnswer.text), `Missing visible answer: ${q.name}`);
    }
    for (const tag of html.match(/<(?:img|script|link)\b[^>]*>/g) || []) {
      const path = attr(tag,"src") || (attr(tag,"rel") === "stylesheet" ? attr(tag,"href") : "");
      if (path?.startsWith("/") && !path.startsWith("//")) await access(`out${path.split("?")[0]}`);
    }
    console.log(`PASS ${route}: title, canonical, languages, metadata, graph, content, assets`);
  }
}
const sitemap = await readFile("out/sitemap.xml", "utf8");
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]).sort(),urls.sort());
assert.ok(!sitemap.includes('.html'));
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
console.log("PASS sitemap, robots, social image dimensions and legacy canonical URLs");
