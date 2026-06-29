"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/data/site";

export default function GalleryGrid({ content }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [originStyle, setOriginStyle] = useState(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index === null ? null : (index + 1) % galleryImages.length));
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? null : (index - 1 + galleryImages.length) % galleryImages.length));
      }
    };

    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const openImage = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    const thumbCenterX = rect.left + rect.width / 2;
    const thumbCenterY = rect.top + rect.height / 2;
    const finalWidth = Math.min(window.innerWidth, 1120);

    setOriginStyle({
      "--thumb-x": `${thumbCenterX - viewportCenterX}px`,
      "--thumb-y": `${thumbCenterY - viewportCenterY}px`,
      "--thumb-scale": `${Math.max(0.16, Math.min(0.34, rect.width / finalWidth))}`
    });
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveIndex(null);
  };

  const showPrevious = (event) => {
    event.stopPropagation();
    setActiveIndex((index) => (index === null ? null : (index - 1 + galleryImages.length) % galleryImages.length));
  };

  const showNext = (event) => {
    event.stopPropagation();
    setActiveIndex((index) => (index === null ? null : (index + 1) % galleryImages.length));
  };

  return (
    <section className="gallery-grid-section section-shell" id="gallery">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            className="gallery-tile"
            type="button"
            key={image.id}
            onClick={(event) => openImage(index, event)}
            aria-label={`${content.gallery.open} ${image.id}`}
          >
            <img
              src={image.thumb}
              alt={`${content.gallery.imageAlt} ${image.id}`}
              width="720"
              height={Math.round((720 / image.width) * image.height)}
              loading={index < 4 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={content.gallery.title}>
          <button className="lightbox-backdrop" type="button" aria-label={content.gallery.close} onClick={closeImage} />
          <div className="lightbox-panel" style={originStyle || undefined}>
            <button className="lightbox-close lightbox-icon-button" type="button" aria-label={content.gallery.close} onClick={closeImage}>
              <img src="/vectors/close.svg" alt="" width="22" height="22" />
            </button>
            <button
              className="lightbox-nav lightbox-nav-prev lightbox-icon-button"
              type="button"
              aria-label={content.gallery.previous}
              onClick={showPrevious}
            >
              <img src="/vectors/chevron-left.svg" alt="" width="28" height="28" />
            </button>
            <picture key={activeImage.id}>
              <source srcSet={activeImage.fullWebp} type="image/webp" />
              <img
                src={activeImage.fullJpg}
                alt={`${content.gallery.imageAlt} ${activeImage.id}`}
                width={activeImage.width}
                height={activeImage.height}
              />
            </picture>
            <button
              className="lightbox-nav lightbox-nav-next lightbox-icon-button"
              type="button"
              aria-label={content.gallery.next}
              onClick={showNext}
            >
              <img src="/vectors/chevron-right.svg" alt="" width="28" height="28" />
            </button>
            <span className="lightbox-counter">{activeImage.id} / {galleryImages.length}</span>
          </div>
        </div>
      )}
    </section>
  );
}
