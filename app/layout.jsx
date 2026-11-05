import "@fontsource-variable/manrope";
import "./styles/globals.scss";
import SectionNavigation from "@/components/SectionNavigation";
import { business, siteName, siteUrl } from "@/data/site";

const defaultDescription =
  "Jedina Nada DOO iz Sente vrši otkup, preradu i reciklažu sekundarnih sirovina i neopasnog otpada.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Jedina Nada DOO Senta - Reciklaža",
    template: "%s | Jedina Nada DOO"
  },
  description: defaultDescription,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "recycling",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined
  },
  icons: {
    icon: [
      { url: "/assets/seo/favicon.png?v=2", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg?v=2", sizes: "any", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/assets/seo/apple-touch-icon.png?v=2"
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default"
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jedina Nada DOO Senta - Reciklaža",
    description: defaultDescription,
    siteName,
    locale: "sr_RS",
    images: [
      {
        url: `${siteUrl}/assets/seo/share-sr.jpg`,
        width: 1200,
        height: 630,
        alt: "Jedina Nada DOO Senta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jedina Nada DOO Senta - Reciklaža",
    description: defaultDescription,
    images: [`${siteUrl}/assets/seo/share-sr.jpg`]
  },
  other: {
    "geo.region": "RS-02",
    "geo.placename": "Senta",
    "geo.position": `${business.coordinates.latitude};${business.coordinates.longitude}`,
    ICBM: `${business.coordinates.latitude}, ${business.coordinates.longitude}`
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#113d2e",
  colorScheme: "light"
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body><SectionNavigation />{children}</body>
    </html>
  );
}
