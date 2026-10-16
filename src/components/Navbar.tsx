import React from 'react';
import { ShoppingBag, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenCart,
  cartCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F3]/90 backdrop-blur-md border-b border-[#E8DEC8]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single Text Element in Display Serif) */}
          <button
            onClick={() => setActiveTab('screens')}
            className="flex flex-col items-start text-left focus:outline-none group cursor-pointer"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.2em] text-[#2C221E] uppercase transition-colors group-hover:text-[#8C2B36]">
              NOOR &amp; ZARI
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-[#8A7970] font-medium -mt-0.5">
              Haute Bridal Atelier
            </span>
          </button>

          {/* Zone 2: 4–5 Single-Line Concise Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.16em] uppercase font-medium text-[#574941]">
            <button
              onClick={() => setActiveTab('screens')}
              className={`hover:text-[#8C2B36] transition-colors whitespace-nowrap shrink-0 py-1 border-b transition-all ${
                activeTab === 'screens'
                  ? 'text-[#8C2B36] border-[#8C2B36] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Bridal Screens
            </button>
            <button
              onClick={() => setActiveTab('builder')}
              className={`hover:text-[#8C2B36] transition-colors whitespace-nowrap shrink-0 py-1 border-b transition-all ${
                activeTab === 'builder'
                  ? 'text-[#8C2B36] border-[#8C2B36] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Look Builder
            </button>
            <button
              onClick={() => setActiveTab('collection')}
              className={`hover:text-[#8C2B36] transition-colors whitespace-nowrap shrink-0 py-1 border-b transition-all ${
                activeTab === 'collection'
                  ? 'text-[#8C2B36] border-[#8C2B36] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Couture &amp; Jewels
            </button>
            <button
              onClick={() => setActiveTab('artistry')}
              className={`hover:text-[#8C2B36] transition-colors whitespace-nowrap shrink-0 py-1 border-b transition-all ${
                activeTab === 'artistry'
                  ? 'text-[#8C2B36] border-[#8C2B36] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Master Artistry
            </button>
            <button
              onClick={() => setActiveTab('ateliers')}
              className={`hover:text-[#8C2B36] transition-colors whitespace-nowrap shrink-0 py-1 border-b transition-all ${
                activeTab === 'ateliers'
                  ? 'text-[#8C2B36] border-[#8C2B36] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Sanctuaries
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action + Trousseau Cart Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-[#3A2E28] hover:text-[#8C2B36] rounded-md transition-colors"
              title="View Trousseau Bag"
              aria-label="Trousseau Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8C2B36] text-white text-[10px] font-mono flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium text-white bg-[#261E1A] hover:bg-[#8C2B36] rounded-sm transition-all duration-300 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-4 border-t border-[#EBE3D8] text-[11px] uppercase tracking-wider text-[#6B5A51] no-scrollbar">
          <button
            onClick={() => setActiveTab('screens')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'screens' ? 'text-[#8C2B36] font-bold border-b border-[#8C2B36]' : ''}`}
          >
            Screens
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'builder' ? 'text-[#8C2B36] font-bold border-b border-[#8C2B36]' : ''}`}
          >
            Look Builder
          </button>
          <button
            onClick={() => setActiveTab('collection')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'collection' ? 'text-[#8C2B36] font-bold border-b border-[#8C2B36]' : ''}`}
          >
            Couture
          </button>
          <button
            onClick={() => setActiveTab('artistry')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'artistry' ? 'text-[#8C2B36] font-bold border-b border-[#8C2B36]' : ''}`}
          >
            Artistry
          </button>
          <button
            onClick={() => setActiveTab('ateliers')}
            className={`whitespace-nowrap px-1 py-0.5 ${activeTab === 'ateliers' ? 'text-[#8C2B36] font-bold border-b border-[#8C2B36]' : ''}`}
          >
            Sanctuaries
          </button>
        </div>
      </div>
    </header>
  );
};
