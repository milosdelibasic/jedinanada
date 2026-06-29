import GalleryPage from "@/components/GalleryPage";
import { createPageMetadata, locales } from "@/data/site";

export const metadata = createPageMetadata("sr", "gallery");

export default function Page() {
  return <GalleryPage locale="sr" content={locales.sr} />;
}
