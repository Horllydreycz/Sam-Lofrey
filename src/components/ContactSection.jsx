import { Instagram } from "lucide-react";

function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
            Begin your bespoke journey
          </h2>
          <p className="font-body text-charcoal/60 leading-relaxed mb-10">
            Every king deserves a garment crafted to his measure. Reach out to
            schedule your private fitting consultation.
          </p>

          <a
            href="https://instagram.com/samlofrey123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-ivory font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-navy/90 transition-all duration-300"
          >
            <Instagram size={18} />
            @samlofrey123
          </a>

          <p className="mt-8 font-body text-sm text-charcoal/40">
            www.samlofrey.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
