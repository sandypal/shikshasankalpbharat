import React from 'react';

const ImpactStats = () => {
  const stats = [
    { value: "28", label: "STATES REACHED" },
    { value: "8", label: "UNION TERRITORIES" },
    { value: "1 LAKH", label: "DESERVING STUDENTS" },
    { value: "1 LAKH", label: "TRANSFORMED SMILES" }
  ];

  return (
    <section className="py-10 md:py-14 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[36px] shadow-lg p-5 sm:p-12 md:p-14 border border-brand-forest/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-forest/10">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`text-center flex flex-col items-center justify-center ${idx > 0 ? 'pt-4 sm:pt-6 md:pt-0' : ''}`}
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest mb-1 sm:mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold text-brand-primary tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
