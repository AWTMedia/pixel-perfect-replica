import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What insurance I cover with Naked?",
      description: "Car, home contents, buildings, and single items like laptops, phones and more.",
    },
    {
      question: "How long to get insured with Naked?",
      description: "You can get a quote and buy cover in under 90 seconds. It's that quick!",
    },
    {
      question: "How do I claim with Naked?",
      description: "Simply open your app, tap 'Claim', follow the steps, and you're done.",
    },
    {
      question: "Why Naked app?",
      description: "Because we're 100% digital, we cut out the middlemen and pass the savings on to you.",
    },
  ];

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Want to know more <span className="text-primary">about Naked?</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground text-sm mb-4">{faq.description}</p>
              <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline-dark" size="lg">
            Read our FAQ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
