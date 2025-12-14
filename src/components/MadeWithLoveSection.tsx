import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const MadeWithLoveSection = () => {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold mb-4">Get Attractive™</p>

        <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6 flex items-center justify-center gap-3">
          Built to Convert
          <Heart className="w-7 h-7 fill-primary text-primary" />
        </h2>

        <p className="text-dark-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
          We believe physical businesses don’t need more content — they need a system
          that turns attention into clients, every week.
        </p>

        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          See how it works
        </Button>
      </div>
    </section>
  );
};

export default MadeWithLoveSection;
