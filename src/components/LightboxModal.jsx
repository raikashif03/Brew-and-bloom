import React from 'react';

export default function LightboxModal({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 shadow-lg cursor-pointer"
        aria-label="Close Lightbox"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all z-40 hidden sm:flex cursor-pointer"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-4xl">chevron_left</span>
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all z-40 hidden sm:flex cursor-pointer"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-4xl">chevron_right</span>
        </button>
      )}

      {/* Content Container */}
      <div className="relative max-w-5xl w-full max-h-[92vh] bg-[#271310] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#C68642]/30">
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] max-h-[68vh]">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[68vh]"
          />
          <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm text-[#fdb56c] font-bold border border-[#c68642]/40">
            {photo.category} • {photo.plate || 'Plate No. 01'}
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-[#3e2723] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
              {photo.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#f5ebdd]/90 max-w-2xl leading-relaxed">
              {photo.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#c68642] text-white font-bold shadow">
              {photo.tag || 'Specialty'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
