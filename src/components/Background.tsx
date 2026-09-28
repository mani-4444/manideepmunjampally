import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/* Education and certifications in one place. They were two sections
   before, and the CGPA and institution were restated in three others. */
const CERTIFICATIONS = [
  { title: "Programming with Generative AI", issuer: "NPTEL", done: true },
  { title: "AI & Machine Learning", issuer: "Apna College", done: false },
];

export function Background() {
  return (
    <Section id="background" eyebrow="Background" title="Education." split>
      <Reveal className="surface p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div>
            <h3 className="font-serif text-[1.65rem] leading-tight tracking-[-0.02em] text-bone">
              Chaitanya Bharathi Institute of Technology
            </h3>
            <p className="mt-1.5 text-[14px] text-bone-dim">
              Computer Science and Engineering · Hyderabad
            </p>
          </div>
          <span className="chip">Class of 2028</span>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-rule pt-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-12">
          <div>
            <dt className="field-key">CGPA</dt>
            <dd className="mt-2 flex items-baseline gap-1.5">
              <span className="figure text-[2.6rem] text-bone">9.74</span>
              <span className="figure text-lg text-bone-mute">/ 10</span>
            </dd>
          </div>
          <div>
            <dt className="field-key">Core coursework</dt>
            <dd className="mt-3 flex flex-wrap gap-1.5">
              {["Data structures", "Algorithms", "DBMS", "Object-oriented design"].map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <h3 className="field-key">Certifications</h3>
        <ul className="mt-3 border-t border-rule">
          {CERTIFICATIONS.map((cert) => (
            <li
              key={cert.title}
              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-rule py-5"
            >
              <div>
                <p className="h-block text-bone">{cert.title}</p>
                <p className="mt-0.5 text-[13px] text-bone-mute">{cert.issuer}</p>
              </div>
              <span
                className={`inline-flex items-center gap-2 text-[13px] ${
                  cert.done ? "text-bone-dim" : "text-bone-mute"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    cert.done ? "bg-signal" : "border border-bone-mute"
                  }`}
                />
                {cert.done ? "Completed" : "In progress"}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
