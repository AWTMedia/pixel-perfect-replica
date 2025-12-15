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
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto">
        {/* ONE unified “curved box” (PURPLE base) that contains BOTH features */}
        <div className="relative bg-primary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          {/* Hero-style depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-black/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/0 to-black/10" />
          </div>

          {/* Feature A */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 3 GLASS DIVS + DOWN ARROWS */}
              <div className="max-w-md mx-auto w-full">
                <div className="glass-purple p-6">
                  <p className="text-white/70 text-sm mb-1">Stage 1</p>
                  <p className="text-3xl font-black text-white">Attract</p>
                </div>

                <div className="flex justify-center py-4">
                  <ArrowDown className="w-5 h-5 text-white/55" />
                </div>

                <div className="glass-purple p-6">
                  <p className="text-white/70 text-sm mb-1">Stage 2</p>
                  <p className="text-3xl font-black text-white">Nurture</p>
                </div>

                <div className="flex justify-center py-4">
                  <ArrowDown className="w-5 h-5 text-white/55" />
                </div>

                <div className="glass-purple p-6">
                  <p className="text-white/70 text-sm mb-1">Stage 3</p>
                  <p className="text-3xl font-black text-white">Convert</p>
                </div>
              </div>

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

              {/* RIGHT SIDE: 7 ROW CARDS (GLASS PURPLE) */}
              <div className="order-1 md:order-2 max-w-md mx-auto w-full">
                <div className="grid grid-cols-1 gap-3">
                  {METRICS.map((m) => (
                    <div
                      key={m.label}
                      className="glass-purple p-4 flex items-center justify-between gap-4"
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

          {/* Bottom depth */}
          <div className="relative h-10 bg-gradient-to-b from-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
