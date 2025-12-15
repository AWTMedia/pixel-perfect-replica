import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const FeatureSection = () => {
  return (
    <>
      {/* Feature 1 */}
      <section className="py-16 md:py-24 overflow-hidden bg-transparent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={phoneMockup1}
                alt="Attraction system visual"
                className="w-full max-w-md mx-auto animate-float"
              />
            </div>

            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Build a system
                <br />
                <span className="text-white/25 font-black">
                  not just content
                </span>
                <br />
                that gets clients
              </h2>

              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                Most agencies add volume. We build the infrastructure behind your
                content: profile funnel, weekly content structure, and a DM → booking
                flow — so Instagram becomes predictable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-16 md:py-24 overflow-hidden bg-transparent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Know what’s working
                <br />
                <span className="text-white/25 font-black">
                  in real time
                </span>
                <br />
                and scale it
              </h2>

              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                We add tracking and a simple pipeline so you can see what turns into
                DMs, bookings, and clients — then double down on what’s proven.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <img
                src={phoneMockup2}
                alt="Tracking and conversion visual"
                className="w-full max-w-md mx-auto animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
