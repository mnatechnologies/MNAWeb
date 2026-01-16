"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    image: "/hero/hero1.png",
    title: "MNA Technologies",
    subtitle: "Empowering Your Business With Cutting-Edge Technology Solutions",
  },
  {
    id: 2,
    image: "/hero/hero1.png",
    title: "Innovation Driven",
    subtitle: "Building Tomorrow's Solutions Today",
  },
  {
    id: 3,
    image: "/hero/hero1.png",
    title: "Expert IT Services",
    subtitle: "Trusted Partner for Digital Transformation",
  },
];

const services = [
  {
    id: 1,
    title: "Technology Support",
    description: "Fast, reliable technology support whenever you need. 24/7 service desk and onsite support services.",
    href: "/technology-support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "End-User Computing",
    description: "Complete end-user computing solutions including device management, software, and support.",
    href: "/end-user-computing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Infrastructure Deployment",
    description: "Design, deploy and manage IT infrastructure. Cloud, on-premise and hybrid solutions.",
    href: "/infrastructure-deployment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Connectivity",
    description: "Enterprise networking and connectivity solutions. Secure, fast and reliable connections.",
    href: "/connectivity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const differences = [
  { 
    id: 1, 
    title: "Customized Solutions",
    description: "We tailor our IT solutions to meet your specific business needs, ensuring optimal performance and efficiency."
  },
  { 
    id: 2, 
    title: "Capital Expenses Elimination",
    description: "Our managed services model helps you move from CAPEX to OPEX, freeing up capital for other strategic investments."
  },
  { 
    id: 3, 
    title: "Speedy Time-to-Value",
    description: "We deploy solutions quickly and effectively, allowing you to realize the benefits of your technology investment sooner."
  },
  { 
    id: 4, 
    title: "Expert Consulting",
    description: "Our team of experienced consultants provides strategic guidance to help you navigate the complex technology landscape."
  },
  { 
    id: 5, 
    title: "Honest Pricing",
    description: "We believe in transparency. Our pricing is clear and upfront, with no hidden fees or surprises."
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   }, 7000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg text-[#303942]">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light drop-shadow-md text-[#303942]">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#213d65] mb-4">Our Services</h2>
              <p className="text-[#787878] text-lg max-w-2xl mx-auto">
                Comprehensive technology solutions designed to help your business grow and succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-[#00a1e5] mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#213d65] mb-4">{service.title}</h3>
                  <p className="text-[#787878] mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-[#00a1e5] font-semibold text-sm uppercase tracking-wide hover:text-[#213d65] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The MNA Unique Difference (Flip Cards) */}
        <section className="py-20 bg-white">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#213d65] mb-6">The MNA Unique Difference</h2>
              <p className="text-[#787878] text-lg max-w-3xl mx-auto">
                In a crowded market, MNA Technologies stands out through our unwavering commitment to quality, speed, and personalized service. Here is what sets us apart from the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {differences.map((value, index) => (
                <div key={index} className="group h-80 perspective-1000 cursor-pointer">
                  <div className="relative w-full h-full transition-all duration-700 transform style-preserve-3d group-hover:rotate-y-180 shadow-lg rounded-xl">
                    {/* Front of Card */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center p-6 backface-hidden z-10">
                      <div className="w-16 h-16 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-6 text-[#00a1e5]">
                         <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-center text-[#213d65]">
                        {value.title}
                      </h3>

                    </div>
                    
                    {/* Back of Card */}
                    <div className="absolute inset-0 w-full h-full bg-[#00a1e5] text-white rounded-xl flex items-center justify-center p-6 rotate-y-180 backface-hidden z-20">
                      <p className="text-center text-sm leading-relaxed font-medium">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Get Started Section */}
        <section className="py-20 bg-[#00a1e5] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
          <div className="max-w-[1170px] mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you achieve your technology goals. Contact us today for a free consultation and network assessment.
            </p>
          </div>
        </section>

        {/* Contact Form Component */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
