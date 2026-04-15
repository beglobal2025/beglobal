'use client';
import Link from 'next/link';
import {
  Monitor, Smartphone, TrendingUp, ArrowRight, Star,
  Check, Trophy, Globe, Users, Briefcase, HeartHandshake,
} from 'lucide-react';

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
    color: 'from-blue-500 to-indigo-600',
    hoverBorder: 'hover:border-indigo-200',
    href: '/services',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'iOS and Android apps that users love. We build intuitive, fast, and feature-rich mobile experiences.',
    features: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App Store launch support'],
    color: 'from-violet-500 to-purple-600',
    hoverBorder: 'hover:border-violet-200',
    href: '/services',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that increase your visibility, attract the right customers, and grow your revenue.',
    features: ['Social media marketing', 'Google & Meta Ads', 'SEO optimization', 'Content strategy'],
    color: 'from-emerald-500 to-teal-600',
    hoverBorder: 'hover:border-emerald-200',
    href: '/services',
  },
];

const portfolioItems = [
  {
    title: 'The1Wish — eCommerce',
    category: 'Web Development',
    result: 'Live & selling online',
    gradient: 'from-fuchsia-500 to-rose-600',
    image: '/the1wish.png',
    url: 'https://the1wish.com/',
  },
  {
    title: 'Freshy Painting',
    category: 'Web Development',
    result: 'Live & growing',
    gradient: 'from-orange-500 to-amber-600',
    image: '/freshypainting.png',
    url: 'https://freshypainting.com/',
  },
  {
    title: 'Nocord',
    category: 'Web Development',
    result: 'Live & growing',
    gradient: 'from-slate-600 to-gray-800',
    image: '/nocord.png',
    url: 'https://nocord.in/',
  },
  {
    title: 'Blas Bloom Globals',
    category: 'Web Development',
    result: 'Live & growing',
    gradient: 'from-green-600 to-emerald-700',
    image: '/blasbloom.png',
    url: 'https://blasbloomglobals.com/',
  },
  {
    title: 'ShopNow eCommerce',
    category: 'Web Development',
    result: '3× increase in sales',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'QuickBite Platform',
    category: 'Web Development',
    result: '60% more online orders',
    gradient: 'from-orange-500 to-amber-600',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Fashion Store · Delhi',
    review:
      'BeGlobal built our eCommerce website in just 3 weeks. Our online sales tripled in the first two months. Absolutely incredible work and after-sale support!',
    rating: 5,
    initial: 'R',
    color: 'bg-pink-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Owner, Cloud Kitchen · Mumbai',
    review:
      'The mobile app they built for our restaurant completely changed our business. Online orders are up 300% and our customers love the smooth experience.',
    rating: 5,
    initial: 'P',
    color: 'bg-violet-500',
  },
  {
    name: 'Amit Gupta',
    role: 'Director, Fitness Studio · Bangalore',
    review:
      'Their marketing team grew our Instagram to 50K followers in just 60 days. The ROI on their campaigns is outstanding. I highly recommend BeGlobal!',
    rating: 5,
    initial: 'A',
    color: 'bg-emerald-500',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-hero text-white overflow-hidden min-h-[92vh] flex items-center">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-rose-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-violet-700 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-rose-400 rounded-full blur-3xl opacity-5" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Pill badge */}
            <div className="inline-flex items-center space-x-2.5 bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-200">
                Websites · Mobile Apps · Digital Marketing
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              We Build Digital{' '}
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-violet-300 bg-clip-text text-transparent">
                Products That
              </span>{' '}
              Grow Your Business
            </h1>

            <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-gray-300">
              From stunning websites to powerful mobile apps and results-driven
              marketing — we help businesses across India go digital and reach
              more customers every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-2xl hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/25 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Floating service icons */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-20">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Monitor className="h-6 w-6 text-rose-300" />
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Smartphone className="h-6 w-6 text-violet-300" />
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <TrendingUp className="h-6 w-6 text-emerald-300" />
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Globe className="h-6 w-6 text-blue-300" />
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-50 rounded-2xl mb-3 group-hover:bg-rose-100 transition-colors duration-200 mx-auto">
                  <stat.icon className="h-5 w-5 text-rose-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              End-to-end digital solutions built to help your business thrive in
              the modern world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-white rounded-3xl p-8 shadow-sm border border-gray-100 ${service.hoverBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-2.5 text-sm text-gray-600"
                    >
                      <div className="w-4 h-4 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-rose-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center space-x-1.5 text-rose-600 font-semibold text-sm group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
            <div>
              <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-rose-600 font-semibold text-sm hover:space-x-2.5 transition-all duration-200 group"
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
                className="group relative overflow-hidden rounded-2xl cursor-pointer block"
                style={{ aspectRatio: '4/3' }}
              >
                {'image' in item && item.image ? (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
                  </>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                  </>
                )}
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1.5">{item.title}</h3>
                  <div className="flex items-center space-x-1.5 text-sm text-white/80">
                    <Trophy className="h-3.5 w-3.5" />
                    <span>{item.result}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-500">
              Trusted by businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-rose-100 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4.5 w-4.5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600 rounded-full blur-3xl opacity-15" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-700 rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-rose-600/30 border border-rose-400/30 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Ready to grow?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get a free consultation and project quote. We respond within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-2xl hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:9041078035"
              className="inline-flex items-center justify-center border-2 border-white/25 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Call: +91 90410 78035
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
