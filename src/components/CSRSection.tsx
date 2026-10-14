import React from 'react';
import { Building2, GraduationCap, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';

const CSRSection = () => {
  const partnerships = [
    {
      title: "CORPORATE CSR",
      desc: "Corporate foundations and dedicated CSR education programs",
      icon: <Building2 className="w-7 h-7 text-brand-primary" />
    },
    {
      title: "EDUCATIONAL INSTITUTIONS",
      desc: "Universities, colleges, and coaching partnerships",
      icon: <GraduationCap className="w-7 h-7 text-brand-primary" />
    },
    {
      title: "TRUSTS & FOUNDATIONS",
      desc: "Philanthropic trusts co-sponsoring regional batches",
      icon: <Landmark className="w-7 h-7 text-brand-primary" />
    }
  ];

  const compliance = [
    { title: "12A", desc: "Registered" },
    { title: "80G", desc: "Tax Benefit Available" },
    { title: "CSR-1", desc: "Registered" },
    { title: "NGO DARPAN", desc: "Registered" },
    { title: "E-ANUDAAN", desc: "Registered" }
  ];

  return (
    <section id="csr" className="section-wrapper bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 sm:mb-16">
          <div>
            <div className="section-badge">
              <Building2 className="w-3.5 h-3.5 text-brand-primary" />
              INSTITUTIONAL &amp; CSR PARTNERSHIPS
            </div>
            <h2 className="section-title">
              Partner for measurable<br />
              <span className="text-brand-primary">education impact.</span>
            </h2>
            <p className="section-subtitle !mx-0 mt-2 sm:mt-3 mb-6 sm:mb-8 text-sm sm:text-base">
              Join hands with Shiksha Sankalp to build structured, transparent, and high-impact pathways to higher education for deserving students across India.
            </p>
            <a 
              href="https://wa.me/919855109159?text=Hello%20Shiksha%20Sankalp,%20we%20are%20interested%20in%20a%20CSR%20/%20Institutional%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-forest hover:bg-brand-primary text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Explore CSR Partnerships</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid gap-3 sm:gap-3.5">
            {partnerships.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-brand-offwhite p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center gap-4 sm:gap-5 border border-brand-forest/10 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-xs"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl shadow-xs border border-brand-forest/5 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-brand-forest mb-0.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Block */}
        <div className="bg-brand-light rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-brand-forest/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-forest mb-1">Registered &amp; Compliant</h3>
              <p className="text-xs sm:text-base text-text-secondary">
                Initiative by{' '}
                <a 
                  href="https://sarvsewabharat.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-brand-forest hover:text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Sarv Sewa Sashaktikarn Sangathan</span>
                  <span className="text-xs text-brand-primary opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
                . Built for accountable partnerships and 100% transparent social impact.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-brand-primary font-bold text-xs sm:text-sm shadow-xs border border-brand-forest/5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary" />
              <span>Verified Organization</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
            {compliance.map((item, idx) => (
              <div key={idx} className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-center shadow-xs border border-brand-forest/5">
                <h4 className="text-base sm:text-xl font-bold text-brand-forest mb-0.5">{item.title}</h4>
                <p className="text-[10px] sm:text-xs font-semibold text-brand-primary uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRSection;
