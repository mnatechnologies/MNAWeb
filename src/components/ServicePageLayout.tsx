import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import ContactForm from "./ContactForm";

interface ContentBlock {
  title: string;
  content: string[];
  imagePosition?: "left" | "right";
  imageSrc?: string;
}

interface ServicePageLayoutProps {
  title: string;
  headline: string;
  intro: string;
  contentBlocks: ContentBlock[];
  heroImage?: string;
}

export default function ServicePageLayout({
  title,
  headline,
  intro,
  contentBlocks,
  heroImage,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center gradient-hero pt-20">
          <div className="absolute inset-0 overflow-hidden">
            {heroImage && (
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover opacity-40"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 via-[#1a1a2e]/60 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#00b4d8] text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-[#00b4d8] font-medium mb-4">
                {headline}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {intro}
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Blocks */}
        {contentBlocks.map((block, index) => (
          <section
            key={index}
            className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                block.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}>
                <div className={block.imagePosition === "left" ? "lg:order-2" : ""}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    {block.title}
                  </h2>
                  <div className="space-y-4">
                    {block.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={`relative ${block.imagePosition === "left" ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    {block.imageSrc ? (
                      <Image
                        src={block.imageSrc}
                        alt={block.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0066cc]/10 to-[#00b4d8]/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="#0066cc" strokeWidth={0.5} className="opacity-50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 lg:py-28 gradient-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="service-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#service-grid)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started with {title}?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and learn how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0066cc] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:1300646397"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1300 646 397
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
