import heroCake from "@/assets/hero-cake.jpg";
import macaron from "@/assets/course-macaron.jpg";
import tart from "@/assets/course-tart.jpg";
import { ArrowLeft, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="bg-hero relative overflow-hidden pb-20 pt-32 md:pt-40">
      {/* Background brand logo with occasional champagne shimmer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-24 select-none text-center md:top-16" dir="ltr">
        <span className="shimmer-logo font-display text-[22vw] font-semibold italic leading-none md:text-[17vw]">Mari Cake</span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12">
        <div className="animate-rise md:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4 text-rose" /> پاتیسری و آکادمی شیرینی‌پزی
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.35] text-primary md:text-6xl md:leading-[1.3]">
            شیرینیِ لحظه‌ها،
            <br />
            با هنر <span className="text-rose">ماری کیک</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-9 text-muted-foreground">
            از طعم‌های دل‌انگیز تا آموزش‌های حرفه‌ای؛ اینجا هر شیرینی، داستانی از عشق و هنر است.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#free" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5">
              کشف آموزش‌ها
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a href="#about" className="inline-flex items-center rounded-full border border-primary/25 bg-card/50 px-7 py-4 font-bold text-primary backdrop-blur transition hover:border-rose hover:text-rose">
              آشنایی با ماری کیک
            </a>
          </div>
        </div>

        <div className="relative md:col-span-6">
          <div className="animate-rise relative mx-auto aspect-[4/5] w-[85%] max-w-md overflow-hidden rounded-[2.5rem] rounded-tl-[8rem] shadow-lift" style={{ animationDelay: "200ms" }}>
            <img src={heroCake} alt="کیک لایه‌ای صورتی با خامه و تمشک تازه" width={1024} height={1280} fetchPriority="high" className="h-full w-full object-cover" />
          </div>
          <div className="animate-float absolute -bottom-6 right-0 w-32 overflow-hidden rounded-3xl border-4 border-background shadow-lift md:w-40">
            <img src={macaron} alt="ماکارون‌های رنگی" width={1024} height={768} className="aspect-square w-full object-cover" />
          </div>
          <div className="animate-float absolute left-0 top-10 w-28 overflow-hidden rounded-full border-4 border-background shadow-lift md:w-36" style={{ animationDelay: "-3s" }}>
            <img src={tart} alt="تارتلت میوه‌ای" width={1024} height={768} className="aspect-square w-full object-cover" />
          </div>
          <div className="glass absolute bottom-16 left-4 hidden rounded-2xl px-4 py-3 md:block">
            <p className="font-display text-lg italic text-primary" dir="ltr">Pâtisserie & Academy</p>
            <p className="text-xs text-muted-foreground">ساخته‌شده با عشق</p>
          </div>
        </div>
      </div>
    </section>
  );
}
