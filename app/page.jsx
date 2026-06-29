import HomePage from "@/components/HomePage";
import { createPageMetadata, locales } from "@/data/site";

export const metadata = createPageMetadata("sr", "home");

export default function Page() {
  return <HomePage locale="sr" content={locales.sr} />;
}
