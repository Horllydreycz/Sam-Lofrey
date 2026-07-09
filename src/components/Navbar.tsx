"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sam_lofrey_logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/10">
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Sam Lofrey logo"
              className="h-20 w-auto"
              priority
            />
            <span className="font-display text-2xl font-bold text-ivory tracking-wide">
              Sam Lofrey
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Collections", "Craftsmanship", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-ivory/70 hover:text-gold font-body text-sm tracking-widest uppercase transition-colors duration-300"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 border border-gold text-gold font-body text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Book a Fitting
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ivory"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-8 pt-4 border-t border-gold/10">
            <div className="flex flex-col gap-6">
              {["Collections", "Craftsmanship", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-ivory/70 hover:text-gold font-body text-sm tracking-widest uppercase transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 border border-gold text-gold font-body text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Book a Fitting
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
