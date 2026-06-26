'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Monitor, Smartphone, TrendingUp, ArrowRight,
  Trophy, Users, Briefcase, HeartHandshake, ChevronLeft, ChevronRight,
  Check, Code, ShoppingCart, CheckCircle, Palette,
} from 'lucide-react';
import TestimonialsSlider from '@/components/TestimonialsSlider';

const stats = [
  { value: '200+', label: 'Projects Delivered', icon: Briefcase },
  { value: '150+', label: 'Happy Clients', icon: HeartHandshake },
  { value: '12+', label: 'Years Experience', icon: Trophy },
  { value: '24/7', label: 'Support Available', icon: Users },
];

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites and web apps that look great, load fast, and turn visitors into paying customers.',
    features: ['eCommerce stores', 'Corporate websites', 'Admin dashboards', 'Payment gateway integration'],
    href: '/services',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'iOS and Android apps that users love. We build intuitive, fast, and feature-rich mobile experiences.',
    features: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App Store launch support'],
    href: '/services',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that increase your visibility, attract the right customers, and grow your revenue.',
    features: ['Social media marketing', 'Google & Meta Ads', 'SEO optimization', 'Content strategy'],
    href: '/services',
  },
];

const technologies = [
  {
    name: 'Next.js',
    logo: 'https://cdn.simpleicons.org/nextdotjs/000000',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.simpleicons.org/flutter/02569B',
  },
  {
    name: 'Shopify',
    logo: 'https://cdn.simpleicons.org/shopify/7AB55C',
  },
];

const heroSlides = [
  {
    eyebrow: 'Website Development',
    title: 'Discover the Future of Your Online Presence',
    description:
      'From business websites to eCommerce stores, we build fast, mobile-first experiences with clean content, easy enquiry paths, and payment-ready flows.',
    project: 'Websites & eCommerce',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Modern responsive website displayed on a laptop',
    secondaryImage: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=700&q=80',
    secondaryImageAlt: 'Designer working on a website layout',
    url: '/services',
    icon: Monitor,
    accent: '#f58220',
    points: [
      'Conversion-focused designs that turn visitors into paying customers and qualified enquiries.',
      'Mobile-first, lightning-fast builds with secure, payment-ready checkout flows.',
    ],
  },
  {
    eyebrow: 'Mobile App Development',
    title: 'Build Mobile Apps People Love to Use',
    description:
      'We design and develop iOS, Android, and cross-platform apps with practical user flows, clean interfaces, and full launch support for the app stores.',
    project: 'Mobile Applications',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Mobile application interface shown on a smartphone',
    secondaryImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80',
    secondaryImageAlt: 'Person using a mobile app',
    url: '/services',
    icon: Smartphone,
    accent: '#1b557f',
    points: [
      'Intuitive iOS, Android, and cross-platform apps built to feel simple and fast.',
      'End-to-end UI/UX design with full App Store and Play Store launch support.',
    ],
  },
  {
    eyebrow: 'Digital Marketing',
    title: 'Grow Your Brand With Data-Driven Marketing',
    description:
      'We plan content, run Google and Meta campaigns, and improve search visibility so the right customers find you and your revenue keeps growing.',
    project: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Marketing analytics dashboard with growth charts',
    secondaryImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
    secondaryImageAlt: 'Marketing performance report on a screen',
    url: '/services',
    icon: TrendingUp,
    accent: '#2266a3',
    points: [
      'Targeted Google & Meta ad campaigns built around clear audiences and tracking.',
      'SEO, content strategy, and social media that keep your brand visible and consistent.',
    ],
  },
];

const portfolioItems = [
  {
    title: 'Quickpro — eCommerce Store',
    category: 'Web Development',
    result: 'Live & selling online',
    image: '/quickproaus.png',
    url: 'https://quickproaus.com',
  },
  {
    title: 'The1Wish — eCommerce',
    category: 'Web Development',
    result: 'Live & selling online',
    image: '/the1wish.png',
    url: 'https://the1wish.com/',
  },

  {
    title: 'Freshy Painting',
    category: 'Web Development',
    result: 'Live & growing',
    image: '/freshypainting.png',
    url: 'https://freshypainting.com/',
  },
  {
    title: 'Gamev',
    category: 'Web Development',
    result: 'Live & growing',
    image: '/gamedev.png',
    url: 'https://gamedev.com',
  },
  {
    title: 'Blas Bloom Globals',
    category: 'Web Development',
    result: 'Live & growing',
    image: '/blasbloom.png',
    url: 'https://blasbloomglobals.com/',
  },
  {

    title: 'Hellinn',
    category: 'Web Development',
    image: '/hellinn.png',
    result: '3× increase in online sales',
    url: 'https://www.hellinnwood.com/',
  }
];

const testimonials = [
  {
    name: 'Dalal',
    role: 'Owner, The1Wish',
    review:
      'BeGlobal delivered our eCommerce store exactly as we imagined. The product catalogue, checkout, and payment flow are all seamless. We went live on time and sales started coming in right away!',
    rating: 5,
    initial: 'D',
    color: 'bg-white0',
  },
  {
    name: 'Khush',
    role: 'Owner, Freshy Painting',
    review:
      'I needed a clean, professional website to attract local customers and BeGlobal nailed it. The quote request form alone has brought in more leads than I expected. Great work, great team!',
    rating: 5,
    initial: 'K',
    color: 'bg-white0',
  },
  {
    name: 'Akanksha',
    role: 'Owner, Blas Bloom Globals',
    review:
      'BeGlobal understood our brand perfectly. The product catalogue and enquiry system work beautifully, and the mobile experience is flawless. We are getting consistent enquiries every week now.',
    rating: 5,
    initial: 'A',
    color: 'bg-white0',
  },
  {
    name: 'Rakesh',
    role: 'Owner, Quickpro Australia',
    review:
      'The team at BeGlobal built a stunning eCommerce store for our cycling brand. Everything from product listings to custom order flows works perfectly. Very professional and delivered on time!',
    rating: 5,
    initial: 'R',
    color: 'bg-white0',
  },
  {
    name: 'Nitin',
    role: 'Owner, Hassle Free Car Rentals',
    review:
      'BeGlobal built our car rental website with a clean layout, detailed service pages, and an easy booking flow. Our customers find it very easy to use. The whole process was smooth and professional.',
    rating: 5,
    initial: 'N',
    color: 'bg-white0',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <div className="w-full">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 text-slate-950">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Text ── */}
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: slide.accent }} />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-slate-950">
                {slide.title}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
                {slide.description}
              </p>

              {/* Numbered points */}
              <div className="mt-9 space-y-6">
                {slide.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <span className="text-4xl md:text-5xl font-black text-slate-950 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="max-w-md pt-2 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 rounded-full border border-[#f58220] bg-[#f58220] px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-200/70 transition-all duration-300 hover:bg-white hover:text-[#f58220]"
                >
                  <span>Start Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={slide.url}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-700 transition-all duration-300 hover:border-brand-400 hover:text-brand-700"
                >
                  Explore Services
                </Link>
              </div>

              {/* Slider controls */}
              <div className="mt-12 flex items-center gap-5">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goToPreviousSlide}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    aria-label="Previous banner slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextSlide}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    aria-label="Next banner slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  {heroSlides.map((item, index) => (
                    <button
                      key={`${item.eyebrow}-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        activeSlide === index ? 'w-9 bg-slate-950' : 'w-3 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Show ${item.project} banner slide`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Graphics ── */}
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Decorative blob behind graphics */}
              <div
                className="absolute inset-0 -z-10 rounded-[42%_58%_56%_44%/45%_45%_55%_55%] opacity-60"
                style={{ backgroundColor: `${slide.accent}15` }}
              />

              {/* Main graphic - Device illustration */}
              <div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center">
                {activeSlide === 0 && (
                  <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Laptop */}
                    <rect x="40" y="40" width="320" height="240" rx="8" fill="white" stroke={slide.accent} strokeWidth="2"/>
                    <rect x="50" y="50" width="300" height="220" fill={slide.accent} opacity="0.1"/>
                    <rect x="40" y="280" width="320" height="16" rx="4" fill={slide.accent}/>
                    <circle cx="200" cy="288" r="4" fill={slide.accent}/>
                    {/* Screen content */}
                    <line x1="70" y1="90" x2="330" y2="90" stroke={slide.accent} strokeWidth="2" opacity="0.3"/>
                    <line x1="70" y1="110" x2="330" y2="110" stroke={slide.accent} strokeWidth="1.5" opacity="0.2"/>
                    <line x1="70" y1="125" x2="330" y2="125" stroke={slide.accent} strokeWidth="1.5" opacity="0.2"/>
                    <line x1="70" y1="140" x2="270" y2="140" stroke={slide.accent} strokeWidth="1.5" opacity="0.2"/>
                    {/* Mobile phone */}
                    <g transform="translate(260, 320)">
                      <rect x="0" y="0" width="100" height="160" rx="8" fill="white" stroke={slide.accent} strokeWidth="2"/>
                      <rect x="5" y="5" width="90" height="140" fill={slide.accent} opacity="0.1"/>
                      <rect x="32" y="150" width="36" height="6" fill={slide.accent}/>
                    </g>
                  </svg>
                )}
                {activeSlide === 1 && (
                  <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Phone in hand */}
                    <g transform="translate(100, 80)">
                      <rect x="0" y="0" width="120" height="240" rx="16" fill="white" stroke={slide.accent} strokeWidth="2.5"/>
                      <rect x="8" y="8" width="104" height="210" rx="12" fill={slide.accent} opacity="0.08"/>
                      {/* Status bar */}
                      <line x1="12" y1="18" x2="128" y2="18" stroke={slide.accent} strokeWidth="2" opacity="0.5"/>
                      {/* App content */}
                      <circle cx="60" cy="60" r="12" fill={slide.accent} opacity="0.3"/>
                      <line x1="12" y1="80" x2="128" y2="80" stroke={slide.accent} strokeWidth="1.5" opacity="0.2"/>
                      <line x1="12" y1="92" x2="128" y2="92" stroke={slide.accent} strokeWidth="1.5" opacity="0.2"/>
                      <line x1="12" y1="104" x2="128" y2="104" stroke={slide.accent} strokeWidth="1.5" opacity="0.2"/>
                      {/* Home indicator */}
                      <line x1="50" y1="230" x2="70" y2="230" stroke={slide.accent} strokeWidth="2" opacity="0.4"/>
                    </g>
                    {/* Second phone */}
                    <g transform="translate(200, 160)">
                      <rect x="0" y="0" width="100" height="200" rx="12" fill="white" stroke={slide.accent} strokeWidth="2" opacity="0.6"/>
                      <rect x="6" y="6" width="88" height="175" fill={slide.accent} opacity="0.05"/>
                    </g>
                  </svg>
                )}
                {activeSlide === 2 && (
                  <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Analytics Dashboard */}
                    <rect x="30" y="40" width="340" height="280" rx="12" fill="white" stroke={slide.accent} strokeWidth="2"/>
                    <rect x="40" y="50" width="320" height="260" fill={slide.accent} opacity="0.06" rx="8"/>
                    {/* Header */}
                    <line x1="40" y1="80" x2="360" y2="80" stroke={slide.accent} strokeWidth="2" opacity="0.3"/>
                    <text x="50" y="70" fontSize="14" fill={slide.accent} opacity="0.6">Analytics</text>
                    {/* Chart bars */}
                    <rect x="50" y="150" width="20" height="100" fill={slide.accent} opacity="0.3" rx="2"/>
                    <rect x="80" y="120" width="20" height="130" fill={slide.accent} opacity="0.5" rx="2"/>
                    <rect x="110" y="100" width="20" height="150" fill={slide.accent} opacity="0.7" rx="2"/>
                    <rect x="140" y="110" width="20" height="140" fill={slide.accent} opacity="0.6" rx="2"/>
                    <rect x="170" y="90" width="20" height="160" fill={slide.accent} opacity="0.8" rx="2"/>
                    {/* Trend line */}
                    <polyline points="60,140 90,110 120,85 150,95 180,70" stroke={slide.accent} strokeWidth="2.5" opacity="0.7"/>
                    {/* Metrics */}
                    <circle cx="280" cy="140" r="30" fill={slide.accent} opacity="0.1" stroke={slide.accent} strokeWidth="2"/>
                    <text x="268" y="148" fontSize="16" fontWeight="bold" fill={slide.accent}>+24%</text>
                    <circle cx="320" cy="200" r="30" fill={slide.accent} opacity="0.1" stroke={slide.accent} strokeWidth="2"/>
                    <text x="308" y="208" fontSize="16" fontWeight="bold" fill={slide.accent}>+18%</text>
                  </svg>
                )}
              </div>

              {/* Floating secondary card */}
              <div className="absolute -bottom-6 -left-4 w-48 overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-200/60 backdrop-blur sm:w-56 border border-white/50">
                <div className="p-4 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${slide.accent}20` }}>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: slide.accent }}/>
                    </div>
                    <span className="text-xs font-bold uppercase text-slate-600">{slide.eyebrow}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{slide.project}</p>
                  <p className="text-xs text-slate-500 mt-2">Optimized for results</p>
                </div>
              </div>

              {/* Floating service badge */}
              <div className="absolute -right-2 top-12 flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2.5 shadow-lg shadow-slate-200/50 backdrop-blur">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: slide.accent }}
                >
                  <slide.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-700">
                    {slide.eyebrow}
                  </div>
                  <div className="text-xs font-semibold text-slate-950">{slide.project}</div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -right-1 bottom-20 flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3.5 py-2 shadow-md shadow-slate-200/50 backdrop-blur">
                <Check className="h-3.5 w-3.5 rounded-full text-brand-700" />
                <span className="text-xs font-semibold text-slate-700">150+ satisfied clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────── */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col items-start p-8 border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100/40">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <Monitor className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-3 group-hover:text-emerald-900 transition-colors duration-300">Web Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-emerald-700 transition-colors duration-300">
                Custom websites and web apps that look great, load fast, and turn visitors into paying customers.
              </p>
            </div>

            <div className="group flex flex-col items-start p-8 border border-slate-200 rounded-xl hover:border-pink-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100/40">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                <Smartphone className="h-8 w-8 text-pink-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-3 group-hover:text-pink-900 transition-colors duration-300">Mobile Applications</h3>
              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-pink-700 transition-colors duration-300">
                iOS and Android apps that users love. We build intuitive, fast, and feature-rich mobile experiences.
              </p>
            </div>

            <div className="group flex flex-col items-start p-8 border border-slate-200 rounded-xl hover:border-purple-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100/40">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <TrendingUp className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-3 group-hover:text-purple-900 transition-colors duration-300">Digital Marketing</h3>
              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-purple-700 transition-colors duration-300">
                Data-driven campaigns that increase your visibility, attract the right customers, and grow your revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-slate-200 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-200 border border-slate-200 rounded-lg bg-white shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 text-center group">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-white rounded-md mb-3 group-hover:bg-slate-100 transition-colors duration-200 mx-auto">
                  <stat.icon className="h-5 w-5 text-brand-700" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-brand-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ────────────────────────────────── */}
      <section className="py-14 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title, Description, and Grid */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
                Modern Tech Stack
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
                <span className="text-sm font-semibold text-brand-700">Technologies We Use</span>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                We leverage cutting-edge technologies and frameworks to build fast, scalable, and reliable solutions that power your digital success.
              </p>

              {/* Grid of Technologies */}
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-semibold text-slate-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-3xl">
                {/* Decorative background circles */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-300/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-16 -left-12 w-56 h-56 bg-purple-300/20 rounded-full blur-3xl" />

                {/* SVG Illustration */}
                <div className="relative z-10">
                  <img
                    src="/modern_tech_stack.png"
                    alt="Modern Tech Stack"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating decorative dots */}
                <div className="absolute top-4 right-6 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                <div className="absolute bottom-20 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <div className="absolute top-1/3 -right-6 w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design & Development ────────────────────────── */}
      <section className="py-14 md:py-16 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Illustration */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-3xl">
                {/* Decorative background circles */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-orange-200/30 rounded-full blur-3xl" />

                {/* SVG Illustration */}
                <div className="relative z-10">
                  <img
                    src="/design_development_transparent.png"
                    alt="Design and Development"
                    className="w-full h-auto mix-blend-multiply"
                  />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 right-12 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg" />
                <div className="absolute bottom-32 -left-8 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute top-12 -left-12 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                <div className="absolute bottom-12 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse shadow-lg" />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4 leading-tight">
                  Design & Development
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-10 bg-gradient-to-r from-green-400 to-brand-600 rounded-full" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We combine creative design with robust development to deliver solutions that not only look beautiful but also perform flawlessly.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Monitor, label: 'Responsive Design' },
                  { icon: Code, label: 'React Development' },
                  { icon: Smartphone, label: 'Mobile Apps' },
                  { icon: ShoppingCart, label: 'E-commerce' },
                  { icon: Palette, label: 'UI/UX Design' },
                  { icon: CheckCircle, label: 'Quality Assurance' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-brand-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-950 tracking-tight">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-brand-700 font-bold text-sm hover:space-x-2.5 transition-all duration-200 group"
            >
              <span>View all projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <a
                href={'url' in item && item.url ? item.url : '/portfolio'}
                key={item.title}
                target={'url' in item && item.url ? '_blank' : undefined}
                rel={'url' in item && item.url ? 'noopener noreferrer' : undefined}
                className="group block overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label={`View ${item.title}`}
              >
                {'image' in item && item.image ? (
                  <div
                    className="aspect-[1.42/1] rounded-md bg-cover bg-top transition-transform duration-300 group-hover:scale-[1.015]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                ) : (
                  <div className={`aspect-[1.42/1] rounded-md bg-slate-200 transition-transform duration-300 group-hover:scale-[1.015]`} />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Proof ──────────────────────────────────── */}
      <section className="py-14 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-5 leading-tight">
              Technology That Moves Your Business Forward
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-10 bg-gradient-to-r from-green-400 to-brand-600 rounded-full" />
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              From strategy and design to launch and ongoing support, we help ambitious businesses build digital products that perform.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-700 mb-3">{stat.value}</div>
                <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-200">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 mb-1">Have a project in mind?</h3>
              <p className="text-slate-600 text-sm">Let&apos;s talk about the right solution for your business.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center space-x-2 rounded-lg border border-brand-600 bg-brand-600 px-8 py-3 text-base font-bold text-white shadow-lg shadow-brand-200/70 transition-all duration-300 hover:bg-brand-700 hover:border-brand-700"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-950 mb-3 tracking-tight">
              What Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by businesses across India
            </p>
          </div>

          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-14 md:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative background accents */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card container */}
          <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 rounded-2xl px-8 py-12 text-center shadow-lg shadow-slate-200/30 overflow-hidden relative">
            <div className="relative">
              <span className="inline-block bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Ready to grow?
              </span>

              <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight text-slate-950 tracking-tight">
                Let&apos;s Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-700">Amazing Together</span>
              </h2>

              <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and project quote. We respond within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 border border-[#f58220] bg-[#f58220] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-orange-200/50 hover:shadow-orange-300/60 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:7740055607"
                  className="inline-flex items-center justify-center border border-slate-300 bg-white text-slate-700 px-8 py-4 rounded-xl text-base font-semibold hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 transition-all duration-300"
                >
                  Call: +91 77400 55607
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
