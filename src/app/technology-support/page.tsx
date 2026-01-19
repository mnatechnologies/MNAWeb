import ServicePageLayout from "@/components/ServicePageLayout";

export default function TechnologySupportPage() {
  return (
    <ServicePageLayout
      title="Technology Support"
      headline="Fast, Reliable Technology Support Whenever You Need!"
      intro="We offer 24/7 technology support services that are effective, highly-responsive, robust and reliable. Our support plans are designed to meet your specific business needs and budget."
      heroImage="/mna images/mam-on-laptop-working.jpg"
      contentBlocks={[
        {
          title: "Support Plans",
          content: [
            "Our flexible support plans are customized to fit your organization's unique requirements. Whether you need basic helpdesk support or comprehensive managed services, we have a plan that works for you.",
            "We offer tiered support options with guaranteed response times, ensuring your business stays operational and productive."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/procurement-600x329.jpg"
        },
        {
          title: "Technology Service Desk",
          content: [
            "Our ITIL-based service desk provides professional, responsive support for all your technology needs. Our experienced technicians are available around the clock to resolve issues quickly and efficiently.",
            "We use industry-leading tools and processes to track, manage, and resolve support tickets, providing full visibility into your support requests."
          ],
          imagePosition: "left",
          imageSrc: "/mna images/service.webp"
        },
        {
          title: "Onsite Support Services",
          content: [
            "When remote support isn't enough, our skilled technicians come to you. We provide onsite support for hardware issues, network problems, and complex troubleshooting that requires hands-on attention.",
            "Our onsite team is equipped with the tools and expertise to diagnose and resolve issues on the spot, minimizing downtime and disruption to your business."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/on-site.jpg"
        }
      ]}
    />
  );
}
