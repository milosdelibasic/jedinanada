import { cleanRoutes, galleryImages, siteUrl } from "@/data/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-29");

export default function sitemap() {
  return [
    {
      url: `${siteUrl}${cleanRoutes.sr.home}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          sr: `${siteUrl}${cleanRoutes.sr.home}`,
          hu: `${siteUrl}${cleanRoutes.hu.home}`,
          "x-default": `${siteUrl}${cleanRoutes.sr.home}`
        }
      }
    },
    {
      url: `${siteUrl}${cleanRoutes.sr.gallery}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          sr: `${siteUrl}${cleanRoutes.sr.gallery}`,
          hu: `${siteUrl}${cleanRoutes.hu.gallery}`,
          "x-default": `${siteUrl}${cleanRoutes.sr.gallery}`
        }
      },
      images: galleryImages.slice(0, 8).map((image) => `${siteUrl}${image.fullJpg}`)
    },
    {
      url: `${siteUrl}${cleanRoutes.hu.home}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          sr: `${siteUrl}${cleanRoutes.sr.home}`,
          hu: `${siteUrl}${cleanRoutes.hu.home}`,
          "x-default": `${siteUrl}${cleanRoutes.sr.home}`
        }
      }
    },
    {
      url: `${siteUrl}${cleanRoutes.hu.gallery}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          sr: `${siteUrl}${cleanRoutes.sr.gallery}`,
          hu: `${siteUrl}${cleanRoutes.hu.gallery}`,
          "x-default": `${siteUrl}${cleanRoutes.sr.gallery}`
        }
      },
      images: galleryImages.slice(0, 8).map((image) => `${siteUrl}${image.fullJpg}`)
    }
  ];
}
