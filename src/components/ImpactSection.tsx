import React from 'react';
import { GraduationCap, BookOpen, Compass, Sparkles, Map, Users } from 'lucide-react';

const ImpactSection = () => {
  const impacts = [
    {
      title: "HIGHER EDUCATION",
      desc: "Scholarships, fee assistance & university sponsorship",
      icon: <GraduationCap className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "BOOKS & MATERIAL",
      desc: "Curated study resources, stationery & essentials",
      icon: <BookOpen className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "CAREER GUIDANCE",
      desc: "Personalized mentorship, competitive exam prep & direction",
      icon: <Compass className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "PERSONALITY GROWTH",
      desc: "Confidence building, leadership workshops & communication",
      icon: <Sparkles className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "RURAL EMPOWERMENT",
      desc: "Reaching grassroots talent beyond tier-1 and metro cities",
      icon: <Map className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "STUDENT COMMUNITY",
      desc: "Pan-India peer network, alumni support & collaboration",
      icon: <Users className="w-8 h-8 text-brand-lime" />
    }
  ];

  return (
    <section id="impact" className="section-wrapper bg-brand-forest text-white relative overflow-hidden rounded-t-[36px] md:rounded-t-[56px] rounded-b-[36px] md:rounded-b-[56px]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <div className="section-badge-dark">
            <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
            TARGETED IMPACT DOMAINS
          </div>
          <h2 className="section-title-dark">
            A brighter future,<br />
            <span className="text-brand-lime">one learner at a time.</span>
          </h2>
          <p className="section-subtitle-dark mb-5 sm:mb-6">
            We are committed to ensuring that every deserving child gets access to quality education — from school foundations to higher education — without financial barriers.
          </p>
          <div className="inline-block border border-white/15 bg-white/5 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-sm">
            <p className="text-brand-lime font-bold text-[11px] sm:text-sm tracking-wide">
              Nurture dreams. Build confidence. Create pathways to opportunity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {impacts.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 hover:border-brand-lime/40 p-5 sm:p-7 rounded-2xl sm:rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold tracking-tight text-white mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
