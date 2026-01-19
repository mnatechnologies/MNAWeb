import ServicePageLayout from "@/components/ServicePageLayout";

export default function InfrastructureDeploymentPage() {
  return (
    <ServicePageLayout
      title="Infrastructure Deployment"
      headline="Design, Deploy and Manage Your IT Infrastructure"
      intro="We help businesses design, implement, and manage robust IT infrastructure that scales with their needs. Whether you're looking for cloud, on-premise, or hybrid solutions, we have the expertise to deliver."
      heroImage="/mna images/infrastructure-deployment.jpg"
      contentBlocks={[
        {
          title: "Cloud Infrastructure",
          content: [
            "Leverage the power of the cloud with our comprehensive cloud infrastructure services. We work with leading providers including AWS, Microsoft Azure, and Google Cloud.",
            "Our team handles everything from initial design and migration to ongoing management and optimization, ensuring you get the most value from your cloud investment."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/cloud.jpg"
        },
        {
          title: "On-Premise Solutions",
          content: [
            "For businesses that require on-premise infrastructure, we provide complete server, storage, and networking solutions tailored to your specific requirements.",
            "Our certified engineers design and deploy reliable, high-performance infrastructure that meets your current needs while allowing for future growth."
          ],
          imagePosition: "left",
          imageSrc: "/mna images/infrastructure-deployment.jpg"
        },
        {
          title: "Hybrid Environments",
          content: [
            "Get the best of both worlds with our hybrid infrastructure solutions. We help you seamlessly integrate cloud and on-premise resources for optimal flexibility and control.",
            "Our hybrid solutions ensure your data and applications are always available, secure, and performing at their best."
          ],
          imagePosition: "right",
          imageSrc: "/mna images/mpls-600x330.jpg"
        }
      ]}
    />
  );
}
