import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primary pt-28 pb-16 md:pb-24">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-dark leading-tight mb-6">
            Get Attractive on<br />Turn Instagram into clients for your physical business.
          </h1>
          <p className="text-dark/80 text-lg mb-8">
            We build Attraction Engines that convert random posting into DMs, bookings, and sales — without posting more for the sake of it.
          </p>
          <Button variant="hero" size="lg">
            Get my Attraction Engine
          </Button>
          <div className="flex items-center gap-2 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-dark text-dark" />
              ))}
            </div>
            <span className="text-dark font-medium">Hellopeter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
