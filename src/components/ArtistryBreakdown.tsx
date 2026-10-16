import React from 'react';
import { Eye, Sparkles, ShieldCheck, Sun, Flame, Camera, HeartHandshake } from 'lucide-react';
import { ARTISTRY_STEPS, BRIDAL_SCREENS } from '../data/bridalData';

interface ArtistryBreakdownProps {
  onBookMakeoverTrial: () => void;
  onViewScreen: (screenId: string) => void;
}

export const ArtistryBreakdown: React.FC<ArtistryBreakdownProps> = ({
  onBookMakeoverTrial,
  onViewScreen,
}) => {
  const eyeScreen = BRIDAL_SCREENS[2];
  const hairScreen = BRIDAL_SCREENS[3];

  return (
    <section id="artistry-section" className="py-14 lg:py-20 bg-[#F5EFEB] border-b border-[#E0D5C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8C6D53] font-medium">
            <span>Behind The Veil</span>
            <span aria-hidden="true" className="text-[#C59B4B]">·</span>
            <span>Master Makeover &amp; Coiffure Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221915]">
            The 8K Bridal Artistry Protocol
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A51] font-light">
            Crafted for tear-resistant longevity, candlelit warmth, and camera-grade micro-precision. Every pigment layer is calibrated to illuminate under the sacred sacred fire without melting or flashback.
          </p>
        </div>

        {/* 2-Column Split: Visual Macro Spotlights & Step Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Dual Visual Showcase (Screens 3 & 4) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eye Macro Card */}
            <div className="bg-white border border-[#E0D5C7] rounded-sm overflow-hidden p-3 shadow-md group">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[#241E1A]">
                <img
                  src={eyeScreen.image}
                  alt={eyeScreen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#E0C087]">
                    Screen 03 Focus
                  </span>
                  <h4 className="font-serif text-xl font-normal text-white">
                    Nazaakat Micro-Cut-Crease
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                    Champagne shimmer foil, winged flick &amp; gilded brow pearls.
                  </p>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] text-[#7A6A61]">Macro beauty study</span>
                <button
                  onClick={() => onViewScreen('eye-glam-closeup')}
                  className="text-xs text-[#8C2B36] font-semibold hover:underline cursor-pointer"
                >
                  Examine Screen 03 &rarr;
                </button>
              </div>
            </div>

            {/* Hair Bun Profile Card */}
            <div className="bg-white border border-[#E0D5C7] rounded-sm overflow-hidden p-3 shadow-md group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#241E1A]">
                <img
                  src={hairScreen.image}
                  alt={hairScreen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#E0C087]">
                    Screen 04 Focus
                  </span>
                  <h4 className="font-serif text-xl font-normal text-white">
                    Gulaab Kesari Floral Chignon
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                    Fresh spray roses, baby’s breath &amp; balanced dupatta weight distribution.
                  </p>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] text-[#7A6A61]">Haute coiffure study</span>
                <button
                  onClick={() => onViewScreen('floral-bun-profile')}
                  className="text-xs text-[#8C2B36] font-semibold hover:underline cursor-pointer"
                >
                  Examine Screen 04 &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Right: Step-by-Step Protocol List & Technical Safeguards */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#221915] font-normal">
                The Six-Phase Bridal Transformation
              </h3>
              
              <div className="space-y-3">
                {ARTISTRY_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 bg-white border border-[#E0D5C7] rounded-sm flex items-start gap-4 transition-all hover:border-[#8C2B36]"
                  >
                    <span className="font-serif text-2xl text-[#C59B4B] font-medium tabular-nums shrink-0 mt-0.5">
                      {step.step}
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-[#221915]">{step.title}</h4>
                        <span className="text-[11px] font-mono text-[#8C7A70]">{step.duration}</span>
                      </div>
                      <p className="text-xs text-[#6B5A51] leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tri-Lighting Calibration Suite */}
            <div className="p-6 bg-[#FAF7F3] border border-[#DDD0C2] rounded-sm space-y-4">
              <h4 className="font-serif text-lg text-[#221915] font-medium flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#C59B4B]" />
                <span>Ceremonial Light Balancing Guarantee</span>
              </h4>
              <p className="text-xs text-[#6B5A51] leading-relaxed">
                Every Noor &amp; Zari bridal trial is verified under our specialized multi-spectrum studio mirrors to guarantee zero discoloration across all ceremonial moments:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white rounded-sm border border-[#E4D8CB]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#221915]">
                    <Flame className="w-3.5 h-3.5 text-[#C59B4B]" />
                    <span>3000K Mandap Fire</span>
                  </div>
                  <p className="text-[11px] text-[#7A6A61] mt-1">
                    Warm golden candle &amp; firelight tested to prevent ashen undertones.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-sm border border-[#E4D8CB]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#221915]">
                    <Sun className="w-3.5 h-3.5 text-[#C59B4B]" />
                    <span>5500K Day Anand</span>
                  </div>
                  <p className="text-[11px] text-[#7A6A61] mt-1">
                    Crisp natural morning light tested for seamless skin blend.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-sm border border-[#E4D8CB]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#221915]">
                    <Camera className="w-3.5 h-3.5 text-[#C59B4B]" />
                    <span>Cinematic 8K Flash</span>
                  </div>
                  <p className="text-[11px] text-[#7A6A61] mt-1">
                    Silica-free loose powders guaranteeing 100% zero camera flashback.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#6B5A51]">
                  Includes complimentary touch-up concierge through the reception.
                </span>
                <button
                  onClick={onBookMakeoverTrial}
                  className="px-5 py-2.5 bg-[#8C2B36] hover:bg-[#73232C] text-white text-xs uppercase tracking-[0.14em] font-medium rounded-sm transition-colors cursor-pointer"
                >
                  Reserve Makeover Trial
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
