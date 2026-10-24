import React, { useState } from 'react';

export default function HomePage({ onNavigate, onAddToCart, onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleClaimSpecial = () => {
    onShowToast('Welcome perk unlocked! Sign up to link it to your stamp card.', 'success');
    onNavigate('register');
  };

  const handleOrderSignature = () => {
    onAddToCart({
      id: 'velvet-pour-latte',
      name: 'Single-Origin Velvet Pour (Oaxaca Honey)',
      price: 5.75,
      quantity: 1,
      size: 'Regular (12 oz)'
    });
    onShowToast('Added Single-Origin Velvet Pour to your basket!', 'success');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Please enter a valid email address.', 'error');
      return;
    }
    onShowToast(`Thank you for subscribing! Welcome to Roaster's Dispatch.`, 'success');
    setNewsletterEmail('');
  };

  const directoryCards = [
    {
      id: 'home',
      title: 'Home Sanctuary',
      badge: 'Start Here',
      icon: 'cottage',
      desc: 'Our roastery flagship, botanical story, and regenerative micro-lot coffee philosophy.',
      action: 'Current Sanctuary'
    },
    {
      id: 'media',
      title: 'Media & Menu',
      badge: 'Audio & Video',
      icon: 'restaurant_menu',
      desc: 'Listen to our courtyard jazz vinyl, watch brew mechanics, and explore the complete menu table.',
      action: 'Explore Menu'
    },
    {
      id: 'register',
      title: 'Coffee Club Register',
      badge: 'Perks & Stamps',
      icon: 'loyalty',
      desc: 'Join our member club with customized palate preferences, birthday beans, and rewards.',
      action: 'Join the Club'
    },
    {
      id: 'services',
      title: 'Services & Workshops',
      badge: 'Experiences',
      icon: 'auto_awesome',
      desc: 'Bespoke event catering, home bean subscriptions, and hands-on barista masterclasses.',
      action: 'View Services'
    },
    {
      id: 'portfolio',
      title: 'Portfolio & Gallery',
      badge: '12 Plates',
      icon: 'photo_library',
      desc: 'High-definition photography of latte art, hearth laminations, roaster mechanics, and baristas.',
      action: 'Browse Gallery'
    },
    {
      id: 'contact',
      title: 'Contact & Atelier',
      badge: 'Visit Us',
      icon: 'pin_drop',
      desc: 'Flagship directions, hours drawer, craft team profiles, and direct inquiry messaging.',
      action: 'Get in Touch'
    }
  ];

  return (
    <div className="w-full">
      {/* 5. HERO SECTION (#hero-section) */}
      <section id="hero-section">
        <div className="site-container">
          <div className="hero-grid">
            {/* Hero Left Text Column */}
            <div className="hero-content">
              <div className="hero-badge">
                <span className="material-symbols-outlined hero-badge-icon">local_florist</span>
                <span className="hero-badge-text">Botanical Coffee Sanctuary</span>
              </div>

              <h1 className="hero-title">
                A Cozy Haven for Specialty Coffee &amp; Botanical Calm
              </h1>

              <p className="hero-description">
                Ethically sourced single origins, small-batch hearth pastries, and thoughtful spaces designed to inspire slow living and mindful sips.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="btn btn-primary"
                >
                  <span>View Services</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('media')}
                  className="btn btn-secondary"
                >
                  Browse Menu &amp; Media
                </button>
              </div>

              {/* Feature Micro-pills */}
              <div className="hero-features">
                <div className="feature-item">
                  <span className="material-symbols-outlined feature-icon">eco</span>
                  <span className="feature-label">100% Organic</span>
                </div>
                <div className="feature-item">
                  <span className="material-symbols-outlined feature-icon">waves</span>
                  <span className="feature-label">Small Batch</span>
                </div>
                <div className="feature-item">
                  <span className="material-symbols-outlined feature-icon">potted_plant</span>
                  <span className="feature-label">Living Oasis</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Canvas Column */}
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="./images/cafe_interior.png"
                  alt="Brew & Bloom warm sunlit cafe interior with lush botanical plants"
                />
                <div className="hero-image-overlay"></div>
                <div className="hero-floating-card">
                  <div className="hero-floating-card-inner">
                    <div>
                      <div className="floating-card-title">Sunlit Main Roastery</div>
                      <div className="floating-card-subtitle">Portland Flagship &amp; Living Green Wall</div>
                    </div>
                    <span className="material-symbols-outlined floating-card-icon">coffee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMO SECTION (#promo-section) */}
      <section id="promo-section">
        <div className="site-container">
          <div className="promo-card">
            <div className="promo-details">
              <div className="promo-icon-badge">
                <span className="material-symbols-outlined">redeem</span>
              </div>
              <div>
                <span className="promo-badge-text">Weekday Morning Special</span>
                <p className="promo-body">
                  Complimentary oat milk upgrade &amp; freshly baked almond biscotti every weekday morning before{' '}
                  <strong>9:00 AM</strong>.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClaimSpecial}
              className="promo-action-link"
            >
              <span>Claim with Stamp Card</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. HERITAGE & PHILOSOPHY SECTION (#heritage-section) */}
      <section id="heritage-section">
        <div className="site-container">
          <div className="heritage-grid">
            {/* Heritage Text Column */}
            <div className="heritage-text-col">
              <div className="section-eyebrow">
                <span className="material-symbols-outlined text-[18px]">spa</span>
                <span className="eyebrow-text">OUR HERITAGE</span>
              </div>

              <h2 className="heritage-title">
                Our Story &amp; Philosophy
              </h2>

              <p className="heritage-lead">
                Brew &amp; Bloom was born from a singular conviction: morning rituals should ground you, not rush you. Every single roast is{' '}
                <strong>hand-crafted with uncompromising care</strong> and enjoyed amidst{' '}
                <em>botanical serenity</em>.
              </p>

              <p className="heritage-body">
                We partner with micro-lot farms across Oaxaca, Sidama, and Huila that adhere strictly to regenerative agroforestry. Surrounding our brew counters with over forty species of air-purifying tropicals, we cultivate an indoor micro-climate where fresh coffee steam meets lush jungle foliage.
              </p>

              {/* Story Quote Card */}
              <div className="story-quote-card">
                <span className="material-symbols-outlined quote-watermark">format_quote</span>
                <p className="story-quote">
                  "We don't simply brew beans; we cultivate an ecosystem of slow craftsmanship, botanicals, and warm human hospitality."
                </p>
                <cite className="story-cite">
                  — ELENA ROSTOVA, CO-FOUNDER &amp; HEAD ROASTER
                </cite>
              </div>
            </div>

            {/* Heritage Visual Column */}
            <div className="heritage-visual-col">
              <div className="barista-image-frame">
                <img
                  src="./images/latte_art.png"
                  alt="Barista pouring intricate latte art into ceramic cup"
                />
                <div className="barista-badge">
                  <span className="material-symbols-outlined badge-icon">verified</span>
                  <span className="badge-label">Barista Select</span>
                </div>
              </div>

              <div className="caption-card">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="caption-card-title">Single-Origin Velvet Pour</h3>
                  <button
                    type="button"
                    onClick={handleOrderSignature}
                    className="px-3.5 py-1 rounded-full bg-[#885210] hover:bg-[#c68642] text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span>Quick Order</span>
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
                <p className="caption-card-desc">
                  Calibrated to 93°C water temperature and dialed in daily. Paired with custom ceramic vessels from local potters and whole milk steamed to velvety microscopic microfoam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXPLORE OUR CAFE DIRECTORY SECTION (#directory-section) */}
      <section id="directory-section">
        <div className="site-container">
          <div className="directory-wrapper">
            <div className="directory-header">
              <span className="directory-eyebrow">EXPLORE OUR CAFE</span>
              <h2 className="directory-title">Every Corner of Brew &amp; Bloom</h2>
              <p className="directory-subtitle">
                Seamlessly browse our full 6-page interactive experience designed for slow coffee lovers.
              </p>
            </div>

            <div className="directory-grid">
              {directoryCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onNavigate(card.id)}
                  className="directory-card"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onNavigate(card.id); }}
                >
                  <div className="card-top-content">
                    <div className="flex items-center justify-between">
                      <div className="card-icon-frame">
                        <span className="material-symbols-outlined">{card.icon}</span>
                      </div>
                      <span className="card-category-label">{card.badge}</span>
                    </div>

                    <h3 className="card-heading">{card.title}</h3>
                    <p className="card-body-text">{card.desc}</p>
                  </div>

                  <div className="card-footer-cta">
                    <span>{card.action}</span>
                    <span className="material-symbols-outlined card-cta-arrow">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER STRIP (#newsletter-section) */}
      <section id="newsletter-section">
        <div className="site-container">
          <div className="newsletter-grid">
            <div className="newsletter-info">
              <span className="newsletter-eyebrow">ROASTER'S DISPATCH</span>
              <h2 className="newsletter-heading">Savor the Slow Craft Movement</h2>
              <p className="newsletter-text">
                Receive invitations to private cupping sessions, seasonal botanical releases, and roast notes directly from our roastery hearth.
              </p>
            </div>

            <div className="newsletter-form-col">
              <form id="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
