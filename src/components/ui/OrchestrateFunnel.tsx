/**
 * HackerRank Orchestrate result.
 *
 * "#93" alone is ambiguous — out of 200 it is unremarkable, out of thousands
 * it is a strong signal — so the denominator and the funnel that produced it
 * are the point of this block.
 *
 * Form: the three stage counts share a unit and are an ordered sequence, so
 * they take an ordinal one-hue ramp (dim -> bright down the funnel, which
 * also walks the eye toward the survivors). The rank is a different unit
 * entirely — a position, not a count — so it is a hero figure beside the
 * bars rather than a fourth bar, which would have been a units error and
 * 0.26% of the width besides.
 */

const STAGES = [
  { label: "Registered", value: 35712, step: "bg-[#8A6B00]" },
  { label: "Shipped a build", value: 3721, step: "bg-[#C99C00]" },
  { label: "Took the AI interview", value: 3062, step: "bg-signal" },
];

const TOTAL = STAGES[0].value;
const FIELD = 3062;
const RANK = 93;

export function OrchestrateFunnel() {
  // 93/3,062 = 3.04%. A whole-number ceil reads "top 4%", which undersells
  // it; floor reads "top 3%", which overstates. One decimal, rounded up, is
  // both accurate and the strongest honest phrasing.
  const percentile = Math.ceil((RANK / FIELD) * 1000) / 10;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
      {/* Hero figure — the rank, with the denominator it needs to mean anything */}
      <div className="shrink-0">
        <div className="field-key">Final placing</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-montserrat text-5xl font-extrabold leading-none tracking-[-0.04em] text-signal sm:text-6xl">
            #{RANK}
          </span>
          <span className="nums font-montserrat text-lg font-bold text-bone-mute">
            / {FIELD.toLocaleString()}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="cell cell-featured">Top {percentile}%</span>
          <span className="cell">67.7 / 100</span>
        </div>
      </div>

      {/* The funnel that produced that placing */}
      <dl className="min-w-0 self-center">
        {STAGES.map((stage) => {
          const share = (stage.value / TOTAL) * 100;
          return (
            <div key={stage.label} className="mb-4 last:mb-0">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="font-montserrat text-[12.5px] font-semibold text-bone-dim">
                  {stage.label}
                </dt>
                <dd className="nums font-data text-[12.5px] text-bone">
                  {stage.value.toLocaleString()}
                </dd>
              </div>
              {/* Track sits on the surface; the fill is the ordinal step. */}
              <div
                aria-hidden="true"
                className="mt-1.5 h-[6px] w-full overflow-hidden rounded-machined bg-bone/[0.07]"
              >
                <div
                  className={`h-full rounded-machined ${stage.step}`}
                  style={{ width: `${Math.max(share, 1.5)}%` }}
                />
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
