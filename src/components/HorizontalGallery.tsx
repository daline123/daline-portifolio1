import { useEffect, useRef, useState } from 'react';
import ScrollIndicator from './ScrollIndicator';
import '../styles/gallery.css';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  ratio: number;
}

const GALLERY = '/images/gallery';

const IMAGES: GalleryImage[] = [
  { id: '01', src: `${GALLERY}/home-capa.jpg`, alt: 'Apresentação — Daline Ribeiro', ratio: 1536 / 1024 },
  { id: '02', src: `${GALLERY}/02.jpg`, alt: 'Capa — foto de Sammi Landweer', ratio: 3 / 2 },
  { id: '03', src: `${GALLERY}/03.jpg`, alt: 'Capa — foto de Sammi Landweer', ratio: 3 / 2 },
  { id: '04', src: `${GALLERY}/04.jpg`, alt: 'ENTRE — apresentação no Festival Panorama', ratio: 2400 / 1614 },
  { id: '05', src: `${GALLERY}/05.jpg`, alt: 'Foto de Matheus José Maria', ratio: 3 / 2 },
  { id: '06', src: `${GALLERY}/06.jpg`, alt: 'Foto de Matheus José Maria', ratio: 3 / 2 },
  { id: '07', src: `${GALLERY}/07.jpg`, alt: 'Inhotim — True Rouge, foto de Leca Novo', ratio: 1955 / 2400 },
  { id: '08', src: `${GALLERY}/08.jpg`, alt: 'Ópera da Serra da Capivara — foto de Joaquim Neto', ratio: 2400 / 2023 },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = useState(true);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      markScrolled();
    };

    const handleScroll = () => {
      markScrolled();
    };

    const markScrolled = () => {
      if (hasScrolledRef.current) return;
      if (el.scrollLeft > 40) {
        hasScrolledRef.current = true;
        setShowIndicator(false);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="gallery-scroll fixed left-0 right-0 top-nav bottom-0 overflow-x-auto overflow-y-hidden"
        role="region"
        aria-label="Galeria de imagens — role lateralmente"
        tabIndex={0}
      >
        <div className="flex items-center h-full px-6 md:px-12 gap-3">
          {IMAGES.map((img, i) => (
            <GalleryFrame key={img.id} image={img} priority={i === 0} isFirst={i === 0} />
          ))}
          <div className="flex-shrink-0 w-12 md:w-24" aria-hidden="true" />
        </div>
      </div>
      <ScrollIndicator visible={showIndicator} />
    </>
  );
}

interface GalleryFrameProps {
  image: GalleryImage;
  priority: boolean;
}

function GalleryFrame({ image, priority, isFirst }: GalleryFrameProps & { isFirst?: boolean }) {
  return (
    <figure
      className="gallery-item m-0"
      style={{
        height: 'calc(100vh - var(--nav-height) - 48px)',
        aspectRatio: String(image.ratio),
      }}
    >
      <div className="gallery-item-inner relative w-full h-full overflow-hidden bg-bg-secondary group">
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isFirst && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <h1 className="text-white font-display font-medium text-5xl md:text-[min(8vw,80px)] lowercase leading-[0.8] mb-4 drop-shadow-xl">
              daline ribeiro
            </h1>
            <p className="text-white/90 font-display font-normal text-sm md:text-lg tracking-[0.2em] lowercase opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              dança. corpo. movimento.
            </p>
          </div>
        )}
      </div>
    </figure>
  );
}
