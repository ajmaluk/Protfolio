import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="main">
        <Header />
        <main id="swup" className="page transition-fade" data-namespace="home" data-infinite>
          <HeroSection />
          <IntroSection />
          <ProjectsSection />
          <TestimonialsSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
