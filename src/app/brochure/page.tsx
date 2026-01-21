'use client';

import Image from 'next/image';

export default function BrochurePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      {/* Download Button - Hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-[#0066cc] to-[#00b4d8] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Back Button - Hidden in print */}
      <div className="print:hidden fixed top-4 left-4 z-50">
        <a
          href="/"
          className="bg-white text-[#0066cc] px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-[#0066cc]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Site
        </a>
      </div>

      {/* Brochure Content - A4 sized */}
      <div className="brochure-page min-h-[297mm] h-[297mm] w-full max-w-[210mm] mx-auto print:max-w-none print:mx-0 print:h-full relative overflow-hidden flex flex-col">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0066cc]/10 rounded-full blur-3xl print:opacity-50" />
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#00b4d8]/10 rounded-full blur-3xl print:opacity-50" />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full p-6 print:p-5">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src="/branding/MNA Technology Logo GApps.png"
                    alt="MNA Technologies"
                    width='100'
                    height='80'
                    className='brightness-0 invert'
                  />
                </div>
                <p className="text-[#00b4d8] text-sm font-medium mt-4 ml-5">Smart IT. Simplified.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-white text-lg">1300 646 397</p>
              <p className="text-gray-400 text-sm">info@mnatechnologies.com.au</p>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="rounded-2xl overflow-hidden relative mb-6">
            {/* Background Image */}
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mna images/end-user-computing.jpg"
                alt="Managed IT Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-[#1a1a2e]/50" />
            </div>
            {/* Content */}
            <div className="relative px-8 py-6 text-white">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[#00b4d8] text-xs font-medium mb-3">
                What We Do
              </span>
              <h2 className="text-3xl font-bold mb-2">Managed IT Solutions</h2>
              <p className="text-base text-gray-300">Scalable technology for modern Australian businesses</p>
            </div>
          </div>

          {/* Services Grid - Flex grow to take available space */}
          <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Technology Support */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#00b4d8]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066cc] to-[#00b4d8] rounded-lg flex items-center justify-center shadow-lg shadow-[#0066cc]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Technology Support</h3>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> 24/7 Help Desk
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Remote & Onsite Support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Proactive Monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Fast Issue Resolution
                    </li>
                  </ul>
                </div>
              </div>

              {/* End-User Computing */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#00b4d8]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0066cc] rounded-lg flex items-center justify-center shadow-lg shadow-[#00b4d8]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Digital Workspace</h3>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Unified Device Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Automated Deployments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Virtual Desktops (VDI)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Mobile & BYOD Solutions
                    </li>
                  </ul>
                </div>
              </div>

              {/* Infrastructure Deployment */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#00b4d8]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066cc] to-[#00b4d8] rounded-lg flex items-center justify-center shadow-lg shadow-[#0066cc]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Cloud & Infrastructure</h3>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> AWS & Azure Cloud
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Hybrid Cloud Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Seamless Migrations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Server & Storage Solutions
                    </li>
                  </ul>
                </div>
              </div>

              {/* Connectivity */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#00b4d8]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0066cc] rounded-lg flex items-center justify-center shadow-lg shadow-[#00b4d8]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Network & Security</h3>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Business-Grade Internet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> SD-WAN & SASE
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Zero Trust Security
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00b4d8] rounded-full" /> Secure Remote Access
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3 text-center">The MNA Difference</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0066cc] to-[#00b4d8] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">Always On</h4>
                  <p className="text-xs text-gray-400">24/7 monitoring with guaranteed uptime SLAs</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00b4d8] to-[#0066cc] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">Rapid Deployment</h4>
                  <p className="text-xs text-gray-400">Fast rollouts with minimal disruption</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0066cc] to-[#00b4d8] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">Local Experts</h4>
                  <p className="text-xs text-gray-400">Australian-based certified professionals</p>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="mb-6 mt-2">
              <p className="text-sm text-gray-500 text-center mb-4 uppercase tracking-wider">Powered By Industry Leaders</p>
              <div className="flex items-center justify-center gap-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna images/google.png" alt="Google" className="h-8 object-contain brightness-0 invert opacity-70" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna images/dell-logo.png" alt="Dell" className="h-8 object-contain brightness-0 invert opacity-70" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna%20images/Ubiquiti.png" alt="Ubiquiti" className="h-8 object-contain brightness-0 invert opacity-70" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna images/aws-logo.png" alt="AWS" className="h-8 object-contain brightness-0 invert opacity-70" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna images/ms.png" alt="MS" className="h-8 object-contain brightness-0 invert opacity-70" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna images/juniper-logo.png" alt="Juniper" className="h-8 object-contain brightness-0 invert opacity-70" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mna images/ys.png" alt="Yeastar" className="h-8 object-contain brightness-0 invert opacity-70" />

              </div>
            </div>
          </div>

          {/* Footer CTA - Always at bottom */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0066cc] to-[#00b4d8] text-white px-8 py-5 relative overflow-hidden mt-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1">Let&apos;s Build Something Better</h3>
                <p className="text-base text-white/80">Get in touch for a free IT assessment</p>
              </div>
              <div className="text-right bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4">
                <p className="text-3xl font-bold">1300 646 397</p>
                <p className="text-base text-white/80">mnatechnologies.au</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .brochure-page {
            width: 210mm;
            height: 297mm;
            page-break-after: avoid;
          }
        }
      `}</style>
    </>
  );
}
