import phoneMockup3 from "@/assets/phone-mockup-3.png";
import { Button } from "@/components/ui/button";

const AppSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              It all starts<br />
              <span className="text-primary">with a call</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Book a 15-minute call and we’ll map your Attraction Engine — profile funnel, content
              structure, and the DM → booking flow for your business.
            </p>

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

            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-muted-foreground mb-3">SCAN TO BOOK A CALL</p>
              <p className="font-bold text-lg mb-4">Attract Acquisition</p>

              <div className="w-32 h-32 bg-foreground rounded-lg flex items-center justify-center">
                {/* Placeholder QR. Replace with a real QR image when you have your booking link. */}
                <div className="grid grid-cols-5 gap-1 p-2">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ${
                        Math.random() > 0.5 ? "bg-background" : "bg-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Opens the booking page
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
