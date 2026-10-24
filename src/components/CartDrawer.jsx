import React from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
  onShowToast
}) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    onShowToast(`Order placed successfully! Total: $${total.toFixed(2)}. We will prepare your items with love!`, 'success');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#fff8f2] dark:bg-[#1a1412] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#3e2723]/10 dark:border-white/10 flex items-center justify-between bg-[#f7edde] dark:bg-[#241c19]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-2xl text-[#885210] dark:text-[#c68642]">
                shopping_bag
              </span>
              <h2 className="font-serif text-lg font-bold text-[#3e2723] dark:text-white">
                Your Atelier Basket
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#3e2723] dark:text-white hover:bg-black/5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#504442] dark:text-[#d3c3c0]">
                <div className="w-16 h-16 rounded-full bg-[#f5ebdd] dark:bg-[#2b221f] flex items-center justify-center text-[#c68642] mb-3 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">local_cafe</span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#3e2723] dark:text-white mb-1.5">
                  Your basket is empty
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed max-w-xs">
                  Add some freshly roasted coffee, hearth croissants, or workshop seats to start your order.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#241c19] border border-[#3e2723]/10 dark:border-white/10 shadow-sm"
                >
                  <div className="flex-1 pr-3">
                    <h4 className="font-bold text-sm text-[#271310] dark:text-white">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#885210] dark:text-[#c68642] font-bold">
                      ${item.price.toFixed(2)} each
                    </span>
                    {item.size && (
                      <span className="text-[11px] text-[#504442] dark:text-[#d3c3c0] block mt-0.5">
                        Size: {item.size}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center border border-[#3e2723]/20 dark:border-white/20 rounded-xl overflow-hidden bg-[#f7edde] dark:bg-[#2b221f]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs font-bold hover:bg-[#c68642] hover:text-white transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-bold text-[#271310] dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs font-bold hover:bg-[#c68642] hover:text-white transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-serif font-bold text-sm text-[#3e2723] dark:text-white w-14 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#3e2723]/10 dark:border-white/10 bg-[#f7edde] dark:bg-[#241c19] space-y-3">
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-[#504442] dark:text-[#d3c3c0]">
                  <span>Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#504442] dark:text-[#d3c3c0]">
                  <span>Estimated Tax (8.5%)</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#271310] dark:text-white pt-1.5 border-t border-[#3e2723]/10 dark:border-white/10">
                  <span>Total</span>
                  <span className="text-[#885210] dark:text-[#c68642] font-serif text-lg font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={onClearCart}
                  className="px-3.5 py-2.5 text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-colors cursor-pointer"
                >
                  Clear
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#c68642] hover:bg-[#885210] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Complete Pickup Order</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
