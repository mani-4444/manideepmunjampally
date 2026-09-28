import { BadgeCheck, Hourglass } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/* Given their own section, straight after Recognition, so the page's
   credentials read as one run rather than a footnote under Education. */
const CERTIFICATIONS = [
  {
    title: "Programming with Generative AI",
    issuer: "NPTEL",
    issuerNote: "IIT-led national programme",
    done: true,
    body: "Prompt engineering, foundational LLM architectures, API integration, and generative programming workflows.",
    topics: ["Prompt engineering", "LLM architectures", "API integration"],
  },
  {
    title: "AI & Machine Learning",
    issuer: "Apna College",
    issuerNote: "Online programme",
    done: false,
    body: "Classical ML algorithms, deep learning fundamentals, statistical evaluation, and computer vision and NLP concepts.",
    topics: ["Classical ML", "Deep learning", "Model evaluation", "CV & NLP"],
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Formal grounding in AI."
      intro="Coursework behind the pipelines above: one programme completed, one in progress."
    >
      <div className="relative mt-14 sm:mt-16">
        {/* Light for the glass to refract */}
        <div aria-hidden="true" className="pool -left-10 top-1/4 h-64 w-1/2" />
        <div aria-hidden="true" className="pool pool-bone -right-10 bottom-0 h-56 w-1/2" />

        <ul className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal
              as="li"
              key={cert.title}
              delay={0.08 * i}
              className="surface surface-hover flex flex-col p-6 sm:p-9"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="glass-inset flex h-11 w-11 items-center justify-center rounded-full font-serif text-lg text-bone"
                  >
                    {cert.issuer.charAt(0)}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-bone">{cert.issuer}</p>
                    <p className="text-[12.5px] text-bone-mute">{cert.issuerNote}</p>
                  </div>
                </div>

                <span className={cert.done ? "chip chip-featured" : "chip"}>
                  {cert.done ? (
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Hourglass className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {cert.done ? "Completed" : "In progress"}
                </span>
              </div>

              <h3 className="mt-8 font-serif text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-bone sm:text-[2.2rem]">
                {cert.title}
              </h3>
              <p className="body-copy mt-4">{cert.body}</p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-8" aria-label="Topics covered">
                {cert.topics.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
