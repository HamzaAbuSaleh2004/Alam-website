import type { Locale } from "./i18n";

// ---------------------------------------------------------------------------
// DEMO DATA — placeholder catalogue for the first version of the site.
// Replace with the real product list (via the admin Excel import) before launch.
// No product photos are invented; cards use branded generative tiles instead.
// ---------------------------------------------------------------------------

export type Category = {
  id: string;
  name: Record<Locale, string>;
};

export const categories: Category[] = [
  { id: "pharma", name: { en: "Pharmaceuticals", ar: "الأدوية" } },
  { id: "supplies", name: { en: "Medical Supplies", ar: "المستلزمات الطبية" } },
  { id: "cosmetics", name: { en: "Cosmetics & Care", ar: "التجميل والعناية" } },
  { id: "vitamins", name: { en: "Vitamins & Supplements", ar: "الفيتامينات والمكمّلات" } },
  { id: "baby", name: { en: "Baby & Mother", ar: "الأم والطفل" } },
];

export type Product = {
  slug: string;
  sku: string;
  categoryId: string;
  name: Record<Locale, string>;
  blurb: Record<Locale, string>;
};

export const products: Product[] = [
  {
    slug: "analgesic-tablets",
    sku: "ALM-PH-1001",
    categoryId: "pharma",
    name: { en: "Analgesic Tablets 500mg", ar: "أقراص مسكّنة 500ملغ" },
    blurb: { en: "General-purpose pain and fever relief tablets in blister packs.", ar: "أقراص لتخفيف الألم والحرارة في عبوات شريطية." },
  },
  {
    slug: "amoxicillin-suspension",
    sku: "ALM-PH-1042",
    categoryId: "pharma",
    name: { en: "Amoxicillin Oral Suspension", ar: "معلّق أموكسيسيلين فموي" },
    blurb: { en: "Broad-spectrum antibiotic suspension for paediatric dosing.", ar: "معلّق مضاد حيوي واسع الطيف بجرعات للأطفال." },
  },
  {
    slug: "antihistamine-syrup",
    sku: "ALM-PH-1088",
    categoryId: "pharma",
    name: { en: "Antihistamine Syrup", ar: "شراب مضاد للحساسية" },
    blurb: { en: "Relief for seasonal allergy symptoms, sugar-free formulation.", ar: "لتخفيف أعراض الحساسية الموسمية، تركيبة خالية من السكر." },
  },
  {
    slug: "sterile-gauze",
    sku: "ALM-MS-2003",
    categoryId: "supplies",
    name: { en: "Sterile Gauze Swabs", ar: "شاش معقّم" },
    blurb: { en: "Individually wrapped sterile gauze for wound dressing.", ar: "شاش معقّم مغلّف فردياً لتضميد الجروح." },
  },
  {
    slug: "nitrile-gloves",
    sku: "ALM-MS-2019",
    categoryId: "supplies",
    name: { en: "Nitrile Examination Gloves", ar: "قفازات فحص نيتريل" },
    blurb: { en: "Powder-free examination gloves, boxes of 100.", ar: "قفازات فحص خالية من البودرة، علبة 100 قطعة." },
  },
  {
    slug: "digital-thermometer",
    sku: "ALM-MS-2044",
    categoryId: "supplies",
    name: { en: "Digital Thermometer", ar: "ميزان حرارة رقمي" },
    blurb: { en: "Fast-read digital thermometer with fever alarm.", ar: "ميزان حرارة رقمي سريع القراءة مع تنبيه الحمّى." },
  },
  {
    slug: "moisturising-cream",
    sku: "ALM-CO-3007",
    categoryId: "cosmetics",
    name: { en: "Dermatological Moisturiser", ar: "مرطّب جلدي طبي" },
    blurb: { en: "Fragrance-free daily moisturiser for sensitive skin.", ar: "مرطّب يومي خالٍ من العطور للبشرة الحساسة." },
  },
  {
    slug: "sunscreen-spf50",
    sku: "ALM-CO-3021",
    categoryId: "cosmetics",
    name: { en: "Mineral Sunscreen SPF 50", ar: "واقٍ شمسي معدني SPF 50" },
    blurb: { en: "Broad-spectrum mineral sun protection, non-greasy finish.", ar: "حماية شمسية معدنية واسعة الطيف بملمس غير دهني." },
  },
  {
    slug: "vitamin-d3",
    sku: "ALM-VT-4002",
    categoryId: "vitamins",
    name: { en: "Vitamin D3 Drops", ar: "قطرات فيتامين د3" },
    blurb: { en: "Daily vitamin D3 supplement drops for all ages.", ar: "قطرات مكمّل فيتامين د3 اليومي لجميع الأعمار." },
  },
  {
    slug: "multivitamin-effervescent",
    sku: "ALM-VT-4030",
    categoryId: "vitamins",
    name: { en: "Effervescent Multivitamin", ar: "مالتي فيتامين فوّار" },
    blurb: { en: "Daily multivitamin tablets with vitamin C and zinc.", ar: "أقراص مالتي فيتامين يومية مع فيتامين C والزنك." },
  },
  {
    slug: "infant-formula",
    sku: "ALM-BM-5005",
    categoryId: "baby",
    name: { en: "Infant Formula Stage 1", ar: "حليب أطفال مرحلة 1" },
    blurb: { en: "Nutritionally complete formula for 0–6 months.", ar: "تركيبة غذائية متكاملة من 0 إلى 6 أشهر." },
  },
  {
    slug: "baby-barrier-cream",
    sku: "ALM-BM-5028",
    categoryId: "baby",
    name: { en: "Baby Barrier Cream", ar: "كريم حماية للأطفال" },
    blurb: { en: "Protective cream for nappy-area skin care.", ar: "كريم واقٍ للعناية بمنطقة الحفاض." },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function categoryName(id: string, locale: Locale): string {
  return categories.find((c) => c.id === id)?.name[locale] ?? id;
}

// ---------------------------------------------------------------------------
// Placeholder partners — generic names, NOT real brands, pending confirmation.
// ---------------------------------------------------------------------------
export type Partner = { name: string; monogram: string };

export const partners: Partner[] = [
  { name: "MediLine", monogram: "ML" },
  { name: "PharmaCore", monogram: "PC" },
  { name: "Nova Health", monogram: "NH" },
  { name: "CareBridge", monogram: "CB" },
  { name: "VitaLabs", monogram: "VL" },
  { name: "Dermé", monogram: "DE" },
  { name: "PediCare", monogram: "PD" },
  { name: "Zenith Medical", monogram: "ZM" },
];
