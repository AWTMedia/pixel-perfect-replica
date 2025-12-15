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
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        {/* ONE unified “curved box” (WHITE base) that contains BOTH features */}
        <div className="bg-background rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-border shadow-sm">
          {/* Feature A */}
          <div className="px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 3 GLASS DIVS + DOWN ARROWS */}
              <div className="max-w-md mx-auto w-full">
                <div className="glass-purple rounded-2xl p-6">
                  <p className="text-white/70 text-sm mb-1">Stage 1</p>
                  <p className="text-3xl font-black text-white">Attract</p>
                </div>

                <div className="flex justify-center py-4">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="glass-purple rounded-2xl p-6">
                  <p className="text-white/70 text-sm mb-1">Stage 2</p>
                  <p className="text-3xl font-black text-white">Nurture</p>
                </div>

                <div className="flex justify-center py-4">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="glass-purple rounded-2xl p-6">
                  <p className="text-white/70 text-sm mb-1">Stage 3</p>
                  <p className="text-3xl font-black text-white">Convert</p>
                </div>
              </div>

              <div className="text-foreground">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Build a system
                  <br />
                  <span className="text-muted-foreground">not just content</span>
                  <br />
                  that gets clients
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  Most agencies add volume. We build the infrastructure behind your content:
                  profile funnel, weekly content structure, and a DM → booking flow — so Instagram
                  becomes predictable.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Feature B */}
          <div className="px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
                  Know what’s working
                  <br />
                  <span className="text-primary">in real time</span>
                  <br />
                  and scale it
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  We add tracking and a simple pipeline so you can see what turns into DMs,
                  bookings, and clients — then double down on what’s proven.
                </p>
              </div>

              {/* RIGHT SIDE: 7 ROW CARDS (GLASS PURPLE), BASE SECTION IS WHITE */}
              <div className="order-1 md:order-2 max-w-md mx-auto w-full">
                <div className="grid grid-cols-1 gap-3">
                  {METRICS.map((m) => (
                    <div
                      key={m.label}
                      className="glass-purple rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4"
                    >
                      <div>
                        <p className="text-white text-xl font-black leading-none">{m.value}</p>
                        <p className="text-white/80 text-[11px] mt-2 leading-snug">{m.label}</p>
                      </div>

                      <p className="text-white/55 text-[10px] text-right">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* subtle bottom depth */}
          <div className="h-10 bg-gradient-to-b from-transparent to-black/5" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
