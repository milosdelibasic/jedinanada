import { cleanRoutes, siteUrl } from "@/data/site";

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
          hu: `${siteUrl}${cleanRoutes.hu.home}`
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
          hu: `${siteUrl}${cleanRoutes.hu.gallery}`
        }
      }
    },
    {
      url: `${siteUrl}${cleanRoutes.hu.home}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          sr: `${siteUrl}${cleanRoutes.sr.home}`,
          hu: `${siteUrl}${cleanRoutes.hu.home}`
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
          hu: `${siteUrl}${cleanRoutes.hu.gallery}`
        }
      }
    }
  ];
}
