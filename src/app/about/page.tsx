'use client'
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {useState} from "react";
import Image from "next/image";

const values = [
  {
    title: "Technical Expertise",
    description: "Deep technical knowledge across a wide range of technologies with continuous learning and certification.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Always Accessible",
    description: "No long wait times or complex IVR menus—just real, local people ready to help you quickly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Proven Experience",
    description: "Over a decade of industry experience delivering robust solutions that stand the test of time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Tailored Solutions",
    description: "Customized approaches that align perfectly with your specific needs and business goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Your Success Partner",
    description: "We work as an extension of your team, dedicated to helping your business thrive.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Rapid Response",
    description: "Quick response to minimize downtime with proactive monitoring to catch issues early.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Strategic Guidance",
    description: "Expert advice to help you make informed decisions about your technology future.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Complete Security",
    description: "Industry-leading security measures and strict confidentiality protocols to keep you safe.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const partners = [
  { name: "Dell", logo: "/mna images/dell-logo.png" },
  { name: "ASUS", logo: "/mna images/asus-logo.png" },
  { name: "Netgear", logo: "/mna images/netgear-logo.png" },
  { name: "AWS", logo: "/mna images/aws-logo.png" },
  { name: "Linux", logo: "/mna images/linux-logo.png" },
  { name: "Cisco", logo: "/mna images/cisco-logo.png" },
  { name: "Juniper", logo: "/mna images/juniper-logo.png" }
];

const testimonials = [
  {
    id: 1,
    quote: "MNA Technologies has been instrumental in transforming our IT infrastructure. Their team is knowledgeable, responsive, and truly cares about our success.",
    author: "John Smith",
    company: "ABC Manufacturing",
  },
  {
    id: 2,
    quote: "We've worked with several IT providers over the years, but MNA stands out for their professionalism and expertise. They took the time to understand our unique business needs.",
    author: "Sarah Johnson",
    company: "XYZ Retail",
  },
  {
    id: 3,
    quote: "The level of support we receive from MNA Technologies is exceptional. They're always available when we need them and go above and beyond.",
    author: "Michael Chen",
    company: "Tech Innovations",
  },
];

export default function AboutPage()
{
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center gradient-hero pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/mna images/trusted.jpg"
              alt="About MNA Technologies"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 via-[#1a1a2e]/60 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#00b4d8] text-sm font-medium mb-6">
                About MNA Technologies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Trusted Technology Partner
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                A smart and fast-growing managed IT service provider in Australia, specializing in high-quality technology solutions for growing businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-[#0066cc] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  Empowering Businesses Through Technology
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  MNA Technologies is a leading managed IT service provider in Australia. We specialize in providing a complete range of high-quality technology solutions and services for small to medium-sized enterprises.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our team of experienced professionals is dedicated to helping businesses leverage technology to achieve their goals and stay ahead of the competition.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-[#f8f9fa] rounded-xl">
                    <div className="text-3xl font-bold text-[#0066cc] mb-2">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-[#f8f9fa] rounded-xl">
                    <div className="text-3xl font-bold text-[#0066cc] mb-2">500+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/hero/hero1.png"
                    alt="MNA Technologies Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 lg:py-28 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-white p-10 rounded-2xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#00b4d8] flex items-center justify-center text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To address the IT needs of businesses through secure, reliable, and innovative technology services that help our clients achieve their business goals. We are committed to delivering exceptional value through customized solutions, honest pricing, and outstanding customer service.
                </p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#00b4d8] flex items-center justify-center text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in delivering real value, driving innovation, and maintaining the highest standards of honesty, integrity, and customer care. Every decision we make is guided by our commitment to our clients success and our passion for technology excellence.
                </p>
              </div>
            </div>

            {/* What Makes Us Different */}
            <div className="text-center mb-16">
              <span className="text-[#0066cc] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-5">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence sets us apart from the competition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#f0f7ff] flex items-center justify-center text-[#0066cc] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Trusted Technology Partners</h2>
            </div>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {partners.map((partner, index) => (
                <div key={index} className="relative w-32 h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0066cc] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-5">
                What Our Clients Say
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative h-64">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white p-10 rounded-2xl shadow-lg text-center h-full flex flex-col justify-center">
                      <svg className="w-10 h-10 text-[#0066cc]/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-[#0066cc] text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-[#0066cc] w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 gradient-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="about-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#about-grid)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how we can help transform your IT infrastructure and drive your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0066cc] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
