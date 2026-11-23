import { Copy, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { contact, instagramPreview } from "@/data/content";
import { Reveal, SectionHeading } from "./Reveal";

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <span className="font-display text-lg italic text-rose" dir="ltr">{contact.instagramHandle}</span>
          <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-5xl">لحظه‌های شیرین ما را دنبال کن</h2>
          <p className="mt-5 text-lg leading-9 text-muted-foreground">
            برای دیدن تازه‌ترین کیک‌ها، دسرها و آموزش‌های ماری کیک، در اینستاگرام همراه ما باش.
          </p>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="bg-rose-gradient mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-accent-foreground shadow-lift transition hover:-translate-y-0.5">
            <Instagram className="h-5 w-5" /> دنبال کردن در اینستاگرام
          </a>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid grid-cols-3 gap-3">
            {instagramPreview.map((src, i) => (
              <a key={i} href={contact.instagram} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl" aria-label="اینستاگرام ماری کیک">
                <img src={src} alt="تصویر نمایشی دسر" width={1024} height={768} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
              </a>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">تصاویر نمایشی هستند</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.address);
      toast("آدرس کپی شد");
    } catch {
      toast("کپی انجام نشد");
    }
  };
  return (
    <section id="contact" className="bg-muted/60 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="Contact" title="برای یک تجربه شیرین، با ما در ارتباط باش" />
        <Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            <a href={`tel:${contact.phone}`} className="group rounded-[2rem] border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-rose">
              <Phone className="h-7 w-7 text-rose" />
              <h3 className="mt-4 font-bold text-primary">تماس تلفنی</h3>
              <p className="mt-1 text-muted-foreground" dir="ltr">{contact.phoneDisplay}</p>
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-[2rem] border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-rose">
              <MessageCircle className="h-7 w-7 text-rose" />
              <h3 className="mt-4 font-bold text-primary">واتس‌اپ</h3>
              <p className="mt-1 text-muted-foreground">گفتگو در واتس‌اپ</p>
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="rounded-[2rem] border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-rose">
              <Instagram className="h-7 w-7 text-rose" />
              <h3 className="mt-4 font-bold text-primary">اینستاگرام</h3>
              <p className="mt-1 text-muted-foreground" dir="ltr">{contact.instagramHandle}</p>
            </a>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-lift sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-foreground/10">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm opacity-70">{contact.name}</p>
                <p className="font-bold">{contact.address}</p>
              </div>
            </div>
            <button onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-bold transition hover:bg-primary-foreground/10">
              <Copy className="h-4 w-4" /> کپی آدرس
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
