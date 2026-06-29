import "./styles/globals.scss";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jedinanada.rs"),
  title: {
    default: "Jedina Nada DOO Senta - Reciklaža",
    template: "%s | Jedina Nada DOO"
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
