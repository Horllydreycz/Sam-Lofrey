import craftImage from "../assets/craftmanship detail.jpg";

function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src={craftImage}
                alt="Sam Lofrey craftsmanship detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
              A study in form, fabric, and quiet confidence.
            </h2>
            <div className="space-y-4 font-body text-charcoal/70 leading-relaxed">
              <p>
                Rooted in the rich traditions of Nigerian tailoring, we blend
                time-honored techniques with contemporary designs to create
                outfits that exude confidence and elegance.
              </p>
              <p>
                From sharp corporate wear to sleek casual fits, and regal
                traditional wear like Agbada and Senators — every stitch is a
                statement of quality and style, made for men who appreciate the
                art of dressing well.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: "Refined", desc: "Elegance in every detail" },
                { label: "Confident", desc: "Poise that commands" },
                { label: "Heritage", desc: "Honoring tradition" },
              ].map((v) => (
                <div key={v.label} className="border-t-2 border-gold/30 pt-4">
                  <h4 className="font-display text-lg font-semibold text-navy">
                    {v.label}
                  </h4>
                  <p className="font-body text-xs text-charcoal/50 mt-1">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
