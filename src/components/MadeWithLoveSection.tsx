import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const MadeWithLoveSection = () => {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold mb-4">NakedDifference™</p>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6 flex items-center justify-center gap-3">
          Made with <Heart className="w-10 h-10 fill-primary text-primary" />
        </h2>
        <p className="text-dark-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
          At Naked, we believe in treating people fairly, which is why we return 
          excess premiums to our active members at the end of each year.
        </p>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-dark">
          Find out how it works
        </Button>
      </div>
    </section>
  );
};

export default MadeWithLoveSection;
