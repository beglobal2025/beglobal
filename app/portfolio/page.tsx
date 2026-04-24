'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Web Development' | 'Mobile App' | 'Digital Marketing';

const categories: Category[] = ['All', 'Web Development', 'Mobile App', 'Digital Marketing'];

const projects = [
  {
    id: 10,
    title: 'The1Wish — eCommerce Platform',
    client: 'the1wish.com',
    category: 'Web Development' as Category,
    description:
      'A complete eCommerce website with product catalogue, cart & checkout, payment integration, and a clean mobile-friendly design to help the brand sell online.',
    tags: ['eCommerce', 'Payment Gateway', 'Admin Dashboard', 'Mobile Responsive'],
    gradient: 'from-fuchsia-500 to-rose-600',
    image: '/the1wish.png',
    result: 'Live & selling online',
    duration: '4 weeks',
    url: 'https://the1wish.com/',
  },
  {
    id: 13,
    title: 'Blas Bloom Globals — Product Website',
    client: 'blasbloomglobals.com',
    category: 'Web Development' as Category,
    description:
      'Business website for a natural & herbal products company based in Rajasthan, featuring a product catalogue, enquiry system, and GST-compliant business details.',
    tags: ['Business Website', 'Product Catalogue', 'Enquiry Form', 'Mobile Responsive'],
    gradient: 'from-green-600 to-emerald-700',
    image: '/blasbloom.png',
    result: 'Live & growing',
    duration: '3 weeks',
    url: 'https://blasbloomglobals.com/',
  },
  {
    id: 12,
    title: 'Nocord — eCommerce Store',
    client: 'nocord.in',
    category: 'Web Development' as Category,
    description:
      'Modern eCommerce website for a hydration products brand with product listings, cart & checkout, clean UI, and mobile-friendly design.',
    tags: ['eCommerce', 'Product Catalogue', 'Payment Gateway', 'Mobile Responsive'],
    gradient: 'from-slate-600 to-gray-800',
    image: '/nocord.png',
    result: 'Live & growing',
    duration: '4 weeks',
    url: 'https://nocord.in/',
  },
  {
    id: 11,
    title: 'Freshy Painting — Business Website',
    client: 'freshypainting.com',
    category: 'Web Development' as Category,
    description:
      'Professional website for a painting services company featuring a portfolio gallery, free quote request form, and mobile-friendly design to attract local customers.',
    tags: ['Business Website', 'Portfolio Gallery', 'Contact Form', 'Mobile Responsive'],
    gradient: 'from-orange-500 to-amber-600',
    image: '/freshypainting.png',
    result: 'Live & growing',
    duration: '3 weeks',
    url: 'https://freshypainting.com/',
  },
  {
    id: 15,
    title: 'Hassle Free Car Rentals — Business Website',
    client: 'hasslefreecarrentals.ca',
    category: 'Web Development' as Category,
    description:
      'Business website for a locally-owned Canadian car rental company serving British Columbia, featuring vehicle listings, online booking, add-on services, and 24/7 support info.',
    tags: ['Business Website', 'Booking System', 'Service Listings', 'Mobile Responsive'],
    gradient: 'from-sky-500 to-blue-600',
    image: '/hasslefreecarrentals.png',
    result: '500+ happy customers',
    duration: '3 weeks',
    url: 'https://hasslefreecarrentals.ca',
  },
  {
    id: 14,
    title: 'Quickpro — eCommerce Store',
    client: 'quickproaus.com',
    category: 'Web Development' as Category,
    description:
      'Premium racing bicycle eCommerce store for an Australian brand, featuring a full product catalogue, custom order system, complimentary delivery info, and a mobile-friendly design.',
    tags: ['eCommerce', 'Product Catalogue', 'Custom Orders', 'Mobile Responsive'],
    gradient: 'from-blue-500 to-cyan-600',
    image: '/quickproaus.png',
    result: 'Live & selling online',
    duration: '4 weeks',
    url: 'https://quickproaus.com',
  },
  {
    id: 1,
    title: 'ShopNow — eCommerce Platform',
    client: 'Fashion Retailer, Delhi',
    category: 'Web Development' as Category,
    description:
      'A full-featured eCommerce store with product management, Razorpay payment gateway, admin dashboard, and inventory tracking.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay'],
    gradient: 'from-pink-500 to-rose-600',
    result: '3× increase in online sales',
    duration: '4 weeks',
  },
  {
    id: 2,
    title: 'QuickBite — Restaurant Platform',
    client: 'Multi-chain Restaurant, Mumbai',
    category: 'Web Development' as Category,
    description:
      'Online ordering platform with real-time order tracking, loyalty rewards, multi-branch management, and detailed analytics.',
    tags: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    gradient: 'from-orange-500 to-amber-600',
    result: '60% reduction in phone orders',
    duration: '6 weeks',
  },
  {
    id: 3,
    title: 'TechVista — B2B Portal',
    client: 'IT Services Company, Pune',
    category: 'Web Development' as Category,
    description:
      'Enterprise client portal with role-based access, project tracking, invoicing module, and secure document sharing.',
    tags: ['Next.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS'],
    gradient: 'from-slate-600 to-gray-700',
    result: '80% less manual reporting',
    duration: '8 weeks',
  },
  {
    id: 4,
    title: 'MediCare — Health App',
    client: 'Clinic Network, Bangalore',
    category: 'Mobile App' as Category,
    description:
      'Doctor appointment booking app with video consultations, digital prescriptions, health record management, and reminders.',
    tags: ['React Native', 'Node.js', 'AWS', 'WebRTC'],
    gradient: 'from-blue-500 to-cyan-600',
    result: '10,000+ downloads in 3 months',
    duration: '10 weeks',
  },
  {
    id: 5,
    title: 'FitLife — Fitness Tracker',
    client: 'Gym Chain, Hyderabad',
    category: 'Mobile App' as Category,
    description:
      'Personal fitness app with customised workout plans, progress charts, diet log, trainer chat, and subscription billing.',
    tags: ['Flutter', 'Firebase', 'ML Kit', 'Stripe'],
    gradient: 'from-emerald-500 to-green-600',
    result: '4.8★ rating on Play Store',
    duration: '12 weeks',
  },
  {
    id: 6,
    title: 'TravelEasy — Booking App',
    client: 'Travel Agency, Jaipur',
    category: 'Mobile App' as Category,
    description:
      'End-to-end travel booking app covering flights, hotels, and tour packages with dynamic pricing and instant confirmations.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
    gradient: 'from-teal-500 to-cyan-600',
    result: '5× bookings in 2 months',
    duration: '14 weeks',
  },
  {
    id: 7,
    title: 'GrowthX — Social Campaign',
    client: 'Clothing Brand, Jaipur',
    category: 'Digital Marketing' as Category,
    description:
      '360° social media push — Instagram Reels strategy, influencer partnerships, Meta Ads, and weekly analytics reporting.',
    tags: ['Instagram Ads', 'Meta Ads', 'Influencer', 'Analytics'],
    gradient: 'from-violet-500 to-purple-600',
    result: '300% growth in followers',
    duration: '3 months',
  },
  {
    id: 8,
    title: 'LocalChef — Restaurant Growth',
    client: 'Cloud Kitchen, Chennai',
    category: 'Digital Marketing' as Category,
    description:
      'Full-stack growth via Google Ads, local SEO, food-delivery platform optimisation, and social media content calendar.',
    tags: ['Google Ads', 'SEO', 'Content', 'Email Marketing'],
    gradient: 'from-indigo-500 to-blue-600',
    result: '200% increase in orders',
    duration: '4 months',
  },
  {
    id: 9,
    title: 'GlowSkin — Beauty Brand',
    client: 'Skincare Brand, Kolkata',
    category: 'Digital Marketing' as Category,
    description:
      'Brand launch campaign combining influencer seeding, paid ads, email funnels, and WhatsApp broadcast marketing.',
    tags: ['Influencer', 'Email', 'WhatsApp', 'Meta Ads'],
    gradient: 'from-fuchsia-500 to-pink-600',
    result: '₹8L revenue in launch month',
    duration: '2 months',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-rose-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-violet-700 rounded-full blur-3xl opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/15 text-gray-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Work That{' '}
            <span className="bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              Speaks for Itself
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            A selection of websites, mobile apps, and marketing campaigns we've
            built for businesses across India.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200',
                  active === cat
                    ? 'bg-gradient-to-r from-rose-600 to-violet-600 text-white shadow-lg shadow-rose-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-rose-300 hover:text-rose-600'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project count */}
          <p className="text-center text-gray-400 text-sm mb-10">
            Showing <span className="text-gray-700 font-semibold">{filtered.length}</span> project
            {filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-rose-100 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                {/* Thumbnail */}
                <div
                  className="h-44 relative overflow-hidden"
                  style={
                    'image' in project && project.image
                      ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'top center' }
                      : undefined
                  }
                >
                  {'image' in project && project.image ? (
                    <div className="absolute inset-0 bg-black/20" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  )}
                  {'url' in project && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 left-4 flex items-center space-x-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 hover:bg-white/35 transition-colors duration-200 z-10"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>View Live</span>
                    </a>
                  )}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 25% 25%, white 1.5px, transparent 1.5px), radial-gradient(circle at 75% 75%, white 1.5px, transparent 1.5px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/25">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/25">
                    <Trophy className="h-3 w-3" />
                    <span>{project.result}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1 pr-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-rose-600 text-xs font-semibold mb-3">{project.client}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      Delivered in <span className="font-medium text-gray-600">{project.duration}</span>
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-1 text-rose-600 text-xs font-semibold group/btn"
                    >
                      <span>Similar project?</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600 rounded-full blur-3xl opacity-15" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700 rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Like What You See?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let&apos;s build something just as impressive for your business.
            Get a free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-2xl hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
