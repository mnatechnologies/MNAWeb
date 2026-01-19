import ServicePageLayout from "@/components/ServicePageLayout";

export default function ConnectivityPage() {
  return (
    <ServicePageLayout
      title="Connectivity"
      headline="Enterprise Networking and Connectivity Solutions"
      intro="Stay connected with reliable, high-performance networking solutions. We design and implement secure connectivity solutions that keep your business running smoothly."
      heroImage="/mna images/conectivity.jpg"
      contentBlocks={[
        {
          title: "Business Internet",
          content: [
            "We partner with leading internet service providers to deliver fast, reliable business internet solutions. From fiber to fixed wireless, we find the right connection for your needs.",
            "Our team handles the entire process from evaluation and procurement to installation and ongoing support."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/conectivity.jpg"
        },
        {
          title: "Network Design & Implementation",
          content: [
            "Our network engineers design and implement robust, scalable networks that support your business operations. We work with industry-leading hardware vendors including Cisco, Juniper, and Ubiquiti.",
            "From small office networks to enterprise-wide deployments, we deliver solutions that perform."
          ],
          imagePosition: "left",
          imageSrc: "/mna images/internet-services-600x327.jpg"
        },
        {
          title: "SD-WAN Solutions",
          content: [
            "Optimize your wide-area network with our SD-WAN solutions. Improve application performance, reduce costs, and simplify network management across multiple locations.",
            "Our SD-WAN implementations provide secure, reliable connectivity with built-in redundancy and failover capabilities."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/vpn-600x330.jpg"
        }
      ]}
    />
  );
}
