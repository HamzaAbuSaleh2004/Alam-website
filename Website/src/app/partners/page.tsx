import type { Metadata } from "next";
import { PartnersView } from "@/components/views/PartnersView";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The local and international healthcare brands and providers Aalam Drug Store represents and distributes for in Jordan.",
};

export default function PartnersPage() {
  return <PartnersView />;
}
