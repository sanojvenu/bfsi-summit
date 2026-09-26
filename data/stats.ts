export interface EventStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export interface SectorStat {
  value: string;
  label: string;
  source: string;
  sourceUrl?: string;
  trend?: "up" | "down";
  trendLabel?: string;
}

export const eventStats: EventStat[] = [
  {
    value: 150,
    suffix: "+",
    label: "Senior Leaders",
    description: "CXOs and VPs from India's leading BFSI institutions",
  },
  {
    value: 30,
    suffix: "+",
    label: "Expert Speakers",
    description: "Practitioners, not pundits — real implementers sharing what works",
  },
  {
    value: 6,
    label: "Thematic Tracks",
    description: "AI, Cybersecurity, Payments, RegTech, Cloud, InsurTech",
  },
  {
    value: 1,
    label: "Focused Day",
    description: "High-density, no-filler programming — every session earns its place",
  },
];

export const sectorStats: SectorStat[] = [
  {
    value: "₹20.64T",
    label: "UPI Transactions in FY25",
    source: "NPCI",
    sourceUrl: "https://www.npci.org.in",
    trend: "up",
    trendLabel: "+46% YoY",
  },
  {
    value: "74%",
    label: "Indian Banks Piloting AI in 2025",
    source: "RBI Annual Report 2025",
    sourceUrl: "https://www.rbi.org.in",
    trend: "up",
    trendLabel: "Up from 48% in 2023",
  },
  {
    value: "₹2.3L Cr",
    label: "Projected BFSI IT Spend, FY26",
    source: "NASSCOM",
    sourceUrl: "https://nasscom.in",
    trend: "up",
    trendLabel: "+18% vs FY25",
  },
  {
    value: "68%",
    label: "of Cyber Attacks in India Target BFSI",
    source: "CERT-In Annual Report 2025",
    sourceUrl: "https://cert-in.org.in",
    trend: "down",
    trendLabel: "↑ Threat severity rising",
  },
];

export const whyAttend = [
  {
    icon: "Users",
    title: "Curated C-Suite Audience",
    description: "Every delegate is vetted. Expect genuine peers — CIOs, CTOs, CISOs, and CDOs — not vendor salespeople padding numbers.",
  },
  {
    icon: "Mic",
    title: "Practitioner-Led Dialogue",
    description: "No vendor pitches on stage. Every speaker is an operator who has done the work — and can show you the scars and the results.",
  },
  {
    icon: "Globe",
    title: "India-Relevant Insights",
    description: "Not a Western conference retrofitted for India. Every session is rooted in the regulatory, economic, and infrastructure realities of India's BFSI sector.",
  },
  {
    icon: "Network",
    title: "Deals Happen in the Room",
    description: "Three structured networking sessions, curated roundtables, and an evening reception designed to turn introductions into partnerships.",
  },
];

export const summitTracks = [
  {
    id: "tr-01",
    icon: "Brain",
    color: "#a78bfa",
    label: "AI & ML in Banking",
    description: "GenAI for customer service, credit decisioning, fraud detection, and AI-native product design — with governance and explainability at the centre.",
    sessions: 4,
  },
  {
    id: "tr-02",
    icon: "Shield",
    color: "#f87171",
    label: "Cybersecurity & Resilience",
    description: "Zero Trust architectures, API security, deepfake threats, SOC operations, and building a human-centred security culture in large financial institutions.",
    sessions: 3,
  },
  {
    id: "tr-03",
    icon: "Smartphone",
    color: "#34d399",
    label: "Digital Payments & Open Finance",
    description: "UPI 3.0, CBDC, account aggregation, cross-border rails, and the battle for wallet share in India's hyper-competitive payments market.",
    sessions: 2,
  },
  {
    id: "tr-04",
    icon: "FileCheck",
    color: "#D4A54B",
    label: "RegTech & DPDPA Compliance",
    description: "Navigating RBI's digital lending guidelines, the Digital Personal Data Protection Act, and building compliance architectures that don't become innovation bottlenecks.",
    sessions: 2,
  },
  {
    id: "tr-05",
    icon: "Cloud",
    color: "#60a5fa",
    label: "Cloud & Core Modernisation",
    description: "Phased core banking migration, multi-cloud strategies for regulated workloads, FinOps for BFSI, and zero-downtime transformation playbooks.",
    sessions: 3,
  },
  {
    id: "tr-06",
    icon: "Zap",
    color: "#fb923c",
    label: "InsurTech & Embedded Finance",
    description: "AI underwriting, parametric insurance, embedded distribution, and the convergence of banking and insurance in India's digital financial services stack.",
    sessions: 2,
  },
];
