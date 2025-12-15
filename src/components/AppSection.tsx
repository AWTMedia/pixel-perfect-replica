import phoneMockup3 from "@/assets/phone-mockup-3.png";
import { Button } from "@/components/ui/button";

const QR_PATTERN = [
  1, 1, 1, 0, 0,
  1, 0, 1, 0, 1,
  1, 1, 1, 0, 0,
  0, 0, 1, 1, 0,
  1, 0, 0, 1, 1,
]; // 25 cells – deterministic placeholder

const AppSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              It all starts
              <br />
              <span className="text-primary">with a call.</span>
            </h2>

            <p className="text-foreground/70 text-lg mb-6 leading-relaxed max-w-xl">
              Book a 15-minute call and we’ll map your Attraction Engine — profile funnel, content
              structure, and the DM → booking flow for your business.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-foreground/60 mb-8">
              <span>15 minutes</span>
              <span>•</span>
              <span>Free</span>
              <span>•</span>
              <span>Clear next step</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#" aria-label="Book a call">
                  Book a Call
                </a>
              </Button>

              <a
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Or DM “ATTRACT” on Instagram
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">

            <div className="bg-background border border-border rounded-3xl p-7 shadow-xl w-full max-w-[320px] md:max-w-[360px]">
              <p className="text-xs tracking-widest text-foreground/60 mb-4">
                SCAN TO BOOK A CALL
              </p>

              <p className="font-black text-xl text-foreground mb-4">
                Attract
                <br />
                Acquisition
              </p>

              <div className="w-36 h-36 bg-foreground rounded-2xl flex items-center justify-center mx-auto">
                <div className="grid grid-cols-5 gap-1.5 p-2.5">
                  {QR_PATTERN.map((v, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-[3px] ${v ? "bg-background" : "bg-foreground"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm text-foreground/60 mt-5 text-center">
                Opens a 15-minute
                <br />
                booking link
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
