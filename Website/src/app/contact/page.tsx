import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alalam Drug Store in Rabieh, Amman — phone, WhatsApp, address and hours.",
};

export default function ContactPage() {
  return <ContactView />;
}
