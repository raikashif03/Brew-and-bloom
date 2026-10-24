import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Toast from './components/Toast.jsx';
import LightboxModal from './components/LightboxModal.jsx';
import ServiceModal from './components/ServiceModal.jsx';

import HomePage from './pages/HomePage.jsx';
import MenuAndMediaPage from './pages/MenuAndMediaPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([
    {
      id: 'welcome-latte',
      name: 'Single-Origin Velvet Pour (Oaxaca Honey)',
      price: 5.75,
      quantity: 1,
      size: 'Regular (12 oz)'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hoursDrawerOpen, setHoursDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Lightbox State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    photo: null,
    index: 0,
    list: []
  });

  // Service Modal State
  const [activeService, setActiveService] = useState(null);

  // Toggle Dark Mode
  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Toast Handler
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity } : i))
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Lightbox Handlers
  const handleOpenLightbox = (photo, index, list) => {
    setLightboxState({
      isOpen: true,
      photo,
      index,
      list
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrevPhoto = () => {
    const prevIndex = (lightboxState.index - 1 + lightboxState.list.length) % lightboxState.list.length;
    setLightboxState((prev) => ({
      ...prev,
      index: prevIndex,
      photo: prev.list[prevIndex]
    }));
  };

  const handleNextPhoto = () => {
    const nextIndex = (lightboxState.index + 1) % lightboxState.list.length;
    setLightboxState((prev) => ({
      ...prev,
      index: nextIndex,
      photo: prev.list[nextIndex]
    }));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#c68642]/30 selection:text-[#3e2723]">
      {/* Dynamic Navbar styled uniquely per current page */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        hoursDrawerOpen={hoursDrawerOpen}
        onToggleHoursDrawer={() => setHoursDrawerOpen(!hoursDrawerOpen)}
      />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
          />
        )}
        {currentPage === 'media' && (
          <MenuAndMediaPage
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
          />
        )}
        {currentPage === 'register' && (
          <RegisterPage
            onShowToast={showToast}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
            onOpenServiceModal={(srv) => setActiveService(srv)}
          />
        )}
        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenLightbox={handleOpenLightbox}
            onShowToast={showToast}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            darkMode={darkMode}
            onToggleDarkMode={handleToggleDarkMode}
            hoursDrawerOpen={hoursDrawerOpen}
            onToggleHoursDrawer={() => setHoursDrawerOpen(!hoursDrawerOpen)}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Service Details & Booking Modal */}
      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onAddToCart={handleAddToCart}
        onShowToast={showToast}
      />

      {/* Gallery Lightbox Modal */}
      {lightboxState.isOpen && (
        <LightboxModal
          photo={lightboxState.photo}
          onClose={handleCloseLightbox}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
          hasPrev={lightboxState.list.length > 1}
          hasNext={lightboxState.list.length > 1}
        />
      )}

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Page Footer */}
      <Footer onNavigate={setCurrentPage} onShowToast={showToast} />
    </div>
  );
}
