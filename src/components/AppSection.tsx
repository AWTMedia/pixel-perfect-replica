import phoneMockup3 from "@/assets/phone-mockup-3.png";
import { Button } from "@/components/ui/button";

const QR_PATTERN = [
  1,1,1,0,0,
  1,0,1,0,1,
  1,1,1,0,0,
  0,0,1,1,0,
  1,0,0,1,1,
]; // 25 cells – deterministic placeholder

const AppSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              It all starts
              <br />
              <span className="text-primary">with a call.</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-xl">
              Book a 15-minute call and we’ll map your Attraction Engine — profile funnel, content
              structure, and the DM → booking flow for your business.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-8">
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

          <div className="flex items-center justify-center gap-8">
            <img
              src={phoneMockup3}
              alt="Attract Acquisition call booking mockup"
              className="w-64 md:w-80"
            />

            <div className="bg-background border border-border rounded-2xl p-6 shadow-lg w-[220px]">
              <p className="text-xs tracking-wide text-muted-foreground mb-3">
                SCAN TO BOOK A CALL
              </p>
              <p className="font-black text-lg mb-1">Attract Acquisition</p>
              <p className="text-xs text-muted-foreground mb-4">
                Opens a 15-minute booking link
              </p>

              <div className="w-32 h-32 bg-foreground rounded-xl flex items-center justify-center mx-auto">
                <div className="grid grid-cols-5 gap-1 p-2">
                  {QR_PATTERN.map((v, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ${v ? "bg-background" : "bg-foreground"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground mt-4 text-center">
                Replace with real QR when live
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
