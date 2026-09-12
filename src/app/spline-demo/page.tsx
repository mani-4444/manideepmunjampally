import { SplineSceneBasic } from "@/components/ui/demo";

export default function SplineDemoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold font-montserrat">Spline 3D Scene Preview</h1>
            <p className="text-sm text-neutral-400 font-open-sans">
              Integrated with shadcn Card, Spotlight effect, and @splinetool/react-spline
            </p>
          </div>
          <a
            href="/"
            className="text-xs font-montserrat border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all"
          >
            Back to Portfolio
          </a>
        </div>
        <SplineSceneBasic />
      </div>
    </div>
  );
}
