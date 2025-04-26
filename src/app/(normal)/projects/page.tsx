import { Metadata } from "next";
import HeroSection from "./heroSection";
import ProjectsSection from "./projectSection";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the diverse range of projects by SBN Infra Project Private Limited, showcasing our expertise in industrial, commercial, and urban infrastructure. With a commitment to quality, precision, and innovation, we are building the future of India's infrastructure.",
};

export default function ProjectsPage() {
  return (
    <div className=" mt-6 md:mt-10">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
