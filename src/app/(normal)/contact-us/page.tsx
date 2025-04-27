import { Metadata } from "next";
import ContactPage from "./contactUs";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SBN Infra Project Private Limited. Whether you have a project idea, a collaboration proposal, or general inquiries, we are here to connect. Reach out today and let's build the future together.",
};

export default function Page() {
  return <ContactPage />;
}
