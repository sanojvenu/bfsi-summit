export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  companyShort?: string;
  bio: string;
  photo?: string; // URL or path; use placeholder if absent
  initials: string;
  avatarColor: string; // CSS gradient for avatar fallback
  sessionId?: string;
  sessionTitle?: string;
  track?: string;
  linkedin?: string;
  featured?: boolean;
}

export const speakers: Speaker[] = [
  {
    id: "sp-01",
    name: "Rajesh Sharma",
    title: "Chief Digital Officer",
    company: "State Bank of India",
    companyShort: "SBI",
    initials: "RS",
    avatarColor: "linear-gradient(135deg, #0B1E3D, #2554a0)",
    bio: "Rajesh Sharma leads SBI's digital transformation agenda, overseeing the bank's tech modernisation, AI/ML adoption, and digital channel growth serving over 500 million customers across India. Under his leadership, SBI's YONO platform crossed 70 million registered users and became India's most downloaded financial super-app.",
    sessionId: "k-01",
    sessionTitle: "India's Banking Renaissance: From Branch-First to AI-First",
    track: "Keynote",
    featured: true,
  },
  {
    id: "sp-02",
    name: "Priya Nair",
    title: "Chief Information Security Officer",
    company: "HDFC Bank",
    companyShort: "HDFC Bank",
    initials: "PN",
    avatarColor: "linear-gradient(135deg, #0d2650, #06b6d4)",
    bio: "Priya Nair is a renowned cybersecurity strategist with 20+ years across banking and global financial institutions. She architected HDFC Bank's Zero Trust framework and now leads an 800-person security org protecting India's largest private bank. Speaker at RSA Conference, SIBOS, and DSCI Excellence Awards jury.",
    sessionId: "p-02",
    sessionTitle: "Zero Trust in a Zero-Friction World: Securing Digital Banking",
    track: "Panel",
    featured: true,
  },
  {
    id: "sp-03",
    name: "Vikram Menon",
    title: "CTO & Head of Fintech Partnerships",
    company: "Bajaj Finserv",
    companyShort: "Bajaj Finserv",
    initials: "VM",
    avatarColor: "linear-gradient(135deg, #112e61, #D4A54B)",
    bio: "Vikram Menon drives product and platform strategy at Bajaj Finserv, steering its tech stack from monolith to cloud-native microservices. He pioneered the company's API-first architecture that enabled over 50 fintech integrations and reduced time-to-market for new products by 65%.",
    sessionId: "fc-01",
    sessionTitle: "Embedded Finance & API-First Banking: Moving Beyond BaaS Hype",
    track: "Fireside Chat",
    featured: true,
  },
  {
    id: "sp-04",
    name: "Deepa Krishnan",
    title: "MD & CEO",
    company: "NPCI International",
    companyShort: "NPCI Intl.",
    initials: "DK",
    avatarColor: "linear-gradient(135deg, #0B1E3D, #34d399)",
    bio: "Deepa Krishnan oversees the global expansion of India's digital payments infrastructure — UPI, RuPay, and FASTag — into 30+ countries. She works closely with central banks and regulators worldwide, and is a vocal advocate for interoperable cross-border payments and digital financial inclusion.",
    sessionId: "k-02",
    sessionTitle: "UPI at Scale: Exporting India's Payments Blueprint to the World",
    track: "Keynote",
    featured: true,
  },
  {
    id: "sp-05",
    name: "Anand Subramanian",
    title: "Head of AI & Advanced Analytics",
    company: "ICICI Bank",
    companyShort: "ICICI Bank",
    initials: "AS",
    avatarColor: "linear-gradient(135deg, #162d4c, #a78bfa)",
    bio: "Anand Subramanian leads ICICI Bank's AI Centre of Excellence, applying machine learning across credit decisioning, fraud detection, and hyper-personalised customer journeys. His team serves models that process over 10 million customer interactions daily with sub-100ms latency.",
    sessionId: "cs-01",
    sessionTitle: "From Proof-of-Concept to Production: Deploying AI at Banking Scale",
    track: "Case Study",
  },
  {
    id: "sp-06",
    name: "Nisha Patel",
    title: "Chief Compliance Officer",
    company: "Kotak Mahindra Bank",
    companyShort: "Kotak Bank",
    initials: "NP",
    avatarColor: "linear-gradient(135deg, #0d2650, #f472b6)",
    bio: "Nisha Patel is a legal-tech pioneer navigating India's evolving regulatory landscape — from RBI's framework for digital lending to the Digital Personal Data Protection Act (DPDPA). She advises DPIIT and SEBI working groups on algorithmic compliance and data localisation.",
    sessionId: "p-03",
    sessionTitle: "DPDPA & RBI RegTech: Building Compliance-First Architectures",
    track: "Panel",
  },
  {
    id: "sp-07",
    name: "Rohan Kapoor",
    title: "VP — Cloud Infrastructure & SRE",
    company: "Axis Bank",
    companyShort: "Axis Bank",
    initials: "RK",
    avatarColor: "linear-gradient(135deg, #1a3f7a, #22d3ee)",
    bio: "Rohan Kapoor spearheaded Axis Bank's migration of core banking workloads to hybrid cloud, achieving 99.999% uptime across digital channels. He is an advocate for FinOps practices in banking and chairs the NASSCOM Cloud First for BFSI working group.",
    sessionId: "p-04",
    sessionTitle: "Core Modernisation Without Core Risk: Lessons from Cloud Migration",
    track: "Panel",
  },
  {
    id: "sp-08",
    name: "Shilpa Jain",
    title: "Head of InsurTech & Innovation",
    company: "Max Life Insurance",
    companyShort: "Max Life",
    initials: "SJ",
    avatarColor: "linear-gradient(135deg, #06111f, #e8be6d)",
    bio: "Shilpa Jain leads product innovation and digital distribution at Max Life, having launched India's first AI-powered underwriting platform that reduced policy issuance from 7 days to 4 hours. She is a WEF Global Innovator and mentor to multiple InsurTech startups.",
    sessionId: "fc-02",
    sessionTitle: "InsurTech 3.0: From Distribution Disruption to Underwriting Intelligence",
    track: "Fireside Chat",
  },
];
