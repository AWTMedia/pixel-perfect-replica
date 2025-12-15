import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How is this different from social media management?",
      description:
        "We don’t just post. We build the system behind your content so Instagram becomes a predictable acquisition channel.",
    },
    {
      question: "Do you guarantee results?",
      description:
        "We guarantee the engine build (profile funnel + content system + DM → booking flow). Outcomes depend on offer, location, pricing, and execution — but the system makes results repeatable.",
    },
    {
      question: "How long does it take?",
      description:
        "Most businesses can have the full engine installed in days, then improved weekly.",
    },
    {
      question: "Do you need access to our Instagram?",
      description:
        "Not always. We can build done-with-you (you post) or support execution depending on your setup.",
    },
  ];

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
          FAQ
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Quick answers before you book.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group border border-border/60"
            >
              <h3 className="font-bold text-foreground mb-3 leading-snug">
                {faq.question}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {faq.description}
              </p>
              <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-dark" size="lg">
            See all answers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
