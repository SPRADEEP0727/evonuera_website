"use client";

interface VideoThumbnailProps {
  onClick: () => void;
  thumbnailSrc?: string;
}

export default function VideoThumbnail({
  onClick,
  thumbnailSrc,
}: VideoThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-full max-w-2xl mx-auto block group focus:outline-none"
      aria-label="Watch Free Masterclass"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-gradient-to-br from-brand-bg to-brand-primary/20">
        {thumbnailSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailSrc}
            alt="Masterclass thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder thumbnail */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
            <div className="text-center mb-4">
              <p className="text-brand-muted text-sm uppercase tracking-widest mb-2">Free Masterclass</p>
              <h3 className="text-white text-2xl font-bold leading-tight">
                How to Build Real AI Systems
              </h3>
            </div>
            {/* Waveform decoration */}
            <div className="flex items-center gap-1 opacity-40">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-brand-secondary rounded-full w-1"
                  style={{ height: `${8 + Math.sin(i * 0.7) * 16}px` }}
                />
              ))}
            </div>
            <p className="text-brand-muted text-sm mt-2">7-minute masterclass</p>
          </div>
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-xl">
            <svg
              className="w-6 h-6 text-brand-primary ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-brand-muted text-sm text-center mt-3">
        Click to watch the free masterclass
      </p>
    </button>
  );
}
