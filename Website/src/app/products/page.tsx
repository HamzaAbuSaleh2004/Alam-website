import type { Metadata } from "next";
import { ProductsView } from "@/components/views/ProductsView";

export const metadata: Metadata = {
  title: "Products",
  description:
    "An informational catalogue of the pharmaceutical, medical-supply and personal-care categories Alalam Drug Store distributes across Jordan.",
};

export default function ProductsPage() {
  return <ProductsView />;
}
