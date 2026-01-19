"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/branding/logo.png"
              alt="MNA Technologies"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 font-medium text-[15px] hover:text-[#0066cc] transition-colors rounded-lg hover:bg-gray-50"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 font-medium text-[15px] hover:text-[#0066cc] transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1.5 bg-transparent border-none cursor-pointer">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="transition-transform group-hover:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="min-w-[240px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                  <Link href="/technology-support" className="flex items-center gap-3 px-4 py-3 text-gray-700 text-sm hover:bg-[#0066cc] hover:text-white transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066cc] group-hover:bg-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    Technology Support
                  </Link>
                  <Link href="/end-user-computing" className="flex items-center gap-3 px-4 py-3 text-gray-700 text-sm hover:bg-[#0066cc] hover:text-white transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066cc]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    End-User Computing
                  </Link>
                  <Link href="/infrastructure-deployment" className="flex items-center gap-3 px-4 py-3 text-gray-700 text-sm hover:bg-[#0066cc] hover:text-white transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066cc]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </span>
                    Infrastructure Deployment
                  </Link>
                  <Link href="/connectivity" className="flex items-center gap-3 px-4 py-3 text-gray-700 text-sm hover:bg-[#0066cc] hover:text-white transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066cc]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Connectivity
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 font-medium text-[15px] hover:text-[#0066cc] transition-colors rounded-lg hover:bg-gray-50"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[#0066cc] text-white font-semibold text-[15px] rounded-lg hover:bg-[#0052a3] transition-colors shadow-md shadow-blue-500/20"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}>
          <div className="pt-4 space-y-1 border-t border-gray-100">
            <Link href="/" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Home</Link>
            <Link href="/technology-support" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Technology Support</Link>
            <Link href="/end-user-computing" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">End-User Computing</Link>
            <Link href="/infrastructure-deployment" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Infrastructure Deployment</Link>
            <Link href="/connectivity" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Connectivity</Link>
            <Link href="/about" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">About</Link>
            <Link href="/contact" className="block px-4 py-3 mt-2 text-center bg-[#0066cc] text-white font-semibold rounded-lg">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
