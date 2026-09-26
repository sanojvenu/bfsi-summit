export interface AwardCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface AwardWinner {
  id: string;
  categoryId: string;
  organization: string;
  projectTitle: string;
  year: number;
  excerpt: string;
}

export const awardCategories: AwardCategory[] = [
  {
    id: "aw-01",
    title: "AI Innovation of the Year",
    description: "Recognising the most impactful production deployment of artificial intelligence or machine learning in banking, insurance, or financial services.",
    icon: "Brain",
  },
  {
    id: "aw-02",
    title: "Cybersecurity Excellence",
    description: "Honouring an organisation that demonstrated exceptional capability in threat detection, zero-trust implementation, or cyber resilience in BFSI.",
    icon: "Shield",
  },
  {
    id: "aw-03",
    title: "Digital Payments Pioneer",
    description: "Celebrating the most innovative contribution to India's digital payments ecosystem — in volume, inclusion, or technological advancement.",
    icon: "CreditCard",
  },
  {
    id: "aw-04",
    title: "Financial Inclusion Champion",
    description: "For the institution or initiative that most meaningfully extended access to formal financial services to underserved Indian communities.",
    icon: "Users",
  },
  {
    id: "aw-05",
    title: "RegTech Leadership Award",
    description: "For outstanding deployment of regulatory technology enabling faster, smarter, more accurate compliance in a complex BFSI regulatory environment.",
    icon: "FileCheck",
  },
  {
    id: "aw-06",
    title: "Cloud & Infrastructure Transformation",
    description: "For the most compelling core banking, infrastructure, or cloud modernisation initiative executed at scale and with measurable business outcomes.",
    icon: "Cloud",
  },
  {
    id: "aw-07",
    title: "InsurTech Disruptor of the Year",
    description: "Recognising a product, platform, or initiative that fundamentally rethinks how insurance is distributed, underwritten, or serviced in India.",
    icon: "Zap",
  },
  {
    id: "aw-08",
    title: "CXO of the Year — BFSI Technology",
    description: "A peer-nominated award for an individual C-suite leader who has made an outstanding personal contribution to BFSI's digital transformation in the past year.",
    icon: "Trophy",
  },
];

export const pastWinners: AwardWinner[] = [
  {
    id: "pw-01",
    categoryId: "aw-01",
    organization: "ICICI Bank",
    projectTitle: "iMobile Pay AI — Real-Time Hyper-Personalisation Engine",
    year: 2025,
    excerpt: "Deployed a real-time ML model serving 30M+ customers, reducing churn by 18% and increasing cross-sell revenue by ₹1,400 Cr.",
  },
  {
    id: "pw-02",
    categoryId: "aw-02",
    organization: "HDFC Bank",
    projectTitle: "Zero Trust Network Architecture — HAWK Platform",
    year: 2025,
    excerpt: "End-to-end Zero Trust rollout across 10,000+ endpoints and 150+ branches, reducing phishing incidents by 73% in 12 months.",
  },
  {
    id: "pw-03",
    categoryId: "aw-03",
    organization: "PhonePe",
    projectTitle: "UPI Lite — Offline-First Payments for Rural India",
    year: 2025,
    excerpt: "Enabled digital payments in areas with intermittent connectivity, onboarding 22M+ users in tier-3 and rural markets within 6 months.",
  },
  {
    id: "pw-04",
    categoryId: "aw-04",
    organization: "Paytm Payments Bank",
    projectTitle: "Grameen Digital Finance — SHG Banking Platform",
    year: 2025,
    excerpt: "Digitised 1.2M Self Help Group accounts across 12 states, bringing formal credit access to women-led micro-enterprises.",
  },
  {
    id: "pw-05",
    categoryId: "aw-05",
    organization: "Axis Bank",
    projectTitle: "Axiom RegTech Suite — Automated Regulatory Reporting",
    year: 2025,
    excerpt: "Reduced regulatory submission time from 5 days to 4 hours across 200+ RBI compliance reports using AI-assisted data extraction.",
  },
  {
    id: "pw-06",
    categoryId: "aw-06",
    organization: "Bajaj Finserv",
    projectTitle: "Project Horizon — Cloud-Native Core Migration",
    year: 2025,
    excerpt: "Migrated 40% of core lending workloads to AWS, cutting infrastructure cost by 34% and improving loan disbursement speed by 3x.",
  },
];
