import heroCake from "@/assets/hero-cake.jpg";
import tutChocolate from "@/assets/tut-chocolate.jpg";
import tutCookies from "@/assets/tut-cookies.jpg";
import tutCheesecake from "@/assets/tut-cheesecake.jpg";
import courseCream from "@/assets/course-cream.jpg";
import courseMacaron from "@/assets/course-macaron.jpg";
import courseNy from "@/assets/course-nycheesecake.jpg";
import courseCups from "@/assets/course-cups.jpg";
import courseCafe from "@/assets/course-cafe.jpg";
import courseTart from "@/assets/course-tart.jpg";
import galleryPastries from "@/assets/gallery-pastries.jpg";

export const contact = {
  name: "ماری کیک",
  address: "اوز، خیابان ملت، طبقه دوم ساختمان بلوط",
  phone: "09396203654",
  phoneDisplay: "۰۹۳۹۶۲۰۳۶۵۴",
  instagram: "https://www.instagram.com/mari_cake_ewaz/",
  instagramHandle: "@mari_cake_ewaz",
  whatsapp: "https://wa.me/989396203654",
};

export const navItems = [
  { id: "home", label: "خانه" },
  { id: "about", label: "درباره ماری کیک" },
  { id: "free", label: "آموزش رایگان" },
  { id: "courses", label: "دوره‌های آموزشی" },
  { id: "gallery", label: "گالری شیرینی‌ها" },
  { id: "contact", label: "تماس با ما" },
] as const;

export type FreeTutorial = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const freeTutorials: FreeTutorial[] = [
  {
    id: "wet-chocolate-cake",
    title: "کیک شکلاتی خیس",
    description: "یک کیک لطیف و شکلاتی با طعمی فراموش‌نشدنی",
    image: tutChocolate,
    ingredients: ["آرد: ۲ پیمانه", "پودر کاکائو: ½ پیمانه", "شکر: ۱ پیمانه", "تخم‌مرغ: ۲ عدد", "شیر: ۱ پیمانه", "روغن مایع: ½ پیمانه", "شکلات تلخ برای گاناش: ۲۰۰ گرم"],
    steps: ["فر را با دمای ۱۸۰ درجه گرم کنید.", "مواد خشک و مواد مایع را جداگانه مخلوط و سپس با هم ترکیب کنید.", "مایه را در قالب ریخته و حدود ۳۵ دقیقه بپزید.", "گاناش را با خامه داغ و شکلات آماده کرده و روی کیک بریزید."],
  },
  {
    id: "chocolate-chip-cookie",
    title: "کوکی شکلات چیپسی",
    description: "کوکی‌های خوش‌عطر با بافتی نرم و تکه‌های شکلات",
    image: tutCookies,
    ingredients: ["کره نرم: ۱۲۰ گرم", "شکر قهوه‌ای: ¾ پیمانه", "تخم‌مرغ: ۱ عدد", "وانیل: ۱ قاشق چای‌خوری", "آرد: ۱½ پیمانه", "شکلات چیپسی: ۱ پیمانه"],
    steps: ["کره و شکر را تا کرم‌شدن هم بزنید.", "تخم‌مرغ و وانیل را اضافه کنید.", "آرد و شکلات را به‌آرامی مخلوط کنید.", "گلوله‌ها را روی سینی چیده و ۱۰ تا ۱۲ دقیقه در دمای ۱۸۰ درجه بپزید."],
  },
  {
    id: "strawberry-cheesecake",
    title: "چیزکیک توت‌فرنگی",
    description: "دسری لطیف با ترکیب پنیر خامه‌ای و توت‌فرنگی تازه",
    image: tutCheesecake,
    ingredients: ["بیسکویت پودرشده: ۲۰۰ گرم", "کره آب‌شده: ۸۰ گرم", "پنیر خامه‌ای: ۵۰۰ گرم", "شکر: ¾ پیمانه", "خامه: ۱ پیمانه", "توت‌فرنگی تازه: ۲۰۰ گرم"],
    steps: ["بیسکویت و کره را مخلوط و کف قالب فشرده کنید.", "پنیر، شکر و خامه را یکدست کنید.", "مایه را روی کف ریخته و چند ساعت در یخچال بگذارید.", "با توت‌فرنگی تازه تزئین کنید."],
  },
];

export type PaidCourse = {
  id: string;
  title: string;
  description: string;
  /** Price in toman. Display only — real pricing must be verified server-side at checkout. */
  price: number;
  image: string;
  featured?: boolean;
  lessons: string[];
};

export const paidCourses: PaidCourse[] = [
  { id: "cream-cake", title: "دوره تخصصی کیک خامه‌ای", description: "از پخت اسفنج تا خامه‌کشی و تزئین حرفه‌ای کیک‌های لایه‌ای.", price: 890000, image: courseCream, featured: true, lessons: ["پخت کیک اسفنجی", "تهیه خامه پایدار", "صاف‌کردن و لبه‌سازی", "تکنیک‌های قیف و ماسوره"] },
  { id: "macaron", title: "آموزش ماکارون فرانسوی", description: "رازهای پوسته صاف، پایه‌های زیبا و فیلینگ‌های خوش‌طعم.", price: 690000, image: courseMacaron, lessons: ["مرنگ فرانسوی و ایتالیایی", "ماکاروناژ", "پخت و عیب‌یابی", "فیلینگ‌ها"] },
  { id: "cheesecake", title: "دوره چیزکیک‌های حرفه‌ای", description: "چیزکیک‌های پختنی و سرد با بافتی کرمی و بی‌نقص.", price: 790000, image: courseNy, lessons: ["چیزکیک نیویورکی", "چیزکیک سرد", "سس‌های میوه‌ای", "برش و سرو"] },
  { id: "cups", title: "آموزش دسرهای لیوانی", description: "دسرهای لایه‌ای شیک و سریع برای مهمانی‌ها و فروش.", price: 490000, image: courseCups, lessons: ["موس شکلات", "کرم‌ها و لایه‌ها", "ترکیب طعم‌ها", "چیدمان و بسته‌بندی"] },
  { id: "cafe-cakes", title: "دوره کیک‌های کافی‌شاپی", description: "کیک‌های پرطرفدار کافه‌ای با شکلات، کارامل و مغزها.", price: 990000, image: courseCafe, lessons: ["کیک شکلاتی لایه‌ای", "کارامل نمکی", "کیک گردویی", "نگهداری و برش"] },
  { id: "tarts", title: "آموزش تارت و شیرینی مدرن", description: "خمیر ترد، کرم پاتیسیر و تزئین با میوه‌های براق.", price: 750000, image: courseTart, lessons: ["خمیر شکری", "کرم پاتیسیر", "ژله براق‌کننده", "تارتلت‌های مینی"] },
];

export const galleryImages = [
  { src: heroCake, caption: "کیک خامه‌ای صورتی با تمشک", w: 1024, h: 1280 },
  { src: courseMacaron, caption: "ماکارون‌های رنگی", w: 1024, h: 768 },
  { src: galleryPastries, caption: "میز شیرینی صبحگاهی", w: 768, h: 1024 },
  { src: courseTart, caption: "تارتلت‌های میوه‌ای", w: 1024, h: 768 },
  { src: courseCafe, caption: "کیک‌های کافه‌ای", w: 1024, h: 768 },
  { src: courseCream, caption: "کیک لایه‌ای خامه‌ای", w: 1024, h: 768 },
  { src: courseCups, caption: "دسر لیوانی شکلات و توت‌فرنگی", w: 1024, h: 768 },
];

export const instagramPreview = [tutChocolate, courseMacaron, tutCheesecake, courseTart, tutCookies, courseCups];

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
export function toFaNumber(n: number | string) {
  const s = typeof n === "number" ? n.toLocaleString("en-US").replace(/,/g, "٬") : n;
  return s.replace(/\d/g, (d) => faDigits[Number(d)] ?? d);
}
export const formatToman = (n: number) => `${toFaNumber(n)} تومان`;
