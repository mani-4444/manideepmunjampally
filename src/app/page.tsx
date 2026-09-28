import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Recognition } from "@/components/Recognition";
import { Stack } from "@/components/Stack";
import { Background } from "@/components/Background";
import { OutsideOfCode } from "@/components/OutsideOfCode";
import { Footer } from "@/components/Footer";

/* Ordered by what a recruiter needs next: who (hero), what he has built
   (work), how it measured up (recognition), then the supporting detail. */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Recognition />
        <Stack />
        <Background />
        <OutsideOfCode />
      </main>
      <Footer />
    </>
  );
}
