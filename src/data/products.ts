export interface Product {
  slug: string;
  title: string;
  price: string;
  priceNumber: number;
  badgeText: string;
  category: 'Photo Magnets' | 'Flexible Sheets' | 'Locker Magnets' | 'Promotional';
  emoji: string;
  description: string;
  isCustomizable?: boolean;
  amazonUrl: string;
  specs: string[];
}

export const products: Product[] = [
  {
    slug: "custom-photo-fridge-magnet",
    title: "Custom Photo Fridge Magnet",
    price: "₹199",
    priceNumber: 199,
    badgeText: "Best Seller",
    category: "Photo Magnets",
    emoji: "🖼️",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "Turn your favorite memories, family photos, or custom designs into high-gloss fridge magnets. Features a flexible magnetic backing that securely grips any refrigerator or metal surface.",
    specs: [
      "Upload Your Favorite Photo or Artwork",
      "High-Gloss Protective UV Coating",
      "Flexible Full-Surface Magnetic Backing",
      "Standard 3x3 inch Square or Circle",
      "Fade-Resistant Vibrant Printing"
    ]
  },
  {
    slug: "flexible-magnetic-sheet",
    title: "Flexible Magnetic Sheet (A4 Cut-to-Size)",
    price: "₹249",
    priceNumber: 249,
    badgeText: "Practical",
    category: "Flexible Sheets",
    emoji: "📄",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "A4 size flexible magnetic rubber sheet with adhesive backing or printable matte surface. Easily cut with scissors to create custom signs, labels, or DIY crafts.",
    specs: [
      "Standard A4 Size (210 x 297 mm)",
      "Cut Easily with Regular Scissors",
      "Strong Flexible Rubber Magnet Core",
      "Peel-and-Stick Adhesive Backing Option",
      "Ideal for DIY Crafts, Signs & Notices"
    ]
  },
  {
    slug: "decorative-locker-magnet-pack",
    title: "Decorative Aesthetic Locker Magnets (Pack of 4)",
    price: "₹299",
    priceNumber: 299,
    badgeText: "Popular",
    category: "Locker Magnets",
    emoji: "🎒",
    amazonUrl: "https://amazon.in",
    description: "Set of 4 stylish decorative magnets designed for school lockers, office whiteboards, and magnetic bulletin boards. Vibrant art printed on durable metal shells.",
    specs: [
      "Pack of 4 Matching Aesthetic Designs",
      "Durable Metal Shell Construction",
      "Reliable Ceramic Magnet Core",
      "Scratch-Resistant Smooth Finish",
      "Great for Lockers, Cubicles & Whiteboards"
    ]
  },
  {
    slug: "custom-logo-promotional-magnet",
    title: "Custom Logo Promotional Magnet",
    price: "₹179",
    priceNumber: 179,
    badgeText: "Business Essential",
    category: "Promotional",
    emoji: "🏢",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "Promote your local business, cafe, or event with custom logo magnets. Bulk pricing available for professional branding and customer giveaways.",
    specs: [
      "Upload Business Logo or Contact Info",
      "Durable Vinyl Lamination",
      "Secure Refrigerator Holding Power",
      "Bulk Orders Available for Businesses",
      "Clean Die-Cut Edges"
    ]
  },
  {
    slug: "minimalist-whiteboard-magnet",
    title: "Minimalist Whiteboard & Office Magnets",
    price: "₹219",
    priceNumber: 219,
    badgeText: "Office Utility",
    category: "Locker Magnets",
    emoji: "📌",
    amazonUrl: "https://amazon.in",
    description: "Sleek, low-profile magnets designed to hold notes, schedules, and memos firmly on office whiteboards and magnetic glass boards.",
    specs: [
      "Strong Neodymium Inner Core",
      "Matte Black & Gold Accent Shell",
      "Compact Grip Design",
      "Leaves No Scratches on Glass Boards",
      "Pack of 6 Heavy-Duty Push Magnets"
    ]
  },
  {
    slug: "custom-square-photo-magnet",
    title: "Custom Square Photo Magnet",
    price: "₹399",
    priceNumber: 399,
    badgeText: "Studio Pick",
    category: "Photo Magnets",
    emoji: "🧲",
    isCustomizable: true,
    amazonUrl: "https://amazon.in",
    description: "High-end square photo magnet with rounded corners and thick magnetic padding. Premium tactile feel for gifting and home decor.",
    specs: [
      "70 x 70 mm Square Format",
      "Thick Magnetic Base Layer",
      "Scratch-Resistant Glossy Finish",
      "Upload High-Res Photo or Graphic",
      "Comes in Protective Packaging"
    ]
  }
];
