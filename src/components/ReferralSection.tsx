const ReferralSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get a free<br />
              <span className="text-primary">Attraction Audit</span><br />
              in 24 hours.
            </h2>

            <p className="text-muted-foreground text-lg">
              We’ll show you exactly what to fix to turn views into DMs and bookings — profile funnel,
              content plan, and conversion path.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-7xl md:text-8xl font-black text-primary leading-none">
                +100
              </p>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                AUDITS
              </p>
              <p className="text-muted-foreground mt-4">
                delivered… and counting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
