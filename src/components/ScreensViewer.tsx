import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Maximize2, 
  Sparkles, 
  Code2, 
  Layers, 
  Eye, 
  Scissors, 
  Gem, 
  ChevronRight,
  Info,
  Download,
  Share2
} from 'lucide-react';
import { BRIDAL_SCREENS, BridalScreen, Hotspot } from '../data/bridalData';

interface ScreensViewerProps {
  selectedScreenId: string;
  onSelectScreen: (id: string) => void;
  onCustomizeLook: (screen: BridalScreen) => void;
  onBookTrial: (lookTitle: string) => void;
  onOpenZoom: (imageUrl: string, title: string) => void;
}

export const ScreensViewer: React.FC<ScreensViewerProps> = ({
  selectedScreenId,
  onSelectScreen,
  onCustomizeLook,
  onBookTrial,
  onOpenZoom,
}) => {
  const [showHotspots, setShowHotspots] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [embedMode, setEmbedMode] = useState<'html' | 'css' | 'markdown'>('html');
  const [copied, setCopied] = useState(false);

  const activeScreen = BRIDAL_SCREENS.find((s) => s.id === selectedScreenId) || BRIDAL_SCREENS[0];

  const getEmbedCode = () => {
    switch (embedMode) {
      case 'html':
        return `<img src="${window.location.origin}${activeScreen.image}" alt="${activeScreen.title}" class="noor-bridal-screen" loading="lazy" />`;
      case 'css':
        return `.bridal-look-${activeScreen.id} {\n  background-image: url('${window.location.origin}${activeScreen.image}');\n  background-size: cover;\n  background-position: center;\n}`;
      case 'markdown':
        return `![${activeScreen.title}](${window.location.origin}${activeScreen.image})`;
    }
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(getEmbedCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="screens-section" className="py-14 lg:py-20 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6DCD2]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#8C6D53] font-medium">
              <span>High-Definition Bridal Screens</span>
              <span aria-hidden="true" className="text-[#C59B4B]">·</span>
              <span>Lookbook &amp; Interactive Hotspots</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221915]">
              The Six Bridal Visions
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A51] max-w-2xl font-light">
              Detailed screens recreating the bespoke silhouettes, micro-artistry eye craftsmanship, floral hairstyles, and royal heirloom jewelry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm border transition-all cursor-pointer ${
                showHotspots
                  ? 'bg-[#8C2B36] text-white border-[#8C2B36]'
                  : 'bg-white text-[#574941] border-[#D8CCC0] hover:border-[#8C2B36]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{showHotspots ? 'Hotspots Active' : 'Show Hotspots'}</span>
            </button>
          </div>
        </div>

        {/* Screen Selector Tabs Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {BRIDAL_SCREENS.map((screen) => {
            const isSelected = screen.id === activeScreen.id;
            return (
              <button
                key={screen.id}
                onClick={() => {
                  onSelectScreen(screen.id);
                  setActiveHotspot(null);
                }}
                className={`flex flex-col text-left p-3 rounded-sm border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F2ECE5] border-[#8C2B36] shadow-sm'
                    : 'bg-white/70 border-[#E8DEC8] hover:border-[#BFAFA3]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5 font-medium">
                  <span className={`font-mono ${isSelected ? 'text-[#8C2B36] font-bold' : 'text-[#8C7A70]'}`}>
                    {screen.screenNumber}
                  </span>
                  <span className="text-[10px] text-[#A69488] truncate max-w-[80px]">
                    {screen.category.split(' ')[0]}
                  </span>
                </div>
                <div className="aspect-[4/3] w-full rounded-sm overflow-hidden mb-2 bg-[#EADFD4]">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif text-sm font-medium text-[#261E1A] leading-snug line-clamp-1">
                  {screen.title.split('—')[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Screen Main Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Visual Screen with Interactive Hotspots & Overlay Controls */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative bg-[#201815] rounded-md overflow-hidden shadow-2xl border border-[#DDD0C2] group">
              
              {/* Image Canvas */}
              <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] max-h-[720px] bg-[#1A120F]">
                <img
                  src={activeScreen.image}
                  alt={activeScreen.title}
                  className="w-full h-auto max-h-[720px] object-contain transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hotspot Markers */}
                {showHotspots &&
                  activeScreen.hotspots.map((hs) => {
                    const isActive = activeHotspot?.id === hs.id;
                    return (
                      <button
                        key={hs.id}
                        onClick={() => setActiveHotspot(isActive ? null : hs)}
                        style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-20 cursor-pointer ${
                          isActive
                            ? 'bg-[#C59B4B] text-black scale-125 ring-4 ring-white/60 shadow-lg'
                            : 'bg-[#241E1A]/85 text-[#F5EBE6] border border-[#C59B4B] hover:scale-110 hover:bg-[#8C2B36]'
                        }`}
                        title={hs.title}
                        aria-label={hs.title}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping opacity-30 absolute" />
                        <span className="text-[10px] font-bold font-mono">+</span>
                      </button>
                    );
                  })}

                {/* Bottom Gradient Scrim for subtle title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E0C087] mb-1">
                    <span>{activeScreen.screenNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeScreen.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-white">
                    {activeScreen.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 max-w-xl font-light">
                    {activeScreen.tagline}
                  </p>
                </div>

                {/* Top Right Tool Bar (Zoom & Download) */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    onClick={() => onOpenZoom(activeScreen.image, activeScreen.title)}
                    className="p-2.5 rounded-sm bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-colors cursor-pointer"
                    title="Fullscreen Zoom"
                    aria-label="Inspect Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hotspot Drawer / Card (when a hotspot is selected) */}
            {activeHotspot && (
              <div className="p-5 rounded-md bg-[#F2ECE5] border border-[#C59B4B]/50 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#8C2B36] font-semibold mb-1">
                      <span>{activeHotspot.category} Detail</span>
                      <span aria-hidden="true">·</span>
                      <span>Artisan Feature</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#221915] font-medium">
                      {activeHotspot.title}
                    </h4>
                    <p className="text-xs text-[#5D4F46] mt-1 leading-relaxed">
                      {activeHotspot.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-xs text-[#8C7A70] hover:text-[#221915] underline cursor-pointer shrink-0"
                  >
                    Close
                  </button>
                </div>

                {/* Hotspot detail badges */}
                <div className="mt-3 flex flex-wrap gap-2 pt-3 border-t border-[#DECFC0]">
                  {activeHotspot.detailSpecs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-[#42342D] bg-[#EAE2D7] px-2.5 py-1 rounded-sm border border-[#D5C6B7]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Hotlink & Embed Box (Fulfilling the user prompt: "You can hotlink images from the html") */}
            <div className="p-5 bg-white border border-[#E0D5C7] rounded-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#6B5A51] font-medium">
                  <Code2 className="w-4 h-4 text-[#8C2B36]" />
                  <span>Direct Image Hotlink &amp; HTML Embed</span>
                </div>
                
                {/* Embed Mode Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-[#FAF7F3] border border-[#E6DCD2] rounded-sm text-[11px]">
                  <button
                    onClick={() => setEmbedMode('html')}
                    className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                      embedMode === 'html' ? 'bg-[#261E1A] text-white font-medium' : 'text-[#6E5D53]'
                    }`}
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => setEmbedMode('css')}
                    className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                      embedMode === 'css' ? 'bg-[#261E1A] text-white font-medium' : 'text-[#6E5D53]'
                    }`}
                  >
                    CSS
                  </button>
                  <button
                    onClick={() => setEmbedMode('markdown')}
                    className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                      embedMode === 'markdown' ? 'bg-[#261E1A] text-white font-medium' : 'text-[#6E5D53]'
                    }`}
                  >
                    Markdown
                  </button>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="relative">
                <pre className="p-3 bg-[#1C1513] text-[#F3EBE3] rounded-sm text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all border border-[#3A2D27]">
                  {getEmbedCode()}
                </pre>
                <button
                  onClick={handleCopyEmbed}
                  className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#C59B4B] hover:bg-[#B08638] text-black text-[11px] font-sans font-semibold rounded-sm transition-all shadow-sm cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#8C7A70] font-light">
                Directly copy this snippet into any web page, editorial article, or lookbook markup to embed this high-resolution screen.
              </p>
            </div>
          </div>

          {/* Right Column: Screen Specifications & Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Description Card */}
            <div className="p-6 bg-white border border-[#E0D5C7] rounded-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#8C2B36] font-semibold">
                  {activeScreen.screenNumber} Specification
                </span>
                <span className="text-xs text-[#7A6A61]">
                  {activeScreen.aspect} Frame
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#221915] font-normal leading-tight">
                {activeScreen.title}
              </h3>
              
              <p className="text-sm text-[#5C4D44] leading-relaxed font-light">
                {activeScreen.description}
              </p>

              {/* Color Swatches */}
              <div className="pt-2">
                <span className="text-xs text-[#827167] uppercase tracking-wider block mb-2 font-medium">
                  Curated Ensemble Palette
                </span>
                <div className="flex items-center gap-2">
                  {activeScreen.palettes.map((hex, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-[#FAF7F3] border border-[#E6DCD2] p-1 rounded-sm pr-2">
                      <div
                        className="w-4 h-4 rounded-sm border border-black/10"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="font-mono text-[10px] text-[#55463E] uppercase">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-[#EAE0D4]">
                <button
                  onClick={() => onBookTrial(activeScreen.title)}
                  className="flex-1 py-3 px-4 bg-[#8C2B36] hover:bg-[#73232C] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-sm text-center transition-colors cursor-pointer"
                >
                  Book Trial for this Look
                </button>
                <button
                  onClick={() => onCustomizeLook(activeScreen)}
                  className="py-3 px-4 bg-transparent border border-[#33251E] text-[#33251E] hover:bg-[#33251E] hover:text-white text-xs uppercase tracking-[0.15em] font-medium rounded-sm text-center transition-all cursor-pointer"
                >
                  Customize in Builder
                </button>
              </div>
            </div>

            {/* Artisan Specs Table */}
            <div className="p-6 bg-[#F5EFEB] border border-[#DDD0C2] rounded-md space-y-3">
              <h4 className="font-serif text-lg text-[#221915] font-medium flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#8C2B36]" />
                <span>Couture &amp; Atelier Specifications</span>
              </h4>

              <dl className="divide-y divide-[#E4D8CB] text-xs">
                {activeScreen.specs.map((spec, i) => (
                  <div key={i} className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#7A6A61] font-medium">{spec.label}</dt>
                    <dd className="text-[#261E1A] font-semibold text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Makeup & Coiffure Artistry Protocol */}
            <div className="p-6 bg-white border border-[#E0D5C7] rounded-md space-y-4">
              <h4 className="font-serif text-lg text-[#221915] font-medium flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#8C2B36]" />
                <span>Makeover Formulation Protocol</span>
              </h4>

              <div className="space-y-3 text-xs text-[#52443C]">
                <div>
                  <span className="font-semibold text-[#241E1A] block">Skin Base:</span>
                  <p className="mt-0.5 text-[#6B5A51]">{activeScreen.makeupBreakdown.skin}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#241E1A] block">Eye Architecture:</span>
                  <p className="mt-0.5 text-[#6B5A51]">{activeScreen.makeupBreakdown.eyes}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#241E1A] block">Lips &amp; Contour:</span>
                  <p className="mt-0.5 text-[#6B5A51]">{activeScreen.makeupBreakdown.lips}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#241E1A] block">Brow Sculpting:</span>
                  <p className="mt-0.5 text-[#6B5A51]">{activeScreen.makeupBreakdown.brows}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
