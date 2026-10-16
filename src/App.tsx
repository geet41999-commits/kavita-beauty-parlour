/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScreensViewer } from './components/ScreensViewer';
import { LookBuilder } from './components/LookBuilder';
import { CoutureCatalog } from './components/CoutureCatalog';
import { ArtistryBreakdown } from './components/ArtistryBreakdown';
import { AteliersSection } from './components/AteliersSection';
import { BookingModal } from './components/BookingModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ImageZoomModal } from './components/ImageZoomModal';
import { Footer } from './components/Footer';
import { BRIDAL_SCREENS, BridalScreen, CoutureProduct, COUTURE_COLLECTION } from './data/bridalData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('screens');
  const [selectedScreenId, setSelectedScreenId] = useState<string>('blush-elegance');
  const [builderCustomScreen, setBuilderCustomScreen] = useState<BridalScreen | null>(null);
  
  // Modals & Drawers
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselectedLook, setBookingPreselectedLook] = useState('');
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: COUTURE_COLLECTION[0], // Pre-populate with Gulabi Noor Lehenga for immediate demonstration
      quantity: 1,
      customMeasurements: true,
    },
  ]);

  const [zoomModal, setZoomModal] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  // Handlers
  const handleSelectScreen = (screenId: string) => {
    setSelectedScreenId(screenId);
    setActiveTab('screens');
    const el = document.getElementById('screens-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomizeLook = (screen: BridalScreen) => {
    setBuilderCustomScreen(screen);
    setActiveTab('builder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookTrial = (lookTitle: string) => {
    setBookingPreselectedLook(lookTitle);
    setIsBookingOpen(true);
  };

  const handleAddToCart = (product: CoutureProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1, customMeasurements: true }];
    });
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenZoom = (imageUrl: string, title: string) => {
    setZoomModal({
      isOpen: true,
      imageUrl,
      title,
    });
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F3] text-[#241E1A] selection:bg-[#C59B4B]/20 selection:text-[#5B4119]">
      
      {/* Top Bar adhering strictly to Top Bar Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => {
          setBookingPreselectedLook('');
          setIsBookingOpen(true);
        }}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartTotalCount}
      />

      <main className="flex-1">
        {activeTab === 'screens' && (
          <>
            <Hero
              onSelectScreen={handleSelectScreen}
              onExploreBuilder={() => {
                setActiveTab('builder');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenBooking={() => {
                setBookingPreselectedLook('');
                setIsBookingOpen(true);
              }}
            />
            <ScreensViewer
              selectedScreenId={selectedScreenId}
              onSelectScreen={(id) => setSelectedScreenId(id)}
              onCustomizeLook={handleCustomizeLook}
              onBookTrial={handleBookTrial}
              onOpenZoom={handleOpenZoom}
            />
            <CoutureCatalog
              onAddToCart={handleAddToCart}
              onOpenBooking={() => {
                setBookingPreselectedLook('');
                setIsBookingOpen(true);
              }}
            />
            <ArtistryBreakdown
              onBookMakeoverTrial={() => handleBookTrial('Complete Bridal Makeover Trial')}
              onViewScreen={handleSelectScreen}
            />
            <AteliersSection
              onBookAtelier={(loc) => handleBookTrial(`Private Suite Visit — ${loc}`)}
            />
          </>
        )}

        {activeTab === 'builder' && (
          <div className="pt-6">
            <LookBuilder
              initialScreen={builderCustomScreen}
              onBookTrialWithCustomLook={(summary) => handleBookTrial(summary)}
            />
          </div>
        )}

        {activeTab === 'collection' && (
          <div className="pt-6">
            <CoutureCatalog
              onAddToCart={handleAddToCart}
              onOpenBooking={() => {
                setBookingPreselectedLook('');
                setIsBookingOpen(true);
              }}
            />
          </div>
        )}

        {activeTab === 'artistry' && (
          <div className="pt-6">
            <ArtistryBreakdown
              onBookMakeoverTrial={() => handleBookTrial('8K Bridal Makeover Protocol')}
              onViewScreen={handleSelectScreen}
            />
          </div>
        )}

        {activeTab === 'ateliers' && (
          <div className="pt-6">
            <AteliersSection
              onBookAtelier={(loc) => handleBookTrial(`Private Suite Visit — ${loc}`)}
            />
          </div>
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => {
          setBookingPreselectedLook('');
          setIsBookingOpen(true);
        }}
      />

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedLook={bookingPreselectedLook}
      />

      {/* Trousseau Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Fullscreen High-Resolution Zoom Modal */}
      <ImageZoomModal
        isOpen={zoomModal.isOpen}
        onClose={() => setZoomModal({ isOpen: false, imageUrl: '', title: '' })}
        imageUrl={zoomModal.imageUrl}
        title={zoomModal.title}
      />

    </div>
  );
}
