import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { ATELIER_LOCATIONS, BRIDAL_SCREENS } from '../data/bridalData';

interface AteliersSectionProps {
  onBookAtelier: (locationName: string) => void;
}

export const AteliersSection: React.FC<AteliersSectionProps> = ({ onBookAtelier }) => {
  const atelierScreen = BRIDAL_SCREENS[5]; // Screen 6

  return (
    <section id="ateliers-section" className="py-14 lg:py-20 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8C6D53] font-medium">
            <span>Global Presence</span>
            <span aria-hidden="true" className="text-[#C59B4B]">·</span>
            <span>Private Salons &amp; Heritage Fitting Suites</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221915]">
            Our Atelier Sanctuaries
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A51] font-light">
            Private VIP fitting lounges offering daylight simulation mirrors, fabric libraries, and one-on-one appointments with our master couturiers and beauty directors.
          </p>
        </div>

        {/* Featured Atelier Studio Visual */}
        <div className="mb-12 relative rounded-md overflow-hidden border border-[#DDD0C2] bg-[#201815] shadow-xl group">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={atelierScreen.image}
              alt={atelierScreen.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E0C087]">
              Screen 06 Focus · Flagship Design Sanctuary
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1">
              {atelierScreen.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mt-1 font-light">
              {atelierScreen.tagline}
            </p>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATELIER_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="p-6 bg-white border border-[#E0D5C7] rounded-sm flex flex-col justify-between space-y-5 hover:border-[#8C2B36] transition-colors shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-medium text-[#221915]">
                    {loc.city}
                  </h4>
                  <span className="text-[11px] font-mono text-[#8C7A70] font-semibold">
                    {loc.country}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#6B5A51]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8C2B36] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#8C2B36] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#8C2B36] shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onBookAtelier(loc.city)}
                className="w-full py-2.5 bg-[#FAF7F3] border border-[#DDD0C2] hover:bg-[#8C2B36] hover:text-white hover:border-[#8C2B36] text-[#33251E] text-xs uppercase tracking-[0.12em] font-medium rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Salon Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          {/* Destination Wedding Troussier Service Card */}
          <div className="p-6 bg-[#261E1A] text-white rounded-sm flex flex-col justify-between space-y-5 border border-[#3D2F28] shadow-md">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E0C087]">
                Worldwide Concierge
              </span>
              <h4 className="font-serif text-xl font-normal text-white">
                Destination On-Location Troussier
              </h4>
              <p className="text-xs text-[#D8CCC0] leading-relaxed font-light">
                Flying master hair, makeup, draping, and jewelry teams directly to your palace or villa wedding in Lake Como, Udaipur, Bali, or Saint-Tropez.
              </p>
            </div>

            <button
              onClick={() => onBookAtelier('Destination On-Location')}
              className="w-full py-2.5 bg-[#8C2B36] hover:bg-[#A33340] text-white text-xs uppercase tracking-[0.12em] font-medium rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Inquire Destination Troussier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
