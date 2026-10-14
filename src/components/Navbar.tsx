'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Ambassador', href: '#ambassador' },
    { name: 'CSR', href: '#csr' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Parent Organization Strip */}
      <div className="bg-brand-forest text-white/90 text-[10px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 text-center border-b border-white/10 flex items-center justify-center gap-1 font-medium leading-tight">
        <span className="opacity-80">A National Initiative of</span>
        <a 
          href="https://sarvsewabharat.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold text-brand-lime hover:underline inline-flex items-center gap-0.5 group"
        >
          <span>Sarv Sewa Sashaktikarn Sangathan</span>
          <span className="text-[9px] group-hover:translate-x-0.5 transition-transform">↗</span>
        </a>
      </div>

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-2.5'
            : 'bg-white py-2.5 sm:py-3.5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative rounded-full overflow-hidden shrink-0 border border-brand-forest/10 shadow-sm">
                <Image src="/logo.jpeg" alt="Shiksha Sankalp Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-forest text-[15px] sm:text-lg md:text-xl leading-tight tracking-tight">SHIKSHA SANKALP</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-brand-primary font-bold tracking-wide mt-0.5">ONE LAKH STUDENTS. ONE LAKH SMILES.</span>
              </div>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-text-dark hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://sarvsewabharat.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-brand-forest text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Support a Student
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-text-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://sarvsewabharat.org/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white text-center px-6 py-3 rounded-full font-bold text-base mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support a Student
          </a>
          <div className="pt-3 border-t border-gray-100 text-center">
            <a
              href="https://sarvsewabharat.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-forest hover:text-brand-primary font-bold inline-flex items-center gap-1"
            >
              <span>Sarv Sewa Sashaktikarn Sangathan</span>
              <span className="text-brand-primary">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
