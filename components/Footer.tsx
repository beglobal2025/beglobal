import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle } from 'lucide-react';

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
    href: 'https://wa.me/917740055607',
    icon: MessageCircle,
    color: 'hover:bg-brand-600',
  },
  {
    label: 'Email',
    href: 'mailto:beglobal025@gmail.com',
    icon: Mail,
    color: 'hover:bg-brand-600',
  },
  {
    label: 'Phone',
    href: 'tel:7740055607',
    icon: Phone,
    color: 'hover:bg-brand-600',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-950 border-t border-slate-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-5">
              <Image
                src="/BeGlobalLogo.svg"
                alt="BeGlobal"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-[#153A5B]">Be</span><span className="text-[#8CCFE3]">Global</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
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
                  className={`w-9 h-9 bg-white border border-slate-200 rounded-lg flex items-center justify-center ${s.color} group transition-colors duration-200`}
                >
                  <s.icon className="h-4 w-4 text-brand-700 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-slate-600 hover:text-brand-700 text-sm transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-slate-600 hover:text-brand-700 text-sm transition-colors duration-200"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:beglobal025@gmail.com"
                className="flex items-start space-x-3 group"
              >
                <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors duration-200 mt-0.5">
                  <Mail className="h-3.5 w-3.5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-slate-700 text-sm group-hover:text-brand-700 transition-colors duration-200">
                    beglobal025@gmail.com
                  </div>
                </div>
              </a>

              <a href="tel:7740055607" className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors duration-200 mt-0.5">
                  <Phone className="h-3.5 w-3.5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Phone / WhatsApp</div>
                  <div className="text-slate-700 text-sm group-hover:text-brand-700 transition-colors duration-200">
                    +91 77400 55607
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/917740055607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mt-2 bg-white border border-brand-300 text-gray-900 px-4 py-2.5 rounded-xl text-xs font-semibold hover:border-brand-500 hover:text-brand-700 transition-all duration-200"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100 py-6">
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
