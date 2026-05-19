'use client';
import Link from 'next/link';
import {
  Monitor, Smartphone, TrendingUp, ArrowRight,
  Trophy, Users, Briefcase, HeartHandshake,
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

const portfolioItems = [
  {
    title: 'Quickpro — eCommerce Store',
    category: 'Web Development',
    result: 'Live & selling online',
    gradient: 'from-blue-500 to-cyan-600',
    image: '/quickproaus.png',
    url: 'https://quickproaus.com',
  },
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
    title: 'Gamev',
    category: 'Web Development',
    result: 'Live & growing',
    gradient: 'from-slate-600 to-gray-800',
    image: '/gamedev.png',
    url: 'https://gamedev.com',
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

    title: 'Hellinn',
    category: 'Web Development' as Category,
    gradient: 'from-pink-500 to-rose-600',
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
      <section className="relative overflow-hidden bg-hero-light">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-violet-200 rounded-full blur-3xl opacity-45" />
          <div className="absolute -bottom-40 -left-32 w-[460px] h-[460px] bg-rose-200 rounded-full blur-3xl opacity-45" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle, #c4b5fd 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-rose-100 bg-white/80 shadow-sm px-4 py-2 rounded-full mb-7">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="text-sm font-semibold text-rose-600">Websites, apps and growth systems</span>
            </div>

            <h1 className="text-5xl md:text-5.5xl font-bold mb-6 leading-[1.02] tracking-tight text-gray-900">
              Premium digital experiences for{' '}
              <span className="bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
                brands ready to grow
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-9 max-w-xl leading-relaxed">
              BeGlobal designs and builds high-performing websites, eCommerce stores, mobile apps, and digital campaigns with the polish of a studio and the speed of a product team.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
              {[
                { value: '200+', label: 'Projects delivered' },
                { value: '150+', label: 'Clients served' },
                { value: '4.9', label: 'Client rating' },
              ].map((s) => (
                <div key={s.label} className="border border-gray-100 bg-white/80 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-8 py-4 rounded-md text-base font-bold shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition-all duration-300"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gray-200 text-gray-700 bg-white/80 px-8 py-4 rounded-md text-base font-semibold hover:border-rose-300 hover:text-rose-600 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-6 gap-4">
              <a
                href="https://quickproaus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-6 block overflow-hidden rounded-lg border border-white bg-white p-2 shadow-2xl shadow-rose-100"
              >
                <div
                  className="aspect-[1.55/1] rounded-md bg-cover bg-top"
                  style={{ backgroundImage: 'url(/quickproaus.png)' }}
                />
              </a>
              {portfolioItems.slice(1, 3).map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-3 block overflow-hidden rounded-lg border border-white bg-white p-2 shadow-lg shadow-violet-100/60"
                >
                  <div
                    className="aspect-[1.42/1] rounded-md bg-cover bg-top"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </a>
              ))}
            </div>

            <div className="absolute -bottom-5 left-6 right-6 hidden sm:grid grid-cols-3 divide-x divide-gray-100 rounded-lg bg-white text-gray-900 shadow-xl shadow-rose-100">
              {[
                { label: 'eCommerce', value: 'Stores' },
                { label: 'Web Apps', value: 'Custom' },
                { label: 'Marketing', value: 'Growth' },
              ].map((item) => (
                <div key={item.label} className="px-4 py-3 text-center">
                  <div className="text-sm font-bold">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-gray-100 border border-gray-100 rounded-lg bg-white shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 text-center group">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-rose-50 rounded-md mb-3 group-hover:bg-violet-50 transition-colors duration-200 mx-auto">
                  <stat.icon className="h-5 w-5 text-rose-600 group-hover:text-violet-600" />
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
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              {/* <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
                Our Expertise
              </span> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
                Strategy, design and engineering under one roof
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We turn scattered digital requirements into clear launches: beautiful frontends, solid backend systems, app experiences, and marketing funnels that can scale.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-6 py-3 rounded-md text-sm font-bold hover:shadow-lg hover:shadow-rose-200 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group grid sm:grid-cols-[auto_1fr_auto] gap-5 items-start bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-xl hover:border-rose-100 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 mb-2">0{index + 1}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="hidden sm:flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-500 group-hover:border-rose-300 group-hover:text-rose-600 group-hover:bg-rose-50 transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technologies ────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
              Technologies We Work With
            </span> */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white border border-gray-200 min-h-[128px] px-6 py-7 flex flex-col items-center justify-center gap-4 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/70 transition-all duration-300"
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="h-11 max-w-[150px] object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
            <div>
              {/* <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
                Our Work
              </span> */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {portfolioItems.map((item) => (
              <a
                href={'url' in item && item.url ? item.url : '/portfolio'}
                key={item.title}
                target={'url' in item && item.url ? '_blank' : undefined}
                rel={'url' in item && item.url ? 'noopener noreferrer' : undefined}
                className="group block overflow-hidden bg-white"
                aria-label={`View ${item.title}`}
              >
                {'image' in item && item.image ? (
                  <div
                    className="aspect-[1.42/1] bg-cover bg-top transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                ) : (
                  <div className={`aspect-[1.42/1] bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-[1.02]`} />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">
              Testimonials
            </span> */}
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

              <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight text-white">
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
