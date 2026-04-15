'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-gradient-to-br from-rose-600 to-violet-600 p-2 rounded-xl shadow-lg shadow-rose-100 group-hover:shadow-rose-200 transition-all duration-300">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Be<span className="text-rose-600">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'text-rose-600 bg-rose-50 font-semibold'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 flex items-center space-x-1.5 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-rose-200 hover:scale-105 transition-all duration-200"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'text-rose-600 bg-rose-50 font-semibold'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center space-x-1.5 mt-3 bg-gradient-to-r from-rose-600 to-violet-600 text-white px-4 py-3 rounded-xl text-sm font-semibold"
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
