import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 sm:pt-36 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-brand-light">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-forest/5 rounded-bl-[100px] lg:rounded-bl-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start gap-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-xs border border-brand-primary/15">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-xs font-bold text-brand-forest tracking-wider uppercase">National Education Initiative</span>
            </div>
            
            <h1 className="text-[1.875rem] xs:text-[2.15rem] sm:text-5xl lg:text-6xl font-extrabold text-brand-forest leading-[1.15] tracking-tight">
              ONE LAKH <span className="text-brand-primary">STUDENTS.</span><br />
              ONE LAKH <span className="text-brand-lime">SMILES.</span>
            </h1>
            
            <p className="text-[15px] sm:text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
              A focused nationwide education movement helping deserving students continue higher education with dignity, confidence, and career opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1 sm:mt-2">
              <a 
                href="https://sarvsewabharat.org/donate/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-brand-forest text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <span>Support a Student</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link 
                href="#about"
                className="bg-white hover:bg-brand-light text-brand-forest border-2 border-brand-forest/15 hover:border-brand-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 text-center"
              >
                Explore Initiative
              </Link>
            </div>
            
            <div className="mt-3 sm:mt-4 pt-4 sm:pt-6 border-t border-brand-forest/10 w-full max-w-md">
              <p className="text-[11px] sm:text-xs text-text-secondary uppercase tracking-widest font-semibold mb-0.5 sm:mb-1">Organized By</p>
              <a 
                href="https://sarvsewabharat.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-forest hover:text-brand-primary font-bold text-sm sm:text-base lg:text-lg transition-colors inline-flex items-center gap-1 group"
              >
                <span>SARV SEWA SASHAKTIKARN SANGATHAN</span>
                <span className="text-xs text-brand-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">↗</span>
              </a>
            </div>
          </div>
          
          {/* Visual Area */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-brand-forest overflow-hidden shadow-2xl">
            <Image 
              src="/hero.jpeg" 
              alt="Students learning" 
              width={1600} 
              height={1200} 
              priority 
              className="w-full h-auto block object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-forest/40 to-transparent pointer-events-none" />
            
            {/* Floating Impact Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-white/20">
              <div className="flex justify-around items-center divide-x divide-brand-forest/10">
                <div className="text-center px-2 sm:px-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-forest mb-0.5">28</p>
                  <p className="text-[10px] sm:text-[11px] text-text-secondary uppercase tracking-wider font-semibold">States</p>
                </div>
                <div className="text-center px-2 sm:px-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-forest mb-0.5">8</p>
                  <p className="text-[10px] sm:text-[11px] text-text-secondary uppercase tracking-wider font-semibold">Union Territories</p>
                </div>
                <div className="text-center px-2 sm:px-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-primary mb-0.5">1L+</p>
                  <p className="text-[10px] sm:text-[11px] text-text-secondary uppercase tracking-wider font-semibold">Target Students</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
