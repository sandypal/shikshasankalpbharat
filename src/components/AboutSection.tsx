import React from 'react';
import { BookOpen, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-7 h-7 text-brand-primary" />,
      title: "ACCESS",
      desc: "Remove financial barriers to schooling & university education"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-primary" />,
      title: "CONTINUITY",
      desc: "Ensure deserving students never drop out midway"
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-brand-primary" />,
      title: "CONFIDENCE",
      desc: "One-on-one mentorship, career guidance & life skills"
    }
  ];

  return (
    <section id="about" className="section-wrapper bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <div className="section-badge">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                ABOUT THE MOVEMENT
              </div>
              <h2 className="section-title">
                Education with purpose.<br />
                <span className="text-brand-lime">Impact with dignity.</span>
              </h2>
              <p className="text-[15px] sm:text-lg text-text-secondary leading-relaxed mt-3 sm:mt-4">
                <a 
                  href="https://sarvsewabharat.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-forest hover:text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Sarv Sewa Sashaktikarn Sangathan</span>
                  <span className="text-xs text-brand-primary opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a> is a registered charitable society committed to social welfare, education, healthcare, and youth empowerment. Through meaningful initiatives, the society strives to create lasting social impact and inspire positive change.
              </p>
            </div>

            <div className="p-5 sm:p-8 bg-brand-light rounded-2xl sm:rounded-3xl border border-brand-forest/10 shadow-xs">
              <p className="text-[11px] sm:text-xs font-bold text-brand-primary tracking-widest uppercase mb-1.5 sm:mb-2">SHIKSHA SANKALP</p>
              <h3 className="text-lg sm:text-2xl font-bold text-brand-forest mb-2 sm:mb-3">ONE LAKH STUDENTS. ONE LAKH SMILES.</h3>
              <p className="text-[13px] sm:text-base text-text-secondary leading-relaxed">
                Shiksha Sankalp is the education initiative of the society. It supports deserving students through higher education fee assistance, scholarships, study material, books, stationery, mentorship, and academic support.
              </p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="grid gap-3 sm:gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-brand-offwhite border border-brand-forest/5 hover:border-brand-primary/20 hover:shadow-sm transition-all duration-300">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-xs border border-brand-forest/5 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-lg font-bold text-brand-forest mb-0.5 sm:mb-1">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-5 sm:pt-6 border-t border-brand-forest/10">
              <h4 className="text-lg sm:text-2xl font-bold text-brand-forest mb-1.5 sm:mb-2">
                Every deserving student should be able to keep learning.
              </h4>
              <p className="text-xs sm:text-base text-text-secondary font-medium">
                A national mission rooted in access, inclusion, and social mobility.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
