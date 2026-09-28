import { SectionTitle } from "@/components/ui/section";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { PROJECTS } from "@/components/projects/data";
import { ProjectIndex } from "@/components/projects/ProjectIndex";
import {
  AffordabilityPanel,
  CapabilitiesPanel,
  CalculationPanel,
  DebatePanel,
  FallbackPanel,
} from "@/components/projects/panels";

const PANELS = [
  <AffordabilityPanel key="p1" />,
  <DebatePanel key="p2" />,
  <FallbackPanel key="p3" />,
  <CapabilitiesPanel key="p4" />,
  <CalculationPanel key="p5" />,
];

export function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="shell">
        <div className="tick-rule" />
      </div>

      <div className="shell py-16 sm:py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="lg:pt-2">
            <div className="rail-label mb-7 flex items-center gap-3 lg:sticky lg:top-28 lg:mb-0 lg:flex-col lg:items-start lg:gap-2">
              <span className="h-px w-6 bg-signal lg:w-8" aria-hidden="true" />
              <span>Work</span>
            </div>
          </div>

          <div className="min-w-0">
            <SectionTitle index={1}>Selected work</SectionTitle>
            <p className="body-copy mt-6 max-w-[58ch] text-base">
              Five systems, each with the architecture visible. The interactive
              panels are live — switch stages and routing modes to see how the
              pipelines actually behave.
            </p>

            <ProjectIndex />
          </div>
        </div>
      </div>

      {/* Case studies */}
      <div className="shell space-y-16 pb-16 sm:space-y-20 sm:pb-20 lg:space-y-24 lg:pb-28">
        {PROJECTS.map((project, i) => (
          <CaseStudy key={project.id} data={project}>
            {PANELS[i]}
          </CaseStudy>
        ))}
      </div>
    </section>
  );
}
