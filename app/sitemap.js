import { cleanRoutes, galleryImages, siteUrl } from "@/data/site";

export const dynamic = "force-static";
// Update only when page content changes, never on every build.
const contentUpdated = "2026-09-07";

export default function sitemap() {
  return ["sr", "hu"].flatMap(locale => ["home", "gallery"].map(page => ({
    url: `${siteUrl}${cleanRoutes[locale][page]}`,
    lastModified: contentUpdated,
    alternates: {
      languages: {
        sr: `${siteUrl}${cleanRoutes.sr[page]}`,
        hu: `${siteUrl}${cleanRoutes.hu[page]}`,
        "x-default": `${siteUrl}${cleanRoutes.sr[page]}`
      }
    },
    images: page === "gallery"
      ? galleryImages.map(image => `${siteUrl}${image.fullJpg}`)
      : ["14", "11", "4", "13"].map(id => `${siteUrl}/resources/gallery/${id}.jpg`)
  })));
}
