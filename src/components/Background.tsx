import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Background() {
  return (
    <Section id="background" eyebrow="Education" title="Computer science at CBIT." split>
      <div className="relative">
        <div aria-hidden="true" className="pool -right-8 -top-8 h-56 w-1/2" />
        <div aria-hidden="true" className="pool pool-bone -left-8 bottom-0 h-40 w-1/2" />
        <Reveal className="surface relative p-6 sm:p-8">
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
      </div>
    </Section>
  );
}
