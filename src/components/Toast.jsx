import React from 'react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
      <div
        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-white font-medium text-sm backdrop-blur-md border ${
          isSuccess
            ? 'bg-[#271310]/95 border-[#6B8E6B] text-[#fff8f2]'
            : isError
            ? 'bg-[#ba1a1a]/95 border-red-400 text-white'
            : 'bg-[#3E2723]/95 border-[#C68642] text-[#fff8f2]'
        }`}
      >
        <span className="material-symbols-outlined text-[20px] text-[#C68642]">
          {isSuccess ? 'check_circle' : isError ? 'error' : 'info'}
        </span>
        <span>{toast.message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
}
