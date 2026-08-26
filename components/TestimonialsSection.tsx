"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Shreeja",
    role: "Gen AI Systems Architect Program",
    src: "/video/Testimonials/Testiminial_Shreeja.mp4",
  },
  {
    name: "Sudhar",
    role: "Gen AI Systems Architect Program",
    src: "/video/Testimonials/Testiminial_sudhar.mp4",
  },
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Track which slide is centered while the user swipes/scrolls
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let best = Infinity;
        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;
          const dist = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - center);
          if (dist < best) {
            best = dist;
            nearest = i;
          }
        });
        setActive(nearest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Pause any video that is no longer the active slide
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== active) video.pause();
    });
  }, [active]);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  const step = useCallback(
    (delta: number) => {
      const next = Math.min(testimonials.length - 1, Math.max(0, active + delta));
      goTo(next);
    },
    [active, goTo]
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-2 relative overflow-hidden">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="badge badge-dot mb-6">Student Stories</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            What Our <span className="gradient-text">Builders Say</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Hear directly from builders who finished the program and shipped
            real AI systems. Swipe to watch.
          </p>
        </div>

        <div className="relative">
          {/* Swipeable track */}
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Video testimonials"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                step(1);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                step(-1);
              }
            }}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 outline-none"
            style={{
              paddingInline: "max(1rem, calc(50% - 160px))",
              scrollPaddingInline: "max(1rem, calc(50% - 160px))",
            }}
          >
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.name}
                  ref={(el) => {
                    slideRefs.current[i] = el;
                  }}
                  className={`snap-center shrink-0 w-[280px] sm:w-[320px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-40 blur-[1px]"
                  }`}
                >
                  <figure
                    className={`card p-3 transition-shadow duration-500 ${
                      isActive ? "glow-primary" : ""
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden bg-black">
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        src={t.src}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full aspect-[9/16] object-cover block"
                      />
                    </div>
                    <figcaption className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-4 px-1">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary shrink-0" />
                      <span className="text-white font-semibold text-sm">
                        {t.name}
                      </span>
                      <span className="text-brand-muted text-xs basis-full sm:basis-auto pl-4 sm:pl-0">{t.role}</span>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={active === 0}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-brand-primary/30 hover:border-brand-primary/50 disabled:opacity-25 disabled:pointer-events-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5 7.5 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={active === testimonials.length - 1}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-brand-primary/30 hover:border-brand-primary/50 disabled:opacity-25 disabled:pointer-events-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 4.5 7.5 7.5L9 19.5" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={"Show testimonial from " + t.name}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-8 bg-gradient-to-r from-brand-primary to-brand-secondary"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
