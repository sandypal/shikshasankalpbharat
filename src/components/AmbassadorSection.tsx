'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Award, 
  X, 
  Sparkles, 
  Search, 
  UserCheck, 
  Compass, 
  LayoutGrid, 
  ChevronRight,
  Send
} from 'lucide-react';
import { ambassadors, Ambassador } from '@/data/ambassadors';
import { indianStatesAndUTs, StateEntity, ZoneType } from '@/data/statesData';

const AmbassadorSection = () => {
  const [selectedAmbassador, setSelectedAmbassador] = useState<Ambassador | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'directory'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'appointed' | 'open'>('all');
  
  // Default selected state in Map mode
  const [activeStateCode, setActiveStateCode] = useState<string>('HP');

  const appointedCount = useMemo(() => {
    return indianStatesAndUTs.filter(s => !!s.ambassadorId).length;
  }, []);

  const totalCount = indianStatesAndUTs.length;

  // Filtered states based on search, zone, status
  const filteredStates = useMemo(() => {
    return indianStatesAndUTs.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ambassadorId && ambassadors.find(a => a.id === item.ambassadorId)?.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesZone = selectedZone === 'All' || item.zone === selectedZone || (selectedZone === 'Union Territory' && item.type === 'ut');

      const isAppointed = !!item.ambassadorId;
      const matchesStatus = 
        statusFilter === 'all' || 
        (statusFilter === 'appointed' && isAppointed) ||
        (statusFilter === 'open' && !isAppointed);

      return matchesSearch && matchesZone && matchesStatus;
    });
  }, [searchQuery, selectedZone, statusFilter]);

  // Active state for Map/Explorer Mode
  const activeState = useMemo(() => {
    return indianStatesAndUTs.find(s => s.code === activeStateCode) || indianStatesAndUTs[0];
  }, [activeStateCode]);

  const activeAmbassador = useMemo(() => {
    if (!activeState?.ambassadorId) return null;
    return ambassadors.find(a => a.id === activeState.ambassadorId) || null;
  }, [activeState]);

  const zones: { id: string; label: string }[] = [
    { id: 'All', label: 'All Regions' },
    { id: 'North', label: 'North India' },
    { id: 'West', label: 'West India' },
    { id: 'Central', label: 'Central India' },
    { id: 'East', label: 'East India' },
    { id: 'South', label: 'South India' },
    { id: 'North-East', label: 'North-East' },
    { id: 'Union Territory', label: 'Union Territories' },
  ];

  const whoCanApply = [
    "Gold Medalists",
    "University Toppers",
    "Research Scholars",
    "National & International Achievers",
    "Student Leaders"
  ];

  const benefits = [
    "Official Appointment Certificate",
    "Official Ambassador ID Card",
    "National Recognition",
    "Career Growth & Development",
    "Leadership & Public Speaking",
    "Pan-India Networking"
  ];

  return (
    <section id="ambassador" className="section-wrapper bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Header & National Vision */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            PAN-INDIA STATE INITIATIVE
          </div>
          <h2 className="section-title">
            State Education <span className="text-brand-primary">Ambassadors</span>
          </h2>
          <p className="section-subtitle">
            Representing 28 States and 8 Union Territories across Bharat. Discover appointed state youth leaders or apply to represent your home state.
          </p>
        </div>

        {/* Live Momentum Counter Bar */}
        <div className="bg-brand-offwhite rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-brand-forest/10 mb-8 sm:mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-5 sm:mb-6">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] sm:text-xs md:text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                {appointedCount} States Appointed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest text-[11px] sm:text-xs md:text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-lime" />
                {totalCount - appointedCount} States Open
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-text-secondary">
                Total: 28 States + 8 UTs (36)
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex p-1 rounded-xl sm:rounded-2xl bg-white border border-brand-forest/15 shadow-sm">
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs md:text-sm font-bold transition-all ${
                  viewMode === 'map'
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'text-text-secondary hover:text-brand-forest'
                }`}
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Map &amp; Explorer</span>
              </button>
              <button
                onClick={() => setViewMode('directory')}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs md:text-sm font-bold transition-all ${
                  viewMode === 'directory'
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'text-text-secondary hover:text-brand-forest'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Directory Grid</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-brand-forest/10 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-brand-primary to-brand-lime h-full rounded-full transition-all duration-700"
              style={{ width: `${(appointedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search by state, UT, or ambassador..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-brand-forest/15 focus:border-brand-primary focus:outline-none text-sm text-text-dark shadow-sm transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-dark"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Status Quick Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                statusFilter === 'all' 
                  ? 'bg-brand-forest text-white' 
                  : 'bg-brand-forest/5 text-text-secondary hover:bg-brand-forest/10'
              }`}
            >
              All States ({totalCount})
            </button>
            <button
              onClick={() => setStatusFilter('appointed')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                statusFilter === 'appointed' 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-brand-forest/5 text-text-secondary hover:bg-brand-forest/10'
              }`}
            >
              🟢 Appointed ({appointedCount})
            </button>
            <button
              onClick={() => setStatusFilter('open')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                statusFilter === 'open' 
                  ? 'bg-brand-forest text-white' 
                  : 'bg-brand-forest/5 text-text-secondary hover:bg-brand-forest/10'
              }`}
            >
              ⚡ Open ({totalCount - appointedCount})
            </button>
          </div>
        </div>

        {/* Region / Zone Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all border ${
                selectedZone === zone.id
                  ? 'bg-brand-forest text-white border-brand-forest shadow-sm'
                  : 'bg-white text-text-secondary hover:text-brand-forest border-brand-forest/10 hover:border-brand-forest/20'
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        {/* ======================================================= */}
        {/* VIEW 1: COMBINED INTERACTIVE MAP & EXPLORER MODE        */}
        {/* ======================================================= */}
        {viewMode === 'map' && (
          <div className="grid lg:grid-cols-12 gap-8 mb-20 items-start">
            
            {/* Left: State Selector Grid (Visual Regional Board) */}
            <div className="lg:col-span-7 bg-brand-offwhite rounded-[32px] p-6 md:p-8 border border-brand-forest/10 shadow-sm">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-brand-forest/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-primary" />
                  <h3 className="font-bold text-brand-forest text-base md:text-lg">
                    Select a State or Union Territory
                  </h3>
                </div>
                <span className="text-xs font-semibold text-text-secondary">
                  Showing {filteredStates.length} of {totalCount}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[560px] overflow-y-auto pr-1">
                {filteredStates.map((state) => {
                  const isAppointed = !!state.ambassadorId;
                  const isActive = activeStateCode === state.code;
                  const amb = state.ambassadorId ? ambassadors.find(a => a.id === state.ambassadorId) : null;

                  return (
                    <button
                      key={state.code}
                      onClick={() => setActiveStateCode(state.code)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between min-h-[92px] relative overflow-hidden group ${
                        isActive
                          ? 'border-brand-primary ring-2 ring-brand-primary/20 bg-white shadow-md'
                          : isAppointed
                          ? 'border-brand-primary/40 bg-white hover:border-brand-primary hover:shadow-sm'
                          : 'border-brand-forest/10 bg-white/70 hover:bg-white hover:border-brand-forest/20'
                      }`}
                    >
                      {/* Top Header inside tile */}
                      <div className="flex items-center justify-between gap-1 w-full">
                        <span className={`text-xs font-extrabold px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-brand-primary text-white'
                            : isAppointed
                            ? 'bg-brand-light text-brand-primary'
                            : 'bg-brand-forest/5 text-text-secondary'
                        }`}>
                          {state.code}
                        </span>

                        {isAppointed ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-primary shadow-xs animate-pulse" title="Appointed" />
                        ) : (
                          <span className="text-[10px] text-text-secondary/70 font-semibold">Open</span>
                        )}
                      </div>

                      {/* State Name */}
                      <div className="mt-2">
                        <p className={`text-xs md:text-sm font-bold truncate ${
                          isActive ? 'text-brand-primary' : 'text-brand-forest'
                        }`}>
                          {state.name}
                        </p>
                        <p className="text-[11px] text-text-secondary truncate mt-0.5">
                          {isAppointed && amb ? amb.name : state.zone}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: State Spotlight Card */}
            <div className="lg:col-span-5 sticky top-28">
              {activeAmbassador ? (
                /* Card for APPOINTED State */
                <div className="bg-white rounded-[32px] overflow-hidden border border-brand-primary/30 shadow-xl transition-all flex flex-col">
                  {/* Photo & State Badge */}
                  <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.2] md:h-80 lg:h-96 bg-brand-forest/5 overflow-hidden">
                    <Image
                      src={activeAmbassador.image || "/ambassador-placeholder.svg"}
                      alt={activeAmbassador.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                      style={{ objectFit: 'cover', objectPosition: 'center 12%' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    {/* State Tag */}
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-forest text-xs font-bold shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{activeAmbassador.state}</span>
                      <span className="text-brand-primary">• Appointed</span>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-brand-lime mb-0.5">
                        State Education Ambassador
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        {activeAmbassador.name}
                      </h3>
                      {activeAmbassador.designation && (
                        <p className="text-xs text-white/90 line-clamp-1 mt-0.5">
                          {activeAmbassador.designation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 md:p-6 space-y-3.5">
                    {/* Key Distinction Pill */}
                    {activeAmbassador.education?.[0] && (
                      <div className="bg-brand-light/60 rounded-xl p-3 border border-brand-forest/5 flex items-center gap-2.5">
                        <GraduationCap className="w-4 h-4 text-brand-primary shrink-0" />
                        <div className="text-xs">
                          <span className="font-bold text-brand-forest">
                            {activeAmbassador.education[0].degree}
                          </span>
                          <span className="text-text-secondary"> — {activeAmbassador.education[0].institution}</span>
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-1">
                      {activeAmbassador.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <Award className="w-3.5 h-3.5 text-brand-lime shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedAmbassador(activeAmbassador)}
                      className="w-full mt-2 py-3 px-4 rounded-xl bg-brand-forest hover:bg-brand-primary text-white font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <span>View Full Profile &amp; Accolades</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Card for OPEN / VACANT State */
                <div className="bg-gradient-to-br from-brand-offwhite to-brand-light/30 rounded-[32px] p-8 border-2 border-dashed border-brand-forest/20 flex flex-col justify-between min-h-[440px] text-center shadow-sm">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand-forest text-xs font-bold mb-4">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                      {activeState.name} ({activeState.code})
                    </div>
                    
                    <div className="w-16 h-16 rounded-full bg-white shadow-md border border-brand-forest/10 flex items-center justify-center mx-auto mb-4 text-brand-primary">
                      <UserCheck className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-brand-forest mb-2">
                      Represent {activeState.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4">
                      State Ambassador Position Open
                    </p>

                    <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-sm mx-auto">
                      Are you a university topper, gold medalist, research scholar, or youth leader from {activeState.name}? Become the voice of educational transformation for your state.
                    </p>

                    <div className="bg-white rounded-2xl p-4 border border-brand-forest/10 text-left text-xs space-y-2 mb-6">
                      <p className="font-bold text-brand-forest">Candidate Eligibility:</p>
                      <div className="grid grid-cols-2 gap-2 text-text-secondary">
                        <span>• University Toppers</span>
                        <span>• Gold Medalists</span>
                        <span>• Research Scholars</span>
                        <span>• Student Leaders</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919855109159?text=Hello%20Shiksha%20Sankalp,%20I%20would%20like%20to%20apply%20as%20the%20State%20Education%20Ambassador%20for%20${encodeURIComponent(activeState.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-brand-primary hover:bg-brand-forest text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Apply for {activeState.name} Now</span>
                  </a>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ======================================================= */}
        {/* VIEW 2: DIRECTORY GRID MODE (SCALABLE TO ALL 36)        */}
        {/* ======================================================= */}
        {viewMode === 'directory' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20">
            {filteredStates.map((state) => {
              const amb = state.ambassadorId ? ambassadors.find(a => a.id === state.ambassadorId) : null;

              if (amb) {
                /* Compact Appointed Ambassador Card */
                return (
                  <div
                    key={state.code}
                    className="bg-white rounded-[28px] overflow-hidden border border-brand-forest/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                  >
                    {/* Photo with Name & State */}
                    <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.2] md:aspect-[3/3.8] lg:h-64 xl:h-72 bg-brand-forest/5 overflow-hidden">
                      <Image
                        src={amb.image || "/ambassador-placeholder.svg"}
                        alt={amb.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: 'cover', objectPosition: 'center 12%' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      
                      {/* State Tag */}
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-forest text-[11px] font-bold shadow-xs">
                        <MapPin className="w-3 h-3 text-brand-primary shrink-0" />
                        <span>{amb.state}</span>
                        <span className="text-brand-primary">• Appointed</span>
                      </div>

                      {/* Name Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-lg font-bold tracking-tight leading-snug">
                          {amb.name}
                        </h3>
                        <p className="text-[11px] text-brand-lime font-medium truncate mt-0.5">
                          {amb.designation || amb.role}
                        </p>
                      </div>
                    </div>

                    {/* Compact Card Body */}
                    <div className="p-4 flex-grow flex flex-col justify-between space-y-3 bg-white">
                      <div>
                        {/* Top Key Qualification */}
                        {amb.education?.[0] && (
                          <div className="flex items-start gap-1.5 text-xs text-text-secondary">
                            <GraduationCap className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-medium">{amb.education[0].degree}</span>
                          </div>
                        )}

                        {/* Top Achievement highlight */}
                        {amb.achievements?.[0] && (
                          <div className="flex items-start gap-1.5 text-[11px] text-text-secondary/80 mt-1.5">
                            <Award className="w-3.5 h-3.5 text-brand-lime shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{amb.achievements[0]}</span>
                          </div>
                        )}
                      </div>

                      {/* View Profile Action */}
                      <button
                        onClick={() => setSelectedAmbassador(amb)}
                        className="w-full py-2.5 px-3 rounded-xl border border-brand-primary/25 hover:border-brand-primary text-brand-forest hover:text-white hover:bg-brand-primary font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                      >
                        <span>View Full Profile</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              }

              /* Compact Open State Card */
              return (
                <div
                  key={state.code}
                  className="bg-brand-offwhite rounded-[28px] border-2 border-dashed border-brand-forest/15 p-5 flex flex-col justify-between hover:border-brand-primary transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-brand-forest text-[11px] font-bold shadow-xs border border-brand-forest/10">
                        <MapPin className="w-3 h-3 text-brand-primary" />
                        {state.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-light text-brand-forest">
                        {state.zone}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-brand-forest mb-0.5">
                      {state.name}
                    </h4>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-2">
                      Position Open
                    </p>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      Represent university students and lead educational transformation across {state.name}.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919855109159?text=Hello%20Shiksha%20Sankalp,%20I%20would%20like%20to%20apply%20as%20the%20State%20Education%20Ambassador%20for%20${encodeURIComponent(state.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 px-3 rounded-xl bg-white hover:bg-brand-primary text-brand-forest hover:text-white border border-brand-forest/15 hover:border-brand-primary font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Apply for {state.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Existing CTA & Benefits Block */}
        <div id="apply-ambassador" className="bg-brand-primary text-white relative overflow-hidden rounded-3xl md:rounded-[60px] p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-3 sm:mb-5">
                  BECOME A STATE<br />
                  EDUCATION<br />
                  AMBASSADOR
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Represent your state, inspire students, and become a voice for educational transformation across India.
                </p>
              </div>
              
              <div className="inline-block bg-brand-forest px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 shadow-lg">
                <span className="font-bold text-brand-lime text-xs sm:text-base md:text-lg tracking-wider sm:tracking-widest">
                  28 STATES + 8 UNION TERRITORIES
                </span>
              </div>
              
              <div>
                <p className="text-xs sm:text-base md:text-lg font-medium text-white/80 mb-4 sm:mb-6">
                  Build leadership experience while advancing education access.
                </p>
                <a
                  href="https://wa.me/919855109159?text=Hello%20Shiksha%20Sankalp,%20I%20would%20like%20to%20apply%20as%20a%20State%20Education%20Ambassador."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-brand-light text-brand-forest px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 inline-flex items-center gap-2 sm:gap-3"
                >
                  <span>APPLY NOW &amp; REPRESENT YOUR STATE</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-[28px] p-5 sm:p-6 md:p-8 border border-white/20 shadow-2xl">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-5">Who can apply?</h4>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {whoCanApply.map((item, idx) => (
                    <div key={idx} className="bg-brand-forest/60 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full border border-white/10 text-xs md:text-sm font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl sm:rounded-[28px] p-5 sm:p-6 md:p-8 shadow-2xl text-text-dark">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-forest mb-3 sm:mb-5">Benefits</h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-text-secondary text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal for Selected Ambassador */}
      {selectedAmbassador && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedAmbassador(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-forest/10 relative p-5 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedAmbassador(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-brand-forest/5 hover:bg-brand-forest/10 text-text-secondary hover:text-text-dark transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 pb-5 sm:pb-6 border-b border-brand-forest/10">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-brand-primary/20 shadow-md">
                <Image
                  src={selectedAmbassador.image || "/ambassador-placeholder.svg"}
                  alt={selectedAmbassador.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand-forest text-[11px] sm:text-xs font-bold mb-1.5 sm:mb-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                  {selectedAmbassador.state} {selectedAmbassador.district ? `(${selectedAmbassador.district})` : ''}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-forest">
                  {selectedAmbassador.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-primary mt-0.5">
                  {selectedAmbassador.role}
                </p>
                {selectedAmbassador.designation && (
                  <p className="text-[11px] sm:text-xs font-semibold text-text-secondary mt-0.5">
                    {selectedAmbassador.designation}
                  </p>
                )}
              </div>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 pt-6">
              
              {/* Bio */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-forest mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  About &amp; Mission
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed bg-brand-offwhite p-4 rounded-2xl border border-brand-forest/5">
                  {selectedAmbassador.bioSummary}
                </p>
              </div>

              {/* Education */}
              {selectedAmbassador.education && selectedAmbassador.education.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-forest mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-primary" />
                    Academic Qualifications
                  </h4>
                  <div className="space-y-2.5">
                    {selectedAmbassador.education.map((edu, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-brand-light/50 border border-brand-forest/5 flex justify-between items-center text-sm">
                        <div>
                          <p className="font-bold text-brand-forest">{edu.degree}</p>
                          <p className="text-xs text-text-secondary">{edu.institution}</p>
                        </div>
                        {edu.year && (
                          <span className="text-xs font-bold px-2.5 py-1 bg-white rounded-full text-brand-forest shadow-xs shrink-0">
                            {edu.year}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements & Accolades */}
              {selectedAmbassador.achievements && selectedAmbassador.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-forest mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-primary" />
                    Certifications, Awards &amp; Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedAmbassador.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-brand-forest/10 flex justify-end">
              <button
                onClick={() => setSelectedAmbassador(null)}
                className="px-6 py-2.5 rounded-full bg-brand-forest text-white hover:bg-brand-primary font-bold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default AmbassadorSection;
