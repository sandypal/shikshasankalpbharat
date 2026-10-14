import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Donate', href: 'https://sarvsewabharat.org/donate/' },
    { name: 'Ambassador', href: '#ambassador' },
    { name: 'CSR', href: '#csr' },
    { name: 'Contact', href: '#contact' },
    { name: 'Sarv Sewa Sashaktikarn Sangathan ↗', href: 'https://sarvsewabharat.org/' },
  ];

  return (
    <footer id="contact" className="bg-brand-forest pt-10 sm:pt-12 pb-6 text-white/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-6 sm:mb-8 border-b border-white/10 pb-6 sm:pb-8">

          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 logo-img sm:w-12 sm:h-12 relative rounded-full overflow-hidden shrink-0 shadow-sm border border-white/20">
                <Image src="/logo.jpeg" alt="Shiksha Sankalp Logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-white text-lg sm:text-xl tracking-tight block">SHIKSHA SANKALP</span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-white/70">
              An education initiative of{' '}
              <a
                href="https://sarvsewabharat.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-lime font-medium underline decoration-white/30 hover:decoration-brand-lime transition-colors inline-flex items-center gap-1"
              >
                <span>Sarv Sewa Sashaktikarn Sangathan</span>
                <span className="text-xs text-brand-lime">↗</span>
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-6">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <a href="tel:+919056333759" className="hover:text-brand-lime transition-colors">
                  +91 90563 33759
                </a>
              </li>
              <li>
                <a href="mailto:info@sarvsewabharat.org" className="hover:text-brand-lime transition-colors">
                  info@sarvsewabharat.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-6">Leadership</h4>
            <ul className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <p className="text-white font-medium">Karan Sama</p>
                <a href="tel:+919855109159" className="text-xs sm:text-sm hover:text-brand-lime transition-colors">+91 98551 09159</a>
              </li>
              <li>
                <p className="text-white font-medium">Karan Batti</p>
                <a href="tel:+919592743434" className="text-xs sm:text-sm hover:text-brand-lime transition-colors">+91 95927 43434</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-lime transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-brand-lime transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-white/50 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Shiksha Sankalp. All rights reserved.</p>
            <p>
              Website designed, developed & maintained by{' '}
              <a href="https://icodehub.in" target="_blank" rel="noopener noreferrer" className="text-brand-lime hover:underline font-medium">
                icodehub technologies
              </a>
            </p>
          </div>
          <p className="font-bold text-brand-lime tracking-wider sm:tracking-widest uppercase text-[11px] sm:text-xs">SPONSOR A DREAM. TRANSFORM A LIFE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
