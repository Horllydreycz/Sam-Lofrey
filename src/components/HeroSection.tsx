import Image from "next/image";
import heroImage from "@/assets/hero-main.jpg";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Sam Lofrey luxury menswear"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11, 26, 61, 0.9), rgba(11, 26, 61, 0.7), rgba(11, 26, 61, 0.4))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11, 26, 61, 1), rgba(11, 26, 61, 0), rgba(11, 26, 61, 0))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-1 pt-20">
        <div className="max-w-2xl">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6">
            Nigerian Luxury Menswear
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-ivory leading-[0.95] mb-6">
            Built for
            <br />
            <span className="text-gradient-gold italic">Kings</span>
          </h1>
          <p className="font-body text-ivory/60 text-lg max-w-md leading-relaxed mb-10">
            Where craftsmanship meets class. Every stitch is a statement of
            quality and style.
          </p>
          <div className="flex gap-4">
            <a
              href="#collections"
              className="border rounded-xl border-gold/90 inline-flex items-center px-8 py-4 bg-gold text-navy font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold/90 transition-all duration-300"
            >
              View Collections
            </a>
            <a
              href="#about"
              className="border rounded-xl inline-flex items-center px-8 py-4  border-ivory/30 text-ivory font-body text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-linear-to-b from-gold/0 via-gold to-gold/0 mx-auto mb-2" />
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/60">
          Scroll
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
