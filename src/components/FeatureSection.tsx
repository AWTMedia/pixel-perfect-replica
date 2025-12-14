import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const FeatureSection = () => {
  return (
    <>
      {/* Buy in seconds */}
      <section className="bg-dark py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={phoneMockup1} 
                alt="Insurance app showing price" 
                className="w-full max-w-md mx-auto animate-float"
              />
            </div>
            <div className="text-dark-foreground">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Buy in seconds<br />
                <span className="text-primary">without talking</span><br />
                to anyone
              </h2>
              <p className="text-dark-foreground/70 text-lg">
                Online. Real-time. Just entering your details to get a quote and
                buy your car, home or single item insurance in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Claims approved */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-foreground order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Claims approved<br />
                <span className="text-primary">in record time</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Hate filing claims and waiting forever? We speed everything up with AI, 
                getting your claim settled in minutes instead of days — no fuss.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src={phoneMockup2} 
                alt="Claims approval interface" 
                className="w-full max-w-md mx-auto animate-float"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
