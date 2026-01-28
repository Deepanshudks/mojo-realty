import propertyBrigade from "@/assets/property-brigade.jpg";
import propertyEncanto from "@/assets/property-encanto.jpg";
import propertyGodrej from "@/assets/property-godrej.jpg";
import propertyMsn from "@/assets/property-msn.jpg";
import propertyRise9 from "@/assets/property-rise9.jpg";

export interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  price: string;
  pricePerSqft: string;
  beds: string;
  area: string;
  image: string;
  featured: boolean;
  status: "Ready to Move" | "Under Construction" | "Pre-Launch";
  developer: string;
  description: string;
  highlights: string[];
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "brigade-gateway",
    name: "Brigade Gateway Imperial Residences",
    tagline: "Beyond Distinction Lies a Rare Place",
    location: "Neopolis, Hyderabad",
    price: "₹4.5 Cr - ₹12 Cr",
    pricePerSqft: "₹15,000/sft",
    beds: "3, 4 & 5 BHK",
    area: "3000 - 8000 sft",
    image: propertyBrigade,
    featured: true,
    status: "Under Construction",
    developer: "Brigade Group",
    description:
      "Beacon-worthy and visionary in both scope and ambition, Imperial Residences at Brigade Gateway offers an ownership experience that honours audacious aspirations and meets global standards of luxury. Spread across 9.7 acres, it is a first-of-its-kind integrated, self-sustained township.",
    highlights: [
      "Integrated township with residential, commercial & retail",
      "Intercontinental Hotel within the complex",
      "Orion Mall at Brigade Gateway",
      "Premium imported finishes",
    ],
    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gym",
      "Tennis Court",
      "Children's Play Area",
      "Landscaped Gardens",
      "24/7 Security",
      "Concierge Services",
    ],
  },
  {
    id: "encanto",
    name: "Encanto",
    tagline: "60-Storey Towers of Opulence",
    location: "Puppalaguda, Financial District",
    price: "₹3.2 Cr - ₹8 Cr",
    pricePerSqft: "₹7,999 - ₹10,999/sft",
    beds: "3, 4 & 5 BHK",
    area: "2400 - 5500 sft",
    image: propertyEncanto,
    featured: true,
    status: "Under Construction",
    developer: "Encanto Developers",
    description:
      "Encanto is an ongoing residential community in Puppalaguda, Financial District of Hyderabad, with three 60-storey towers set on a podium above four basement levels, bringing luxury opulence to Hyderabad.",
    highlights: [
      "Three iconic 60-storey towers",
      "Flexible payment plans available",
      "Prime Financial District location",
      "Podium level amenities",
    ],
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Private Theatre",
      "Business Center",
      "Spa & Wellness",
      "Multi-level Parking",
      "Smart Home Features",
      "Helipad Access",
    ],
  },
  {
    id: "godrej-madison",
    name: "Godrej Madison Avenue",
    tagline: "A Legacy Made of Excellence",
    location: "Kokapet, Hyderabad",
    price: "₹2.8 Cr - ₹6 Cr",
    pricePerSqft: "₹12,500/sft",
    beds: "3 & 4 BHK",
    area: "2200 - 4500 sft",
    image: propertyGodrej,
    featured: false,
    status: "Ready to Move",
    developer: "Godrej Properties",
    description:
      "The Godrej story is made of a legacy of innovation and excellence, built on 128 years of unwavering trust. Godrej Madison Avenue brings thoughtful living spaces designed to make life more fulfilling.",
    highlights: [
      "128 years of Godrej legacy",
      "GRESB ranked sustainability",
      "Porter Prize winning design",
      "End-to-end R&D innovation",
    ],
    amenities: [
      "Olympic Pool",
      "Golf Simulator",
      "Library",
      "Pet Park",
      "Yoga Deck",
      "BBQ Area",
      "Guest Suites",
      "EV Charging",
    ],
  },
  {
    id: "one-by-msn",
    name: "One by MSN",
    tagline: "Crafting Better Spaces",
    location: "Neopolis, Hyderabad",
    price: "₹5 Cr - ₹15 Cr",
    pricePerSqft: "₹18,000/sft",
    beds: "4 & 5 BHK",
    area: "3500 - 8500 sft",
    image: propertyMsn,
    featured: false,
    status: "Pre-Launch",
    developer: "MSN Realty",
    description:
      "One by MSN offers a rarified lifestyle that aims to provide a one-of-a-kind experience to residents through affluent homes in Neopolis. Backed by MSN Group's pharmaceutical excellence.",
    highlights: [
      "$1bn+ MSN Group backing",
      "Design Forum International",
      "Shapoorji Pallonji construction",
      "CBRE consultancy",
    ],
    amenities: [
      "Private Elevators",
      "Wine Cellar",
      "Art Gallery",
      "Personal Butler",
      "Rooftop Terrace",
      "Home Automation",
      "Valet Parking",
      "Concierge",
    ],
  },
  {
    id: "rise-with-9",
    name: "Rise with 9",
    tagline: "33ft Arrival, Amplified",
    location: "Neopolis, Hyderabad",
    price: "₹3.5 Cr - ₹9 Cr",
    pricePerSqft: "₹14,000/sft",
    beds: "3, 4 & 5 BHK",
    area: "2800 - 6000 sft",
    image: propertyRise9,
    featured: false,
    status: "Under Construction",
    developer: "Rise Developers",
    description:
      "Rise with 9 features a stunning triple-height lobby with 33ft arrival experience. Air-conditioned corridors and premium specifications make this a truly elevated living experience.",
    highlights: [
      "Triple height 33ft lobby",
      "Air-conditioned corridors",
      "Premium specifications",
      "Neopolis prime location",
    ],
    amenities: [
      "Grand Lobby",
      "Indoor Games",
      "Party Hall",
      "Jogging Track",
      "Meditation Room",
      "Senior Citizen Area",
      "Multipurpose Court",
      "24/7 Power Backup",
    ],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
