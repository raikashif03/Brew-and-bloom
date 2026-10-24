import React, { useState } from 'react';

export default function Navbar({
  currentPage,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  cartCount,
  onOpenCart,
  onToggleHoursDrawer,
  hoursDrawerOpen
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'media', label: 'Media' },
    { id: 'register', label: 'Register' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header id="site-header">
        <div className="site-container header-inner">
          {/* Brand Logo - EXACT match to user Picture 2 (Coffee cup icon + Brew & Bloom) */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="brand-logo"
            aria-label="Brew & Bloom - Back to Home"
          >
            <svg className="brand-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
            </svg>
            <span className="brand-name">Brew &amp; Bloom</span>
          </button>

          {/* Desktop Navigation Links - Consistent across ALL pages */}
          {/* Whichever page is selected (Home, Services, Portfolio, etc.), gets 'active' (dark pill with #ae8d87 text) */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions: Theme Toggle, Quick Hours, Cart & Mobile Hamburger */}
          <div className="header-actions">
            {/* Quick Hours Drawer Toggle */}
            <button
              type="button"
              onClick={onToggleHoursDrawer}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#504442] dark:text-[#d3c3c0] hover:text-[#271310] dark:hover:text-white hover:bg-[#3e2723]/10 dark:hover:bg-white/10 transition-colors"
              title="Toggle Roastery Hours"
              aria-label="Toggle Roastery Hours"
            >
              <span className="material-symbols-outlined text-[17px] text-[#885210] dark:text-[#c68642]">
                schedule
              </span>
              <span>Hours</span>
              <span
                className={`material-symbols-outlined text-[14px] transition-transform duration-200 ${
                  hoursDrawerOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#504442] dark:text-[#f7edde] hover:bg-[#3e2723]/10 dark:hover:bg-white/10 transition-colors"
              title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
              aria-label={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
            >
              <span className="material-symbols-outlined text-[20px] text-[#885210] dark:text-[#fdb56c]">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Shopping Bag / Cart Button with Badge */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Open Order Cart"
              className="account-btn"
            >
              <span className="material-symbols-outlined text-[19px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#c68642] text-white text-[11px] font-bold flex items-center justify-center shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#3e2723] dark:text-[#f7edde] hover:bg-[#3e2723]/10"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Nav Indicator Strip */}
        <div className="mobile-nav-strip">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Quick Opening Hours Sticky Dropdown / Drawer */}
      {hoursDrawerOpen && (
        <div className="fixed top-20 inset-x-0 z-40 bg-[#3E2723] text-white py-3 px-4 shadow-xl border-b border-[#C68642]/30 animate-fadeIn">
          <div className="w-[95%] max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6B8E6B] animate-pulse"></span>
              <span className="font-semibold text-[#fdb56c]">Open Today:</span>
              <span>Mon–Fri: 7:00 AM – 6:00 PM</span>
              <span className="text-white/40">|</span>
              <span>Sat–Sun: 8:00 AM – 7:00 PM</span>
            </div>
            <div className="flex items-center gap-5 text-white/90">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C68642]">pin_drop</span>
                142 Blossom St, Portland, OR
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C68642]">call</span>
                (503) 555-0198
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Slide-out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end animate-fadeIn">
          <div className="w-4/5 max-w-sm bg-[#fff8f2] dark:bg-[#1a1412] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#3E2723]/10 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <svg className="w-6 h-6 text-[#885210]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
                  </svg>
                  <span className="font-serif text-lg font-bold text-[#271310] dark:text-white">
                    Brew &amp; Bloom
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#3E2723] dark:text-white hover:bg-[#3E2723]/10"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Mobile Drawer Navigation Links */}
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-[#3E2723] text-[#AE8D87] shadow-sm font-bold'
                          : 'text-[#3E2723] dark:text-[#f7edde] hover:bg-[#F5EBDD] dark:hover:bg-[#2b221f]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-sm">
                        {isActive ? 'check' : 'arrow_forward_ios'}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#3E2723]/10 dark:border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-semibold text-[#504442] dark:text-[#d3c3c0]">
                  Theme Mode
                </span>
                <button
                  type="button"
                  onClick={onToggleDarkMode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5EBDD] dark:bg-[#2b221f] text-xs font-bold text-[#3E2723] dark:text-white shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {darkMode ? 'light_mode' : 'dark_mode'}
                  </span>
                  <span>{darkMode ? 'Light' : 'Dark'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 rounded-xl bg-[#271310] hover:bg-[#3e2723] text-[#f7edde] font-bold flex items-center justify-center gap-2 shadow-md text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                <span>Open Cart ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
