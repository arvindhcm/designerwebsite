import { useEffect } from "react";

export default function ImageLightbox({ src, alt, type, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 p-6"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <div className="absolute right-6 top-6">
        <button
          type="button"
          className="liquid-glass inline-flex size-10 items-center justify-center rounded-full border border-border text-ink transition-transform duration-150 ease-in-out hover:scale-105"
          onClick={onClose}
          aria-label="Close preview"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="max-h-full max-w-full rounded-md object-contain shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full rounded-md object-contain shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}
