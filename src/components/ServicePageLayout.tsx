import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface ContentBlock {
  title: string;
  content: string[];
  imagePosition?: "left" | "right";
}

interface ServicePageLayoutProps {
  title: string;
  headline: string;
  intro: string;
  contentBlocks: ContentBlock[];
}

export default function ServicePageLayout({
  title,
  headline,
  intro,
  contentBlocks,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="py-16 text-center" style={{ background: "linear-gradient(to right, #213d65, #00a1e5)" }}>
          <div className="max-w-[1170px] mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#213d65] mb-5">{headline}</h2>
              <p className="text-lg text-[#787878] leading-relaxed">{intro}</p>
            </div>
          </div>
        </section>

        {/* Content Blocks */}
        {contentBlocks.map((block, index) => (
          <section
            key={index}
            className={`py-16 ${index % 2 === 1 ? "bg-[#f5f5f5]" : "bg-white"}`}
          >
            <div className="max-w-[1170px] mx-auto px-4">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                block.imagePosition === "left" ? "md:flex-row-reverse" : ""
              }`}>
                <div className={block.imagePosition === "left" ? "md:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#213d65] mb-5">{block.title}</h2>
                  {block.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[#787878] leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>
                <div className={`bg-[#eaeaea] aspect-[4/3] flex items-center justify-center text-[#787878] ${
                  block.imagePosition === "left" ? "md:order-1" : ""
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 bg-[#00a1e5]">
          <div className="max-w-[1170px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need {title}?</h2>
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
