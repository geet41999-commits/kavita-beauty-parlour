import React, { useState } from 'react';
import { Sparkles, Calendar, Check, Download, Bookmark, Palette, Scissors, Eye, Crown } from 'lucide-react';
import { BridalScreen } from '../data/bridalData';

interface LookBuilderProps {
  initialScreen?: BridalScreen | null;
  onBookTrialWithCustomLook: (summary: string) => void;
}

const CEREMONIES = [
  { id: 'vows', title: 'Pheras & Wedding Vows', desc: 'Auspicious sacred rituals and mandap walk' },
  { id: 'anand', title: 'Day Anand Karaj / Vows', desc: 'Sunlit morning palace ceremonies and pastels' },
  { id: 'sangeet', title: 'Sangeet & Cocktail Night', desc: 'Celebratory dance night with glamorous shimmer' },
  { id: 'reception', title: 'Grand Royal Reception', desc: 'Imperial velvet, black-tie elegance and high drama' },
];

const COLOR_THEMES = [
  { id: 'blush', name: 'Blush Rose & Antique Dabka', hex: '#E8B4B8', time: '10-12 wks' },
  { id: 'crimson', name: 'Imperial Crimson & Gold Velvet', hex: '#6B1724', time: '14-16 wks' },
  { id: 'champagne', name: 'Champagne Silk & Muted Zari', hex: '#D8C39E', time: '8-10 wks' },
  { id: 'emerald', name: 'Deep Emerald & Marodi Embroidery', hex: '#1C4A3A', time: '12-14 wks' },
];

const BEAUTY_STYLES = [
  { id: 'cut-crease', name: 'Champagne Foil Cut-Crease', desc: 'Precision eye geometry with 24K brow micro-pearls', longevity: '18h Seal' },
  { id: 'royal-kohl', name: 'Smoky Almond Kohl & Royal Matte', desc: 'Deep smudged lash lines, terracotta lips and velvet porcelain skin', longevity: '20h Seal' },
  { id: 'dewy-soft', name: 'Luminous Dewy Glass-Glow', desc: 'Candlelit radiance, flushed rosewood cheeks and satin lips', longevity: '16h Seal' },
];

const HAIR_STYLES = [
  { id: 'rose-bun', name: 'Architectural Rose & Jasmine Chignon', desc: 'Hand-wired fresh spray roses with double dupatta anchor' },
  { id: 'parandi-braid', name: 'Cascading Royal Parandi Braid', desc: 'Intertwined golden gota threads and fresh mogra buds' },
  { id: 'open-waves', name: 'Soft Hollywood Waves with Matha Patti', desc: 'Voluminous textured waves framing the forehead jewelry' },
];

const JEWELRY_SETS = [
  { id: 'polki-choker', name: 'Nizam-e-Kundan Polki & Basra Pearls', metal: '22K Gold', stones: 'Uncut Syndicate Polki' },
  { id: 'emerald-hasli', name: 'Imperial Emerald Drop Collar & Chandbalis', metal: '22K Gold', stones: 'Colombian Emeralds' },
  { id: 'temple-jadau', name: 'Antique Temple Jadau & Hand Hathphool', metal: '24K Beaten Gold', stones: 'Burmese Rubies & Polki' },
];

export const LookBuilder: React.FC<LookBuilderProps> = ({
  initialScreen,
  onBookTrialWithCustomLook,
}) => {
  const [ceremony, setCeremony] = useState(CEREMONIES[0].id);
  const [colorTheme, setColorTheme] = useState(
    initialScreen?.id === 'royal-crimson' ? 'crimson' : 'blush'
  );
  const [beautyStyle, setBeautyStyle] = useState('cut-crease');
  const [hairStyle, setHairStyle] = useState('rose-bun');
  const [jewelrySet, setJewelrySet] = useState('polki-choker');
  const [savedNotice, setSavedNotice] = useState(false);

  const selectedCeremony = CEREMONIES.find((c) => c.id === ceremony)!;
  const selectedTheme = COLOR_THEMES.find((c) => c.id === colorTheme)!;
  const selectedBeauty = BEAUTY_STYLES.find((b) => b.id === beautyStyle)!;
  const selectedHair = HAIR_STYLES.find((h) => h.id === hairStyle)!;
  const selectedJewelry = JEWELRY_SETS.find((j) => j.id === jewelrySet)!;

  const handleSaveBoard = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2400);
  };

  const lookSummaryString = `${selectedCeremony.title} — ${selectedTheme.name} with ${selectedBeauty.name} & ${selectedJewelry.name}`;

  return (
    <section id="builder-section" className="py-14 lg:py-20 bg-[#F5EFEB] border-b border-[#E0D5C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#8C6D53] font-medium">
            <span>Bespoke Styling Suite</span>
            <span aria-hidden="true" className="text-[#C59B4B]">·</span>
            <span>Virtual Bridal Look Builder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221915]">
            Sculpt Your Signature Walk
          </h2>
          <p className="text-sm sm:text-base text-[#68584F] font-light">
            Select your wedding ceremony, shade palette, eye artistry, floral hair architecture, and heirloom jewelry suite to generate your customized atelier dossier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Ceremony Type */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D312A]">
                <Calendar className="w-4 h-4 text-[#8C2B36]" />
                <span>1. Wedding Ceremony &amp; Occasion</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CEREMONIES.map((c) => {
                  const active = ceremony === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCeremony(c.id)}
                      className={`p-3.5 text-left rounded-sm border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#261E1A] text-white border-[#261E1A] shadow-md'
                          : 'bg-white text-[#4A3B33] border-[#DDD0C2] hover:border-[#8C2B36]'
                      }`}
                    >
                      <p className={`text-xs font-semibold ${active ? 'text-white' : 'text-[#261E1A]'}`}>
                        {c.title}
                      </p>
                      <p className={`text-[11px] mt-1 ${active ? 'text-[#D0C0B4]' : 'text-[#7A6A61]'}`}>
                        {c.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Color & Fabric Palette */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D312A]">
                <Palette className="w-4 h-4 text-[#8C2B36]" />
                <span>2. Couture Shade &amp; Zardozi Palette</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COLOR_THEMES.map((c) => {
                  const active = colorTheme === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setColorTheme(c.id)}
                      className={`p-3.5 flex items-center justify-between gap-3 text-left rounded-sm border transition-all cursor-pointer ${
                        active
                          ? 'bg-white border-[#8C2B36] ring-1 ring-[#8C2B36] shadow-sm'
                          : 'bg-white/80 border-[#DDD0C2] hover:border-[#8C2B36]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div>
                          <p className="text-xs font-medium text-[#221915]">{c.name}</p>
                          <p className="text-[10px] text-[#8C7A70]">Lead time: {c.time}</p>
                        </div>
                      </div>
                      {active && <Check className="w-4 h-4 text-[#8C2B36] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Beauty & Eye Artistry */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D312A]">
                <Eye className="w-4 h-4 text-[#8C2B36]" />
                <span>3. Makeover &amp; Eye Artistry Formulation</span>
              </label>
              <div className="space-y-2">
                {BEAUTY_STYLES.map((b) => {
                  const active = beautyStyle === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setBeautyStyle(b.id)}
                      className={`w-full p-3.5 flex items-start justify-between text-left rounded-sm border transition-all cursor-pointer ${
                        active
                          ? 'bg-white border-[#8C2B36] ring-1 ring-[#8C2B36] shadow-sm'
                          : 'bg-white/80 border-[#DDD0C2] hover:border-[#8C2B36]'
                      }`}
                    >
                      <div className="pr-4">
                        <p className="text-xs font-semibold text-[#221915]">{b.name}</p>
                        <p className="text-[11px] text-[#6E5D53] mt-0.5">{b.desc}</p>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-sm bg-[#EFE4D8] text-[#554339] shrink-0">
                        {b.longevity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Hair Architecture */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D312A]">
                <Scissors className="w-4 h-4 text-[#8C2B36]" />
                <span>4. Bridal Coiffure &amp; Floral Architecture</span>
              </label>
              <div className="space-y-2">
                {HAIR_STYLES.map((h) => {
                  const active = hairStyle === h.id;
                  return (
                    <button
                      key={h.id}
                      onClick={() => setHairStyle(h.id)}
                      className={`w-full p-3.5 text-left rounded-sm border transition-all cursor-pointer ${
                        active
                          ? 'bg-white border-[#8C2B36] ring-1 ring-[#8C2B36] shadow-sm'
                          : 'bg-white/80 border-[#DDD0C2] hover:border-[#8C2B36]'
                      }`}
                    >
                      <p className="text-xs font-semibold text-[#221915]">{h.name}</p>
                      <p className="text-[11px] text-[#6E5D53] mt-0.5">{h.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Heirloom Jewelry Suite */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D312A]">
                <Crown className="w-4 h-4 text-[#8C2B36]" />
                <span>5. Fine Heirloom Jewelry Setting</span>
              </label>
              <div className="space-y-2">
                {JEWELRY_SETS.map((j) => {
                  const active = jewelrySet === j.id;
                  return (
                    <button
                      key={j.id}
                      onClick={() => setJewelrySet(j.id)}
                      className={`w-full p-3.5 flex items-start justify-between text-left rounded-sm border transition-all cursor-pointer ${
                        active
                          ? 'bg-white border-[#8C2B36] ring-1 ring-[#8C2B36] shadow-sm'
                          : 'bg-white/80 border-[#DDD0C2] hover:border-[#8C2B36]'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-semibold text-[#221915]">{j.name}</p>
                        <p className="text-[11px] text-[#7A6A61] mt-0.5">
                          {j.metal} <span aria-hidden="true">·</span> {j.stones}
                        </p>
                      </div>
                      {active && <Check className="w-4 h-4 text-[#8C2B36] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Style Board Preview Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-7 bg-[#201815] text-[#FAF7F3] rounded-md shadow-2xl border border-[#3A2D27] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#3A2D27] pb-4">
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#C59B4B]">
                    Atelier Custom Dossier
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mt-0.5">
                    Your Bridal Blueprint
                  </h3>
                </div>
                <div
                  className="w-7 h-7 rounded-full border border-white/20 shadow-inner"
                  style={{ backgroundColor: selectedTheme.hex }}
                  title={selectedTheme.name}
                />
              </div>

              {/* Dossier Itemized Blueprint */}
              <div className="space-y-4 text-xs font-light divide-y divide-[#332520]">
                <div className="pt-2 flex justify-between gap-4">
                  <span className="text-[#A69488]">Occasion</span>
                  <span className="text-white font-medium text-right">{selectedCeremony.title}</span>
                </div>
                <div className="pt-3 flex justify-between gap-4">
                  <span className="text-[#A69488]">Couture Palette</span>
                  <span className="text-white font-medium text-right">{selectedTheme.name}</span>
                </div>
                <div className="pt-3 flex justify-between gap-4">
                  <span className="text-[#A69488]">Makeover Formulation</span>
                  <span className="text-white font-medium text-right">{selectedBeauty.name}</span>
                </div>
                <div className="pt-3 flex justify-between gap-4">
                  <span className="text-[#A69488]">Coiffure Architecture</span>
                  <span className="text-white font-medium text-right">{selectedHair.name}</span>
                </div>
                <div className="pt-3 flex justify-between gap-4">
                  <span className="text-[#A69488]">Heirloom Jewelry</span>
                  <span className="text-white font-medium text-right">{selectedJewelry.name}</span>
                </div>
                <div className="pt-3 flex justify-between gap-4">
                  <span className="text-[#A69488]">Artisan Handcraft Lead</span>
                  <span className="text-[#E0C087] font-mono font-medium text-right">{selectedTheme.time}</span>
                </div>
              </div>

              {/* Confirmation notification banner */}
              {savedNotice && (
                <div className="p-3 bg-[#C59B4B]/20 border border-[#C59B4B] text-[#E0C087] text-xs rounded-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59B4B]" />
                  <span>Bridal Lookboard pinned to your session portfolio!</span>
                </div>
              )}

              {/* Primary Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onBookTrialWithCustomLook(lookSummaryString)}
                  className="w-full py-3.5 px-4 bg-[#8C2B36] hover:bg-[#A33340] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors text-center shadow-md cursor-pointer"
                >
                  Book Trial for this Look
                </button>

                <button
                  onClick={handleSaveBoard}
                  className="w-full py-3 px-4 bg-transparent border border-[#523F36] hover:border-white text-white/90 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bookmark className="w-3.5 h-3.5 text-[#C59B4B]" />
                  <span>Pin Look to Portfolio</span>
                </button>
              </div>

              <p className="text-[10px] text-[#8C7A70] text-center font-light pt-2">
                Includes complimentary daylight trial simulation and personalized dupatta pinning roadmap.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
