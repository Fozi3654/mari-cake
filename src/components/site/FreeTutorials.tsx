import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { freeTutorials, type FreeTutorial } from "@/data/content";
import { Reveal, SectionHeading } from "./Reveal";

export function FreeTutorialCard({ t, onOpen }: { t: FreeTutorial; onOpen: () => void }) {
  return (
    <article className="group h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition duration-500 hover:-translate-y-2 hover:border-rose hover:shadow-lift">
      <div className="relative overflow-hidden">
        <img src={t.image} alt={t.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute right-4 top-4 rounded-full bg-rose px-3 py-1 text-xs font-bold text-accent-foreground">رایگان</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-primary">{t.title}</h3>
        <p className="mt-2 leading-7 text-muted-foreground">{t.description}</p>
        <button onClick={onOpen} className="mt-5 inline-flex items-center gap-2 font-bold text-rose">
          مشاهده آموزش
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1.5" />
        </button>
      </div>
    </article>
  );
}

export function FreeTutorialModal({ t, onClose }: { t: FreeTutorial | null; onClose: () => void }) {
  return (
    <Dialog open={!!t} onOpenChange={(o) => !o && onClose()}>
      <DialogContent dir="rtl" className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-[2rem] p-0">
        {t && (
          <>
            <img src={t.image} alt={t.title} className="aspect-[16/8] w-full object-cover" />
            <div className="p-7 text-right">
              <span className="rounded-full bg-blush px-3 py-1 text-xs text-primary">محتوای نمونه برای نمایش</span>
              <DialogTitle className="mt-4 text-2xl font-extrabold text-primary">{t.title}</DialogTitle>
              <DialogDescription className="mt-2 text-muted-foreground">{t.description}</DialogDescription>
              <h4 className="mt-6 font-bold text-primary">مواد لازم</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {t.ingredients.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                    {i}
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 font-bold text-primary">طرز تهیه</h4>
              <ol className="mt-3 space-y-3">
                {t.steps.map((s, idx) => (
                  <li key={s} className="flex gap-3 text-sm leading-7 text-foreground/85">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{(idx + 1).toLocaleString("fa-IR")}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function FreeTutorialsSection() {
  const [active, setActive] = useState<FreeTutorial | null>(null);
  return (
    <section id="free" className="bg-muted/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Free Recipes" title="از همین امروز، شیرین شروع کن!" subtitle="سه آموزش خوشمزه و رایگان برای عاشقان کیک و شیرینی" />
        <div className="grid gap-7 md:grid-cols-3">
          {freeTutorials.map((t, i) => (
            <Reveal key={t.id} delay={i * 140}>
              <FreeTutorialCard t={t} onOpen={() => setActive(t)} />
            </Reveal>
          ))}
        </div>
      </div>
      <FreeTutorialModal t={active} onClose={() => setActive(null)} />
    </section>
  );
}
