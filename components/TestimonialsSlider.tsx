'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  review: string;
  rating: number;
  initial: string;
  color: string;
};

export default function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <div className="relative px-6">
      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-rose-50 hover:border-rose-200 transition-colors duration-200"
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-rose-50 hover:border-rose-200 transition-colors duration-200"
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>

      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t) => (
            <div
              key={t.role}
              className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-rose-100 transition-all duration-300"
            >
              <div className="flex mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? 'w-6 bg-rose-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
