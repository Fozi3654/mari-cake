import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { HeroSection } from "@/components/site/HeroSection";
import { AboutSection } from "@/components/site/AboutSection";
import { FreeTutorialsSection } from "@/components/site/FreeTutorials";
import { PaidCoursesSection } from "@/components/site/PaidCourses";
import { GallerySection } from "@/components/site/GallerySection";
import { ContactSection, InstagramSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const title = "ماری کیک | آموزش کیک، شیرینی و دسر در اوز";
const description =
  "ماری کیک؛ دنیایی از کیک‌ها، شیرینی‌ها و دسرهای خوشمزه همراه با آموزش‌های رایگان و دوره‌های تخصصی شیرینی‌پزی در اوز.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FreeTutorialsSection />
        <PaidCoursesSection />
        <GallerySection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
