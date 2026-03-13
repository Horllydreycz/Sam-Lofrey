import collectionCorporate from "../assets/corporate.jpg";
import collectionCasual from "../assets/casual.jpg";
import collectionGold from "../assets/gold.jpg";

const collections = [
  {
    title: "Traditional",
    subtitle: "Agbada & Senators",
    description:
      "Regal silhouettes rooted in heritage, reimagined for the modern king.",
    image: collectionGold,
  },
  {
    title: "Corporate",
    subtitle: "Sharp Tailoring",
    description:
      "Command presence in the boardroom with impeccable structure and fit.",
    image: collectionCorporate,
  },
  {
    title: "Casual",
    subtitle: "Refined Ease",
    description:
      "Menswear that speaks without shouting. Effortless, elevated style.",
    image: collectionCasual,
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Collections
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory">
            Command Presence.
            <br />
            <span className="text-gradient-gold italic">Wear Power.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col, i) => (
            <div
              key={col.title}
              className="group relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                  {col.subtitle}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-2">
                  {col.title}
                </h3>
                <p className="font-body text-sm text-ivory/50 leading-relaxed max-w-xs">
                  {col.description}
                </p>
                <div className="mt-4 w-8 h-px bg-gold group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
