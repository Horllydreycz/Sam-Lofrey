import heroAgbada from "../assets/agbada.jpg";

function CraftsmanshipSection() {
  return (
    <section
      id="craftsmanship"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroAgbada}
          alt="Craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6">
            The Craft
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-ivory leading-tight mb-8">
            Every stitch tells a story of{" "}
            <span className="text-gradient-gold italic">mastery</span>
          </h2>
          <p className="font-body text-ivory/50 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Our garments are meticulously constructed by master tailors who
            understand that true luxury lies in the details invisible to the
            untrained eye.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { number: "15+", label: "Years of Craft" },
              { number: "500+", label: "Bespoke Pieces" },
              { number: "100%", label: "Hand-Finished" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl lg:text-4xl font-bold text-gold">
                  {stat.number}
                </span>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ivory/40 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CraftsmanshipSection;
