'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Heart, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Share2, 
  Check, 
  QrCode 
} from 'lucide-react';

const FinalCTA = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Shiksha Sankalp - One Lakh Students. One Lakh Smiles.',
        text: 'Support deserving Indian students with scholarships, books, and mentorship through Shiksha Sankalp.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const pathways = [
    {
      icon: <Heart className="w-7 h-7 text-brand-lime" />,
      badge: "DONORS & SPONSORS",
      title: "Fund a Scholarship",
      description: "Directly sponsor college tuition, books, exam fees, and living essentials for deserving learners.",
      actionText: "Donate Online",
      actionHref: "https://sarvsewabharat.org/donate/",
      isExternal: true,
      perk: "80G Tax Exemption Available",
      accent: "from-brand-lime/20 to-transparent",
      highlightBorder: "border-brand-lime/30",
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-brand-lime" />,
      badge: "STUDENTS & SCHOLARS",
      title: "Become an Ambassador",
      description: "Represent your home state across 28 States & 8 UTs. Inspire local youth and build leadership experience.",
      actionText: "Apply For Your State",
      actionHref: "#ambassador",
      isExternal: false,
      perk: "Official ID & National Certificate",
      accent: "from-brand-primary/30 to-transparent",
      highlightBorder: "border-white/20",
    },
    {
      icon: <Building2 className="w-7 h-7 text-brand-lime" />,
      badge: "COMPANIES & TRUSTS",
      title: "Partner Through CSR",
      description: "Co-sponsor regional education clusters with complete transparency, compliance, and impact audits.",
      actionText: "Explore CSR Collab",
      actionHref: "#csr",
      isExternal: false,
      perk: "12A, 80G & CSR-1 Registered",
      accent: "from-white/10 to-transparent",
      highlightBorder: "border-white/20",
    },
  ];

  return (
    <section className="section-wrapper bg-brand-forest relative overflow-hidden rounded-t-[36px] md:rounded-t-[60px] text-white">
      {/* Dynamic atmospheric ambient gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-lime/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-primary/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="section-badge-dark">
            <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
            JOIN THE NATIONAL MOVEMENT
          </div>
          
          <h2 className="section-title-dark">
            Let education change<br />
            <span className="text-brand-lime">the trajectory of a lifetime.</span>
          </h2>
          
          <p className="section-subtitle-dark mt-4">
            Whether you are an individual donor, an ambitious university topper, or a corporate partner — your involvement guarantees that no deserving student drops out due to financial hardship.
          </p>
        </div>

        {/* 3 Pathway Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          {pathways.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border ${card.highlightBorder} hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${card.accent} rounded-full blur-2xl pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-lime">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-2.5 tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-4 sm:mb-6">
                  {card.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 sm:pt-5 border-t border-white/10 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-brand-lime">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{card.perk}</span>
                </div>

                {card.isExternal ? (
                  <a
                    href={card.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-brand-lime hover:bg-white text-brand-forest font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg group-hover:shadow-brand-lime/20"
                  >
                    <span>{card.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                ) : (
                  <a
                    href={card.actionHref}
                    className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white text-white hover:text-brand-forest font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-white/20 hover:border-transparent"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contribution & Instant Verification Bar */}
        <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shrink-0 relative overflow-hidden shadow-md flex items-center justify-center">
              <Image src="/qr-code.png" alt="Donate via UPI QR Code" fill className="object-contain p-1 sm:p-1.5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                <QrCode className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Scan via any UPI App
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">Instant Student Contribution</h4>
              <p className="text-[11px] sm:text-xs text-white/70 mt-0.5">
                AU Small Finance Bank • A/C: <span className="font-mono text-brand-lime font-bold">2501239279094770</span> • IFSC: <span className="font-mono text-white font-bold">AUBL0002392</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full lg:w-auto">
            <a
              href="https://sarvsewabharat.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-brand-lime hover:bg-white text-brand-forest font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 sm:gap-2 text-center"
            >
              <span>Donate on Sarv Sewa Bharat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleShare}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-1.5 sm:gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-lime" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              <span>{copied ? 'Link Copied!' : 'Share Campaign'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
