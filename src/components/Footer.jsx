function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10 py-12">
      <div className="mx-auto  lg:px-12 w-full px-3 sm:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold text-ivory">
              Sam Lofrey
            </span>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/60 mt-1">
              Built for Kings
            </p>
          </div>

          <div className="flex items-center gap-8">
            {["Collections", "Craftsmanship", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-body text-xs tracking-widest uppercase text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <p className="font-body text-2xl text-ivory/20">
            © {new Date().getFullYear()} Sam Lofrey
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
