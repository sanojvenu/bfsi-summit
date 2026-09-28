export type TrackType =
  | "Keynote"
  | "Panel"
  | "Fireside Chat"
  | "Case Study"
  | "Networking"
  | "Workshop";

export interface AgendaSession {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  subtitle?: string;
  description: string;
  track: TrackType;
  speakerIds?: string[];
  speakerNames?: string[];
  hall?: string;
  isBreak?: boolean;
  isHighlight?: boolean;
}

export const agendaSessions: AgendaSession[] = [
  {
    id: "reg-01",
    time: "08:00",
    endTime: "09:00",
    title: "Registration & Networking Breakfast",
    description: "Arrive, collect your delegate badge, and enjoy a curated networking breakfast with fellow C-suite peers from India's leading banks, insurers, and fintechs.",
    track: "Networking",
    isBreak: true,
    hall: "Grand Foyer, Jio World Convention Centre",
  },
  {
    id: "k-00",
    time: "09:00",
    endTime: "09:15",
    title: "Welcome Address & Summit Opening",
    description: "Official welcome by the Summit Chairperson, setting the context for a day of high-impact dialogue on the future of BFSI in India.",
    track: "Keynote",
    speakerNames: ["Summit Chairperson"],
    hall: "Plenary Hall A",
    isHighlight: true,
  },
  {
    id: "k-01",
    time: "09:15",
    endTime: "09:50",
    title: "India's Banking Renaissance: From Branch-First to AI-First",
    subtitle: "Opening Keynote",
    description: "An expansive opening address on the systemic transformation underway in Indian banking — from the Jan Dhan-Aadhaar-Mobile stack to GenAI-native customer journeys. How do we preserve trust while accelerating innovation at a scale the world has never seen?",
    track: "Keynote",
    speakerIds: ["sp-01"],
    speakerNames: ["Amit Sharma"],
    hall: "Plenary Hall A",
    isHighlight: true,
  },
  {
    id: "p-01",
    time: "09:55",
    endTime: "10:45",
    title: "The AI Imperative in BFSI: Responsible Scaling Beyond the Pilot",
    subtitle: "Executive Panel",
    description: "India's BFSI sector runs hundreds of AI pilots — but what separates a POC from a revenue-generating, audit-ready production system? A CTO/CDO-level roundtable on model governance, explainability requirements, and the organisational change needed to operationalise AI.",
    track: "Panel",
    speakerNames: ["Anand Subramanian", "CTO, Leading NBFC", "Head of AI, Leading Insurer"],
    speakerIds: ["sp-05"],
    hall: "Plenary Hall A",
  },
  {
    id: "fc-01",
    time: "10:50",
    endTime: "11:25",
    title: "Embedded Finance & API-First Banking: Moving Beyond BaaS Hype",
    subtitle: "Fireside Chat",
    description: "A candid conversation on India's Banking-as-a-Service landscape — what worked, what failed, and how the next wave of embedded finance is being built on more robust regulatory and technical foundations. From co-lending models to regulated fintech partnerships.",
    track: "Fireside Chat",
    speakerIds: ["sp-03"],
    speakerNames: ["Vikram Menon"],
    hall: "Plenary Hall A",
  },
  {
    id: "net-01",
    time: "11:25",
    endTime: "11:45",
    title: "Networking & Refreshment Break",
    description: "Mid-morning break — connect with peers, visit sponsor booths, and explore the Innovation Showcase.",
    track: "Networking",
    isBreak: true,
    hall: "Exhibition Hall",
  },
  {
    id: "k-02",
    time: "11:45",
    endTime: "12:20",
    title: "UPI at Scale: Exporting India's Payments Blueprint to the World",
    subtitle: "Keynote Address",
    description: "How NPCI International is taking India's real-time payments architecture to 30+ countries — the technical, regulatory, and diplomatic challenges of building truly interoperable global payment rails, and what it means for India's fintech diplomatic leadership.",
    track: "Keynote",
    speakerIds: ["sp-04"],
    speakerNames: ["Deepa Krishnan"],
    hall: "Plenary Hall A",
    isHighlight: true,
  },
  {
    id: "p-02",
    time: "12:25",
    endTime: "13:15",
    title: "Zero Trust in a Zero-Friction World: Securing Digital Banking",
    subtitle: "CISO Panel",
    description: "As digital banking channels proliferate, the attack surface expands. How are India's leading CISOs implementing Zero Trust architectures without adding UX friction? Covering identity fabric, API security, deepfake detection, and the human layer of cyber defence.",
    track: "Panel",
    speakerIds: ["sp-02"],
    speakerNames: ["Priya Nair", "CISO, Leading PSU Bank", "VP Cybersecurity, Major Insurer"],
    hall: "Plenary Hall A",
  },
  {
    id: "lunch-01",
    time: "13:15",
    endTime: "14:15",
    title: "Delegate Luncheon & Roundtable Sessions",
    description: "Curated luncheon with optional deep-dive roundtables on RegTech, Cloud Strategy, and AI Ethics in BFSI (pre-registration required). An ideal opportunity for peer-to-peer learning in smaller, trust-based settings.",
    track: "Networking",
    isBreak: true,
    hall: "Grand Ballroom & Breakout Rooms",
  },
  {
    id: "cs-01",
    time: "14:15",
    endTime: "14:50",
    title: "From Proof-of-Concept to Production: Deploying AI at Banking Scale",
    subtitle: "Case Study Presentation",
    description: "An inside view of ICICI Bank's AI transformation journey — from data lake consolidation to real-time decisioning engines. Covering infrastructure choices, build-vs-buy decisions, MLOps practices, and the KPIs that actually moved the needle.",
    track: "Case Study",
    speakerIds: ["sp-05"],
    speakerNames: ["Anand Subramanian"],
    hall: "Plenary Hall A",
  },
  {
    id: "p-03",
    time: "14:55",
    endTime: "15:45",
    title: "DPDPA & RBI RegTech: Building Compliance-First Architectures",
    subtitle: "Regulatory Panel",
    description: "India's Digital Personal Data Protection Act is reshaping how BFSI institutions handle customer data. Combined with RBI's evolving guidelines on digital lending, cloud outsourcing, and third-party risk — compliance is now an architecture problem. What does a future-proof, regulatory-resilient tech stack look like?",
    track: "Panel",
    speakerIds: ["sp-06"],
    speakerNames: ["Nisha Patel", "Principal, SEBI Tech Advisory", "DG, RBI RegTech Unit"],
    hall: "Plenary Hall A",
  },
  {
    id: "fc-02",
    time: "15:50",
    endTime: "16:20",
    title: "InsurTech 3.0: From Distribution Disruption to Underwriting Intelligence",
    subtitle: "Fireside Chat",
    description: "How is AI reshaping insurance underwriting — from OCR-based document processing to real-time risk scoring using alternative data? A frank conversation on the ethical, actuarial, and regulatory dimensions of algorithmic insurance in India.",
    track: "Fireside Chat",
    speakerIds: ["sp-08"],
    speakerNames: ["Shilpa Jain"],
    hall: "Plenary Hall A",
  },
  {
    id: "p-04",
    time: "16:20",
    endTime: "17:00",
    title: "Core Modernisation Without Core Risk: Lessons from Cloud Migration",
    subtitle: "Technology Panel",
    description: "Core banking transformation is the moon landing of enterprise tech — high stakes, long runway, almost no margin for error. A CTO-level panel on phased migration strategies, hybrid cloud architectures for regulated workloads, and how to keep the lights on while rebuilding the engine in flight.",
    track: "Panel",
    speakerIds: ["sp-07"],
    speakerNames: ["Rohan Kapoor", "CTO, Mid-Market Private Bank"],
    hall: "Plenary Hall A",
  },
  {
    id: "close-01",
    time: "17:00",
    endTime: "17:15",
    title: "Closing Remarks & BFSI Innovation Awards Presentation",
    description: "Summit Chairperson closing summary and presentation of the BFSI Innovation Awards 2026, recognising outstanding achievements in digital transformation, cybersecurity, and financial inclusion.",
    track: "Keynote",
    isHighlight: true,
    hall: "Plenary Hall A",
  },
  {
    id: "net-02",
    time: "17:15",
    endTime: "18:30",
    title: "Evening Networking Reception",
    description: "Close the day with a premium networking reception — cocktails, canapés, and continued conversations. The perfect setting to deepen relationships formed throughout the summit.",
    track: "Networking",
    isBreak: true,
    hall: "Rooftop Terrace, Jio World Convention Centre",
  },
];

export const tracks: TrackType[] = [
  "Keynote",
  "Panel",
  "Fireside Chat",
  "Case Study",
  "Networking",
];

export const trackColors: Record<TrackType, string> = {
  "Keynote": "track-keynote",
  "Panel": "track-panel",
  "Fireside Chat": "track-fireside",
  "Case Study": "track-case-study",
  "Networking": "track-networking",
  "Workshop": "track-networking",
};
