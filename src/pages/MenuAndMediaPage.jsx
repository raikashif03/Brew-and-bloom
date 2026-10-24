import React, { useState, useEffect } from 'react';

export default function MenuAndMediaPage({ onAddToCart, onShowToast }) {
  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(102); // 1:42 in seconds
  const [volume, setVolume] = useState(75);

  const playlist = [
    { title: 'Morning Mellow Acoustic Jazz', artist: 'Courtyard Vinyl Sessions', duration: 258 },
    { title: 'Bossa Nova Rain in Portland', artist: 'Elena & The Roasters', duration: 210 },
    { title: 'Warm Ceramic Sips', artist: 'Lo-Fi Botanical Beats', duration: 185 }
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Video modal simulation state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Menu Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    { id: 'm1', item: 'Espresso (Double)', category: 'Hot Coffee', size: 'Double (2 oz)', price: 3.75, note: 'Velvety crema, dark cocoa notes' },
    { id: 'm2', item: 'Vanilla Bean Latte', category: 'Hot Coffee', size: 'Regular (12 oz)', price: 5.50, note: 'Madagascar vanilla pod & oat milk' },
    { id: 'm3', item: 'Velvet Cappuccino', category: 'Hot Coffee', size: 'Traditional (6 oz)', price: 4.75, note: 'Wet microfoam with dusting of cinnamon' },
    { id: 'm4', item: 'Kyoto Cold Brew', category: 'Cold Brew', size: 'Tall (16 oz)', price: 6.25, note: '18-hour slow glass drip extraction' },
    { id: 'm5', item: 'French Butter Croissant', category: 'Bakery', size: '1 Piece', price: 4.25, note: 'Hearth baked with Normandy cultured butter' },
    { id: 'm6', item: 'Basque Burnt Cheesecake', category: 'Dessert', size: 'Generous Slice', price: 6.75, note: 'Caramelized crust with creamy custard center' },
    { id: 'm7', item: 'Matcha Botanical Tonic', category: 'Botanical Drink', size: 'Large (16 oz)', price: 5.95, note: 'Uji ceremonial grade with sparkling tonic & mint' },
    { id: 'm8', item: 'Artisan Sourdough Toast', category: 'Bakery', size: '2 Slices w/ Butter', price: 5.00, note: 'Cultured floral honey butter & flake sea salt' }
  ];

  // Filter menu
  const categories = ['All', 'Hot Coffee', 'Cold Brew', 'Bakery', 'Dessert', 'Botanical Drink'];
  const filteredMenu = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Audio timer simulation
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= currentTrack.duration ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  const formatSeconds = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    onShowToast(!isPlaying ? `Playing: ${currentTrack.title}` : 'Playlist paused');
  };

  const handleNextTrack = () => {
    const next = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(next);
    setCurrentTime(0);
    setIsPlaying(true);
    onShowToast(`Now Playing: ${playlist[next].title}`);
  };

  const handlePrevTrack = () => {
    const prev = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prev);
    setCurrentTime(0);
    setIsPlaying(true);
    onShowToast(`Now Playing: ${playlist[prev].title}`);
  };

  const handleAddMenuItem = (item) => {
    onAddToCart({
      id: item.id,
      name: item.item,
      price: item.price,
      quantity: 1,
      size: item.size
    });
    onShowToast(`Added ${item.item} to your basket!`, 'success');
  };

  return (
    <div className="w-full pt-20 bg-[#fff8f2] dark:bg-[#1a1412] text-[#1f1b13] dark:text-[#f7edde] transition-colors">
      {/* Hero Banner with Background Image */}
      <section className="relative w-full bg-[#3E2723] text-white overflow-hidden py-16 sm:py-24 border-b border-[#C68642]/30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url('./images/pour_over.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#271310] via-[#3E2723]/90 to-[#271310]"></div>

        <div className="relative z-10 w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C68642] text-white text-xs uppercase tracking-widest font-bold shadow-md mb-3">
            <span className="material-symbols-outlined text-[16px]">local_cafe</span>
            Sensory Sanctuary
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            Menu &amp; Cafe Media
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#f5ebdd]/90 max-w-2xl mx-auto leading-relaxed">
            Explore our artisanal roasts, botanical culinary treats, auditory ambiances, and craft brew mechanics.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="w-[95%] max-w-[1480px] mx-auto px-2 sm:px-4 py-12 lg:py-16 space-y-16">
        {/* Audio Player Area: Cafe Ambiance / Playlist */}
        <section className="w-full bg-white dark:bg-[#241c19] rounded-3xl p-6 sm:p-9 shadow-sm border border-[#3e2723]/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className={`w-16 h-16 rounded-2xl bg-[#C68642] text-white flex items-center justify-center shadow-lg shrink-0 ${isPlaying ? 'animate-bounce' : ''}`}>
              <span className="material-symbols-outlined text-4xl">graphic_eq</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#885210] dark:text-[#c68642]">
                Our Cafe Playlist
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#271310] dark:text-white mt-0.5">
                {currentTrack.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0]">
                {currentTrack.artist} • Playing live in courtyard
              </p>
            </div>
          </div>

          {/* Custom Audio Control Bar */}
          <div className="w-full md:max-w-lg flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm text-[#504442] dark:text-[#d3c3c0] font-mono font-semibold">
              <span>{formatSeconds(currentTime)}</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevTrack}
                  aria-label="Previous track"
                  className="hover:text-[#271310] dark:hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[26px]">skip_previous</span>
                </button>
                <button
                  onClick={handleTogglePlay}
                  aria-label="Play or Pause Playlist"
                  className="w-12 h-12 rounded-full bg-[#271310] hover:bg-[#885210] text-white flex items-center justify-center shadow-md transition-transform active:scale-95"
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <button
                  onClick={handleNextTrack}
                  aria-label="Next track"
                  className="hover:text-[#271310] dark:hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[26px]">skip_next</span>
                </button>
              </div>
              <span>{formatSeconds(currentTrack.duration)}</span>
            </div>

            {/* Scrubber Progress Bar */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setCurrentTime(Math.floor(pos * currentTrack.duration));
              }}
              className="w-full bg-[#f7edde] dark:bg-[#352b27] rounded-full h-3 cursor-pointer relative overflow-hidden"
            >
              <div
                className="bg-[#C68642] h-full rounded-full transition-all duration-300"
                style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] pt-1 font-medium">
              <span>
                Track {currentTrackIndex + 1} of {playlist.length}
              </span>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px]">volume_up</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-24 h-2 bg-[#ebe1d3] dark:bg-[#352b27] rounded-lg cursor-pointer"
                />
                <span className="font-mono text-xs w-8">{volume}%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Media Row: Video Player + Image With Caption */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Video Player Area */}
          <div className="flex flex-col bg-white dark:bg-[#241c19] rounded-3xl overflow-hidden shadow-sm border border-[#3e2723]/10 dark:border-white/10 group">
            <div className="relative aspect-video w-full bg-[#271310] overflow-hidden flex items-center justify-center">
              <img
                src="./images/pour_over.png"
                alt="Video preview of barista pour over"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-center gap-3 p-4">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Play brew video"
                  className="w-18 h-18 rounded-full bg-[#C68642] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </button>
                <span className="font-serif text-2xl sm:text-3xl text-white font-bold drop-shadow">
                  Watch how we brew
                </span>
                <span className="text-xs sm:text-sm text-[#f5ebdd]/90 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm font-medium">
                  Click to start 4K video preview
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col gap-2.5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#885210] dark:text-[#c68642]">
                Behind the Counter
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#271310] dark:text-white">
                The Alchemy of Pure Roasts
              </h2>
              <p className="text-sm sm:text-base text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                Step into our morning routine as our head roaster balances grind particle distribution, mineral water density, and concentric pour cadence to unlock sweet jasmine and bergamot floral notes.
              </p>
            </div>
          </div>

          {/* Image with Caption Section (Figure 1.1) */}
          <figure className="flex flex-col bg-white dark:bg-[#241c19] rounded-3xl overflow-hidden shadow-sm border border-[#3e2723]/10 dark:border-white/10 m-0 group">
            <div className="aspect-video w-full overflow-hidden bg-[#ebe1d3]">
              <img
                src="./images/iced_coffee_counter.png"
                alt="Specialty cold brews and pour-over setup on marble counter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="p-7 flex flex-col gap-2.5 bg-white dark:bg-[#241c19]">
              <div className="flex items-center gap-2 text-[#885210] dark:text-[#c68642] text-sm font-bold">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Figure 1.1: Our signature cold drip &amp; sensory counter</span>
              </div>
              <p className="text-sm sm:text-base text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                Each batch is ground immediately prior to service using custom flat burrs calibrated down to the micrometer, ensuring sweet floral clarity and velvety body with zero astringency.
              </p>
            </figcaption>
          </figure>
        </section>

        {/* Lists Row: Ordered Process & Unordered Specialties */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Ordered List: 5 Steps to Perfect Pour-Over */}
          <div className="bg-white dark:bg-[#241c19] rounded-3xl p-7 sm:p-9 shadow-sm border border-[#3e2723]/10 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-[#f7edde] dark:bg-[#2b221f] text-[#885210] dark:text-[#c68642] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-2xl">format_list_numbered</span>
                </div>
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#271310] dark:text-white">
                    How We Make the Perfect Pour-Over
                  </h2>
                  <p className="text-xs text-[#504442] dark:text-[#d3c3c0]">
                    The 5-step precision brewing standard
                  </p>
                </div>
              </div>

              <ol className="space-y-4">
                {[
                  { step: 1, title: 'Grind fresh single-origin beans', desc: 'Coarse sea salt consistency for maximum aromatic extraction.' },
                  { step: 2, title: 'Rinse paper filter with 94°C water', desc: 'Removes cellulose taste while gently preheating the ceramic cone.' },
                  { step: 3, title: 'The 45-second bloom pour', desc: '60ml of water releases trapped CO2 to unlock sweet fruit acids.' },
                  { step: 4, title: 'Gentle circular infusion', desc: 'Slow concentric spirals maintaining a consistent brew bed height.' },
                  { step: 5, title: 'Swirl and serve in warm ceramics', desc: 'Aerates the liquor, blending delicate botanical nuances.' }
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#885210] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {item.step}
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base font-bold text-[#271310] dark:text-white block">
                        {item.title}
                      </strong>
                      <span className="text-xs text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Unordered List: Specialties */}
          <div className="bg-white dark:bg-[#241c19] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#3e2723]/10 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#6B8E6B]/15 text-[#6B8E6B] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">eco</span>
                </div>
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#271310] dark:text-white">
                    Our House Specialties
                  </h2>
                  <p className="text-xs text-[#504442] dark:text-[#d3c3c0]">
                    Recipes infused with organic botanical aromatics
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  { name: 'Single-Origin Geisha Pour-Over', tag: 'Rare Roast', color: 'bg-[#C68642]/15 text-[#885210]' },
                  { name: 'Lavender Honey Cardamom Latte', tag: 'Signature', color: 'bg-[#6B8E6B]/15 text-[#6B8E6B]' },
                  { name: 'Kyoto Cold Drip 18-Hour', tag: 'Slow Batch', color: 'bg-[#3E2723]/15 text-[#3E2723]' },
                  { name: 'Pistachio Rose Croissant', tag: 'Artisan Bakery', color: 'bg-[#fdb56c]/20 text-[#774401]' },
                  { name: 'Wild Chamomile Citrus Cold Infusion', tag: 'Herbal Elixir', color: 'bg-[#6B8E6B]/15 text-[#6B8E6B]' },
                  { name: 'Smoked Vanilla Pod Macchiato', tag: 'Craft Milk', color: 'bg-[#C68642]/15 text-[#885210]' }
                ].map((spec, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] border border-[#3e2723]/5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#885210] dark:bg-[#c68642] shrink-0"></span>
                      <span className="text-sm sm:text-base font-bold text-[#271310] dark:text-white">
                        {spec.name}
                      </span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${spec.color}`}>
                      {spec.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] italic mt-5 text-right font-medium">
              Dairy alternatives available: House Oat, Organic Almond, &amp; Roasted Macadamia Milk
            </p>
          </div>
        </section>

        {/* Complete Data Table: Menu and Prices */}
        <section className="bg-white dark:bg-[#241c19] rounded-3xl p-7 sm:p-9 shadow-sm border border-[#3e2723]/10 dark:border-white/10 space-y-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#271310] dark:text-white">
                Menu &amp; Prices Table
              </h2>
              <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] mt-0.5">
                Handcrafted daily in small batches using sustainably sourced ingredients
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                search
              </span>
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#f7edde] dark:bg-[#2b221f] text-[#271310] dark:text-white border border-[#3e2723]/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#c68642]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#885210] text-white shadow-md'
                    : 'bg-[#f7edde] dark:bg-[#2b221f] text-[#3e2723] dark:text-[#f7edde] hover:bg-[#3e2723] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto rounded-2xl border border-[#3e2723]/10 dark:border-white/10">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#3e2723] text-white">
                  <th className="py-3 px-4 font-serif font-bold text-sm">Item</th>
                  <th className="py-3 px-4 font-serif font-bold text-sm">Category</th>
                  <th className="py-3 px-4 font-serif font-bold text-sm">Size / Portion</th>
                  <th className="py-3 px-4 font-serif font-bold text-sm text-right">Price</th>
                  <th className="py-3 px-4 font-serif font-bold text-sm text-center">Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3e2723]/5 dark:divide-white/5">
                {filteredMenu.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-6 text-center text-[#504442] dark:text-[#d3c3c0] text-sm">
                      No items found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  filteredMenu.map((m, idx) => (
                    <tr
                      key={m.id}
                      className={`hover:bg-[#fcf2e4] dark:hover:bg-[#2b221f] transition-colors ${
                        idx % 2 === 0 ? 'bg-white dark:bg-[#241c19]' : 'bg-[#fdf9f5] dark:bg-[#201916]'
                      }`}
                    >
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-sm text-[#271310] dark:text-white block">
                          {m.item}
                        </span>
                        <span className="text-xs text-[#504442] dark:text-[#d3c3c0]">
                          {m.note}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#f7edde] dark:bg-[#352b27] text-[#885210] dark:text-[#c68642] text-xs font-bold">
                          {m.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] font-medium">
                        {m.size}
                      </td>
                      <td className="py-3.5 px-4 text-right font-serif font-bold text-base text-[#885210] dark:text-[#c68642]">
                        ${m.price.toFixed(2)}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleAddMenuItem(m)}
                          className="px-3.5 py-1 rounded-full bg-[#885210] hover:bg-[#c68642] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1 mx-auto cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px]">add</span>
                          <span>Add</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Box Model Demonstration Section: Side-by-Side Area + Scrollable Box */}
        <section className="bg-white dark:bg-[#241c19] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#3e2723]/10 dark:border-white/10 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#885210] dark:text-[#c68642] font-bold">
              CSS Box Model Demonstration
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#271310] dark:text-white mt-1">
              Roaster's Craft Journal &amp; Extraction Variables
            </h2>
            <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] mt-1">
              Demonstrating explicit margins, paddings, fixed bounds, and custom internal scrolling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Side-by-side area: Image Beside Text */}
            <div className="p-6 bg-[#fcf2e4] dark:bg-[#2b221f] rounded-3xl border-2 border-dashed border-[#885210]/30 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img
                  src="./images/croissants.png"
                  alt="Hearth pastry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-xs sm:text-sm font-bold uppercase text-[#885210] dark:text-[#c68642]">
                  Side-By-Side Box
                </span>
                <h4 className="font-serif text-xl font-bold text-[#271310] dark:text-white">
                  Laminated Pastry &amp; Acidity
                </h4>
                <p className="text-sm sm:text-base text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                  Our pastries are designed with specific lipid profiles that soften the bright citric acidity of Ethiopian coffees, transforming the sip into creamy stone-fruit sweetness.
                </p>
              </div>
            </div>

            {/* Scrollable Box with Long Text */}
            <div className="flex flex-col p-6 bg-[#f7edde] dark:bg-[#201916] rounded-3xl border border-[#3e2723]/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#3e2723] dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-[#885210]">menu_book</span>
                  Scrollable Roasting Notes (Height: 200px)
                </span>
                <span className="text-xs text-[#504442] dark:text-[#d3c3c0]">Scroll for more</span>
              </div>
              <div className="h-48 overflow-y-auto pr-3 text-sm sm:text-base text-[#504442] dark:text-[#d3c3c0] leading-relaxed space-y-3.5 custom-scrollbar">
                <p>
                  <strong>Entry 402: Oaxaca Sierra Sur Pluma Hidalgo.</strong> Elevation 1,750m. Washed Typica &amp; Bourbon. Moisture content 10.4%. Ambient roasting temp 21°C. Charge temp 200°C. Turning point at 1:18 at 98°C.
                </p>
                <p>
                  Yellowing phase reached at 4:30. Caramelization begins steadily with an airflow increase to 65%. First crack starts crisply at 8:42 at 196°C. We maintain a development time ratio (DTR) of 14.8% to protect the delicate honey blossom aromatics without introducing baked grassy flavors.
                </p>
                <p>
                  Drop temp is recorded at 208°C after 10 minutes and 15 seconds. Rapid cooling tray agitation draws the beans down below 40°C in under 90 seconds, sealing the aromatic volatiles.
                </p>
                <p>
                  <strong>Water Chemistry Calibration:</strong> Total Dissolved Solids target 130 ppm. Calcium hardness 65 ppm, magnesium 35 ppm, buffer alkalinity 40 ppm CaCO3. PH level steadily stabilized at 7.0 for neutral palate extraction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal Simulation */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#1a1412] rounded-3xl overflow-hidden shadow-2xl border border-[#C68642]/40 flex flex-col">
            <div className="p-5 bg-[#271310] flex items-center justify-between text-white border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#C68642] text-2xl">movie</span>
                <span className="font-serif text-xl font-bold">Watch How We Brew — Chemex Ritual (4K)</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <img
                src="./images/pour_over.png"
                alt="Brewing"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 text-white">
                <div className="w-20 h-20 rounded-full bg-[#C68642] flex items-center justify-center text-white mb-3 shadow-lg animate-pulse">
                  <span className="material-symbols-outlined text-5xl">play_circle</span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-1">
                  Single-Origin Extraction Live Reel
                </h3>
                <p className="text-base text-[#f5ebdd]/90 max-w-md">
                  Demonstrating the 45-second bloom, 93°C water stream, and swirling vortex extraction.
                </p>
              </div>
            </div>
            <div className="p-5 bg-[#271310] flex items-center justify-between text-sm text-white/80">
              <span>Duration: 03:45 • High-Definition Master</span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-6 py-2.5 bg-[#C68642] text-white rounded-xl font-bold hover:bg-[#885210] text-sm"
              >
                Done Watching
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
