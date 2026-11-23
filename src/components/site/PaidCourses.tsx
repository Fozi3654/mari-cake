import { useState } from "react";
import { Crown, Lock, PlayCircle } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { formatToman, paidCourses, type PaidCourse } from "@/data/content";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

/**
 * Front-end demo only. Locks here are visual; real access control must be
 * enforced server-side (auth + verified payment) before any lesson content is served.
 */
export function PaidCourseCard({ c, onOpen }: { c: PaidCourse; onOpen: () => void }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-card shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-lift",
        c.featured ? "border-champagne ring-2 ring-champagne/50" : "border-border hover:border-rose",
      )}
    >
      <div className="relative overflow-hidden">
        <img src={c.image} alt={c.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          <Crown className="h-3.5 w-3.5" /> {c.featured ? "دوره ویژه" : "دوره پریمیوم"}
        </span>
        <span className="glass absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full text-primary" aria-label="محتوای قفل‌شده">
          <Lock className="h-4 w-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-primary">{c.title}</h3>
        <p className="mt-2 flex-1 leading-7 text-muted-foreground">{c.description}</p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-lg font-extrabold text-primary">{formatToman(c.price)}</span>
          <button onClick={onOpen} className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-rose">
            مشاهده دوره
          </button>
        </div>
      </div>
    </article>
  );
}

export function PaidCourseModal({ c, onClose }: { c: PaidCourse | null; onClose: () => void }) {
  return (
    <Dialog open={!!c} onOpenChange={(o) => !o && onClose()}>
      <DialogContent dir="rtl" className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-[2rem] p-0">
        {c && (
          <>
            <img src={c.image} alt={c.title} className="aspect-[16/8] w-full object-cover" />
            <div className="p-7 text-right">
              <DialogTitle className="text-2xl font-extrabold text-primary">{c.title}</DialogTitle>
              <DialogDescription className="mt-2 leading-7 text-muted-foreground">{c.description}</DialogDescription>
              <p className="mt-4 text-xl font-extrabold text-rose">{formatToman(c.price)}</p>
              <h4 className="mt-6 font-bold text-primary">پیش‌نمایش سرفصل‌ها</h4>
              <ul className="mt-3 space-y-2">
                {c.lessons.map((l, i) => (
                  <li key={l} className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm">
                    <span className="flex items-center gap-2 text-foreground/85">
                      <PlayCircle className="h-4 w-4 text-rose" />
                      جلسه {(i + 1).toLocaleString("fa-IR")}: {l}
                    </span>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toast("امکان خرید آنلاین به‌زودی فعال می‌شود.")}
                className="bg-rose-gradient mt-7 w-full rounded-full px-6 py-4 font-bold text-accent-foreground shadow-lift transition hover:-translate-y-0.5"
              >
                خرید و دسترسی به آموزش
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function PaidCoursesSection() {
  const [active, setActive] = useState<PaidCourse | null>(null);
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Masterclasses" title="هنر شیرینی‌پزی را حرفه‌ای یاد بگیر" subtitle="با آموزش‌های ویژه ماری کیک، از آشپزخانه خانه تا خلق دسرهای حرفه‌ای همراهت هستیم." />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {paidCourses.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 120}>
              <PaidCourseCard c={c} onOpen={() => setActive(c)} />
            </Reveal>
          ))}
        </div>
      </div>
      <PaidCourseModal c={active} onClose={() => setActive(null)} />
    </section>
  );
}
