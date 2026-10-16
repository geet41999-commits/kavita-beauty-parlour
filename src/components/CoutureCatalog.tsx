import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles, X, Scissors, Clock } from 'lucide-react';
import { COUTURE_COLLECTION, CoutureProduct } from '../data/bridalData';

interface CoutureCatalogProps {
  onAddToCart: (product: CoutureProduct) => void;
  onOpenBooking: () => void;
}

export const CoutureCatalog: React.FC<CoutureCatalogProps> = ({
  onAddToCart,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<'All' | 'Lehenga' | 'Jewelry' | 'Bridal Package'>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<CoutureProduct | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts =
    filter === 'All'
      ? COUTURE_COLLECTION
      : COUTURE_COLLECTION.filter((p) => p.category === filter);

  const handleAdd = (product: CoutureProduct) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section id="collection-section" className="py-14 lg:py-20 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6DCD2]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#8C6D53] font-medium">
              <span>The Atelier Vault</span>
              <span aria-hidden="true" className="text-[#C59B4B]">·</span>
              <span>Made-to-Measure &amp; Heirloom Jewels</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221915]">
              Couture Ensembles &amp; Packages
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A51] max-w-xl font-light">
              Mastercrafted bridal lehengas, certified uncut polki diamond suites, and VIP bridal makeover sessions.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1 p-1 bg-[#EFE7DE] rounded-sm border border-[#D5C6B7] overflow-x-auto no-scrollbar">
            {(['All', 'Lehenga', 'Jewelry', 'Bridal Package'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? 'bg-[#261E1A] text-white shadow-sm'
                    : 'text-[#615147] hover:text-[#261E1A]'
                }`}
              >
                {cat === 'Bridal Package' ? 'Makeover Packages' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid (3-column desktop, 2-column tablet) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                className="group bg-white border border-[#E0D5C7] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#8C2B36]/50"
              >
                {/* Visual Image */}
                <div className="relative aspect-[4/3] bg-[#EAE2D7] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="px-3 py-1.5 bg-white text-[#241E1A] hover:bg-[#8C2B36] hover:text-white text-[11px] font-medium uppercase tracking-wider rounded-sm shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Examine Details</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8C7A70] font-medium">
                      <span>{product.collection}</span>
                      <span className="font-mono text-[10px] text-[#A34B54] font-semibold">{product.leadTime}</span>
                    </div>

                    <h3 className="font-serif text-lg text-[#221915] font-medium leading-snug line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#6E5D53] line-clamp-2 font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add to Trousseau CTA */}
                  <div className="pt-3 border-t border-[#EAE0D4] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-[#8C7A70] block uppercase tracking-wide">Investment</span>
                      <span className="font-serif text-xl font-semibold text-[#241E1A] tabular-nums">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-[#2E6B47] text-white'
                          : 'bg-[#261E1A] text-white hover:bg-[#8C2B36]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Reserved</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Trousseau</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FAF7F3] rounded-md max-w-3xl w-full overflow-hidden shadow-2xl border border-[#DDD0C2] relative flex flex-col md:flex-row max-h-[90vh]">
            
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Image */}
            <div className="md:w-1/2 bg-[#201815] relative aspect-square md:aspect-auto">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Details */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C2B36] font-semibold">
                  <span>{quickViewProduct.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{quickViewProduct.collection}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#221915] font-normal">
                  {quickViewProduct.name}
                </h3>

                <p className="font-serif text-2xl font-semibold text-[#8C2B36] tabular-nums">
                  ${quickViewProduct.price.toLocaleString()}
                </p>

                <p className="text-xs text-[#5C4D44] leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* What's Included */}
                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3D312A] mb-2 flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-[#8C2B36]" />
                    <span>Inclusions &amp; Specifications</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#6B5A51]">
                    {quickViewProduct.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C59B4B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E6DCD2] space-y-2">
                <button
                  onClick={() => {
                    handleAdd(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-3 bg-[#261E1A] hover:bg-[#8C2B36] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-colors cursor-pointer"
                >
                  Add to Trousseau Bag
                </button>
                <button
                  onClick={() => {
                    setQuickViewProduct(null);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 bg-transparent border border-[#99877B] text-[#33251E] hover:bg-[#FAF0E6] text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-colors cursor-pointer"
                >
                  Schedule Private Viewing
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
