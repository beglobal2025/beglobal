'use client';

import { useEffect, useState, Suspense } from 'react';
import { Mail, Phone, Clock, Send, ArrowRight, MessageCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function ContactForm() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const params = useSearchParams();
  const plan = params.get('plan');
  const description = params.get('description');

  useEffect(() => {
    const updated = { ...formData };
    updated.subject = plan ? 'website' : '';
    updated.message = description
      ? `I am interested in the ${plan} plan which includes: ${description}`
      : '';
    setFormData(updated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* Form — 3 cols */}
      <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
        <p className="text-gray-500 text-sm mb-8">
          Fill in the form and we&apos;ll get back to you within 24 hours.
        </p>

        {/* Status banners */}
        {status === 'success' && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start space-x-3">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <p className="text-emerald-700 text-sm font-medium">
              Thanks for reaching out! We&apos;ll get back to you shortly.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <p className="text-red-600 text-sm font-medium">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}
        {status === 'Sending...' && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl">
            <p className="text-rose-600 text-sm font-medium">Sending your message…</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 outline-none"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
              I Need Help With <span className="text-red-400">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 outline-none bg-white text-gray-700"
            >
              <option value="">Select a service</option>
              <option value="website">Website Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="marketing">Digital Marketing</option>
              <option value="consultation">Free Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your project — what you need, your budget, and timeline if you have one…"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white py-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-rose-200 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          >
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </button>
        </form>
      </div>

      {/* Info — 2 cols */}
      <div className="lg:col-span-2 space-y-6">
        {/* Contact details */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
          <div className="space-y-5">
            <a
              href="mailto:beglobal025@gmail.com"
              className="flex items-center space-x-4 group"
            >
              <div className="w-11 h-11 bg-rose-50 group-hover:bg-rose-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                <Mail className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">Email</div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-200">
                  beglobal025@gmail.com
                </div>
              </div>
            </a>

            <a href="tel:9041078035" className="flex items-center space-x-4 group">
              <div className="w-11 h-11 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                <Phone className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">Phone / WhatsApp</div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  +91 90410 78035
                </div>
              </div>
            </a>

            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">Response Time</div>
                <div className="text-sm font-semibold text-gray-900">Within 24 hours</div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919041078035"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center space-x-2 w-full bg-[#25D366] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#20BD5A] transition-colors duration-200"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Quick stats */}
        <div className="bg-gradient-to-br from-slate-950 to-indigo-950 rounded-3xl p-8 text-white">
          <h3 className="text-lg font-bold mb-6">Why Businesses Choose Us</h3>
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: '24h', label: 'Response time' },
              { value: '150+', label: 'Happy clients' },
              { value: '5★', label: 'Average rating' },
              { value: '200+', label: 'Projects done' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: 'How long does a typical website project take?',
    a: 'A standard website is delivered in 2–4 weeks. Complex eCommerce platforms may take 6–8 weeks. We always provide a timeline during our initial call.',
  },
  {
    q: 'Do you offer support after the project is complete?',
    a: 'Yes! All packages include 15 days of free post-launch support. We also offer ongoing maintenance retainers for clients who need continuous help.',
  },
  {
    q: 'Can I see examples of your previous work?',
    a: 'Absolutely! Visit our Portfolio page to see a selection of websites, apps, and marketing campaigns we have delivered for clients.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes, we work with clients globally. Communication is handled via WhatsApp, email, and video calls, so location is never a barrier.',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-rose-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-violet-700 rounded-full blur-3xl opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 border border-white/15 text-gray-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Let&apos;s Build{' '}
            <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
              Something Great
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Tell us about your project and get a free quote within 24 hours.
            No commitment, no pressure.
          </p>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-rose-600 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Quick answers to common questions about working with us.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-rose-100 transition-colors duration-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start space-x-2">
                  <span className="text-rose-600 shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
            <a
              href="mailto:beglobal025@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
