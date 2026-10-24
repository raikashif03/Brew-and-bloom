import React from 'react';

export default function Footer({ onNavigate, onShowToast }) {
  return (
    <footer id="site-footer" className="bg-[#fbf3e7] dark:bg-[#1a1412] text-[#1f1b13] dark:text-[#f7edde] border-t border-[#3e2723]/10 dark:border-white/10 pt-12 pb-8 transition-colors">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand Column - Exact match to Pic 3 & Pic 2 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-[#885210]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
              </svg>
              <span className="font-serif text-xl font-bold text-[#271310] dark:text-white tracking-tight">
                Brew &amp; Bloom
              </span>
            </div>
            <p className="text-sm text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
              Artisanal roasts &amp; botanical moments in every cup.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast('Brew & Bloom Instagram: @brewandbloom.portland');
                }}
                className="w-8 h-8 rounded-full bg-[#f7edde] dark:bg-[#2b221f] border border-[#3e2723]/10 dark:border-white/10 flex items-center justify-center text-[#504442] dark:text-[#f7edde] hover:bg-[#271310] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[17px]">photo_camera</span>
              </a>
              <a
                href="#music"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast('Loading Cafe Soundscape & Playlist...');
                  onNavigate('media');
                }}
                className="w-8 h-8 rounded-full bg-[#f7edde] dark:bg-[#2b221f] border border-[#3e2723]/10 dark:border-white/10 flex items-center justify-center text-[#504442] dark:text-[#f7edde] hover:bg-[#271310] hover:text-white transition-all"
                aria-label="Cafe Playlist"
              >
                <span className="material-symbols-outlined text-[17px]">graphic_eq</span>
              </a>
              <a
                href="#share"
                onClick={(e) => {
                  e.preventDefault();
                  navigator?.clipboard?.writeText(window.location.href);
                  onShowToast('Website link copied to clipboard!', 'success');
                }}
                className="w-8 h-8 rounded-full bg-[#f7edde] dark:bg-[#2b221f] border border-[#3e2723]/10 dark:border-white/10 flex items-center justify-center text-[#504442] dark:text-[#f7edde] hover:bg-[#271310] hover:text-white transition-all"
                aria-label="Share"
              >
                <span className="material-symbols-outlined text-[17px]">share</span>
              </a>
            </div>
          </div>

          {/* Visit Our Atelier Column */}
          <div className="flex flex-col gap-2">
            <h4 className="font-sans text-sm font-bold text-[#271310] dark:text-white tracking-tight mb-1">
              Visit Our Atelier
            </h4>
            <p className="text-sm text-[#504442] dark:text-[#d3c3c0]">
              142 Blossom St, Portland, OR
            </p>
            <p className="text-sm text-[#504442] dark:text-[#d3c3c0]">
              United States
            </p>
            <p className="text-xs text-[#885210] dark:text-[#c68642] font-semibold mt-1">
              Tel: (503) 555-0198
            </p>
          </div>

          {/* Opening Hours Column */}
          <div className="flex flex-col gap-2">
            <h4 className="font-sans text-sm font-bold text-[#271310] dark:text-white tracking-tight mb-1">
              Opening Hours
            </h4>
            <p className="text-sm text-[#504442] dark:text-[#d3c3c0]">
              Mon - Fri: 7am - 6pm
            </p>
            <p className="text-sm text-[#504442] dark:text-[#d3c3c0]">
              Sat - Sun: 8am - 7pm
            </p>
            <p className="text-xs text-[#885210] dark:text-[#c68642] font-semibold mt-1">
              Sensory Cupping: Thu 2pm
            </p>
          </div>

          {/* Specialty Offerings Column */}
          <div className="flex flex-col gap-2">
            <h4 className="font-sans text-sm font-bold text-[#271310] dark:text-white tracking-tight mb-1">
              Specialty Offerings
            </h4>
            <ul className="space-y-1.5 text-sm text-[#504442] dark:text-[#d3c3c0]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-[#885210] dark:hover:text-[#c68642] transition-colors text-left"
                >
                  Single Origin Pour-Overs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('register');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-[#885210] dark:hover:text-[#c68642] transition-colors text-left"
                >
                  Seasonal Floral Subscriptions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-[#885210] dark:hover:text-[#c68642] transition-colors text-left"
                >
                  Private Botanical Workshops
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar - Exact match to Pic 3 */}
        <div className="pt-6 border-t border-[#3e2723]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#504442] dark:text-[#d3c3c0]">
          <p>© 2024 Brew &amp; Bloom. All rights reserved.</p>
          <p className="font-medium text-[#885210] dark:text-[#c68642]">
            Crafted with warmth &amp; organic botanicals
          </p>
        </div>
      </div>
    </footer>
  );
}
