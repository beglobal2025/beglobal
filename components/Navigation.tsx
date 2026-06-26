'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/beglobal-logo.png"
              alt="BeGlobal"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-[#153A5B]">Be</span><span className="text-[#8CCFE3]">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'border-b-2 px-4 py-2 text-sm font-semibold transition-all duration-200',
                  pathname === item.href
                    ? 'border-brand-500 text-brand-700 font-semibold'
                    : 'border-transparent text-gray-700 hover:border-brand-300 hover:text-brand-700'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 flex items-center space-x-1.5 border border-[#f58220] bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:text-[#f58220] transition-all duration-200"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-brand-700 hover:bg-slate-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'flex items-center border-l-2 px-4 py-3 text-sm font-semibold transition-all duration-200',
                  pathname === item.href
                    ? 'border-brand-500 text-brand-700 bg-white font-semibold'
                    : 'border-transparent text-gray-700 hover:border-brand-300 hover:text-brand-700 hover:bg-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center space-x-1.5 mt-3 border border-[#f58220] bg-white text-gray-900 px-4 py-3 rounded-xl text-sm font-semibold"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
