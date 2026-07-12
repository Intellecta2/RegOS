// ============================================================
// RegOS — Mock Data for Hackathon MVP
// ============================================================

export interface Agent {
  id: number;
  name: string;
  status: "idle" | "running" | "complete" | "error";
  description: string;
  icon: string;
}

export interface Task {
  id: string;
  source: string;
  obligation: string;
  dept: string;
  risk: "Critical" | "High" | "Medium" | "Low";
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
  evidence: string;
}

export interface RiskItem {
  id: string;
  area: string;
  score: number;
  maxScore: number;
  trend: "up" | "down" | "stable";
  items: number;
}

export interface EvidenceItem {
  id: string;
  name: string;
  type: "Document" | "Screenshot" | "Log" | "Attestation" | "Report";
  obligation: string;
  status: "Collected" | "Pending" | "Overdue";
  dueDate: string;
  dept: string;
}

export const AI_AGENTS: Agent[] = [
  {
    id: 1,
    name: "Document Intelligence",
    status: "idle",
    description: "OCR, text extraction & chunking",
    icon: "FileSearch",
  },
  {
    id: 2,
    name: "Regulatory Compiler",
    status: "idle",
    description: "Obligation extraction & structuring",
    icon: "BookOpen",
  },
  {
    id: 3,
    name: "Policy Mapping",
    status: "idle",
    description: "Maps rules to internal policies",
    icon: "GitBranch",
  },
  {
    id: 4,
    name: "Task Planning",
    status: "idle",
    description: "Creates implementation tasks",
    icon: "ListChecks",
  },
  {
    id: 5,
    name: "Risk Assessment",
    status: "idle",
    description: "Evaluates compliance risks",
    icon: "ShieldAlert",
  },
  {
    id: 6,
    name: "Evidence Collection",
    status: "idle",
    description: "Gathers proof of compliance",
    icon: "FolderCheck",
  },
  {
    id: 7,
    name: "Audit Readiness",
    status: "idle",
    description: "Prepares final audit reports",
    icon: "ClipboardCheck",
  },
];

export const MOCK_TASKS: Task[] = [
  {
    id: "TSK-092",
    source: "SEBI/HO/MIRSD/2026/41",
    obligation: "Update KYD framework for institutional clients",
    dept: "Compliance",
    risk: "High",
    status: "Pending",
    dueDate: "Oct 15, 2026",
    evidence: "KYD Policy Document v2.0",
  },
  {
    id: "TSK-093",
    source: "SEBI/HO/MIRSD/2026/41",
    obligation: "Deploy automated risk-profiling algorithm",
    dept: "IT / Engineering",
    risk: "Critical",
    status: "In Progress",
    dueDate: "Nov 01, 2026",
    evidence: "Algorithm Audit Report",
  },
  {
    id: "TSK-094",
    source: "SEBI/HO/MIRSD/2026/41",
    obligation: "Submit quarterly surveillance report",
    dept: "Risk",
    risk: "Medium",
    status: "Completed",
    dueDate: "Sep 30, 2026",
    evidence: "Q3 Surveillance Report.pdf",
  },
  {
    id: "TSK-095",
    source: "SEBI/HO/DDHS/2026/12",
    obligation: "Appoint dedicated ESG compliance officer",
    dept: "HR / Legal",
    risk: "Medium",
    status: "Pending",
    dueDate: "Dec 01, 2026",
    evidence: "HR Appointment Letter",
  },
  {
    id: "TSK-096",
    source: "SEBI/HO/DDHS/2026/12",
    obligation: "Implement real-time trade surveillance system",
    dept: "IT / Engineering",
    risk: "Critical",
    status: "In Progress",
    dueDate: "Oct 20, 2026",
    evidence: "System Architecture Document",
  },
  {
    id: "TSK-097",
    source: "SEBI/HO/CFD/2026/08",
    obligation: "Update insider trading prevention policy",
    dept: "Legal",
    risk: "High",
    status: "Pending",
    dueDate: "Nov 15, 2026",
    evidence: "Revised Policy Draft",
  },
  {
    id: "TSK-098",
    source: "SEBI/HO/CFD/2026/08",
    obligation: "Conduct annual cybersecurity audit",
    dept: "IT / Engineering",
    risk: "High",
    status: "Completed",
    dueDate: "Aug 30, 2026",
    evidence: "VAPT Report 2026",
  },
  {
    id: "TSK-099",
    source: "SEBI/HO/MIRSD/2026/41",
    obligation: "Update client data privacy controls",
    dept: "Compliance",
    risk: "Medium",
    status: "In Progress",
    dueDate: "Dec 15, 2026",
    evidence: "Privacy Impact Assessment",
  },
];

export const RISK_DATA: RiskItem[] = [
  {
    id: "RISK-001",
    area: "Cybersecurity",
    score: 78,
    maxScore: 100,
    trend: "up",
    items: 4,
  },
  {
    id: "RISK-002",
    area: "KYC/AML Compliance",
    score: 62,
    maxScore: 100,
    trend: "down",
    items: 7,
  },
  {
    id: "RISK-003",
    area: "Data Privacy",
    score: 85,
    maxScore: 100,
    trend: "stable",
    items: 3,
  },
  {
    id: "RISK-004",
    area: "Trade Surveillance",
    score: 45,
    maxScore: 100,
    trend: "down",
    items: 9,
  },
  {
    id: "RISK-005",
    area: "ESG Reporting",
    score: 71,
    maxScore: 100,
    trend: "up",
    items: 5,
  },
  {
    id: "RISK-006",
    area: "Insider Trading",
    score: 55,
    maxScore: 100,
    trend: "down",
    items: 6,
  },
];

export const EVIDENCE_DATA: EvidenceItem[] = [
  {
    id: "EV-001",
    name: "KYD Policy Document v2.0",
    type: "Document",
    obligation: "Update KYD framework for institutional clients",
    status: "Pending",
    dueDate: "Oct 10, 2026",
    dept: "Compliance",
  },
  {
    id: "EV-002",
    name: "Algorithm Audit Report",
    type: "Report",
    obligation: "Deploy automated risk-profiling algorithm",
    status: "Pending",
    dueDate: "Oct 25, 2026",
    dept: "IT / Engineering",
  },
  {
    id: "EV-003",
    name: "Q3 Surveillance Report.pdf",
    type: "Document",
    obligation: "Submit quarterly surveillance report",
    status: "Collected",
    dueDate: "Sep 25, 2026",
    dept: "Risk",
  },
  {
    id: "EV-004",
    name: "VAPT Report 2026",
    type: "Report",
    obligation: "Conduct annual cybersecurity audit",
    status: "Collected",
    dueDate: "Aug 15, 2026",
    dept: "IT / Engineering",
  },
  {
    id: "EV-005",
    name: "Server Access Logs — Q3",
    type: "Log",
    obligation: "Monitor unauthorized access attempts",
    status: "Collected",
    dueDate: "Sep 30, 2026",
    dept: "IT / Engineering",
  },
  {
    id: "EV-006",
    name: "Board Resolution — ESG Officer",
    type: "Attestation",
    obligation: "Appoint dedicated ESG compliance officer",
    status: "Overdue",
    dueDate: "Jul 01, 2026",
    dept: "HR / Legal",
  },
  {
    id: "EV-007",
    name: "Privacy Impact Assessment",
    type: "Report",
    obligation: "Update client data privacy controls",
    status: "Pending",
    dueDate: "Dec 01, 2026",
    dept: "Compliance",
  },
  {
    id: "EV-008",
    name: "Trade Surveillance Dashboard Screenshot",
    type: "Screenshot",
    obligation: "Implement real-time trade surveillance",
    status: "Overdue",
    dueDate: "Jul 05, 2026",
    dept: "IT / Engineering",
  },
];

export const PROCESSING_STEPS = [
  {
    name: "Document Ingestion & OCR",
    agent: "Document Intelligence",
    description: "Extracting text from PDF using PyMuPDF...",
  },
  {
    name: "Obligation Extraction",
    agent: "Regulatory Compiler",
    description: "Identifying 12 regulatory obligations...",
  },
  {
    name: "Risk Assessment",
    agent: "Risk Assessment",
    description: "Scoring risk across 6 compliance areas...",
  },
  {
    name: "Task & Policy Mapping",
    agent: "Policy Mapping + Task Planning",
    description: "Generating 8 implementation tasks...",
  },
  {
    name: "Evidence Requirements",
    agent: "Evidence Collection",
    description: "Identifying 8 evidence artifacts...",
  },
  {
    name: "Compliance Graph Update",
    agent: "Audit Readiness",
    description: "Updating Neo4j with 47 new nodes...",
  },
];

export const DEPARTMENTS = [
  { name: "Compliance", tasks: 4, completion: 68 },
  { name: "IT / Engineering", tasks: 5, completion: 52 },
  { name: "Risk", tasks: 3, completion: 91 },
  { name: "HR / Legal", tasks: 2, completion: 45 },
  { name: "Legal", tasks: 3, completion: 73 },
];

export const RECENT_REGULATIONS = [
  {
    name: "SEBI Circular: Cybersecurity Framework",
    date: "2 days ago",
    obligations: 12,
  },
  {
    name: "RBI Guidelines on Digital Lending",
    date: "1 week ago",
    obligations: 8,
  },
  {
    name: "SEBI: Insider Trading Prevention",
    date: "2 weeks ago",
    obligations: 15,
  },
];
