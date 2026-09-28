import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { OutsideOfCode } from "@/components/OutsideOfCode";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <OutsideOfCode />
      </main>
      <Footer />
    </div>
  );
}
