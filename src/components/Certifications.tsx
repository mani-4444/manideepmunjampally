import { Section, SectionTitle } from "@/components/ui/section";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";

const CERTIFICATIONS = [
  {
    title: "Programming with Generative AI",
    issuer: "NPTEL",
    status: "Completed" as const,
    body: "Prompt engineering, foundational LLM architectures, API integration, and generative programming workflows.",
  },
  {
    title: "AI & Machine Learning",
    issuer: "Apna College",
    status: "Ongoing" as const,
    body: "Classical ML algorithms, deep learning fundamentals, statistical evaluation, and computer vision / NLP concepts.",
  },
];

export function Certifications() {
  return (
    <Section id="certifications" label="Credentials">
      <SectionTitle index={3}>Certifications</SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => {
          const done = cert.status === "Completed";
          return (
            <LiquidGlassCard key={cert.title} className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="field-key">{cert.issuer}</span>
                <span
                  className={`flex items-center gap-1.5 font-data text-[10.5px] ${
                    done ? "text-signal" : "text-bone-mute"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${done ? "bg-signal" : "border border-bone-mute"}`}
                  />
                  {cert.status}
                </span>
              </div>

              <h3 className="h-block text-bone">{cert.title}</h3>
              <p className="body-copy">{cert.body}</p>
            </LiquidGlassCard>
          );
        })}
      </div>
    </Section>
  );
}
