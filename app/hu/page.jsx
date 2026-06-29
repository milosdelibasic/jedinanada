import HomePage from "@/components/HomePage";
import { createPageMetadata, locales } from "@/data/site";

export const metadata = createPageMetadata("hu", "home");

export default function Page() {
  return <HomePage locale="hu" content={locales.hu} />;
}
