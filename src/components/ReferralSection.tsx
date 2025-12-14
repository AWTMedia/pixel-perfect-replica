const ReferralSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get up to<br />
              <span className="text-primary">R1,000 in cash</span><br />
              for referring a<br />
              friend.
            </h2>
            <p className="text-muted-foreground text-lg">
              You've probably already told your friends about us. If you 
              haven't, now you can get paid for spreading the word. You can 
              keep your 50% cashback coming in forever!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-7xl md:text-8xl font-black text-primary leading-none">
                R3.1
              </p>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                MILLION
              </p>
              <p className="text-muted-foreground mt-4">
                paid in referrals... and counting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
