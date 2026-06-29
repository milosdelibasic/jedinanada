import GalleryPage from "@/components/GalleryPage";
import { createPageMetadata, locales } from "@/data/site";

export const metadata = createPageMetadata("hu", "gallery");

export default function Page() {
  return <GalleryPage locale="hu" content={locales.hu} />;
}
