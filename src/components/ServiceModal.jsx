import React, { useState } from 'react';

export default function ServiceModal({
  service,
  onClose,
  onAddToCart,
  onShowToast
}) {
  const [selectedTier, setSelectedTier] = useState('standard');
  const [guestCount, setGuestCount] = useState(1);

  if (!service) return null;

  const handleAction = () => {
    onAddToCart({
      id: `service-${service.id}-${Date.now()}`,
      name: `${service.title} (${selectedTier.toUpperCase()})`,
      price: service.basePrice || 25,
      quantity: guestCount,
      size: `${guestCount} booking`
    });
    onShowToast(`Added "${service.title}" booking to cart!`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-xl w-full bg-[#fff8f2] dark:bg-[#1a1412] rounded-3xl overflow-hidden shadow-2xl border border-[#3e2723]/10 dark:border-white/10 flex flex-col">
        {/* Header Image */}
        <div className="relative h-56 bg-[#3e2723] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#271310] via-black/30 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase tracking-widest text-[#fdb56c] font-bold">
              {service.tag || 'Specialty Service'}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
            {service.fullDescription || service.description}
          </p>

          <div className="bg-[#f7edde] dark:bg-[#241c19] p-4 rounded-2xl space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3e2723] dark:text-[#f7edde] block">
              Select Package Tier:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedTier('standard')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  selectedTier === 'standard'
                    ? 'bg-[#c68642] text-white border-[#c68642] shadow-sm'
                    : 'bg-white dark:bg-[#2b221f] text-[#3e2723] dark:text-white border-[#3e2723]/10'
                }`}
              >
                Standard Experience
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier('bespoke')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  selectedTier === 'bespoke'
                    ? 'bg-[#c68642] text-white border-[#c68642] shadow-sm'
                    : 'bg-white dark:bg-[#2b221f] text-[#3e2723] dark:text-white border-[#3e2723]/10'
                }`}
              >
                VIP Botanical Tasting
              </button>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-[#3e2723]/10 dark:border-white/10">
              <span className="text-xs font-medium text-[#504442] dark:text-[#d3c3c0]">
                Attendees / Quantity:
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-7 h-7 rounded-lg bg-white dark:bg-[#2b221f] text-[#3e2723] dark:text-white font-bold text-sm shadow-sm flex items-center justify-center hover:bg-[#c68642] hover:text-white cursor-pointer"
                >
                  -
                </button>
                <span className="font-bold text-sm text-[#271310] dark:text-white px-2">
                  {guestCount}
                </span>
                <button
                  type="button"
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="w-7 h-7 rounded-lg bg-white dark:bg-[#2b221f] text-[#3e2723] dark:text-white font-bold text-sm shadow-sm flex items-center justify-center hover:bg-[#c68642] hover:text-white cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[11px] text-[#504442] dark:text-[#d3c3c0] block font-medium">Estimated Total</span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#885210] dark:text-[#c68642]">
                ${((service.basePrice || 25) * guestCount).toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleAction}
              className="py-2.5 px-6 rounded-full bg-[#c68642] hover:bg-[#885210] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              <span>Reserve &amp; Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
