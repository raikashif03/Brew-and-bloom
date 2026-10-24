import React, { useState } from 'react';

export default function ContactPage({
  darkMode,
  onToggleDarkMode,
  hoursDrawerOpen,
  onToggleHoursDrawer,
  onShowToast
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(form.email);

  const team = [
    {
      name: 'Elena Rostova',
      role: 'Co-Founder & Roaster',
      badge: 'Head Roaster',
      bio: 'Sourcing heirloom Ethiopian varietals and leading sensory cast-iron roast profiles.',
      image: '/images/friendly_barista.png'
    },
    {
      name: 'Marcus Vance',
      role: 'Cupping Specialist',
      badge: 'Q-Grader',
      bio: 'Certified Q-grader curating delicate pour-overs and water minerality chemistry.',
      image: '/images/pour_over.png'
    },
    {
      name: 'Chloe Lin',
      role: 'Pastry Chef & Botanist',
      badge: 'Botanist',
      bio: 'Crafting cardamom buns, edible bloom pairings, and living botanical flora arrangements.',
      image: '/images/latte_art.png'
    }
  ];

  const handleInputChange = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      onShowToast('Please fill in all required fields.', 'error');
      return;
    }
    if (!isEmailValid) {
      onShowToast('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitted(true);
    onShowToast(`Thank you ${form.name}! Your message has been sent to our roastery team.`, 'success');
  };

  const handleZoomIn = () => {
    setMapZoom((prev) => Math.min(prev + 0.25, 2.0));
  };

  const handleZoomOut = () => {
    setMapZoom((prev) => Math.max(prev - 0.25, 0.75));
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=142+Blossom+St+Portland+OR', '_blank');
  };

  return (
    <div className="w-full pt-20 bg-[#fff8f2] dark:bg-[#1a1412] text-[#1f1b13] dark:text-[#f7edde] min-h-screen transition-colors">
      {/* Sub-header Strip - EXACT match to Pic 3 */}
      <div className="w-full bg-[#fcf2e4] dark:bg-[#201916] border-b border-[#3e2723]/10 dark:border-white/10 py-2.5 px-4">
        <div className="site-container flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#504442] dark:text-[#d3c3c0] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#885210] dark:bg-[#c68642]"></span>
            <span>FLAGSHIP ROASTERY</span>
            <span className="text-[#885210]/40 dark:text-white/20">•</span>
            <span>PORTLAND ATELIER</span>
          </div>

          <button
            type="button"
            onClick={onToggleHoursDrawer}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#2b221f] text-[#3e2723] dark:text-[#f7edde] border border-[#3e2723]/15 dark:border-white/15 text-xs font-semibold shadow-sm hover:bg-[#f7edde] transition-colors"
          >
            <span className="material-symbols-outlined text-[15px] text-[#885210] dark:text-[#c68642]">
              schedule
            </span>
            <span>Roastery Hours</span>
            <span
              className={`material-symbols-outlined text-[13px] transition-transform duration-200 ${
                hoursDrawerOpen ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </button>
        </div>
      </div>

      {/* Hero Title Section - Exact match to Pic 3 */}
      <section className="site-container pt-10 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#3e2723]/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#885210] dark:text-[#c68642] text-xs font-bold tracking-widest uppercase mb-2">
              <span className="material-symbols-outlined text-[16px]">pin_drop</span>
              <span>GET IN TOUCH • PORTLAND ROASTERY</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#271310] dark:text-white tracking-tight">
              Connect with Our Sanctuary
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] max-w-lg leading-relaxed">
            Whether you're seeking wholesale single-origin lots, botanical workshop bookings, or simply a table under our fiddle-leaf figs, our team is at your service.
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout - Exact match to Pic 3 */}
      <section className="site-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Story, Team & Atelier Specs (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story & Botanical Sanctuary Card */}
            <article className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#241c19] border border-[#3e2723]/10 dark:border-white/10 shadow-sm space-y-4">
              <span className="text-[11px] uppercase tracking-wider text-[#885210] dark:text-[#c68642] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">eco</span>
                REGENERATIVE CRAFT
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#271310] dark:text-white">
                Our Story &amp; Botanical Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                Brew &amp; Bloom was born at the intersection of slow botanical living and ethical, altitude-grown coffee. We partner directly with regenerative shade-canopy farms across Oaxaca and Sidama, hand-roasting in micro-batches every Tuesday and Thursday morning.
              </p>
              <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                Inside our Portland timber warehouse, living green walls and seasonal flora filter the morning sun while antique copper lever espresso machines extract single-origin sweetness. A tranquil respite carved directly into the heart of the city.
              </p>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#3e2723]/10 dark:border-white/10">
                <div className="p-3.5 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#271310] dark:text-white">
                    100%
                  </p>
                  <p className="text-[10px] text-[#504442] dark:text-[#d3c3c0] uppercase font-bold mt-0.5">
                    Traceable Lots
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#271310] dark:text-white">
                    Zero
                  </p>
                  <p className="text-[10px] text-[#504442] dark:text-[#d3c3c0] uppercase font-bold mt-0.5">
                    Synthetic Pesticides
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#271310] dark:text-white">
                    12+
                  </p>
                  <p className="text-[10px] text-[#504442] dark:text-[#d3c3c0] uppercase font-bold mt-0.5">
                    Living Plant Taxa
                  </p>
                </div>
              </div>
            </article>

            {/* Meet the Craft Team */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#885210] dark:text-[#c68642] font-bold">
                    CRAFT • PEOPLE
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#271310] dark:text-white">
                    Meet the Craft Team
                  </h3>
                </div>
                <span className="text-xs text-[#504442] dark:text-[#d3c3c0] italic hidden sm:inline">
                  Every cup has a signature
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {team.map((member, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-3xl bg-white dark:bg-[#241c19] border border-[#3e2723]/10 dark:border-white/10 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all"
                  >
                    <div>
                      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#ebe1d3] mb-3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/75 text-white text-[10px] font-bold backdrop-blur-sm">
                          {member.badge}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#271310] dark:text-white">
                        {member.name}
                      </h4>
                      <p className="text-xs text-[#885210] dark:text-[#c68642] font-semibold mb-1">
                        {member.role}
                      </p>
                      <p className="text-xs text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Atelier Information Card - Exact match to Pic 3 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#241c19] border border-[#3e2723]/10 dark:border-white/10 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#271310] dark:text-white">
                Atelier Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Flagship Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#f7edde] dark:bg-[#2b221f] text-[#885210] dark:text-[#c68642] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-[#885210] dark:text-[#c68642]">
                      FLAGSHIP ADDRESS
                    </p>
                    <p className="text-sm font-bold text-[#271310] dark:text-white">
                      142 Blossom St
                    </p>
                    <p className="text-xs text-[#504442] dark:text-[#d3c3c0]">
                      Portland, OR 97204
                    </p>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#f7edde] dark:bg-[#2b221f] text-[#885210] dark:text-[#c68642] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-[#885210] dark:text-[#c68642]">
                      DIRECT TELEPHONE
                    </p>
                    <p className="text-sm font-bold text-[#271310] dark:text-white">
                      (503) 555-0198
                    </p>
                    <p className="text-xs text-[#504442] dark:text-[#d3c3c0]">
                      Daily 7am – 6pm PST
                    </p>
                  </div>
                </div>

                {/* Electronic Mail */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#f7edde] dark:bg-[#2b221f] text-[#885210] dark:text-[#c68642] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-[#885210] dark:text-[#c68642]">
                      ELECTRONIC MAIL
                    </p>
                    <a
                      href="mailto:hello@brewandbloom.cafe"
                      className="text-sm font-bold text-[#271310] dark:text-white hover:text-[#885210] underline"
                    >
                      hello@brewandbloom.cafe
                    </a>
                    <p className="text-xs text-[#504442] dark:text-[#d3c3c0]">
                      Response within 24h
                    </p>
                  </div>
                </div>

                {/* Espresso & Bloom Bar */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#f7edde] dark:bg-[#2b221f] text-[#885210] dark:text-[#c68642] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-[#885210] dark:text-[#c68642]">
                      ESPRESSO &amp; BLOOM BAR
                    </p>
                    <p className="text-xs text-[#271310] dark:text-white font-medium">
                      Mon–Fri: 7:00 AM – 6:00 PM
                    </p>
                    <p className="text-xs text-[#271310] dark:text-white font-medium">
                      Sat–Sun: 8:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Send Us a Message Interactive Form (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#241c19] border border-[#3e2723]/10 dark:border-white/10 shadow-xl relative overflow-hidden">
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#885210] dark:text-[#c68642] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">edit_note</span>
                  INQUIRIES &amp; BOOKINGS
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#271310] dark:text-white mt-1">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] mt-1 leading-relaxed">
                  We're always delighted to discuss wholesale partnerships, workshop reservations, or garden events.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-5 p-4 rounded-2xl bg-[#6B8E6B]/15 border border-[#6B8E6B] text-[#2E7D32] dark:text-[#abd0a9] flex items-start gap-3 animate-fadeIn">
                  <span className="material-symbols-outlined text-2xl shrink-0">check_circle</span>
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-[#504442] dark:text-[#d3c3c0] mt-0.5">
                      Elena or Marcus will respond within 24 hours. A copy has been saved.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>Full Name *</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      person
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lindqvist"
                      value={form.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>Email Address *</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      mail
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="maya@botanicalstudio.com"
                      value={form.email}
                      onBlur={() => handleBlur('email')}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border transition-all ${
                        touched.email && !isEmailValid
                          ? 'border-red-500 ring-2 ring-red-400/20'
                          : touched.email && isEmailValid
                          ? 'border-green-600 ring-2 ring-green-600/20'
                          : 'border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]'
                      }`}
                    />
                  </div>
                  {/* Helper */}
                  <div className="flex items-center gap-1.5 text-xs font-medium pt-0.5">
                    {form.email ? (
                      isEmailValid ? (
                        <span className="text-green-600 dark:text-green-400 flex items-center gap-1 font-semibold text-[11px]">
                          <span className="material-symbols-outlined text-[13px]">check_circle</span>
                          valid email format
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center gap-1 font-semibold text-[11px]">
                          <span className="material-symbols-outlined text-[13px]">info</span>
                          please enter a complete email address
                        </span>
                      )
                    ) : (
                      <span className="text-[#504442] dark:text-[#d3c3c0] text-[11px]">
                        valid email format
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>Phone Number</span>
                    <span className="text-[#504442] dark:text-[#d3c3c0] text-[11px] font-normal">Optional</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      call
                    </span>
                    <input
                      type="tel"
                      placeholder="(503) 000-0000"
                      value={form.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                    Subject
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      tag
                    </span>
                    <select
                      value={form.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Wholesale Single-Origin">Wholesale Single-Origin Beans</option>
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Private Workshop">Private Botanical Workshop</option>
                      <option value="Catering & Events">Catering &amp; Garden Gatherings</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                    Your Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share details about your event, catering requirements, or questions regarding our current single-origin harvests..."
                    value={form.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642] resize-y leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#885210] hover:bg-[#724308] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <p className="text-[11px] text-center text-[#504442] dark:text-[#d3c3c0]">
                  We respect your privacy. No promotional spam, ever.
                </p>
              </form>

              {/* Private Tasting Note Under Form */}
              <div className="mt-5 p-4 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] flex items-center gap-3 text-[#504442] dark:text-[#d3c3c0]">
                <span className="material-symbols-outlined text-[#885210] dark:text-[#c68642] text-xl shrink-0">
                  workspace_premium
                </span>
                <p className="text-xs leading-relaxed">
                  Interested in private tastings? We host small groups up to 12 guests for sensory coffee cupping and floral bouquet creation every Friday evening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GREEN CIRCLED MAP SECTION: Brew & Bloom Portland Flagship (Pic 3) */}
      <section className="site-container py-10">
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#241c19] border border-[#3e2723]/15 dark:border-white/10 shadow-xl">
          {/* Header Bar above Map - Exact match to Pic 3 */}
          <div className="px-6 py-4 bg-[#fcf2e4] dark:bg-[#201916] border-b border-[#3e2723]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-[#885210]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
              </svg>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#271310] dark:text-white">
                Brew &amp; Bloom Portland Flagship
              </h3>
            </div>

            <button
              type="button"
              onClick={openGoogleMaps}
              className="px-4 py-1.5 rounded-full bg-[#271310] dark:bg-white text-white dark:text-[#271310] text-xs font-bold flex items-center gap-1.5 shadow hover:bg-[#3e2723] transition-colors"
            >
              <span>Get Directions</span>
              <span className="material-symbols-outlined text-[15px]">north_east</span>
            </button>
          </div>

          {/* Interactive Botanical Cartographic Map Container */}
          <div className="relative w-full h-[400px] sm:h-[460px] bg-[#e8e0d5] overflow-hidden select-none">
            {/* Map Canvas Background: Stylized Willamette River & Portland Waterfront Grid */}
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out origin-center"
              style={{ transform: `scale(${mapZoom})` }}
            >
              <svg
                className="w-full h-full min-w-[800px] min-h-[460px]"
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Land */}
                <rect width="1000" height="600" fill="#ede5d8" />

                {/* Botanical Parks / Green Reserves */}
                <path
                  d="M0,0 L260,0 C280,120 220,240 180,320 C140,400 80,480 0,520 Z"
                  fill="#d4e4d4"
                  opacity="0.85"
                />
                <path
                  d="M740,0 C770,80 820,160 880,210 C940,260 1000,280 1000,300 L1000,0 Z"
                  fill="#d4e4d4"
                  opacity="0.75"
                />
                <circle cx="210" cy="180" r="45" fill="#c3dbbe" opacity="0.9" />
                <circle cx="860" cy="150" r="60" fill="#c3dbbe" opacity="0.9" />
                <circle cx="780" cy="420" r="50" fill="#c3dbbe" opacity="0.9" />

                {/* Street Grid Lines */}
                <g stroke="#ddd1c0" strokeWidth="2" strokeDasharray="none">
                  {/* East-West Streets */}
                  {[60, 120, 180, 240, 300, 360, 420, 480, 540].map((y) => (
                    <line key={y} x1="0" y1={y} x2="1000" y2={y} />
                  ))}
                  {/* North-South Avenues */}
                  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="600" />
                  ))}
                </g>

                {/* Major Arteries / Boulevards */}
                <g stroke="#cbbca8" strokeWidth="4">
                  <line x1="0" y1="240" x2="1000" y2="240" />
                  <line x1="0" y1="420" x2="1000" y2="420" />
                  <line x1="300" y1="0" x2="300" y2="600" />
                  <line x1="700" y1="0" x2="700" y2="600" />
                </g>

                {/* Willamette River (Winding through Portland) */}
                <path
                  d="M480,0 C450,110 420,200 460,300 C500,400 540,500 510,600 L590,600 C620,500 580,400 540,300 C500,200 530,110 560,0 Z"
                  fill="#b9d6dc"
                  opacity="0.95"
                />

                {/* River Bridges */}
                <line x1="430" y1="180" x2="520" y2="180" stroke="#885210" strokeWidth="5" strokeLinecap="round" />
                <line x1="450" y1="310" x2="535" y2="310" stroke="#885210" strokeWidth="5" strokeLinecap="round" />
                <line x1="510" y1="450" x2="580" y2="450" stroke="#885210" strokeWidth="5" strokeLinecap="round" />

                {/* Subtle trees & botanical clusters */}
                <g fill="#88a888" opacity="0.6">
                  <circle cx="160" cy="140" r="6" />
                  <circle cx="175" cy="150" r="5" />
                  <circle cx="150" cy="160" r="7" />
                  <circle cx="230" cy="200" r="6" />
                  <circle cx="820" cy="130" r="8" />
                  <circle cx="840" cy="160" r="6" />
                  <circle cx="760" cy="400" r="7" />
                  <circle cx="480" cy="480" r="5" />
                  <circle cx="360" cy="280" r="6" />
                </g>

                {/* River Waterfront Label */}
                <text x="490" y="270" fill="#69929a" fontSize="11" fontFamily="'DM Sans', sans-serif" fontWeight="700" letterSpacing="2" transform="rotate(75, 490, 270)">
                  WILLAMETTE RIVER
                </text>
              </svg>

              {/* Central Map Pin: Brew & Bloom Roastery - Exact match to Pic 3 */}
              <div
                className="absolute left-[54%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                onClick={openGoogleMaps}
              >
                {/* Roastery Label Pill */}
                <div className="px-3.5 py-1.5 rounded-full bg-[#271310] text-[#f7edde] text-xs font-bold shadow-2xl border border-[#c68642]/60 flex items-center gap-1.5 whitespace-nowrap group-hover:scale-105 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-[#6B8E6B] animate-ping"></span>
                  <span>Brew &amp; Bloom Roastery</span>
                </div>

                {/* Coffee Pin Icon */}
                <div className="w-11 h-11 rounded-full bg-[#885210] border-2 border-white text-white flex items-center justify-center shadow-2xl -mt-1 group-hover:bg-[#c68642] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
                  </svg>
                </div>

                {/* Pointer Tip */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white -mt-0.5"></div>
              </div>
            </div>

            {/* Left Floating Overlay Card: Contact Us (Exact match to Pic 3) */}
            <div className="absolute top-4 left-4 max-w-[240px] sm:max-w-[270px] bg-white/95 dark:bg-[#1a1412]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#3e2723]/15 dark:border-white/15 shadow-xl space-y-2 pointer-events-auto">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#885210]"></span>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#271310] dark:text-white">
                  Contact Us
                </h4>
              </div>
              <p className="text-[11px] text-[#504442] dark:text-[#d3c3c0] leading-snug">
                We're always here to help you enjoy slow living coffee.
              </p>

              <div className="pt-2 border-t border-[#3e2723]/10 dark:border-white/10 space-y-1.5 text-xs text-[#504442] dark:text-[#d3c3c0]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-[#885210] dark:text-[#c68642]">
                    pin_drop
                  </span>
                  <span className="font-medium text-[#271310] dark:text-white truncate">
                    142 Blossom St, Portland
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-[#885210] dark:text-[#c68642]">
                    call
                  </span>
                  <span>(503) 555-0198</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-[#885210] dark:text-[#c68642]">
                    mail
                  </span>
                  <span className="truncate">hello@brewandbloom.cafe</span>
                </div>
              </div>

              <button
                type="button"
                onClick={openGoogleMaps}
                className="w-full mt-2 py-1.5 rounded-lg bg-[#3e2723] hover:bg-[#885210] text-white text-[11px] font-bold transition-colors"
              >
                Directions in Google Maps
              </button>
            </div>

            {/* Bottom Right Map Zoom Controls (+ / -) - Exact match to Pic 3 */}
            <div className="absolute bottom-4 right-4 flex flex-col rounded-xl overflow-hidden shadow-xl border border-[#3e2723]/15 dark:border-white/20 bg-white dark:bg-[#2b221f]">
              <button
                type="button"
                onClick={handleZoomIn}
                className="w-9 h-9 flex items-center justify-center text-[#271310] dark:text-white hover:bg-[#f7edde] dark:hover:bg-[#3e2723] border-b border-[#3e2723]/10 dark:border-white/10 font-bold text-lg cursor-pointer transition-colors"
                title="Zoom in map"
                aria-label="Zoom in map"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="w-9 h-9 flex items-center justify-center text-[#271310] dark:text-white hover:bg-[#f7edde] dark:hover:bg-[#3e2723] font-bold text-lg cursor-pointer transition-colors"
                title="Zoom out map"
                aria-label="Zoom out map"
              >
                –
              </button>
            </div>

            {/* Zoom Indicator badge */}
            <div className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
              Zoom: {Math.round(mapZoom * 100)}%
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
