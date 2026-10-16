import React from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { BRIDAL_SCREENS } from '../data/bridalData';

interface HeroProps {
  onSelectScreen: (screenId: string) => void;
  onExploreBuilder: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectScreen,
  onExploreBuilder,
  onOpenBooking,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E6DCD2]">
      {/* Subtle background ambient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EEE6]/80 via-[#FAF7F3] to-[#FAF7F3] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow / Kicker (No pills) */}
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8C6D53] font-medium mb-4">
          <span>Haute Bridal Atelier</span>
          <span aria-hidden="true" className="text-[#C59B4B]">·</span>
          <span>Couture &amp; Makeover Sanctuary</span>
          <span aria-hidden="true" className="text-[#C59B4B]">·</span>
          <span>Est. 1994</span>
        </div>

        {/* Hero Title & Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#221915] leading-[1.12]">
              Timeless Bridal Majesty, <br />
              <span className="italic font-light text-[#8C2B36]">Sculpted by Hand &amp; Light.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#615148] leading-relaxed max-w-2xl font-light">
              Explore bespoke royal Indian bridal looks—from hand-spun blush silk zardozi and imperial Rajasthani velvets, to 8K tear-resistant eye artistry, fresh floral hair architecture, and heirloom polki gems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectScreen('blush-elegance')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#261E1A] text-white text-xs uppercase tracking-[0.18em] font-medium rounded-sm hover:bg-[#8C2B36] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>View Bridal Screens</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreBuilder}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#BFAFA3] text-[#33251E] text-xs uppercase tracking-[0.18em] font-medium rounded-sm hover:border-[#8C2B36] hover:text-[#8C2B36] transition-all duration-300 cursor-pointer"
              >
                <span>Interactive Look Builder</span>
              </button>
            </div>

            {/* Proof row with quantitative precision */}
            <div className="pt-6 border-t border-[#E8DEC8]/80 grid grid-cols-3 gap-6 max-w-xl text-left">
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#281D18] tabular-nums font-medium">780 hrs</p>
                <p className="text-xs text-[#7A6A61] tracking-wide mt-0.5">Hand zardozi mastery</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#281D18] tabular-nums font-medium">18-Hour</p>
                <p className="text-xs text-[#7A6A61] tracking-wide mt-0.5">Tear-proof beauty seal</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#281D18] tabular-nums font-medium">22K / IGI</p>
                <p className="text-xs text-[#7A6A61] tracking-wide mt-0.5">Certified polki vault</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Spotlight Preview (Clickable Screen Previews) */}
          <div className="lg:col-span-5">
            <div className="relative p-2 bg-[#F2ECE5] border border-[#DDD0C2] rounded-md shadow-xl group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#E8DEC8]">
                <img
                  src={BRIDAL_SCREENS[0].image}
                  alt={BRIDAL_SCREENS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[#E0C087] font-semibold">
                    Signature Screen 01
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight text-white mt-1">
                    Gulabi Noor — The Rose Gold Empress
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-1">
                    Blush zardozi lehenga, Basra pearl collar, and soft champagne dewy beauty.
                  </p>
                </div>
              </div>

              {/* Quick Screen Pill-free Selector Strip */}
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {BRIDAL_SCREENS.slice(0, 4).map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => onSelectScreen(screen.id)}
                    className="relative aspect-square rounded-sm overflow-hidden border border-[#D5C6B7] hover:border-[#8C2B36] transition-all cursor-pointer group/btn"
                    title={`Go to ${screen.title}`}
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover group-hover/btn:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover/btn:bg-transparent transition-colors flex items-end p-1">
                      <span className="text-[9px] font-mono text-white/90 drop-shadow-sm font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
