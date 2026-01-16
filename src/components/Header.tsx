"use client";

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#303942] text-white text-sm py-2">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="flex justify-end items-center gap-6">
            <a href="tel:1300646397" className="flex items-center gap-2 hover:text-[#00a1e5] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1300 646 397
            </a>
            <a href="mailto:info@mnatechnologies.com.au" className="flex items-center gap-2 hover:text-[#00a1e5] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@mnatechnologies.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline">
             <Image
               src="/branding/logo.png"
               alt="MNA Technologies Logo"
               width={150}
               height={150}
             />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <Link href="/" className="px-5 py-7 text-[#213d65] font-medium text-[15px] uppercase tracking-wide hover:text-[#00a1e5] transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-5 py-7 text-[#213d65] font-medium text-[15px] uppercase tracking-wide hover:text-[#00a1e5] transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer">
                  Technology Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/technology-support" className="block px-5 py-3 text-[#303942] text-sm border-b border-gray-100 hover:bg-[#00a1e5] hover:text-white transition-colors">
                    Technology Support
                  </Link>
                  <Link href="/end-user-computing" className="block px-5 py-3 text-[#303942] text-sm border-b border-gray-100 hover:bg-[#00a1e5] hover:text-white transition-colors">
                    End-User Computing
                  </Link>
                  <Link href="/infrastructure-deployment" className="block px-5 py-3 text-[#303942] text-sm border-b border-gray-100 hover:bg-[#00a1e5] hover:text-white transition-colors">
                    Infrastructure Deployment
                  </Link>
                  <Link href="/connectivity" className="block px-5 py-3 text-[#303942] text-sm hover:bg-[#00a1e5] hover:text-white transition-colors">
                    Connectivity
                  </Link>
                </div>
              </div>

              <Link href="/about" className="px-5 py-7 text-[#213d65] font-medium text-[15px] uppercase tracking-wide hover:text-[#00a1e5] transition-colors">
                About
              </Link>

              <Link href="/contact" className="px-5 py-7 text-[#213d65] font-medium text-[15px] uppercase tracking-wide hover:text-[#00a1e5] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#213d65]"
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
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <Link href="/" className="block py-3 text-[#213d65] font-medium">Home</Link>
              <Link href="/technology-support" className="block py-3 text-[#213d65] font-medium">Technology Support</Link>
              <Link href="/end-user-computing" className="block py-3 text-[#213d65] font-medium">End-User Computing</Link>
              <Link href="/infrastructure-deployment" className="block py-3 text-[#213d65] font-medium">Infrastructure Deployment</Link>
              <Link href="/connectivity" className="block py-3 text-[#213d65] font-medium">Connectivity</Link>
              <Link href="/about" className="block py-3 text-[#213d65] font-medium">About</Link>
              <Link href="/contact" className="block py-3 text-[#213d65] font-medium">Contact</Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
