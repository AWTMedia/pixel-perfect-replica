import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primary pt-28 pb-16 md:pb-24">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-dark leading-tight mb-6">
            Get Naked on<br />your stuff.
          </h1>
          <p className="text-dark/80 text-lg mb-8">
            From R8.16/pm for single item insurance
          </p>
          <Button variant="hero" size="lg">
            Get my price
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
