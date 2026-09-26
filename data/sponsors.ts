export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Exhibitor" | "Media Partner" | "Knowledge Partner";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo?: string; // URL or path
  website?: string;
  tagline?: string;
}

export const sponsors: Sponsor[] = [
  // Platinum
  {
    id: "spo-01",
    name: "Infosys Finacle",
    tier: "Platinum",
    website: "https://www.infosys.com",
    tagline: "Powering Core Banking Transformation",
  },
  {
    id: "spo-02",
    name: "Microsoft Azure",
    tier: "Platinum",
    website: "https://azure.microsoft.com",
    tagline: "Cloud for Financial Services",
  },

  // Gold
  {
    id: "spo-03",
    name: "TCS BaNCS",
    tier: "Gold",
    website: "https://www.tcs.com",
    tagline: "Universal Financial Solution",
  },
  {
    id: "spo-04",
    name: "Wipro",
    tier: "Gold",
    website: "https://www.wipro.com",
  },
  {
    id: "spo-05",
    name: "Google Cloud",
    tier: "Gold",
    website: "https://cloud.google.com",
    tagline: "AI-First Cloud for BFSI",
  },
  {
    id: "spo-06",
    name: "Salesforce Financial Services",
    tier: "Gold",
    website: "https://www.salesforce.com",
  },

  // Silver
  {
    id: "spo-07",
    name: "Temenos",
    tier: "Silver",
    website: "https://www.temenos.com",
  },
  {
    id: "spo-08",
    name: "Mphasis",
    tier: "Silver",
    website: "https://www.mphasis.com",
  },
  {
    id: "spo-09",
    name: "IBM India",
    tier: "Silver",
    website: "https://www.ibm.com",
  },
  {
    id: "spo-10",
    name: "Palo Alto Networks",
    tier: "Silver",
    website: "https://www.paloaltonetworks.com",
    tagline: "Cybersecurity Partner",
  },

  // Exhibitors
  {
    id: "spo-11",
    name: "Razorpay",
    tier: "Exhibitor",
    website: "https://razorpay.com",
  },
  {
    id: "spo-12",
    name: "PhonePe",
    tier: "Exhibitor",
    website: "https://www.phonepe.com",
  },
  {
    id: "spo-13",
    name: "Signzy",
    tier: "Exhibitor",
    website: "https://signzy.com",
  },
  {
    id: "spo-14",
    name: "Perfios",
    tier: "Exhibitor",
    website: "https://www.perfios.com",
  },

  // Knowledge Partners
  {
    id: "spo-15",
    name: "NASSCOM",
    tier: "Knowledge Partner",
    website: "https://nasscom.in",
  },
  {
    id: "spo-16",
    name: "DSCI",
    tier: "Knowledge Partner",
    website: "https://www.dsci.in",
    tagline: "Data Security Council of India",
  },

  // Media Partners
  {
    id: "spo-17",
    name: "The Economic Times BFSI",
    tier: "Media Partner",
    website: "https://bfsi.economictimes.indiatimes.com",
  },
  {
    id: "spo-18",
    name: "ETCIO",
    tier: "Media Partner",
    website: "https://cio.economictimes.indiatimes.com",
  },
];

export const tierOrder: SponsorTier[] = [
  "Platinum",
  "Gold",
  "Silver",
  "Exhibitor",
  "Knowledge Partner",
  "Media Partner",
];

export const tierStyles: Record<SponsorTier, { label: string; color: string; size: string }> = {
  "Platinum": {
    label: "Platinum Partners",
    color: "text-[#e8e0d5]",
    size: "h-16",
  },
  "Gold": {
    label: "Gold Partners",
    color: "text-[#D4A54B]",
    size: "h-12",
  },
  "Silver": {
    label: "Silver Partners",
    color: "text-[#94aac4]",
    size: "h-10",
  },
  "Exhibitor": {
    label: "Exhibitors",
    color: "text-[#67e8f9]",
    size: "h-9",
  },
  "Knowledge Partner": {
    label: "Knowledge Partners",
    color: "text-[#a78bfa]",
    size: "h-9",
  },
  "Media Partner": {
    label: "Media Partners",
    color: "text-[#94aac4]",
    size: "h-8",
  },
};
