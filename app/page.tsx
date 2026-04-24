'use client';
import Link from 'next/link';
import {
  Monitor, Smartphone, TrendingUp, ArrowRight, Star,
  Check, Trophy, Globe, Users, Briefcase, HeartHandshake,
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
    title: 'Quickpro — eCommerce Store',
    category: 'Web Development',
    result: 'Live & selling online',
    gradient: 'from-blue-500 to-cyan-600',
    image: '/quickproaus.png',
    url: 'https://quickproaus.com',
  },
  {
    title: 'Hassle Free Car Rentals',
    category: 'Web Development',
    result: '500+ happy customers',
    gradient: 'from-sky-500 to-blue-600',
    image: '/hasslefreecarrentals.png',
    url: 'https://hasslefreecarrentals.ca',
  },
];

const testimonials = [
  {
    name: 'Dalal',
    role: 'Owner, The1Wish',
    review:
      'BeGlobal delivered our eCommerce store exactly as we imagined. The product catalogue, checkout, and payment flow are all seamless. We went live on time and sales started coming in right away!',
    rating: 5,
    initial: 'D',
    color: 'bg-fuchsia-500',
  },
  {
    name: 'Khush',
    role: 'Owner, Freshy Painting',
    review:
      'I needed a clean, professional website to attract local customers and BeGlobal nailed it. The quote request form alone has brought in more leads than I expected. Great work, great team!',
    rating: 5,
    initial: 'K',
    color: 'bg-orange-500',
  },
  {
    name: 'Nitin',
    role: 'Founder, Nocord',
    review:
      'Our hydration brand needed a modern online store and BeGlobal built exactly that. The design is clean, the shopping experience is smooth, and our customers love it. Highly recommend!',
    rating: 5,
    initial: 'N',
    color: 'bg-slate-600',
  },
  {
    name: 'Akanksha',
    role: 'Owner, Blas Bloom Globals',
    review:
      'BeGlobal understood our brand perfectly. The product catalogue and enquiry system work beautifully, and the mobile experience is flawless. We are getting consistent enquiries every week now.',
    rating: 5,
    initial: 'A',
    color: 'bg-green-600',
  },
  {
    name: 'Rakesh',
    role: 'Owner, Quickpro Australia',
    review:
      'The team at BeGlobal built a stunning eCommerce store for our cycling brand. Everything from product listings to custom order flows works perfectly. Very professional and delivered on time!',
    rating: 5,
    initial: 'R',
    color: 'bg-blue-500',
  },
  {
    name: 'Nitin',
    role: 'Owner, Hassle Free Car Rentals',
    review:
      'BeGlobal built our car rental website with a clean layout, detailed service pages, and an easy booking flow. Our customers find it very easy to use. The whole process was smooth and professional.',
    rating: 5,
    initial: 'N',
    color: 'bg-sky-500',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-hero-light overflow-hidden min-h-[92vh] flex items-center">
        {/* Soft background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-rose-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #c4b5fd 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── Left: Text ── */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white border border-rose-100 shadow-sm px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-rose-600">Websites · Mobile Apps · Digital Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-gray-900">
              We Build{' '}
              <span className="bg-gradient-to-r from-rose-500 to-violet-600 bg-clip-text text-transparent">
                Digital Products
              </span>{' '}
              That Grow Your Business
            </h1>

            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              From stunning websites to powerful mobile apps and results-driven marketing — we help businesses go digital and reach more customers every day.
            </p>

            {/* Quick stats */}
            <div className="flex items-center gap-8 mb-10">
              {[
                { value: '200+', label: 'Projects' },
                { value: '150+', label: 'Clients' },
                { value: '5★', label: 'Rated' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-gray-200" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-violet-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:scale-105 transition-all duration-300"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-rose-400 hover:text-rose-600 transition-all duration-300 bg-white/60 backdrop-blur-sm"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* ── Right: Creative floating cards ── */}
          <div className="hidden lg:block relative h-[480px]">
            {/* Background glow */}
            <div className="absolute inset-8 bg-gradient-to-br from-rose-100/60 to-violet-100/60 rounded-3xl blur-xl" />

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl shadow-violet-100 border border-gray-100 p-6 w-56 z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-violet-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-rose-200">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <div className="text-center mb-4">
                <div className="font-bold text-gray-900 text-base">BeGlobal</div>
                <div className="text-xs text-gray-400">Digital Agency</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[{ v: '200+', l: 'Projects' }, { v: '150+', l: 'Clients' }, { v: '5★', l: 'Rating' }, { v: '24/7', l: 'Support' }].map((s) => (
                  <div key={s.l} className="bg-gray-50 rounded-xl p-2 text-center">
                    <div className="text-xs font-bold text-gray-800">{s.v}</div>
                    <div className="text-[10px] text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Design card — top left */}
            <div className="absolute top-6 left-4 bg-white rounded-2xl shadow-lg shadow-rose-100 border border-gray-100 p-4 flex items-center space-x-3 w-44 z-20 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
                <Monitor className="h-5 w-5 text-rose-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Web Design</div>
                <div className="text-xs text-gray-400">Custom Sites</div>
              </div>
            </div>

            {/* Mobile Apps card — top right */}
            <div className="absolute top-10 right-2 bg-white rounded-2xl shadow-lg shadow-violet-100 border border-gray-100 p-4 flex items-center space-x-3 w-44 z-20 rotate-[3deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                <Smartphone className="h-5 w-5 text-violet-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Mobile Apps</div>
                <div className="text-xs text-gray-400">iOS & Android</div>
              </div>
            </div>

            {/* Marketing card — bottom left */}
            <div className="absolute bottom-12 left-2 bg-white rounded-2xl shadow-lg shadow-emerald-100 border border-gray-100 p-4 flex items-center space-x-3 w-44 z-20 rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Marketing</div>
                <div className="text-xs text-gray-400">3× Growth</div>
              </div>
            </div>

            {/* Rating badge — bottom right */}
            <div className="absolute bottom-8 right-4 bg-gradient-to-br from-rose-500 to-violet-600 rounded-2xl shadow-lg shadow-rose-200 p-4 text-white w-40 z-20 rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="text-2xl font-bold">4.9 ★</div>
              <div className="text-xs text-white/80 mt-1">Client Rating</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/40 rounded-full" />
                ))}
              </div>
            </div>
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
                className="group relative overflow-hidden rounded-2xl cursor-pointer block transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
                style={{ aspectRatio: '4/3' }}
              >
                {'image' in item && item.image ? (
                  <>
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-400" />
                  </>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors duration-400" />
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
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1.5">{item.title}</h3>
                  <div className="flex items-center space-x-1.5 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Light decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card container */}
          <div className="bg-gradient-to-br from-rose-500 to-violet-600 rounded-3xl px-8 py-16 text-center shadow-2xl shadow-rose-200 overflow-hidden relative">
            {/* Inner decorative dots */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

            <div className="relative">
              <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Ready to grow?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight text-white">
                Let&apos;s Build Something{' '}
                <span className="text-yellow-300">Amazing Together</span>
              </h2>

              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Get a free consultation and project quote. We respond within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-rose-600 px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:9041078035"
                  className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Call: +91 90410 78035
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
