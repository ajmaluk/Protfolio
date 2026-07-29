import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="wrapper">
      <main className="page">
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        {/* <TestimonialsSection /> */}
        <FooterSection />
      </main>
    </div>
  );
}
