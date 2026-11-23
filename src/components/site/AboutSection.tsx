import { Reveal } from "./Reveal";

const founderPhoto = "/images/maryam.webp";

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden py-24 md:py-32">
      <div dir="ltr" className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
        <Reveal className="group relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[3rem] bg-blush/80 blur-sm" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-rose/35 bg-card p-2 shadow-lift transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_70px_-30px_var(--rose)]">
            <img
              src={founderPhoto}
              alt="مریم، بنیان‌گذار ماری کیک"
              width={1122}
              height={1402}
              loading="lazy"
              className="h-auto w-full rounded-[2rem] object-contain transition duration-700 group-hover:scale-[1.015]"
            />
          </div>
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 grid h-20 w-20 place-items-center rounded-full border border-champagne/70 bg-card font-display text-5xl italic text-rose shadow-soft">
            “
          </div>
        </Reveal>

        <div dir="rtl" className="text-right">
          <Reveal>
            <span className="font-display text-lg italic tracking-wide text-rose" dir="ltr">Founder&apos;s Story</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.45] text-primary md:text-5xl">
              داستان مریم | پشت طعم‌های ماری کیک
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="relative mt-8 rounded-[2rem] border border-border bg-card/70 px-7 py-8 shadow-soft backdrop-blur-sm md:px-10 md:py-10">
              <span aria-hidden="true" className="pointer-events-none absolute right-5 top-0 font-display text-8xl leading-none text-rose/25 md:right-7 md:text-9xl">«</span>
              <p className="relative pt-5 text-xl font-medium leading-10 text-foreground md:text-2xl md:leading-[2.25]">
                «من مریمم؛ زنی که باور دارد دستان یک زن، فقط برای ساختن شیرینی نیست؛ برای آفریدن <span className="font-extrabold text-rose">رویاها</span>، ساختن <span className="font-extrabold text-rose">استقلال</span> و چشیدن طعم شیرین <span className="font-extrabold text-rose">موفقیت</span> هم هست.»
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 border-r-2 border-rose pr-5">
              <p className="font-display text-3xl italic text-rose md:text-4xl">با عشق، مریم</p>
              <p className="mt-2 text-sm font-bold tracking-wide text-muted-foreground">بنیان‌گذار ماری کیک</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
