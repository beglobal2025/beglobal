'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Web Development' | 'Mobile App' | 'Digital Marketing';

const categories: Category[] = ['All', 'Web Development', 'Mobile App', 'Digital Marketing'];

const projects = [

   {
    id: 1,
    title: 'ShopNow — eCommerce Platform',
    client: 'Fashion Retailer, Delhi',
    category: 'Web Development' as Category,
    description:
      'A full-featured eCommerce store with product management, Razorpay payment gateway, admin dashboard, and inventory tracking.',
    tags: ['Next.js', 'Node.js', 'Postgresql', 'Razorpay'],
    accent: 'bg-slate-200',
    image: '/hellinn.png',
    result: '3× increase in online sales',
    duration: '4 weeks',
    url: 'https://www.hellinnwood.com/',
  },
   {
    id: 2,
    title: 'ShopNow — eCommerce Platform',
    client: 'Fashion Retailer, Delhi',
    category: 'Web Development' as Category,
    description:
      'A full-featured eCommerce store with product management, Razorpay payment gateway, admin dashboard, and inventory tracking.',
    tags: ['Shopify', 'Razorpay', 'Admin Dashboard', 'Mobile Responsive'],
    accent: 'bg-slate-200',
    image: '/gamedev.png',
    result: '3× increase in online sales',
    duration: '4 weeks',
    url: 'https://www.gamedev.com',
  },
  {
    id: 10,
    title: 'The1Wish — eCommerce Platform',
    client: 'the1wish.com',
    category: 'Web Development' as Category,
    description:
      'A complete eCommerce website with product catalogue, cart & checkout, payment integration, and a clean mobile-friendly design to help the brand sell online.',
    tags: ['eCommerce', 'Payment Gateway', 'Admin Dashboard', 'Mobile Responsive'],
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
    image: '/blasbloom.png',
    result: 'Live & growing',
    duration: '3 weeks',
    url: 'https://blasbloomglobals.com/',
  },
  {
    id: 11,
    title: 'Freshy Painting — Business Website',
    client: 'freshypainting.com',
    category: 'Web Development' as Category,
    description:
      'Professional website for a painting services company featuring a portfolio gallery, free quote request form, and mobile-friendly design to attract local customers.',
    tags: ['Business Website', 'Portfolio Gallery', 'Contact Form', 'Mobile Responsive'],
    accent: 'bg-slate-200',
    image: '/freshypainting.png',
    result: 'Live & growing',
    duration: '3 weeks',
    url: 'https://freshypainting.com/',
  },
  // {
  //   id: 15,
  //   title: 'Hassle Free Car Rentals — Business Website',
  //   client: 'hasslefreecarrentals.ca',
  //   category: 'Web Development' as Category,
  //   description:
  //     'Business website for a locally-owned Canadian car rental company serving British Columbia, featuring vehicle listings, online booking, add-on services, and 24/7 support info.',
  //   tags: ['Business Website', 'Booking System', 'Service Listings', 'Mobile Responsive'],
  //   accent: 'bg-slate-200',
  //   image: '/hasslefreecarrentals.png',
  //   result: '500+ happy customers',
  //   duration: '3 weeks',
  //   url: 'https://hasslefreecarrentals.ca',
  // },
  {
    id: 14,
    title: 'Quickpro — eCommerce Store',
    client: 'quickproaus.com',
    category: 'Web Development' as Category,
    description:
      'Premium racing bicycle eCommerce store for an Australian brand, featuring a full product catalogue, custom order system, complimentary delivery info, and a mobile-friendly design.',
    tags: ['eCommerce', 'Product Catalogue', 'Custom Orders', 'Mobile Responsive'],
    accent: 'bg-slate-200',
    image: '/quickproaus.png',
    result: 'Live & selling online',
    duration: '4 weeks',
    url: 'https://quickproaus.com',
  },
 
  {
    id: 2,
    title: 'QuickBite — Restaurant Platform',
    client: 'Multi-chain Restaurant, Mumbai',
    category: 'Web Development' as Category,
    description:
      'Online ordering platform with real-time order tracking, loyalty rewards, multi-branch management, and detailed analytics.',
    tags: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
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
    accent: 'bg-slate-200',
    result: '₹8L revenue in launch month',
    duration: '2 months',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);
  const imageProjects = filtered.filter((project) => 'image' in project && project.image);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-white text-slate-950 py-24 overflow-hidden border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Our Portfolio
          </span>
          <h1 className="text-3xl md:text-4xl font-medium mb-6">
            Work That{' '}
            <span className="text-brand-700">
              Speaks for Itself
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-600 leading-relaxed">
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
                  'border px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200',
                  active === cat
                    ? 'border-brand-500 text-brand-700 bg-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {imageProjects.map((project) => (
              <a
                key={project.id}
                href={project.url || '#'}
                target={project.url ? '_blank' : undefined}
                rel={project.url ? 'noopener noreferrer' : undefined}
                className="group block overflow-hidden bg-white"
                aria-label={project.url ? `View ${project.title}` : project.title}
              >
                <div
                  className="aspect-[1.42/1] bg-cover bg-top transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-white text-slate-950 relative overflow-hidden border-t border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-5">
            Like What You See?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Let&apos;s build something just as impressive for your business.
            Get a free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 border border-[#f58220] bg-white text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:text-[#f58220] transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
