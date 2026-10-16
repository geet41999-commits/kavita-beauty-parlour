import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Check, ShieldCheck, Ruler } from 'lucide-react';
import { CoutureProduct } from '../data/bridalData';

export interface CartItem {
  product: CoutureProduct;
  quantity: number;
  customMeasurements: boolean;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handlePlaceHold = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `TROUSSEAU-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderRef(ref);
    setCheckoutStep('success');
  };

  const resetAll = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#FAF7F3] h-full shadow-2xl flex flex-col justify-between border-l border-[#DDD0C2]">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E6DCD2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#8C2B36]" />
            <h3 className="font-serif text-lg font-medium text-[#221915]">
              Bridal Trousseau Bag
            </h3>
            <span className="text-xs font-mono text-[#8C7A70] font-semibold">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6A61] hover:text-[#221915] rounded-full hover:bg-[#EAE0D4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#EFE7DE] text-[#8C7A70] flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6 stroke-[1.4]" />
                  </div>
                  <p className="font-serif text-lg text-[#3A2E28]">Your Trousseau is Empty</p>
                  <p className="text-xs text-[#7A6A61] max-w-xs mx-auto">
                    Explore our Couture &amp; Jewels collection to reserve bespoke lehengas, certified polki, and makeover trials.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-white border border-[#E0D5C7] rounded-sm flex gap-3 text-xs"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-20 object-cover rounded-sm bg-[#EAE2D7] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] uppercase text-[#8C7A70] block">
                            {item.product.category}
                          </span>
                          <h4 className="font-serif text-sm font-medium text-[#221915] leading-snug line-clamp-1">
                            {item.product.name}
                          </h4>
                          <p className="font-serif font-semibold text-[#8C2B36] mt-0.5 tabular-nums">
                            ${item.product.price.toLocaleString()}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-[#F5EFEB]">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 border border-[#DDD0C2] rounded-sm px-1.5 py-0.5 bg-[#FAF7F3]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="text-[#6E5D53] hover:text-black font-mono px-1 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="font-mono text-xs">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="text-[#6E5D53] hover:text-black font-mono px-1 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {/* Delete */}
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#A34B54] hover:text-[#8C2B36] p-1 cursor-pointer"
                            title="Remove from bag"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Bespoke Measurement Assurance Note */}
                  <div className="p-3 bg-[#F2ECE5] border border-[#DDD0C2] rounded-sm text-[11px] text-[#5A4B42] flex items-start gap-2">
                    <Ruler className="w-4 h-4 text-[#8C2B36] shrink-0 mt-0.5" />
                    <span>
                      Complimentary Master Tailor Fitting Kit &amp; 3D Video Measurement Session included with all bridal orders.
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

          {checkoutStep === 'checkout' && (
            <form id="trousseau-form" onSubmit={handlePlaceHold} className="space-y-4 text-xs">
              <h4 className="font-serif text-base text-[#221915] font-medium">
                Reserve Trousseau Hold
              </h4>
              <p className="text-[11px] text-[#6B5A51]">
                Lock your order in the artisan queue without immediate charge. Our couture concierge will reach out to finalize body measurements and color swatches.
              </p>

              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Bride / Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meera Kapoor"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000 / +91 ..."
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Delivery Destination City &amp; Address *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Street, City, Postal Code, Country"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#8C2B36] text-white flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-[#221915] font-normal">
                Trousseau Reservation Confirmed
              </h4>
              <div className="p-4 bg-white border border-[#E0D5C7] rounded-sm text-xs text-left space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Order Hold ID:</span>
                  <span className="font-mono font-bold text-[#8C2B36]">{orderRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Client:</span>
                  <span className="font-medium text-[#221915]">{customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Items Reserved:</span>
                  <span className="font-medium text-[#221915]">{items.length} Ensembles</span>
                </div>
                <div className="flex justify-between border-t border-[#F0E6DC] pt-1 mt-1">
                  <span className="text-[#8C7A70]">Total Value:</span>
                  <span className="font-serif font-bold text-[#221915]">${subtotal.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-[11px] text-[#6B5A51] max-w-xs mx-auto">
                A personal Noor &amp; Zari bridal stylist will contact you via WhatsApp within 4 business hours to send fabric swatch cards.
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-[#E6DCD2] bg-white space-y-3">
          {checkoutStep === 'cart' && items.length > 0 && (
            <>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7A6A61]">Subtotal</span>
                <span className="font-serif text-xl font-semibold text-[#221915] tabular-nums">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[10px] text-[#8C7A70]">
                Taxes, insurance, and insured worldwide courier calculated upon confirmation.
              </p>
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3 bg-[#261E1A] hover:bg-[#8C2B36] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Reserve Hold</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {checkoutStep === 'checkout' && (
            <div className="space-y-2">
              <button
                type="submit"
                form="trousseau-form"
                className="w-full py-3 bg-[#8C2B36] hover:bg-[#73232C] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors text-center cursor-pointer"
              >
                Confirm Trousseau Queue (${subtotal.toLocaleString()})
              </button>
              <button
                onClick={() => setCheckoutStep('cart')}
                className="w-full py-2 text-xs text-[#7A6A61] hover:text-black text-center cursor-pointer"
              >
                &larr; Back to Bag Items
              </button>
            </div>
          )}

          {checkoutStep === 'success' && (
            <button
              onClick={resetAll}
              className="w-full py-3 bg-[#261E1A] text-white text-xs uppercase tracking-wider rounded-sm hover:bg-[#8C2B36] cursor-pointer"
            >
              Done &amp; Return to Atelier
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
