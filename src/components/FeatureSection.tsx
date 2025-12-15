import { ArrowDown } from "lucide-react";

const METRICS = [
  { value: "32,637", label: "Profile Visits", sub: "14.15% conversion" },
  { value: "4,618", label: "Followers", sub: "49.63% conversion" },
  { value: "2,292", label: "Qualified Followers", sub: "68.78% conversion" },
  { value: "1,576", label: "Conversations", sub: "DMs started" },
  { value: "134", label: "Appointments", sub: "81.34% conversion" },
  { value: "109", label: "Show Ups", sub: "Attendance" },
  { value: "$241,670", label: "Cash Collected", sub: "Revenue tracked" },
];

const FeatureSection = () => {
  const hoverCard =
    "hover:border-white/15 hover:-translate-y-[2px] transition-all cursor-pointer";

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        {/* WHITE section, PURPLE inner curved box */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aa-bg">
          {/* Hero-style depth layers (same as hero/made-with-love/footer) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
            <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
            <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
          </div>

          {/* Feature A */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 3-stage stack (fixed line + arrow spacing) */}
              <div className="max-w-md mx-auto w-full">
                <div className="mb-4">
                  <p className="text-white/70 text-sm font-medium">3-stage flow</p>
                  <p className="text-white text-lg font-bold">The engine</p>
                </div>

                <div className="relative">
                  {/* Vertical line centered with arrows */}
                  <div className="absolute left-[18px] top-6 bottom-6 w-px bg-white/15" />

                  {/* Stage 1 */}
                  <div className="relative pl-12">
                    <div
                      className={`glass-purple rounded-2xl p-6 border border-white/10 ${hoverCard}`}
                    >
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 1
                      </p>
                      <p className="text-3xl font-black text-white">Attract</p>
                      <p className="text-white/75 text-sm mt-2">
                        Profile + content structure
                      </p>
                    </div>

                    {/* Arrow sits on the line, between cards */}
                    <div className="absolute left-[18px] -bottom-5 -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative pl-12 mt-10">
                    <div
                      className={`glass-purple rounded-2xl p-6 border border-white/10 ${hoverCard}`}
                    >
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 2
                      </p>
                      <p className="text-3xl font-black text-white">Nurture</p>
                      <p className="text-white/75 text-sm mt-2">
                        Stories + DM touchpoints
                      </p>
                    </div>

                    <div className="absolute left-[18px] -bottom-5 -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative pl-12 mt-10">
                    <div
                      className={`glass-purple rounded-2xl p-6 border border-white/10 ${hoverCard}`}
                    >
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 3
                      </p>
                      <p className="text-3xl font-black text-white">Convert</p>
                      <p className="text-white/75 text-sm mt-2">
                        DM → booking → sale
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="text-white/85 hover:text-white font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    See the engine in action <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              {/* Feature A copy */}
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Build a system
                  <br />
                  <span className="text-white/70">not just content</span>
                  <br />
                  that gets clients
                </h2>

                <p className="text-white/85 text-lg leading-relaxed max-w-xl">
                  Most agencies add volume. We build the infrastructure behind your content:
                  profile funnel, weekly content structure, and a DM → booking flow — so Instagram
                  becomes predictable.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px bg-white/12" />

          {/* Feature B */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* left copy */}
              <div className="order-2 md:order-1 text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Know what’s working
                  <br />
                  <span className="text-white/70">in real time</span>
                  <br />
                  and scale it
                </h2>

                <p className="text-white/85 text-lg leading-relaxed max-w-xl">
                  We add tracking and a simple pipeline so you can see what turns into DMs,
                  bookings, and clients — then double down on what’s proven.
                </p>
              </div>

              {/* right metrics: ROWS */}
              <div className="order-1 md:order-2 max-w-md mx-auto w-full">
                <div className="grid grid-cols-1 gap-3">
                  {METRICS.map((m) => (
                    <div
                      key={m.label}
                      className={`glass-purple rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4 ${hoverCard}`}
                    >
                      <div className="min-w-0">
                        <p className="text-white text-xl font-black leading-none truncate">
                          {m.value}
                        </p>
                        <p className="text-white/80 text-[11px] mt-2 leading-snug truncate">
                          {m.label}
                        </p>
                      </div>

                      <p className="text-white/55 text-[10px] text-right whitespace-nowrap">
                        {m.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* bottom depth */}
          <div className="relative h-10 bg-gradient-to-b from-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
