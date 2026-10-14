import React from 'react';
import Image from 'next/image';
import { Phone, Users, ShieldCheck } from 'lucide-react';

const LeadershipSection = () => {
  const leaders = [
    {
      role: "CONVENOR",
      name: "KARAN SAMA",
      image: "/karan-sama.jpg",
      phone: "+91 98551 09159",
      desc: "A dedicated leader guiding the vision of Shiksha Sankalp and working towards creating meaningful educational opportunities for students. His leadership helps drive the campaign forward with commitment, purpose, and a strong focus on empowering young learners."
    },
    {
      role: "CO-CONVENOR",
      name: "KARAN BATTI",
      image: "/karan-batti.jpg",
      phone: "+91 95927 43434",
      desc: "A committed leader who works alongside the Convenor to transform the vision of Shiksha Sankalp into meaningful action. Through strategic coordination, collaboration, and dedicated execution, he plays a vital role in expanding educational opportunities and creating lasting impact."
    }
  ];

  return (
    <section id="leadership" className="section-wrapper bg-brand-offwhite">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="section-badge">
            <Users className="w-3.5 h-3.5 text-brand-primary" />
            CAMPAIGN LEADERSHIP
          </div>
          <h2 className="section-title">
            Leadership that turns<br />
            <span className="text-brand-primary">vision into action.</span>
          </h2>
          <p className="section-subtitle">
            Dedicated leadership guiding the national vision of Shiksha Sankalp with accountability, grassroots execution, and commitment to student empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {leaders.map((leader, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-forest/10 flex flex-col md:flex-row group hover:-translate-y-1"
            >
              <div className="w-full md:w-5/12 aspect-[4/4.5] sm:aspect-[4/4] md:aspect-auto md:min-h-[340px] relative bg-brand-forest/5 overflow-hidden shrink-0">
                 <Image 
                   src={leader.image} 
                   alt={leader.name} 
                   fill 
                   sizes="(max-width: 768px) 100vw, 40vw"
                   priority
                   style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                   className="group-hover:scale-105 transition-transform duration-700" 
                 />
              </div>
              
              <div className="p-5 sm:p-6 md:p-8 flex-grow bg-white flex flex-col justify-center">
                <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-brand-forest/10">
                  <p className="text-brand-primary font-bold tracking-widest text-[11px] sm:text-xs mb-1 uppercase">{leader.role}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-forest mb-1.5 sm:mb-2">{leader.name}</h3>
                  <a 
                    href={`tel:${leader.phone.replace(/\s+/g, '')}`} 
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors font-medium text-xs sm:text-sm"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary" />
                    {leader.phone}
                  </a>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed font-normal">&quot;{leader.desc}&quot;</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-forest rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-brand-lime text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-lime" />
            CORE PROMISE
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 relative z-10">
            Clarity of mission. Consistency of action.
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-brand-lime font-medium max-w-2xl mx-auto relative z-10">
            Accountable execution for students, educational partners, and donor communities across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
