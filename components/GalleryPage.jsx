import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import {
  breadcrumbJsonLd,
  galleryPageJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd
} from "@/data/site";

export default function GalleryPage({ locale, content }) {
  return (
    <>
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={websiteJsonLd(locale)} />
      <StructuredData data={localBusinessJsonLd(locale)} />
      <StructuredData data={galleryPageJsonLd(locale)} />
      <StructuredData data={breadcrumbJsonLd(locale, "gallery")} />
      <Header locale={locale} content={content} active="gallery" />
      <main>
        <section className="gallery-hero section-shell">
          <p className="eyebrow">{content.gallery.eyebrow}</p>
          <h1>{content.gallery.title}</h1>
          <p>{content.gallery.text}</p>
        </section>
        <GalleryGrid content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
