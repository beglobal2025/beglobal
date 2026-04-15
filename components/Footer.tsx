import Link from 'next/link';
import { Globe, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const services = [
  { label: 'Website Development', href: '/services' },
  { label: 'Mobile Applications', href: '/services' },
  { label: 'Digital Marketing', href: '/services' },
  { label: 'eCommerce Solutions', href: '/services' },
  { label: 'SEO Optimisation', href: '/services' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919041078035',
    icon: MessageCircle,
    color: 'hover:bg-green-600',
  },
  {
    label: 'Email',
    href: 'mailto:beglobal025@gmail.com',
    icon: Mail,
    color: 'hover:bg-rose-600',
  },
  {
    label: 'Phone',
    href: 'tel:9041078035',
    icon: Phone,
    color: 'hover:bg-violet-600',
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-rose-600 to-violet-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Ready to start your project?</h3>
              <p className="text-rose-100 text-sm">
                Get a free quote and consultation — no commitment needed.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center space-x-2 bg-white text-rose-700 px-7 py-3.5 rounded-full font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5 mb-5">
              <div className="bg-gradient-to-br from-rose-600 to-violet-600 p-2 rounded-xl">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Be<span className="text-rose-400">Global</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We build websites, mobile apps, and run marketing campaigns
              that help Indian businesses grow faster and reach more customers.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className={`w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center ${s.color} transition-colors duration-200`}
                >
                  <s.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-rose-400 text-sm transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-gray-400 hover:text-rose-400 text-sm transition-colors duration-200"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:beglobal025@gmail.com"
                className="flex items-start space-x-3 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors duration-200 mt-0.5">
                  <Mail className="h-3.5 w-3.5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-gray-300 text-sm group-hover:text-rose-400 transition-colors duration-200">
                    beglobal025@gmail.com
                  </div>
                </div>
              </a>

              <a href="tel:9041078035" className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors duration-200 mt-0.5">
                  <Phone className="h-3.5 w-3.5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Phone / WhatsApp</div>
                  <div className="text-gray-300 text-sm group-hover:text-emerald-400 transition-colors duration-200">
                    +91 90410 78035
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/919041078035"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mt-2 bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-200"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <span>© 2026 BeGlobal. All rights reserved.</span>
            <span>
              Websites · Mobile Apps · Digital Marketing — Powered by beglobal.co.in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
