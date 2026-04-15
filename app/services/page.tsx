'use client';
import Link from 'next/link';
import {
  Monitor, Smartphone, TrendingUp, ArrowRight, Check,
  Star, Zap, Shield, Headphones,
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Monitor,
    title: 'Web Development',
    description:
      'From sleek corporate sites to powerful eCommerce stores — we build fast, mobile-friendly websites that drive real business results.',
    highlights: [
      'Custom design tailored to your brand',
      'Mobile-first, fully responsive',
      'Payment gateway integration',
      'Admin dashboard included',
      'SEO-ready structure',
      'Free SSL certificate',
    ],
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    textAccent: 'text-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Native-feel iOS and Android apps that users actually enjoy using. We handle everything from UI design to App Store launch.',
    highlights: [
      'iOS & Android (or cross-platform)',
      'Intuitive UI/UX design',
      'Push notifications',
      'Offline mode support',
      'App Store & Play Store submission',
      '3 months free maintenance',
    ],
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    textAccent: 'text-violet-600',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing that attracts the right customers and turns clicks into revenue. From social media to Google Ads.',
    highlights: [
      'Social media management',
      'Google & Meta Ads campaigns',
      'Search engine optimisation (SEO)',
      'Content creation & strategy',
      'Monthly performance reports',
      'WhatsApp & email marketing',
    ],
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    textAccent: 'text-emerald-600',
  },
];

const websitePlans = [
  {
    name: 'Silver',
    price: '₹29,999',
    description: 'Perfect for showcasing your business and generating enquiries.',
    features: [
      'Mobile-friendly website',
      'Admin dashboard',
      'Multiple product image upload',
      'Product catalogue with enquiry button',
      'Contact us form',
      'Free SSL certificate',
      '15 days free support',
    ],
    gradient: 'from-gray-600 to-gray-700',
    popular: false,
  },
  {
    name: 'Gold',
    price: '₹49,999',
    description: 'A complete eCommerce solution to start selling online.',
    features: [
      'Attractive eCommerce website',
      'Admin dashboard with order management',
      'OTP login & sign-up',
      'Multiple product image upload',
      'Integrated payment gateway',
      'Contact us form',
      '1 year free domain & hosting',
      'Free SSL certificate',
      '15 days free support',
    ],
    gradient: 'from-slate-600 to-slate-700',
    popular: false,
  },
  {
    name: 'Diamond',
    price: '₹59,999',
    description: 'Advanced eCommerce with powerful features to boost sales.',
    features: [
      'Premium eCommerce website',
      'Advanced admin dashboard',
      'OTP login & sign-up',
      'Multiple product image upload',
      'Integrated payment gateway',
      'Wishlist functionality',
      'Ratings & reviews',
      'Website QR code',
      'Contact us form',
      '1 year free domain & hosting',
      'Free SSL certificate',
      '15 days free support',
    ],
    gradient: 'from-rose-600 to-violet-600',
    popular: true,
  },
  {
    name: 'Platinum',
    price: 'Custom',
    description: 'Fully custom solutions designed around your unique business needs.',
    features: [
      'Fully customisable features',
      'Scalable for growth',
      'Custom integrations & add-ons',
      'Dedicated project manager',
      'Personalised support & consultation',
      'Priority delivery',
    ],
    gradient: 'from-amber-500 to-orange-600',
    popular: false,
  },
];

const marketingPlans = [
  {
    name: 'Starter',
    price: '₹9,999',
    period: '/month',
    description: 'Get your brand noticed on social media.',
    features: [
      '2 social media platforms',
      '12 posts per month',
      'Basic graphic design',
      'Monthly analytics report',
      'Community management',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹19,999',
    period: '/month',
    description: 'Grow faster with paid ads + organic content.',
    features: [
      '3 social media platforms',
      '20 posts per month',
      'Meta Ads management (₹10K ad budget)',
      'Google My Business',
      'Bi-weekly analytics report',
      'Competitor analysis',
      'Content strategy',
    ],
    gradient: 'from-rose-600 to-violet-600',
    popular: true,
  },
  {
    name: 'Pro',
    price: '₹29,999',
    period: '/month',
    description: 'Full-stack marketing for aggressive growth.',
    features: [
      '4+ social media platforms',
      '30+ posts per month',
      'Meta + Google Ads (₹20K ad budget)',
      'SEO optimisation',
      'Email & WhatsApp campaigns',
      'Weekly analytics report',
      'Dedicated account manager',
      'Influencer coordination',
    ],
    gradient: 'from-amber-500 to-orange-600',
    popular: false,
  },
];

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Most projects delivered in 2–8 weeks without cutting corners.' },
  { icon: Shield, title: 'Quality Guarantee', desc: '100% satisfaction — we fix issues until you are happy.' },
  { icon: Star, title: '5-Star Support', desc: 'Dedicated support team available throughout & after delivery.' },
  { icon: Headphones, title: '24/7 Availability', desc: 'WhatsApp, phone, or email — we are always reachable.' },
];

export default function Services() {
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
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything Your Business{' '}
            <span className="bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent">
              Needs to Go Digital
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Websites, mobile apps, and digital marketing — built by experts
            who understand your business goals.
          </p>
        </div>
      </section>

      {/* ── Service Categories ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-gray-100 hover:border-rose-100 bg-gray-50 hover:bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center space-x-2.5 text-sm text-gray-600">
                      <div className={`w-4 h-4 rounded-full ${s.bgLight} flex items-center justify-center shrink-0`}>
                        <Check className={`h-2.5 w-2.5 ${s.textAccent}`} />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Website Pricing ──────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Website Packages
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transparent pricing with no hidden charges. All packages include
              free consultation and project planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {websitePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl shadow-sm border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group ${
                  plan.popular ? 'border-rose-300 shadow-rose-100' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-rose-600 to-violet-600 text-white text-xs font-bold text-center py-1.5 tracking-wide">
                    BEST SELLING
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-br ${plan.gradient} p-7 text-white ${plan.popular ? 'pt-9' : ''}`}>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="text-3xl font-extrabold mb-3">{plan.price}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="p-7">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start space-x-2.5 text-sm text-gray-600">
                        <div className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center shrink-0`}>
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={{
                      pathname: '/contact',
                      query: { plan: plan.name, description: plan.description },
                    }}
                    className={`flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            * Domain & hosting offer subject to availability. GST applicable.
          </p>
        </div>
      </section>

      {/* ── Marketing Pricing ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Marketing Packages
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Monthly retainer plans. Ad spend is separate — you own the ad account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {marketingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-gray-50 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden group ${
                  plan.popular ? 'border-rose-300 shadow-rose-100' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-rose-600 to-violet-600 text-white text-xs font-bold text-center py-1.5 tracking-wide">
                    MOST POPULAR
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.gradient} p-7 text-white ${plan.popular ? 'pt-9' : ''}`}>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline space-x-1 mb-3">
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                    <span className="text-white/70 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-white/80 text-sm">{plan.description}</p>
                </div>

                <div className="p-7">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start space-x-2.5 text-sm text-gray-600">
                        <div className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center shrink-0`}>
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={{ pathname: '/contact', query: { plan: `Marketing ${plan.name}`, description: plan.description } }}
                    className={`flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile App Inquiry ────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">Mobile Apps</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Custom Mobile App</h3>
              <p className="text-white/80 text-lg">
                iOS & Android apps starting from{' '}
                <span className="font-bold text-white">₹79,999</span>. Pricing
                depends on features — let&apos;s talk!
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center space-x-2 bg-white text-violet-700 px-8 py-4 rounded-full font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A simple, transparent process so you always know what&apos;s happening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Discovery Call', desc: 'We understand your business, goals, and budget in a free 30-minute call.' },
              { step: '02', title: 'Proposal & Design', desc: 'We share a detailed proposal, wireframes, and design mockups for your approval.' },
              { step: '03', title: 'Development', desc: 'Our team builds your product with regular updates and checkpoints.' },
              { step: '04', title: 'Launch & Support', desc: 'We go live, train you on usage, and provide post-launch support.' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="bg-gradient-to-br from-rose-600 to-violet-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-5 shadow-lg shadow-rose-200">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-rose-50 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-rose-100 group-hover:bg-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <w.icon className="h-6 w-6 text-rose-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{w.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
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
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Tell us about your project and get a free quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border-2 border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
