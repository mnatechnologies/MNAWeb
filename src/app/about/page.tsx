'use client'
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useState} from "react";

const values = [
  {
    title: "Technical Knowledge and Expertise",
    description: "Our team possesses deep technical knowledge across a wide range of technologies. We stay ahead of the curve with continuous learning and certification, ensuring we can solve even the most complex challenges and implement the latest innovations for your business."
  },
  {
    title: "Easily Accessible",
    description: "We pride ourselves on being available when you need us. No long wait times, no complex IVR menus, and no automated loops—just real, local people ready to help you resolve your IT issues quickly and efficiently."
  },
  {
    title: "Extensive Experience",
    description: "With over a decade of industry experience, we've seen it all. We bring this wealth of knowledge to every project we undertake, allowing us to anticipate potential issues and design robust solutions that stand the test of time."
  },
  {
    title: "Flexible and Tailored Solutions",
    description: "We understand that every business is unique. We don't believe in cookie-cutter approaches. Instead, we take the time to understand your specific needs and budget, customizing our solutions to align perfectly with your business goals."
  },
  {
    title: "Committed to Your Success",
    description: "Your success is our success. We work as an extension of your team, not just a vendor. We are dedicated to helping your business thrive through technology, providing strategic guidance and support every step of the way."
  },
  {
    title: "Highly-Responsive",
    description: "In the fast-paced world of IT, speed matters. We respond quickly to issues to minimize downtime and keep your business running smoothly. Our proactive monitoring often allows us to resolve problems before you even know they exist."
  },
  {
    title: "Provide Expert Advice",
    description: "We don't just fix problems; we provide strategic advice to help you make informed decisions about your technology future. From hardware upgrades to cloud migration strategies, we guide you towards the best choices for your growth."
  },
  {
    title: "Complete Security and Confidentiality",
    description: "We take security seriously. Your data and systems are protected with industry-leading security measures and strict confidentiality protocols. We help you navigate the complex landscape of cybersecurity to keep your business safe."
  }
];

const partners = ["Dell", "ASUS", "Netgear", "AWS", "Linux", "Cisco", "Juniper"];

const testimonials = [
  {
    id: 1,
    quote: "MNA Technologies has been instrumental in transforming our IT infrastructure. Their team is knowledgeable, responsive, and truly cares about our success. We've seen a significant improvement in our operational efficiency since partnering with them.",
    author: "John Smith",
    company: "ABC Manufacturing",
  },
  {
    id: 2,
    quote: "We've worked with several IT providers over the years, but MNA stands out for their professionalism and expertise. Highly recommended! They took the time to understand our unique business needs and delivered a solution that exceeded our expectations.",
    author: "Sarah Johnson",
    company: "XYZ Retail",
  },
  {
    id: 3,
    quote: "The level of support we receive from MNA Technologies is exceptional. They're always available when we need them and go above and beyond. It feels like having an in-house IT department without the overhead costs.",
    author: "Michael Chen",
    company: "Tech Innovations",
  },
  {
    id: 4,
    quote: "Professional, reliable, and expert service. They handled our cloud migration seamlessly, with zero downtime and minimal disruption to our daily operations. Their strategic advice has been invaluable.",
    author: "David Wilson",
    company: "Wilson Logistics",
  },
  {
    id: 5,
    quote: "Their cybersecurity audit revealed vulnerabilities we didn't know existed. We feel much safer now knowing that MNA Technologies is monitoring our systems 24/7. Their proactive approach gives us peace of mind.",
    author: "Emily Davis",
    company: "SecureNet Solutions",
  },
];

export default function AboutPage()
{
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="py-16 text-center" style={{ background: "linear-gradient(to right, #213d65, #00a1e5)" }}>
          <div className="max-w-[1170px] mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          </div>
        </div>

        {/* Who We Are */}
        <section className="py-16">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#213d65] mb-5">Who We Are</h2>
              <p className="text-[#787878] leading-relaxed mb-4">
                MNA Technologies is a smart and fast-growing managed IT service provider in Australia.
                We specialize in providing a complete range of high-quality technology solutions and
                services for small to medium-sized enterprises.
              </p>
              <p className="text-[#787878] leading-relaxed">
                Our team of experienced professionals is dedicated to helping businesses leverage
                technology to achieve their goals and stay ahead of the competition.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-[#213d65] mb-5">Our Mission</h2>
                <p className="text-[#787878] leading-relaxed mb-4">
                  Our mission is to address the IT needs of businesses through secure, reliable, and
                  innovative technology services that help our clients achieve their business goals.
                </p>
                <p className="text-[#787878] leading-relaxed">
                  We are committed to delivering exceptional value through customized solutions,
                  honest pricing, and outstanding customer service.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#213d65] mb-5">Our Values</h2>
                <p className="text-[#787878] leading-relaxed mb-4">
                  We believe in delivering real value, driving innovation, and maintaining the highest
                  standards of honesty, integrity, and customer care.
                </p>
                <p className="text-[#787878] leading-relaxed">
                  Every decision we make is guided by our commitment to our clients success and
                  our passion for technology excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#213d65] mb-4">What Makes Us Different</h2>
              <p className="text-[#787878]">Our commitment to excellence sets us apart from the competition.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {values.map((value, index) => (
                <div key={index} className="group h-80 perspective-1000 cursor-pointer">
                  <div className="relative w-full h-full transition-all duration-700 transform style-preserve-3d group-hover:rotate-y-180 shadow-lg rounded-xl">
                    {/* Front of Card */}
                    <div className="absolute inset-0 w-full h-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center p-8 backface-hidden z-10">
                      <div className="w-16 h-16 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-6 text-[#00a1e5]">
                         <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-center text-[#213d65]">
                        {value.title}
                      </h3>

                    </div>
                    
                    {/* Back of Card */}
                    <div className="absolute inset-0 w-full h-full bg-[#00a1e5] text-white rounded-xl flex items-center justify-center p-8 rotate-y-180 backface-hidden z-20">
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

        {/* Partners */}
        <section className="py-12 border-t border-[#eaeaea]">
          <div className="max-w-[1170px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#213d65] mb-8 text-center">We Work With</h2>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {partners.map((partner, index) => (
                <span key={index} className="text-2xl font-bold text-[#787878]/60 hover:text-[#787878] transition-colors">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#213d65] mb-6">Client Success Stories</h2>
              <p className="text-[#787878] text-lg max-w-3xl mx-auto">
                Don't just take our word for it. Here is what our clients have to say about their experience working with MNA Technologies.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto h-80 md:h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center items-center text-center ${index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
                >
                  <div className="bg-[#f8f9fa] p-10 rounded-2xl border border-gray-100 w-full relative">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#00a1e5] rounded-full flex items-center justify-center text-white text-xl font-serif">
                      "
                    </div>
                    <p className="text-[#555] italic text-lg leading-relaxed mb-6 pt-4">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-bold text-[#213d65] text-lg">{testimonial.author}</p>
                      <p className="text-[#00a1e5] font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-[#00a1e5] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#00a1e5]">
          <div className="max-w-[1170px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#00a1e5] font-semibold rounded hover:bg-[#213d65] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
