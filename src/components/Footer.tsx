import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  return (
    <footer className="bg-[#1C1513] text-[#FAF7F3] border-t border-[#332520] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#332520]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-white font-medium">
              NOOR &amp; ZARI
            </h3>
            <p className="text-xs tracking-[0.25em] font-sans uppercase text-[#C59B4B] font-medium">
              Haute Bridal Atelier &amp; Fine Jewelry Sanctuary
            </p>
            <p className="text-xs text-[#A8988E] max-w-sm leading-relaxed font-light">
              Preserving ancient imperial Indian zardozi embroidery, certified syndicate polki jewelry settings, and cinema-grade bridal beauty masterclasses since 1994.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#8C2B36] hover:bg-[#A33340] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E0D5C7]">
              Atelier Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#A8988E]">
              <li>
                <button
                  onClick={() => onSelectTab('screens')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bridal Screens
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('builder')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Look Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('collection')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Couture Ensembles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('collection')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Heirloom Polki Vault
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('artistry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Artistry Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Sanctuaries Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E0D5C7]">
              Flagship Sanctuaries
            </h4>
            <div className="space-y-2.5 text-xs text-[#A8988E]">
              <div>
                <span className="text-white font-medium block">New Delhi</span>
                <span className="text-[11px]">The Claridges Enclave, APJ Abdul Kalam Rd</span>
              </div>
              <div>
                <span className="text-white font-medium block">Mumbai</span>
                <span className="text-[11px]">Kala Ghoda Heritage Arts Precinct</span>
              </div>
              <div>
                <span className="text-white font-medium block">London</span>
                <span className="text-[11px]">18 Old Bond Street, Mayfair</span>
              </div>
              <div>
                <span className="text-white font-medium block">Dubai</span>
                <span className="text-[11px]">Fashion Avenue VIP Suite, The Dubai Mall</span>
              </div>
            </div>
          </div>

          {/* Heritage Assurance */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E0D5C7]">
              Guarantees
            </h4>
            <ul className="space-y-1.5 text-[11px] text-[#A8988E]">
              <li>100% Handloom Raw Silk</li>
              <li>IGI Certified Uncut Polki</li>
              <li>24K Pure Gold Wire Tilla</li>
              <li>18-Hour Tear-Proof Beauty</li>
              <li>Insured Worldwide Courier</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright and Unboxed Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6A61]">
          <p>© 2026 Noor &amp; Zari Haute Bridal Atelier. All Rights Reserved.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Made-to-Measure Terms</span>
            <span aria-hidden="true">·</span>
            <span>Bridal Concierge Services</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
