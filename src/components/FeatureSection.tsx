import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const FeatureSection = () => {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto">
        {/* ONE unified purple “curved box” that contains BOTH features */}
        <div className="bg-primary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          {/* Feature A */}
          <div className="px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={phoneMockup1}
                  alt="Attract Acquisition system mockup"
                  className="w-full max-w-md mx-auto animate-float rounded-2xl"
                />
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
                  Most agencies add volume. We build the infrastructure behind your content: profile
                  funnel, weekly content structure, and a DM → booking flow — so Instagram becomes
                  predictable.
                </p>
              </div>
            </div>
          </div>

          {/* Divider (subtle) */}
          <div className="h-px bg-white/12" />

          {/* Feature B (now ALSO purple) */}
          <div className="px-6 md:px-12 py-14 md:py-16">
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
                  We add tracking and a simple pipeline so you can see what turns into DMs, bookings,
                  and clients — then double down on what’s proven.
                </p>
              </div>

              <div className="relative order-1 md:order-2">
                <img
                  src={phoneMockup2}
                  alt="Tracking and conversion mockup"
                  className="w-full max-w-md mx-auto animate-float rounded-2xl"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>

          {/* Optional bottom “glow” depth */}
          <div className="h-10 bg-gradient-to-b from-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
