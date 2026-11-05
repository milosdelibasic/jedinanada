import { cleanRoutes, contentUpdated, galleryImages, seoPageKeys, siteUrl } from "@/data/site";

export const dynamic = "force-static";
// Update only when page content changes, never on every build.

export default function sitemap() {
  return ["sr", "hu"].flatMap(locale => seoPageKeys.map(page => ({
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
      : page === "home" ? ["14", "11", "4", "13"].map(id => `${siteUrl}/resources/gallery/${id}.jpg`) : undefined
  })));
}
