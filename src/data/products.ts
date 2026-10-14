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
    slug: "custom-obsidian-gold-magnet",
    title: "Custom Obsidian & Gold Fridge Magnet",
    price: "₹499",
    priceNumber: 499,
    badgeText: "Upload Your Design",
    category: "Custom Magnets",
    emoji: "🧲",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "Your custom artwork, logo, or photo encased in high-gloss obsidian resin with a 24k electroplated gold metallic rim. Features a heavy-duty N52 neodymium core that securely grips any magnetic surface.",
    specs: [
      "Custom High-Res Graphic Upload",
      "24K Gold Electroplated Bezel",
      "Ultra-Strong N52 Rare-Earth Magnet",
      "Scratch-Resistant Obsidian Glass Finish",
      "Multiple Shapes: Round, Hexagon, Square"
    ]
  },
  {
    slug: "custom-hexagonal-desk-magnet",
    title: "Custom Hexagonal Metal Magnet",
    price: "₹549",
    priceNumber: 549,
    badgeText: "Upload Your Design",
    category: "Custom Magnets",
    emoji: "⬡",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "Geometric hexagonal magnet plate forged from anodized black aluminium with chamfered gold edges. Upload your vector emblem, monogram, or visual art for precision studio printing.",
    specs: [
      "70mm Precision Hexagonal Contour",
      "Chamfered Brushed Gold Edges",
      "Industrial Neodymium Holding Power",
      "UV-Cured Vibrant Graphic Finish",
      "Desk Sculpture & Whiteboard Ready"
    ]
  },
  {
    slug: "custom-shield-badge-magnet",
    title: "Custom Obsidian Plaque Badge Magnet",
    price: "₹599",
    priceNumber: 599,
    badgeText: "Upload Your Design",
    category: "Custom Magnets",
    emoji: "🛡️",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "Statement rectangular badge magnet crafted with obsidian backing and metallic gold border. Perfect for branded offices, custom creator merch, and bespoke luxury gifting.",
    specs: [
      "75 x 50mm Executive Plaque Profile",
      "Dual N52 Magnetic Stabilizers",
      "Full-Color Upload or Monochrome Gold",
      "Matte Obsidian Anti-Fingerprint Shell",
      "Comes in Unhinged Studio Black Box"
    ]
  },
  {
    slug: "neo-cube-magnets",
    title: "Black Gold Neodymium Spheres",
    price: "₹599",
    priceNumber: 599,
    badgeText: "Batch #001 Drop",
    category: "Desk Magnets",
    emoji: "🧲",
    amazonUrl: "https://amazon.in",
    description: "Ultra-strong rare-earth N35 magnetic balls finished in dual matte black and titanium gold plating. Designed for high tactile feedback, fidget sculptures, and kinetic desk art.",
    specs: [
      "216 High-Power Magnetic Spheres (5mm)",
      "Titanium Gold & Obsidian Black Coating",
      "Includes Black Velvet Storage Pouch",
      "Anti-Chipping Triple Electroplating",
      "Precision Symmetrical Tolerances"
    ]
  },
  {
    slug: "premium-crystal-set",
    title: "Obsidian & Raw Crystal Set",
    price: "₹799",
    priceNumber: 799,
    badgeText: "Hand-Selected Minerals",
    category: "Crystals",
    emoji: "💎",
    amazonUrl: "https://amazon.in",
    description: "Hand-selected unpolished raw minerals paired with a natural black obsidian grounding plate and pure gold leaf flakes. Designed for dark luxury workspaces and mindful grounding.",
    specs: [
      "Raw Black Obsidian Display Base",
      "Ethically Sourced Natural Minerals",
      "Real 24K Floating Gold Leaf Flakes",
      "Zero Plastic or Synthetic Dyes",
      "Individually Numbered Batch Card"
    ]
  },
  {
    slug: "brass-executive-pen",
    title: "Matte Black & Gold Brass Pen",
    price: "₹899",
    priceNumber: 899,
    badgeText: "Solid Forged Brass",
    category: "Stationery",
    emoji: "✒️",
    amazonUrl: "https://amazon.in",
    description: "Solid forged heavyweight brass writing instrument with durable matte black ceramic coating and 24k gold-plated accents. Balanced center of gravity with German Schmidt rollerball refill.",
    specs: [
      "48g Heavyweight Forged Brass Body",
      "Matte Black Cerakote Finish",
      "24K Gold Trim & Deep Pocket Clip",
      "Smooth German Schmidt 0.7mm Ink Refill",
      "Knurled Grip Section for Ergonomics"
    ]
  },
  {
    slug: "chakra-orgonite-pyramid",
    title: "Obsidian Gold Orgonite Pyramid",
    price: "₹1,099",
    priceNumber: 1099,
    badgeText: "Studio Artisan Craft",
    category: "Crystals",
    emoji: "🔮",
    amazonUrl: "https://amazon.in",
    description: "Hand-poured artisan resin pyramid embedded with a conductive copper vortex coil, obsidian core, and genuine gold leaf to dissipate electromagnetic stress around computing rigs.",
    specs: [
      "Natural Obsidian & Quartz Crystal Matrix",
      "Pure Copper Induction Vortex",
      "Floating 24K Gold Flake Accents",
      "Hand-Polished Optical Grade Resin",
      "Non-Scratch Velvet Base Padding"
    ]
  },
  {
    slug: "levitating-desk-globe",
    title: "Gold-Rimmed Levitating Globe",
    price: "₹1,499",
    priceNumber: 1499,
    badgeText: "Electromagnetic Tech",
    category: "Gadgets",
    emoji: "🪐",
    amazonUrl: "https://amazon.in",
    description: "Midnight black sphere suspended perpetually in mid-air via electromagnetic levitation inside a brushed gold-rimmed C-frame. Subtle ambient LED halo illumination.",
    specs: [
      "360° Zero-Friction Magnetic Suspension",
      "Warm Gold Ambient Halo Lighting",
      "Obsidian Matte Continental Cartography",
      "Smart Auto-Catch Protection on Power Loss",
      "Low-Power 12V Energy Efficient Adapter"
    ]
  },
  {
    slug: "minimalist-leather-desk-mat",
    title: "Obsidian Black Leather Desk Mat",
    price: "₹699",
    priceNumber: 699,
    badgeText: "Studio Deskware",
    category: "Stationery",
    emoji: "🛡️",
    amazonUrl: "https://amazon.in",
    description: "Heavyweight dual-sided vegan obsidian leather desk blotter accented with metallic gold border stitching. Smooth low-friction glide for optical mouse sensors and water-resistant finish.",
    specs: [
      "80 x 40 cm Extended Workspace Area",
      "Reinforced Metallic Gold Edge Stitching",
      "Spill-Resistant & Easy Clean Surface",
      "Non-Slip Suede Textured Backing",
      "Rollable with Gold Button Fastener"
    ]
  }
];
