"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="py-16 text-center" style={{ background: "linear-gradient(to right, #213d65, #00a1e5)" }}>
          <div className="max-w-[1170px] mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>

        {/* Contact Info Section */}
        <section className="py-16">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#213d65] mb-5">Get in Touch</h2>
              <p className="text-lg text-[#787878]">
                We maintain 24/7 availability through email, phone, and live chat support.
                Get in touch with us today!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-10 bg-[#f5f5f5]">
                <div className="w-16 h-16 bg-[#00a1e5] rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213d65] mb-3">Phone</h3>
                <a href="tel:1300646397" className="text-xl text-[#00a1e5] font-semibold hover:text-[#213d65] transition-colors">
                  1300 646 397
                </a>
              </div>

              <div className="text-center p-10 bg-[#f5f5f5]">
                <div className="w-16 h-16 bg-[#00a1e5] rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213d65] mb-3">Email</h3>
                <a href="mailto:info@mnatechnologies.com.au" className="text-[#00a1e5] font-semibold hover:text-[#213d65] transition-colors">
                  info@mnatechnologies.com.au
                </a>
              </div>

              <div className="text-center p-10 bg-[#f5f5f5]">
                <div className="w-16 h-16 bg-[#00a1e5] rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213d65] mb-3">Hours</h3>
                <p className="text-[#787878]">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
