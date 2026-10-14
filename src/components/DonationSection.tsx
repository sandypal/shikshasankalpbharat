import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Heart, Share2 } from 'lucide-react';

const DonationSection = () => {
  const donationOptions = [
    { amount: "₹501", label: "Study Material Support" },
    { amount: "₹1,100", label: "Education Support" },
    { amount: "₹2,100", label: "Skill Development" },
    { amount: "₹5,100", label: "Student Sponsorship" },
    { amount: "₹11,000", label: "Adopt a Student" },
    { amount: "₹21,000+", label: "Higher Education Scholarship" }
  ];

  return (
    <section id="donate" className="section-wrapper bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="section-badge">
            <Heart className="w-3.5 h-3.5 text-brand-primary" />
            DIRECT STUDENT SPONSORSHIP
          </div>
          <h2 className="section-title">
            A contribution today can<br />
            <span className="text-brand-primary">protect a student&apos;s tomorrow.</span>
          </h2>
          <p className="section-subtitle">
            Every donation directly supports tuition, study material, skill development, and higher education opportunities for deserving students across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Options */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              {donationOptions.map((opt, idx) => (
                <a 
                  key={idx} 
                  href="https://sarvsewabharat.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-brand-forest/10 shadow-xs hover:shadow-md hover:border-brand-primary/40 transition-all duration-300 group cursor-pointer block hover:-translate-y-0.5"
                >
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-forest group-hover:text-brand-primary transition-colors">{opt.amount}</h4>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-brand-forest/20 group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-colors" />
                  </div>
                  <p className="text-text-secondary font-medium text-[11px] sm:text-sm">{opt.label}</p>
                </a>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-6">
              <a 
                href="https://sarvsewabharat.org/donate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-primary hover:bg-brand-forest text-white py-3.5 sm:py-4 px-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
              >
                <span>Proceed to Donate (Sarv Sewa Sashaktikarn Sangathan)</span>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-brand-forest text-white p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4 sm:mb-6 bg-white/10 w-fit px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20">
                  <ShieldCheck className="text-brand-lime w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-brand-lime">SECURE BANK TRANSFER</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">OFFICIAL ACCOUNT</h3>
                
                <div className="space-y-3.5 sm:space-y-4 flex-grow border-t border-white/10 pt-4 sm:pt-5 text-sm">
                  <div>
                    <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">ACCOUNT NAME</p>
                    <a
                      href="https://sarvsewabharat.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-white hover:text-brand-lime transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>Sarv Sewa Sashaktikarn Sangathan</span>
                      <span className="text-xs text-brand-lime opacity-80 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">ACCOUNT NO</p>
                      <p className="font-bold text-[13px] sm:text-base font-mono text-brand-lime tracking-tight">2501239279094770</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">IFSC</p>
                      <p className="font-bold text-[13px] sm:text-base font-mono text-white">AUBL0002392</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">BANK</p>
                    <p className="font-bold text-sm sm:text-base text-white">AU Small Finance Bank</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">EMAIL</p>
                      <p className="font-bold text-[11px] sm:text-xs truncate text-white">info@sarvsewabharat.org</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">PHONE</p>
                      <p className="font-bold text-[11px] sm:text-xs text-white">+91 90563 33759</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-base sm:text-lg text-brand-lime mb-0.5">SCAN TO CONTRIBUTE</p>
                    <p className="text-[11px] sm:text-xs text-white/70">Use any UPI App</p>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden shadow-md">
                      <Image src="/qr-code.png" alt="Donate via QR Code" fill className="object-contain p-1 sm:p-1.5" />
                    </div>
                    <button className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold bg-white/10 hover:bg-white/20 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full transition-colors border border-white/20">
                      <Share2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      SHARE QR
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
