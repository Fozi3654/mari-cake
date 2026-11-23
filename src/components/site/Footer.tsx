import { Instagram, MessageCircle } from "lucide-react";
import { contact, navItems } from "@/data/content";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 text-blush dark:text-rose">
            <LogoMark />
            <span className="font-display text-3xl italic" dir="ltr">Mari Cake</span>
          </div>
          <p className="mt-4 max-w-xs leading-8 opacity-75">دنیایی از کیک‌ها، شیرینی‌ها و دسرهای خوشمزه همراه با آموزش‌های شیرینی‌پزی.</p>
        </div>
        <nav aria-label="پیوندهای فوتر">
          <h3 className="font-bold text-champagne">دسترسی سریع</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="opacity-75 transition hover:text-rose hover:opacity-100">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="font-bold text-champagne">ارتباط با ما</h3>
          <p className="mt-4 text-sm opacity-75">{contact.address}</p>
          <a href={`tel:${contact.phone}`} className="mt-2 block text-sm opacity-75 hover:text-rose" dir="ltr">{contact.phoneDisplay}</a>
          <div className="mt-5 flex gap-3">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام" className="grid h-10 w-10 place-items-center rounded-full border border-footer-foreground/20 transition hover:border-rose hover:text-rose"><Instagram className="h-4 w-4" /></a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="واتس‌اپ" className="grid h-10 w-10 place-items-center rounded-full border border-footer-foreground/20 transition hover:border-rose hover:text-rose"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/10 py-6 text-center text-xs opacity-60">© {new Date().getFullYear()} ماری کیک — تمامی حقوق محفوظ است.</div>
    </footer>
  );
}
