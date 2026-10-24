import React, { useState } from 'react';

export default function PortfolioPage({ onOpenLightbox, onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Sunlit Roastery Courtyard',
      category: 'Sanctuary',
      tag: 'Flagship Interior',
      plate: 'Plate 01',
      span: 'lg:col-span-2 lg:row-span-2',
      aspect: 'aspect-square sm:aspect-auto sm:h-full min-h-[380px]',
      src: './images/cafe_interior.png',
      description: 'Lush indoor monstera, fiddle-leaf figs, and white oak tables bathed in gentle Portland morning sunshine.'
    },
    {
      id: 2,
      title: 'Artisan Tulip Latte Art',
      category: 'Artisan Coffee',
      tag: 'Ethiopian Sidama',
      plate: 'Plate 02',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/latte_art.png',
      description: 'Velvety micro-foam textured precisely to 62°C poured onto single-origin espresso.'
    },
    {
      id: 3,
      title: 'Hearth-Baked French Croissants',
      category: 'Bakehouse',
      tag: 'Daily Bake',
      plate: 'Plate 03',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/croissants.png',
      description: 'Flaky pastry laminations using Normandy cultured butter and whole organic flour.'
    },
    {
      id: 4,
      title: 'Precision Pour-Over Chemex',
      category: 'Artisan Coffee',
      tag: 'Gesha Natural',
      plate: 'Plate 04',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/pour_over.png',
      description: '94°C extraction through lab-grade glass releasing aromatics of sweet bergamot and jasmine.'
    },
    {
      id: 5,
      title: 'Cold Brew & Botanical Elixir Bar',
      category: 'Botanicals',
      tag: '18-Hour Slow Tap',
      plate: 'Plate 05',
      span: 'lg:col-span-2',
      aspect: 'aspect-[16/9]',
      src: './images/iced_coffee_counter.png',
      description: 'Apothecary corked bottles of dark cold drip, layered oat milk beverages, and fresh garden mint infusions.'
    },
    {
      id: 6,
      title: 'Head Roaster in Motion',
      category: 'The Team',
      tag: 'Craft People',
      plate: 'Plate 06',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/friendly_barista.png',
      description: 'Elena checking the cast-iron drum roast development and dialing the morning grinders.'
    },
    {
      id: 7,
      title: 'Botanical Avocado Toast',
      category: 'Bakehouse',
      tag: 'Brunch Ritual',
      plate: 'Plate 07',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/avocado_toast.png',
      description: 'Organic sourdough with soft-poached pasture eggs, edible microgreens, and chili sea salt.'
    },
    {
      id: 8,
      title: 'Velvet Flat White in Ceramic',
      category: 'Artisan Coffee',
      tag: 'Pottery Collaboration',
      plate: 'Plate 08',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/latte_art.png',
      description: 'Hand-thrown speckled stoneware cups created by local Portland ceramists.'
    },
    {
      id: 9,
      title: 'Morning Sunlit Plant Canopy',
      category: 'Sanctuary',
      tag: 'Living Oasis',
      plate: 'Plate 09',
      span: 'lg:col-span-2',
      aspect: 'aspect-[16/9]',
      src: './images/cafe_interior.png',
      description: 'Over 40 botanical varieties purifying the roastery air and creating a serene microclimate.'
    },
    {
      id: 10,
      title: 'Single-Origin Degas Bloom',
      category: 'Artisan Coffee',
      tag: '45-Second Bloom',
      plate: 'Plate 10',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/pour_over.png',
      description: 'Freshly roasted carbon dioxide escaping during the gentle concentric water spiral.'
    },
    {
      id: 11,
      title: 'Artisan Bakery Display Case',
      category: 'Bakehouse',
      tag: 'Morning Hearth',
      plate: 'Plate 11',
      span: 'lg:col-span-1',
      aspect: 'aspect-[4/5]',
      src: './images/croissants.png',
      description: 'Fresh cardamom twists, cinnamon knots, and caramelized Basque cheesecake slices.'
    },
    {
      id: 12,
      title: 'The Atelier Tasting Counter',
      category: 'The Team',
      tag: 'Sensory Cupping',
      plate: 'Plate 12',
      span: 'lg:col-span-2',
      aspect: 'aspect-[16/9]',
      src: './images/friendly_barista.png',
      description: 'Guests gathering for Friday evening sensory coffee cupping and botanical bouquet creation.'
    }
  ];

  const categories = ['All', 'Artisan Coffee', 'Bakehouse', 'Botanicals', 'Sanctuary', 'The Team'];
  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="w-full pt-20 bg-[#271310] text-[#f7edde] min-h-screen transition-colors">
      {/* Page Heading with Gently Pulsing / Floating Steam Icon */}
      <section className="relative w-full py-16 lg:py-24 border-b border-[#C68642]/30 text-center bg-[#1f0e0c]">
        <div className="w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4">
          {/* Decorative gently pulsing coffee cup with floating steam animation */}
          <div className="flex flex-col items-center justify-center mb-5">
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Pulsing steam curls */}
              <span className="material-symbols-outlined text-[#C68642] text-[24px] absolute -top-5 left-3 animate-steam opacity-80">
                air
              </span>
              <span className="material-symbols-outlined text-[#C68642] text-[20px] absolute -top-6 right-2 animate-steam-delay opacity-60">
                cloud
              </span>
              <div className="w-14 h-14 rounded-full bg-[#3e2723] border-2 border-[#C68642] flex items-center justify-center shadow-xl animate-gentle-pulse">
                <span className="material-symbols-outlined text-[28px] text-[#C68642]">
                  local_cafe
                </span>
              </div>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C68642] font-bold mt-2.5">
              Visual Archive &amp; Living Chronicle
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Our Gallery
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#d3c3c0] max-w-2xl mx-auto mt-2 leading-relaxed">
            A curated window into the hands, botanicals, hearth-baked pastries, and velvety extractions that define the Brew &amp; Bloom atmosphere.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#C68642] text-white shadow-md'
                    : 'bg-[#3e2723] text-[#d3c3c0] hover:text-white hover:bg-[#4d322c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gallery: 4 columns desktop, 2 tablet, 1 mobile with reduced side padding */}
      <section className="w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => onOpenLightbox(item, index, filteredItems)}
              className={`${item.span} bg-[#3e2723] rounded-3xl overflow-hidden shadow-lg border border-[#C68642]/20 flex flex-col justify-between group hover:border-[#C68642] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative`}
            >
              {/* Image Frame */}
              <div className={`relative ${item.aspect} w-full overflow-hidden bg-[#1f0e0c]`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Badge Overlay */}
                <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#fdb56c] border border-white/10 flex items-center gap-1.5">
                  <span>{item.plate}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>

                <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-[#C68642] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <span className="material-symbols-outlined text-xl">zoom_in</span>
                </div>
              </div>

              {/* Caption Under Image with clean compact typography */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-[#35201c] gap-2">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#C68642] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#d3c3c0] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#fdb56c]">
                  <span>{item.tag}</span>
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
