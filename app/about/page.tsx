'use client';
import Link from 'next/link';
import {
  ArrowRight, Target, Lightbulb, Heart, Globe,
  Monitor, Smartphone, TrendingUp, CheckCircle,
} from 'lucide-react';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '12+', label: 'Years of Experience' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence First',
    desc: 'We never ship work we wouldn\'t be proud to show. Every pixel, every line of code, every campaign is crafted to the highest standard.',
    color: 'bg-slate-900',
    bg: 'bg-brand-50',
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    desc: 'We approach every project fresh — no copy-paste templates. Your business is unique, and your digital presence should be too.',
    color: 'bg-slate-900',
    bg: 'bg-brand-50',
  },
  {
    icon: Heart,
    title: 'Client Partnership',
    desc: 'We treat your business like our own. Long-term relationships built on trust, transparency, and genuine care for your growth.',
    color: 'bg-slate-900',
    bg: 'bg-brand-50',
  },
  {
    icon: Globe,
    title: 'Growth Mindset',
    desc: 'We stay ahead of technology and trends so you always benefit from the latest tools, strategies, and best practices.',
    color: 'bg-slate-900',
    bg: 'bg-brand-50',
  },
];

const services = [
  { icon: Monitor, label: 'Web Development', color: 'text-brand-600', bg: 'bg-brand-50' },
  { icon: Smartphone, label: 'Mobile Apps', color: 'text-brand-600', bg: 'bg-brand-50' },
  { icon: TrendingUp, label: 'Digital Marketing', color: 'text-brand-600', bg: 'bg-brand-50' },
];

const promises = [
  'On-time delivery, every time',
  'Transparent pricing — no hidden fees',
  'Regular progress updates',
  'Post-launch support included',
  'You own all code & creative assets',
  'Unlimited revisions during development',
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-white text-slate-950 py-24 overflow-hidden border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-medium mb-6">
            The Team Behind{' '}
            <span className="text-brand-700">
              BeGlobal
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-600 leading-relaxed">
            We&apos;re a passionate team of developers, designers, and marketers
            on a mission to help Indian businesses thrive in the digital world.
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-1">
                  {s.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-xs uppercase tracking-widest">Our Story</span>
              <h2 className="text-2xl font-medium text-gray-900 mt-2 mb-6">
                Built to Help Businesses Like Yours Grow
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                BeGlobal was founded with one goal: to make high-quality digital
                services accessible to every business — not just the big ones.
                We saw too many small and medium businesses struggle online
                because good digital partners were too expensive or too slow.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                We started by building websites for local shops and restaurants.
                Word spread. Soon we were building mobile apps, running marketing
                campaigns, and helping businesses across India reach customers
                they never thought possible.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, BeGlobal is a full-service digital agency trusted by 150+
                clients. We combine the energy of a startup with the experience
                of an established agency — and we&apos;re always in your corner.
              </p>

              {/* What we do */}
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <div key={s.label} className={`flex items-center space-x-2 ${s.bg} px-4 py-2 rounded-full`}>
                    <s.icon className={`h-4 w-4 ${s.color}`} />
                    <span className={`text-sm font-semibold ${s.color}`}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission / Vision card */}
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 p-8 rounded-3xl text-slate-950">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center">
                    <Target className="h-5 w-5 text-brand-700" />
                  </div>
                  <h3 className="text-lg font-semibold">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To empower every business — big or small — with world-class
                  digital tools, beautiful design, and marketing strategies that
                  deliver real, measurable results.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-3xl text-slate-950">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center">
                    <Globe className="h-5 w-5 text-brand-700" />
                  </div>
                  <h3 className="text-lg font-semibold">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A future where every Indian business has the digital presence
                  it deserves — where geography and budget are never a barrier
                  to growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-xs uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-2xl font-medium text-gray-900 mt-2 mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="h-7 w-7 text-brand-700" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Promises ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-xs uppercase tracking-widest">Our Commitment</span>
              <h2 className="text-2xl font-medium text-gray-900 mt-2 mb-6">
                What You Can Always Expect From Us
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We believe that great work comes from clear expectations.
                Here&apos;s what we commit to on every single project.
              </p>
              <ul className="space-y-4">
                {promises.map((p) => (
                  <li key={p} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-10 text-slate-950">
              <h3 className="text-lg font-medium mb-8">Why Clients Stay With Us</h3>
              <div className="space-y-6">
                {[
                  { pct: '97%', label: 'Client satisfaction rate' },
                  { pct: '85%', label: 'Clients return for a second project' },
                  { pct: '90%', label: 'Projects delivered on time' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-500 text-sm">{item.label}</span>
                      <span className="text-brand-700 font-bold">{item.pct}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-500 rounded-full"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-white text-slate-950 relative overflow-hidden border-t border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-5">
            Ready to Partner With Us?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Let&apos;s talk about your project and see how we can help your
            business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 border border-[#f58220] bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:text-[#f58220] transition-all duration-300"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-brand-400 hover:text-brand-700 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
