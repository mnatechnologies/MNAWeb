import ServicePageLayout from "@/components/ServicePageLayout";

export default function EndUserComputingPage() {
  return (
    <ServicePageLayout
      title="End-User Computing"
      headline="Complete End-User Computing Solutions"
      intro="We provide comprehensive end-user computing solutions that empower your workforce with the tools they need to be productive. From device management to software deployment, we handle it all."
      heroImage="/mna images/end-user-computing.jpg"
      contentBlocks={[
        {
          title: "Device Management",
          content: [
            "Our device management services ensure your computers, laptops, tablets, and mobile devices are properly configured, secure, and up-to-date.",
            "We handle procurement, setup, deployment, and ongoing maintenance, so your team can focus on their work instead of IT issues."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/device.jpg"
        },
        {
          title: "Software & Application Support",
          content: [
            "We manage your software licenses, deployments, and updates to ensure your team always has access to the applications they need.",
            "Our team provides training and support to help users get the most out of their software tools."
          ],
          imagePosition: "left",
          imageSrc: "/mna images/software-support.jpg"
        },
        {
          title: "Virtual Desktop Solutions",
          content: [
            "Enable flexible, secure remote work with our virtual desktop infrastructure (VDI) solutions. Access your desktop and applications from anywhere, on any device.",
            "Our VDI solutions are scalable, cost-effective, and provide enterprise-grade security for your data."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/virtual.webp"
        }
      ]}
    />
  );
}
