export interface Product {
  slug: string;
  title: string;
  price: string;
  priceNumber: number;
  badgeText: string;
  category: 'Custom Magnets' | 'Desk Magnets' | 'Crystals' | 'Stationery' | 'Gadgets';
  emoji: string;
  description: string;
  isCustomizable?: boolean;
  amazonUrl: string;
  specs: string[];
}

export const products: Product[] = [
  {
    slug: "custom-square-magnet",
    title: "Custom Square Photo & Logo Magnet",
    price: "₹399",
    priceNumber: 399,
    badgeText: "Upload Your Design",
    category: "Custom Magnets",
    emoji: "🧲",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "Your custom photo, logo, or design printed on a high-durability square magnet with clean rounded corners and a strong full-surface magnetic backing.",
    specs: [
      "Custom High-Resolution Photo/Logo Upload",
      "Standard Square 70x70mm Format",
      "Full-Surface Magnetic Backing",
      "Glossy Protective Scratch-Resistant Coating",
      "Perfect for Fridges, Lockers & Metal Boards"
    ]
  },
  {
    slug: "neo-cube-magnets",
    title: "Neodymium Magnetic Spheres",
    price: "₹599",
    priceNumber: 599,
    badgeText: "Batch #001 Drop",
    category: "Desk Magnets",
    emoji: "🧲",
    amazonUrl: "https://amazon.in",
    description: "Ultra-strong rare-earth N35 magnetic balls designed for high tactile feedback, desk sculptures, and mind stimulation during long work hours.",
    specs: [
      "216 High-Power Magnetic Spheres (5mm)",
      "Polished Chrome Finish",
      "Includes Velvet Storage Pouch",
      "Anti-Chipping Triple Electroplating",
      "Precision Symmetrical Tolerances"
    ]
  },
  {
    slug: "premium-crystal-set",
    title: "Raw Healing Crystal Set",
    price: "₹799",
    priceNumber: 799,
    badgeText: "Hand-Selected Minerals",
    category: "Crystals",
    emoji: "💎",
    amazonUrl: "https://amazon.in",
    description: "Hand-selected unpolished raw minerals paired with a natural display base for mindful workspace grounding and home decor.",
    specs: [
      "Natural Display Base Included",
      "Ethically Sourced Raw Minerals",
      "Zero Plastic or Synthetic Dyes",
      "Individually Inspected Batch",
      "Gift-Ready Packaging"
    ]
  },
  {
    slug: "brass-executive-pen",
    title: "Precision Heavyweight Brass Pen",
    price: "₹899",
    priceNumber: 899,
    badgeText: "Solid Forged Brass",
    category: "Stationery",
    emoji: "✒️",
    amazonUrl: "https://amazon.in",
    description: "Solid forged heavyweight brass writing instrument with smooth rollerball ink refill. Develops a gorgeous natural patina over time.",
    specs: [
      "48g Heavyweight Forged Brass Body",
      "Smooth German Schmidt 0.7mm Ink Refill",
      "Knurled Grip Section for Ergonomics",
      "Secure Threaded Cap",
      "Timeless Minimalist Profile"
    ]
  },
  {
    slug: "chakra-orgonite-pyramid",
    title: "Energy Generator Orgonite Pyramid",
    price: "₹1,099",
    priceNumber: 1099,
    badgeText: "Artisan Craft",
    category: "Crystals",
    emoji: "🔮",
    amazonUrl: "https://amazon.in",
    description: "Hand-poured artisan resin pyramid embedded with a conductive copper coil and quartz crystal to harmonize workspace environments.",
    specs: [
      "Quartz Crystal & Copper Matrix",
      "Hand-Polished Optical Grade Resin",
      "Non-Scratch Velvet Base Padding",
      "Neutralizes Electronic Workspace Stress",
      "Compact Desk Footprint"
    ]
  },
  {
    slug: "levitating-desk-globe",
    title: "Magnetic Levitating Desk Globe",
    price: "₹1,499",
    priceNumber: 1499,
    badgeText: "Electromagnetic Tech",
    category: "Gadgets",
    emoji: "🪐",
    amazonUrl: "https://amazon.in",
    description: "Sleek globe suspended perpetually in mid-air via electromagnetic levitation inside a C-frame. Subtle ambient illumination.",
    specs: [
      "360° Zero-Friction Magnetic Suspension",
      "Ambient Halo Lighting",
      "Smart Auto-Catch Protection on Power Loss",
      "Low-Power Energy Efficient Adapter",
      "Conversation Starter Desk Ornament"
    ]
  },
  {
    slug: "minimalist-leather-desk-mat",
    title: "Premium PU Leather Desk Mat",
    price: "₹699",
    priceNumber: 699,
    badgeText: "Studio Deskware",
    category: "Stationery",
    emoji: "🛡️",
    amazonUrl: "https://amazon.in",
    description: "Heavyweight dual-sided vegan leather desk blotter with smooth low-friction glide for optical mouse sensors and water-resistant finish.",
    specs: [
      "80 x 40 cm Extended Workspace Area",
      "Spill-Resistant & Easy Clean Surface",
      "Non-Slip Suede Textured Backing",
      "Rollable with Fastener",
      "Protects Desk Surface"
    ]
  }
];
