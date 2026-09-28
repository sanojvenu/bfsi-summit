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
    name: "Amit Sharma",
    title: "CIO",
    company: "State Bank of India",
    companyShort: "SBI",
    initials: "AS",
    avatarColor: "linear-gradient(135deg, #0B1E3D, #2554a0)",
    photo: "/speakers/amit-sharma.jpg",
    bio: "Amit Sharma leads SBI's technology and modernization roadmap across 22,000+ branches and digital infrastructure serving over 500 million accounts. He oversees enterprise cloud migration, core banking resilience, and AI-enabled financial operations at massive scale.",
    sessionId: "k-01",
    sessionTitle: "Keynote: AI-First Banking & Core Infrastructure Resilience",
    track: "Keynote",
    featured: true,
  },
  {
    id: "sp-02",
    name: "Priya Menon",
    title: "CTO",
    company: "HDFC Bank",
    companyShort: "HDFC Bank",
    initials: "PM",
    avatarColor: "linear-gradient(135deg, #0d2650, #06b6d4)",
    photo: "/speakers/priya-menon.jpg",
    bio: "Priya Menon directs technology architecture, modern API integration, and digital platform engineering at HDFC Bank. Under her leadership, the bank deployed modern microservices and high-concurrency payment gateways supporting peak festive volumes.",
    sessionId: "p-02",
    sessionTitle: "Panel Discussion: The Future of Payments & Real-Time Rails",
    track: "Panel",
    featured: true,
  },
  {
    id: "sp-03",
    name: "Rohan Gupta",
    title: "CISO",
    company: "Bajaj Finserv",
    companyShort: "Bajaj Finserv",
    initials: "RG",
    avatarColor: "linear-gradient(135deg, #112e61, #D4A54B)",
    photo: "/speakers/rohan-gupta.jpg",
    bio: "Rohan Gupta leads information security, cybersecurity architecture, and zero-trust engineering across the Bajaj Finserv ecosystem. He is a recognized authority on threat intelligence, DPDPA compliance, and AI-augmented fraud mitigation.",
    sessionId: "fc-01",
    sessionTitle: "Fireside: Cybersecurity in BFSI — Trust in a Zero-Friction World",
    track: "Fireside Chat",
    featured: true,
  },
  {
    id: "sp-04",
    name: "Neha Kulkarni",
    title: "CDO",
    company: "NPCI International",
    companyShort: "NPCI Intl.",
    initials: "NK",
    avatarColor: "linear-gradient(135deg, #0B1E3D, #34d399)",
    photo: "/speakers/neha-kulkarni.jpg",
    bio: "Neha Kulkarni drives global product and digital strategy for NPCI International, taking UPI, RuPay, and cross-border digital financial rails to international markets across Southeast Asia, Europe, and the Middle East.",
    sessionId: "k-02",
    sessionTitle: "UPI at Global Scale: Exporting India's Payments Blueprint",
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
