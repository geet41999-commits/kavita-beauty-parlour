import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Check, Sparkles, Download, Phone, Mail, User } from 'lucide-react';
import { ATELIER_LOCATIONS } from '../data/bridalData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedLook?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedLook = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: ATELIER_LOCATIONS[0].city,
    service: 'Complete Bridal Royal Makeover Trial',
    weddingDate: '2026-11-20',
    trialDate: '2026-10-30',
    timeSlot: '11:00 AM - 1:00 PM',
    bridalPartyCount: '1 (Bride only)',
    notes: preselectedLook ? `Interested in: ${preselectedLook}` : '',
  });

  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    details: typeof formData;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = `NZ-BRIDE-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBooking({
      reference,
      details: { ...formData },
    });
  };

  const handleDownloadSlip = () => {
    const slipText = `
========================================
NOOR & ZARI — HAUTE BRIDAL ATELIER
PRIVATE CONSULTATION & TRIAL DOSSIER
========================================
Reference Code: ${confirmedBooking?.reference}
Bride Name: ${confirmedBooking?.details.fullName}
Email: ${confirmedBooking?.details.email}
Phone: ${confirmedBooking?.details.phone}
Atelier Sanctuary: ${confirmedBooking?.details.location}
Service: ${confirmedBooking?.details.service}
Wedding Date: ${confirmedBooking?.details.weddingDate}
Trial Date: ${confirmedBooking?.details.trialDate} (${confirmedBooking?.details.timeSlot})
Party Size: ${confirmedBooking?.details.bridalPartyCount}
Styling Notes: ${confirmedBooking?.details.notes}

Please arrive 10 minutes prior to your suite time.
Complimentary champagne high tea & daylight lighting simulation included.
========================================
    `.trim();

    const blob = new Blob([slipText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${confirmedBooking?.reference}_Noor_Zari_Trial.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#FAF7F3] rounded-md max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DDD0C2] relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7A6A61] hover:text-[#221915] rounded-full hover:bg-[#EAE0D4] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          /* Confirmation Receipt State */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#8C2B36] text-white flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#8C2B36] font-semibold">
                Consultation Reserved
              </span>
              <h3 className="font-serif text-3xl text-[#221915] font-normal">
                Your Atelier Suite Awaits
              </h3>
              <p className="text-xs text-[#6B5A51]">
                A bespoke bridal concierge has been assigned to your wedding dossier.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E0D5C7] rounded-sm text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-[#F0E6DC]">
                <span className="text-[#8C7A70]">Dossier Reference:</span>
                <span className="font-mono font-bold text-[#8C2B36]">{confirmedBooking.reference}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0E6DC]">
                <span className="text-[#8C7A70]">Bride Name:</span>
                <span className="font-medium text-[#221915]">{confirmedBooking.details.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0E6DC]">
                <span className="text-[#8C7A70]">Atelier Sanctuary:</span>
                <span className="font-medium text-[#221915]">{confirmedBooking.details.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0E6DC]">
                <span className="text-[#8C7A70]">Trial Appointment:</span>
                <span className="font-medium text-[#221915]">
                  {confirmedBooking.details.trialDate} at {confirmedBooking.details.timeSlot}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8C7A70]">Service Curation:</span>
                <span className="font-medium text-[#221915] text-right max-w-[200px] truncate">
                  {confirmedBooking.details.service}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadSlip}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#261E1A] text-white hover:bg-[#8C2B36] text-xs uppercase tracking-wider font-medium rounded-sm transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Appointment Dossier</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-[#BFAFA3] text-[#33251E] hover:bg-[#EFE7DE] text-xs uppercase tracking-wider font-medium rounded-sm transition-colors cursor-pointer"
              >
                Close &amp; Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#8C2B36] font-semibold">
                Private Appointments
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#221915] font-normal">
                Reserve Your Bridal Suite &amp; Trial
              </h3>
              <p className="text-xs text-[#6B5A51] font-light">
                One-on-one session with our master couturier, jewelry curator, and senior makeup artist.
              </p>
            </div>

            {preselectedLook && (
              <div className="p-3 bg-[#F2ECE5] border border-[#C59B4B]/40 rounded-sm text-xs text-[#52443C] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8C2B36] shrink-0" />
                <span>
                  Configured Look: <strong className="text-[#261E1A]">{preselectedLook}</strong>
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#8C2B36]" />
                  <span>Bride's Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Singhania"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#8C2B36]" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="bride@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#8C2B36]" />
                  <span>Contact Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 12345 / +1 415 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              {/* Atelier Sanctuary */}
              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C2B36]" />
                  <span>Preferred Atelier Sanctuary *</span>
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                >
                  {ATELIER_LOCATIONS.map((loc) => (
                    <option key={loc.city} value={loc.city}>
                      {loc.city} ({loc.country})
                    </option>
                  ))}
                  <option value="Destination On-Location">Global Destination On-Location Troussier</option>
                </select>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="font-medium text-[#3D312A]">Selected Bridal Experience *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                >
                  <option value="Complete Bridal Royal Makeover Trial">Complete Bridal Royal Makeover Trial (Hair, Makeup, Draping)</option>
                  <option value="Haute Couture Fitting & Draping Trial">Haute Couture Lehenga Fitting &amp; Veil Draping Consultation</option>
                  <option value="Nizam-e-Kundan Polki Jewelry Pairing">Heirloom Polki &amp; Emerald Jewelry Pairing Session</option>
                  <option value="Full Bridal Troussier Package (All Ceremonies)">Full Bridal Troussier Package (Mehendi, Sangeet, Pheras, Reception)</option>
                  <option value="Virtual Global Consultation with Head Couturier">Virtual Video Consultation with Head Couturier</option>
                </select>
              </div>

              {/* Dates */}
              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Wedding Ceremony Date</label>
                <input
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Preferred Trial Date</label>
                <input
                  type="date"
                  value={formData.trialDate}
                  onChange={(e) => setFormData({ ...formData, trialDate: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Preferred Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                >
                  <option value="10:30 AM - 12:30 PM">Morning Salon (10:30 AM – 12:30 PM)</option>
                  <option value="1:30 PM - 3:30 PM">Afternoon Daylight Salon (1:30 PM – 3:30 PM)</option>
                  <option value="4:00 PM - 6:00 PM">Golden Hour Salon (4:00 PM – 6:00 PM)</option>
                  <option value="6:30 PM - 8:30 PM">Evening Candlelight Salon (6:30 PM – 8:30 PM)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-[#3D312A]">Bridal Party Accompanying</label>
                <select
                  value={formData.bridalPartyCount}
                  onChange={(e) => setFormData({ ...formData, bridalPartyCount: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                >
                  <option value="1 (Bride only)">Bride Only</option>
                  <option value="2 (Bride + Mother/Sister)">Bride + 1 Guest</option>
                  <option value="3 (Bride + 2 Family Members)">Bride + 2 Guests</option>
                  <option value="VIP Bridal Entourage (Up to 4)">VIP Suite Entourage (Up to 4)</option>
                </select>
              </div>

              {/* Special Notes */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="font-medium text-[#3D312A]">Specific Styling Notes or Vision</label>
                <textarea
                  rows={2}
                  placeholder="Share color preferences, skin sensitivities, or ceremony themes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD0C2] rounded-sm focus:border-[#8C2B36] focus:outline-none"
                />
              </div>

            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#8C2B36] hover:bg-[#73232C] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors text-center shadow-md cursor-pointer"
              >
                Confirm Atelier Suite Reservation
              </button>
              <p className="text-[10px] text-[#8C7A70] text-center mt-2">
                No upfront cancellation fee. Date reschedule permitted up to 48 hours before trial.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
