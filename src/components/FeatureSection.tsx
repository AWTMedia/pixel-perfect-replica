import { ArrowDown } from "lucide-react";

const METRICS = [
  { value: "32,637", label: "Profile Visits", sub: "14.15% conversion" },
  { value: "4,618", label: "Followers", sub: "49.63% conversion" },
  { value: "2,292", label: "Qualified Followers", sub: "68.78% conversion" },
  { value: "1,576", label: "Conversations", sub: "—" },
  { value: "134", label: "Appointments", sub: "81.34% conversion" },
  { value: "109", label: "Show Ups", sub: "—" },
  { value: "$241,670", label: "Cash Collected", sub: "—" },
];

const FeatureSection = () => {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto">
        {/* ONE unified purple “curved box” that contains BOTH features */}
        <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          {/* Inner glow for depth */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-56 -right-56 h-[640px] w-[640px] rounded-full bg-black/20 blur-3xl" />
          </div>

          {/* Feature A */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 3-stage stack */}
              <div className="max-w-md mx-auto w-full">
                <div className="mb-4">
                  <p className="text-white/70 text-sm font-medium">3-stage flow</p>
                  <p className="text-white text-lg font-bold">The engine</p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/15" />

                  <div className="relative">
                    <div className="glass-purple rounded-2xl p-6 border border-white/10">
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 1
                      </p>
                      <p className="text-3xl font-black text-white">Attract</p>
                      <p className="text-white/75 text-sm mt-2">
                        Profile + content structure
                      </p>
                    </div>
                    <div className="absolute left-[-2px] top-[68px] -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <div className="glass-purple rounded-2xl p-6 border border-white/10">
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 2
                      </p>
                      <p className="text-3xl font-black text-white">Nurture</p>
                      <p className="text-white/75 text-sm mt-2">
                        Stories + DM touchpoints
                      </p>
                    </div>
                    <div className="absolute left-[-2px] top-[68px] -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <div className="glass-purple rounded-2xl p-6 border border-white/10">
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

              {/* Copy */}
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Build a system
                  <br />
                  <span className="text-white/70">not just content</span>
                  <br />
                  that gets clients
                </h2>

                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                  Most agencies add volume. We build the infrastructure behind your content: profile
                  funnel, weekly content structure, and a DM → booking flow — so Instagram becomes
                  predictable.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Feature B (purple) */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Know what’s working
                  <br />
                  <span className="text-white/70">in real time</span>
                  <br />
                  and scale it
                </h2>

                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                  We add tracking and a simple pipeline so you can see what turns into DMs, bookings,
                  and clients — then double down on what’s proven.
                </p>
              </div>

              {/* REPLACED IMAGE WITH 7 GLASS METRIC CARDS */}
              <div className="order-1 md:order-2">
                <div className="glass-purple rounded-3xl p-4 md:p-5 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white font-bold">Sales Funnel</p>
                    <p className="text-white/60 text-sm">What we track</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                    {METRICS.map((m) => (
                      <div
                        key={m.label}
                        className="glass-purple rounded-2xl p-4 border border-white/10"
                      >
                        <p className="text-white text-xl font-black leading-none">
                          {m.value}
                        </p>
                        <p className="text-white/80 text-[11px] mt-2 leading-snug">
                          {m.label}
                        </p>
                        <p className="text-white/55 text-[10px] mt-1">
                          {m.sub}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/55 text-xs mt-4">
                    (These are example metrics — we’ll wire yours to your real pipeline.)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom depth */}
          <div className="relative h-10 bg-gradient-to-b from-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
