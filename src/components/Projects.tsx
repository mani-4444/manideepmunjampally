import { Section } from "@/components/ui/section";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { PROJECTS } from "@/components/projects/data";
import { ProjectRail } from "@/components/projects/ProjectRail";
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
    <Section
      id="work"
      eyebrow="Selected work"
      title="Five systems, each with its architecture on show."
      intro="A competition-ranked AI agent, two hackathon team builds, and two solo apps running in production. The panels are live: switch stages and routing modes to see how each pipeline behaves."
    >
      <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-8">
        <div className="hidden lg:col-span-3 lg:block">
          <ProjectRail />
        </div>
        <div className="min-w-0 lg:col-span-9">
          {PROJECTS.map((project, i) => (
            <CaseStudy key={project.id} data={project}>
              {PANELS[i]}
            </CaseStudy>
          ))}
        </div>
      </div>
    </Section>
  );
}
