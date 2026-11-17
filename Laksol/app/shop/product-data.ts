'use client';

export interface Product {
  id: number;
  name: string;
  size: string;
  image: string;
  price: number;
  description: string;
  category?: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  detailTitle: string;
  detailImage: string;
  detailText: string;
  products: Product[];
}

export const productCategories: Category[] = [
  {
    id: 'degreasing',
    title: "Degreasing Products",
    subtitle: "HEAVY DUTY KITCHEN DEGREASERS",
    heroImage: "/Degreasing.jpg",
    detailTitle: "Professional Degreasers",
    detailImage: "/deg.jpg",
    detailText: "Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.",
    products: [
      { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png", price: 7500, description: "Heavy-duty industrial strength degreaser" },
      { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png", price: 7500, description: "Perfect for commercial kitchen surfaces" },
      { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png", price: 7500, description: "Eliminates stubborn grease instantly" },
      { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png", price: 7500, description: "Safe for all hard surfaces" },
      { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png", price: 7500, description: "Thick foam clings to vertical surfaces" }
    ]
  },
  {
    id: 'dishwashing',
    title: "Dishwashing Products",
    subtitle: "MANUAL AND AUTO DISHWASHING SOLUTIONS FOR SPARKLING CLEANLINESS",
    heroImage: "/Dishwashing.jpg",
    detailTitle: "Dishwashing",
    detailImage: "/dish.jpg",
    detailText: "Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.",
    products: [
      { id: 6, name: "Auto Dish Liquid", size: "800mL", image: "/k.png", price: 7500, description: "High-performance automatic dishwasher detergent" },
      { id: 7, name: "Manual Pot & Pan", size: "800mL", image: "/k.png", price: 7500, description: "Tough on grease, gentle on hands" },
      { id: 8, name: "Glass Rinse Aid", size: "800mL", image: "/k.png", price: 7500, description: "Spot-free drying for glassware" },
      { id: 9, name: "Silverware Soak", size: "800mL", image: "/k.png", price: 7500, description: "Brightens and restores silverware" },
      { id: 10, name: "Scale Remover", size: "800mL", image: "/k.png", price: 7500, description: "Removes limescale build-up in dishwashers" }
    ]
  },
  {
    id: 'handwash',
    title: "Handwash Products",
    subtitle: "GENTLE YET EFFECTIVE HAND CLEANSING FOR EVERYDAY HYGIENE",
    heroImage: "/handwash2.jpg",
    detailTitle: "Handwash",
    detailImage: "/handwash.jpg",
    detailText: "Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.",
    products: [
      { id: 11, name: "Antibacterial Hand Soap", size: "800mL", image: "/k.png", price: 7500, description: "Kills 99.9% of germs while keeping skin soft" },
      { id: 12, name: "Foaming Hand Cleanser", size: "800mL", image: "/k.png", price: 7500, description: "Luxury foaming experience for guest areas" },
      { id: 13, name: "Aloe Vera Hand Wash", size: "800mL", image: "/k.png", price: 7500, description: "Infused with natural extracts for moisturizing" },
      { id: 14, name: "Heavy Duty Hand Gel", size: "800mL", image: "/k.png", price: 7500, description: "Removes industrial oils and grease from hands" },
      { id: 15, name: "Sanitizing Hand Rub", size: "800mL", image: "/k.png", price: 7500, description: "Alcohol-based quick-dry sanitizer" }
    ]
  },
  {
    id: 'high-pressure',
    title: "High Pressure Products",
    subtitle: "POWERFUL CLEANING SOLUTIONS FOR HIGH-PRESSURE WASHING SYSTEMS",
    heroImage: "/carwash.jpg",
    detailTitle: "High Pressure",
    detailImage: "/high.jpg",
    detailText: "Our high-pressure cleaning products are specially formulated to work with pressure washing equipment, delivering superior cleaning results on a variety of surfaces. Ideal for vehicles, buildings, and industrial equipment.",
    products: [
      { id: 16, name: "Vehicle Wash Pro", size: "800mL", image: "/k.png", price: 7500, description: "Effective cleaning for commercial vehicle fleets" },
      { id: 17, name: "Concrete & Floor Plus", size: "800mL", image: "/k.png", price: 7500, description: "Removes tire marks and oil from concrete" },
      { id: 18, name: "Exterior Building Cleaner", size: "800mL", image: "/k.png", price: 7500, description: "Restores facades and removes environmental soot" },
      { id: 19, name: "Equipment Degreaser HP", size: "800mL", image: "/k.png", price: 7500, description: "High-pressure solution for industrial machinery" },
      { id: 20, name: "Chassis Clean Tech", size: "800mL", image: "/k.png", price: 7500, description: "Specialized undercarriage cleaning formula" }
    ]
  },
  {
    id: 'toilet-cleaner',
    title: "Toilet Cleaner Products",
    subtitle: "POWERFUL TOILET CLEANERS FOR A HYGIENIC AND FRESH RESTROOM ENVIRONMENT",
    heroImage: "/toilet1.jpg",
    detailTitle: "Toilet Cleaner",
    detailImage: "/toilet.jpg",
    detailText: "Our toilet cleaners are formulated to tackle tough stains, limescale, and germs, leaving your toilet sparkling clean and fresh. Effective for both regular maintenance and deep cleaning.",
    products: [
      { id: 21, name: "Daily Bowl Cleaner", size: "800mL", image: "/k.png", price: 7500, description: "Regular maintenance for sparkling bowls" },
      { id: 22, name: "Deep Stain Remover", size: "800mL", image: "/k.png", price: 7500, description: "Extra strength for stubborn mineral deposits" },
      { id: 23, name: "Descaling Gel", size: "800mL", image: "/k.png", price: 7500, description: "Clings to surfaces to remove hard water scale" },
      { id: 24, name: "Urinal Fresh Solution", size: "800mL", image: "/k.png", price: 7500, description: "Controls odors and prevents salt buildup" },
      { id: 25, name: "Restroom Disinfectant", size: "800mL", image: "/k.png", price: 7500, description: "Broad-spectrum kill for high-traffic areas" }
    ]
  }
];

export const allProducts: Product[] = productCategories.flatMap(category => 
  category.products.map(product => ({
    ...product,
    category: category.id
  }))
);
