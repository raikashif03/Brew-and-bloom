import React, { useState } from 'react';

export default function ServicesPage({ onAddToCart, onShowToast, onOpenServiceModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const services = [
    {
      id: 's1',
      title: 'Coffee & Espresso Bar',
      category: 'In-Cafe',
      priceText: 'From $3.75',
      basePrice: 3.75,
      image: './images/pour_over.png',
      badge: 'House Craft',
      rotatedBadge: null,
      description: 'Single-origin espresso dialed in daily on calibrated commercial group heads, custom milk steaming, and slow Chemex pour-overs.',
      fullDescription: 'Our flagship espresso program features rotating microlots from Oaxaca and Huila. Every barista pulls shots according to daily barometric pressure, mineral balance, and 1:2 brew ratios.',
      buttonText: 'Order Now'
    },
    {
      id: 's2',
      title: 'Fresh Bakehouse & Pastries',
      category: 'Bakery',
      priceText: 'From $4.25',
      basePrice: 4.25,
      image: './images/croissants.png',
      badge: 'Hearth Baked',
      rotatedBadge: null,
      description: 'Laminated French butter croissants, wild berry cardamombuns, and Basque burnt cheesecakes pulled warm from the stone ovens every morning.',
      fullDescription: 'Crafted with Normandy cultured butter, unbleached organic flours, and natural slow fermentation. Pair with our velvet flat white for an unforgettable morning.',
      buttonText: 'Order Pastry'
    },
    {
      id: 's3',
      title: 'Breakfast & Botanical Brunch',
      category: 'Brunch',
      priceText: 'From $12.00',
      basePrice: 12.00,
      image: './images/avocado_toast.png',
      badge: 'Farm to Fork',
      rotatedBadge: 'Popular', // Tilted rotated badge
      description: 'Organic sourdough avocado toasts with soft-poached pasture eggs, edible botanical microgreens, and seasonal garden grain bowls.',
      fullDescription: 'Served daily from 8:00 AM to 3:00 PM. Features organic produce from Pacific Northwest growers, fermented seeds, and floral edible petals.',
      buttonText: 'Reserve Table'
    },
    {
      id: 's4',
      title: 'Catering & Private Events',
      category: 'Events',
      priceText: 'Custom Tier',
      basePrice: 150.00,
      image: './images/iced_coffee_counter.png',
      badge: 'Mobile Cart',
      rotatedBadge: null,
      description: 'Mobile espresso cart and botanical cold brew bar for garden weddings, creative studio gatherings, and intimate corporate atelier events.',
      fullDescription: 'We bring our commercial dual-boiler cart, trained craft baristas, single-origin roasts, and glassware directly to your indoor or outdoor venue.',
      buttonText: 'Inquire Catering'
    },
    {
      id: 's5',
      title: 'Online Bean Subscriptions',
      category: 'Delivery',
      priceText: '$18.50 / bag',
      basePrice: 18.50,
      image: './images/cafe_interior.png',
      badge: 'Direct Delivery',
      rotatedBadge: null,
      description: 'Freshly roasted whole-bean coffee delivered directly to your doorstep within 48 hours of cast-iron drum roasting. Eco-compostable bags.',
      fullDescription: 'Never run out of extraordinary coffee. Select your roast profile preference (light floral, medium caramel, or dark cacao) and delivery frequency.',
      buttonText: 'Subscribe & Save'
    },
    {
      id: 's6',
      title: 'Barista Masterclasses & Workshops',
      category: 'Education',
      priceText: '$85 / seat',
      basePrice: 85.00,
      image: './images/friendly_barista.png',
      badge: 'Weekend Cohorts',
      rotatedBadge: 'New!', // Another rotated badge
      description: 'Hands-on weekend workshops covering pour-over turbulence, palate sensory cupping, and silky micro-foam latte art rosettes.',
      fullDescription: 'Small intimate cohorts of 6 people led by Head Roaster Elena Rostova. Includes a 250g bag of rare Geisha beans and certificate upon completion.',
      buttonText: 'Book Workshop'
    }
  ];

  const categories = ['All', 'In-Cafe', 'Bakery', 'Brunch', 'Events', 'Delivery', 'Education'];
  const filteredServices = services.filter((s) => activeFilter === 'All' || s.category === activeFilter);

  const handleCardAction = (service) => {
    onOpenServiceModal(service);
  };

  return (
    <div className="w-full pt-20 bg-[#fff8f2] dark:bg-[#1a1412] text-[#1f1b13] dark:text-[#f7edde] transition-colors">
      {/* Page Heading and Intro */}
      <section className="relative w-full py-16 lg:py-24 bg-[#fcf2e4] dark:bg-[#201916] border-b border-[#3e2723]/10 dark:border-white/10 text-center">
        <div className="w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#885210]/15 text-[#885210] dark:text-[#c68642] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="material-symbols-outlined text-[16px]">room_service</span>
            <span>Atelier Experiences</span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#271310] dark:text-white tracking-tight">
            Our Specialty Services
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] max-w-2xl mx-auto mt-2 leading-relaxed">
            From morning espresso rituals and slow hearth pastries to bespoke mobile catering and sensory barista masterclasses.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === cat
                    ? 'bg-[#885210] text-white shadow-md'
                    : 'bg-white dark:bg-[#2b221f] text-[#3e2723] dark:text-white border border-[#3e2723]/10 hover:bg-[#f7edde]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Service Cards in a Wrapping Flex Row with less side spaces */}
      <section className="w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4 py-12">
        <div className="flex flex-wrap -mx-3 items-stretch">
          {filteredServices.map((service, index) => {
            const isHoverCard = index === 5;

            return (
              <div
                key={service.id}
                className="w-full md:w-1/2 lg:w-1/3 p-3 flex"
              >
                <div
                  className={`w-full bg-white dark:bg-[#241c19] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#3e2723]/10 dark:border-white/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group relative ${
                    isHoverCard ? 'ring-2 ring-[#C68642]' : ''
                  }`}
                >
                  {/* Tilted / Rotated Badge */}
                  {service.rotatedBadge && (
                    <div className="absolute top-3.5 right-3.5 z-20 transform rotate-12 shadow-xl">
                      <span className="px-3 py-0.5 rounded-full bg-[#ba1a1a] text-white text-[11px] font-black uppercase tracking-wider">
                        {service.rotatedBadge}
                      </span>
                    </div>
                  )}

                  {/* Card Image Wrapper */}
                  <div className="relative h-56 bg-[#ebe1d3] dark:bg-[#2b221f] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Micro Pill Badge */}
                    <div className="absolute bottom-3 left-3.5 bg-white/95 dark:bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#271310] dark:text-white shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#885210] dark:bg-[#c68642]"></span>
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-serif text-lg font-bold text-[#271310] dark:text-white group-hover:text-[#885210] dark:group-hover:text-[#c68642] transition-colors leading-snug">
                          {service.title}
                        </h3>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#885210] dark:text-[#c68642] block mb-1.5 font-mono">
                        {service.priceText}
                      </span>
                      <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3.5 border-t border-[#3e2723]/10 dark:border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => handleCardAction(service)}
                        className="px-5 py-2 rounded-full bg-[#885210] hover:bg-[#c68642] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{service.buttonText}</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>

                      <button
                        onClick={() => {
                          onAddToCart({
                            id: `direct-${service.id}`,
                            name: service.title,
                            price: service.basePrice,
                            quantity: 1,
                            size: 'Standard'
                          });
                          onShowToast(`Added ${service.title} to your basket!`, 'success');
                        }}
                        className="p-2.5 rounded-full hover:bg-[#f7edde] dark:hover:bg-[#352b27] text-[#885210] dark:text-[#c68642] transition-colors cursor-pointer"
                        title="Quick Add to Cart"
                      >
                        <span className="material-symbols-outlined text-[22px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specialty Consultation Callout */}
      <section className="w-full bg-[#f7edde] dark:bg-[#201916] py-16 border-t border-[#3e2723]/10 dark:border-white/10">
        <div className="w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#271310] dark:text-white mb-2">
            Looking for Custom Event Curations?
          </h2>
          <p className="text-base sm:text-lg text-[#504442] dark:text-[#d3c3c0] max-w-2xl mx-auto mb-7 leading-relaxed">
            We curate bespoke botanical floral bouquets, custom espresso blends with private foil stamping, and specialized wedding bar experiences.
          </p>
          <button
            onClick={() => {
              onShowToast('Navigating to atelier contact form...');
              window.scrollTo(0, 0);
            }}
            className="px-9 py-4 rounded-full bg-[#3e2723] hover:bg-[#885210] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            Schedule Consultation Call
          </button>
        </div>
      </section>
    </div>
  );
}
