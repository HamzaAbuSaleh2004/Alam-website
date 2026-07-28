import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alalam Drug Store is a licensed pharmaceutical distributor based in Rabieh, Amman, serving pharmacies and clinics across Jordan.",
};

export default function AboutPage() {
  return <AboutView />;
}
