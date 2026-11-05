import { writeFile } from "node:fs/promises";
import { siteUrl } from "../data/site.js";

const attr = (tag, name) => tag?.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1];
const decode = text => text?.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
async function request(url, userAgent = "JedinaNada-SEO-Audit/1.0") {
  try {
    const response = await fetch(url, { redirect: "manual", headers: { "User-Agent": userAgent }, signal: AbortSignal.timeout(20000) });
    return { url, status: response.status, location: response.headers.get("location"), robotsHeader: response.headers.get("x-robots-tag"), contentType: response.headers.get("content-type"), body: await response.text() };
  } catch (error) {
    return { url, error: error.message };
  }
}
const compact = ({ body, ...result }) => result;
const sitemap = await request(`${siteUrl}/sitemap.xml`);
const robots = await request(`${siteUrl}/robots.txt`);
if (sitemap.status !== 200) throw new Error(`Sitemap unavailable: ${JSON.stringify(compact(sitemap))}`);
const urls = [...sitemap.body.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
if (!urls.length || urls.some(url => new URL(url).origin !== siteUrl)) throw new Error("Sitemap must contain canonical pages on the configured origin");
const pages = [];
// Run one page pair at a time to avoid generating an unnecessary traffic burst.
for (const url of urls) {
  const [normal, bot] = await Promise.all([request(url), request(url, "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")]);
  const links = normal.body?.match(/<link\b[^>]*>/g) || [];
  const metas = normal.body?.match(/<meta\b[^>]*>/g) || [];
  pages.push({ ...compact(normal), title: decode(normal.body?.match(/<title>(.*?)<\/title>/)?.[1]), language: attr(normal.body?.match(/<html\b[^>]*>/)?.[0], "lang"), canonical: attr(links.find(tag => attr(tag, "rel") === "canonical"), "href"), description: decode(attr(metas.find(tag => attr(tag, "name") === "description"), "content")), robots: attr(metas.find(tag => attr(tag, "name") === "robots"), "content"), alternates: links.filter(tag => attr(tag, "hreflang")).map(tag => ({ language: attr(tag, "hreflang"), url: attr(tag, "href") })), h1Count: (normal.body?.match(/<h1(?:\s|>)/g) || []).length, googlebotUserAgent: compact(bot) });
}
const probes = await Promise.all([
  `http://${new URL(siteUrl).host}/`,
  `https://www.${new URL(siteUrl).host}/`,
  `https://www.${new URL(siteUrl).host}/hu/?utm_source=seo-test`,
  `${siteUrl}/gallery.html`, `${siteUrl}/hu.html`, `${siteUrl}/hu/gallery.html`,
  `${siteUrl}/index.html`, `${siteUrl}/gallery/index.html`,
  `${siteUrl}/nepostojeca-seo-provera/`
].map(async url => compact(await request(url))));
const issues = [];
for (const page of pages) {
  if (page.status !== 200 || page.googlebotUserAgent.status !== 200) issues.push(`${page.url}: not accessible with both tested user agents`);
  if (page.canonical !== page.url) issues.push(`${page.url}: wrong canonical`);
  if (page.h1Count !== 1 || !page.title || !page.description) issues.push(`${page.url}: missing or duplicated primary metadata`);
  if (!page.language || page.alternates.length !== 3) issues.push(`${page.url}: incomplete language information`);
  if (/noindex/i.test(`${page.robots} ${page.robotsHeader} ${page.googlebotUserAgent.robotsHeader}`)) issues.push(`${page.url}: noindex found`);
}
if (new Set(pages.map(page => page.title)).size !== pages.length) issues.push("Duplicate page titles");
if (new Set(pages.map(page => page.description)).size !== pages.length) issues.push("Duplicate page descriptions");
for (const probe of probes) {
  if (probe.url.endsWith("/nepostojeca-seo-provera/")) {
    if (probe.status !== 404) issues.push("Unknown URL must return HTTP 404");
  } else if (![301, 308].includes(probe.status)) issues.push(`${probe.url}: missing permanent redirect`);
}
const report = { checkedAt: new Date().toISOString(), origin: siteUrl, pageCount: pages.length, sitemap: { ...compact(sitemap), lastModified: [...new Set([...sitemap.body.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]))] }, robots: { ...compact(robots), text: robots.body }, pages, probes, issues, limitations: ["A Googlebot user-agent test is not a verified request from Google's crawler.", "This audit does not measure Search Console rankings, traffic, backlinks or real-user Core Web Vitals."] };
if (process.argv[2]) await writeFile(process.argv[2], `${JSON.stringify(report, null, 2)}\n`);
else console.log(JSON.stringify(report, null, 2));
console.log(`${issues.length ? "FAIL" : "PASS"}: ${pages.length} live pages; ${issues.length} issues${process.argv[2] ? `; ${process.argv[2]}` : ""}`);
for (const issue of issues) console.error(issue);
process.exitCode = issues.length ? 1 : 0;
