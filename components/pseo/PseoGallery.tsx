import Image from "next/image";

type PseoGalleryProps = {
  heading: string;
  images: { src: string; alt: string }[];
};

export function PseoGallery({ heading, images }: PseoGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="container">
        <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">OUR WORK</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {heading}
        </h2>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <figure key={img.src} className="group relative overflow-hidden rounded-xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10">
                <span className="text-sm font-medium text-white">{img.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
