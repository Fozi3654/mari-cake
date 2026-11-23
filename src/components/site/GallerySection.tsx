import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages } from "@/data/content";
import { Reveal, SectionHeading } from "./Reveal";

export function GallerySection() {
  const [active, setActive] = useState<(typeof galleryImages)[number] | null>(null);
  return (
    <section id="gallery" className="bg-muted/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Gallery" title="گالری خوشمزه ماری کیک" subtitle="تصاویر نمایشی از حال‌وهوای دسرهای ماری کیک" />
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((g, i) => (
            <Reveal key={g.caption} delay={(i % 3) * 100} className="mb-5 break-inside-avoid">
              <button onClick={() => setActive(g)} className="group relative block w-full overflow-hidden rounded-[1.75rem] shadow-soft">
                <img src={g.src} alt={g.caption} width={g.w} height={g.h} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-cocoa/70 via-transparent to-transparent p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="text-sm font-medium text-primary-foreground dark:text-foreground">{g.caption}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl overflow-hidden rounded-[2rem] border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.caption}</DialogTitle>
          {active && <img src={active.src} alt={active.caption} className="max-h-[85vh] w-full rounded-[2rem] object-contain" />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
