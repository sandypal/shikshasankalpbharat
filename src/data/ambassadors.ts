export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
}

export interface Ambassador {
  id: string;
  name: string;
  role: string;
  designation?: string;
  state: string;
  district?: string;
  image?: string;
  bioSummary: string;
  education: EducationItem[];
  achievements: string[];
  certifications?: string[];
  featured?: boolean;
}

export const ambassadors: Ambassador[] = [
  {
    id: "astha-sharma",
    name: "Astha Sharma",
    role: "Himachal Pradesh State Education Ambassador",
    state: "Himachal Pradesh",
    district: "Bilaspur (Sh. Naina Devi Ji)",
    image: "/astha-sharma.jpg",
    bioSummary:
      "A passionate scholar in Public Administration and distinguished cultural leader dedicated to educational outreach and youth empowerment across Himachal Pradesh.",
    education: [
      {
        degree: "Master’s in Public Administration",
        institution: "Panjab University, Chandigarh",
        year: "2024–2026",
      },
      {
        degree: "Bachelor of Arts (Honours) in Public Administration",
        institution: "PG Govt College, Sector 46, Chandigarh",
        year: "2021–2024",
      },
    ],
    achievements: [
      "College Colour Award (2022–2023) for outstanding university-level cultural achievements",
      "Multiple 1st Positions in Panjab University Zonal Youth & Heritage Festival (Group Shabad & Indian Singing)",
      "Merit Certificate Recipient, PG Govt College (2023–2024)",
      "Panjab University Inter-Zonal Youth & Heritage Festival Participant (Mukerian)",
      "Workshop on 'Building Academic Resilience: Soft Skills and Critical Thinking' (Panjab University, 2026)",
    ],
    featured: true,
  },
  {
    id: "dr-akhil-bhardwaj",
    name: "Dr. Akhil Bhardwaj",
    role: "Rajasthan State Convenor & Education Ambassador",
    designation: "Assistant Professor of Public Administration, Govt. of Rajasthan",
    state: "Rajasthan",
    district: "Deeg (Bharatpur)",
    image: "/akhil-bhardwaj.jpg",
    bioSummary:
      "Assistant Professor of Public Administration in the Government of Rajasthan at M.A.J. Government College, Deeg. Serving as the Rajasthan Convenor of Shiksha Sankalp, dedicated to expanding educational access, digital governance, and student mentorship.",
    education: [
      {
        degree: "Ph.D. in Public Administration",
        institution: "Panjab University, Chandigarh",
      },
      {
        degree: "Master of Arts (MA) in Public Administration",
        institution: "University of Rajasthan, Jaipur",
      },
      {
        degree: "UGC NET-JRF Qualification",
        institution: "National Testing Agency / UGC",
      },
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Computer Science & IT",
      },
      {
        degree: "LLB (Coursework)",
        institution: "Faculty of Law, University of Delhi (DU)",
      },
    ],
    achievements: [
      "Rajasthan State Convenor for Shiksha Sankalp",
      "President's Award in Scouting (Rashtrapati Award)",
      "UPSC Civil Services Mains Examination Qualifier",
      "Peer Reviewer for prestigious Elsevier and Springer Nature journals",
      "Research expertise in Public Governance, Deliberative Democracy, Citizen Participation & Digital Governance",
      "Interdisciplinary background with professional experience in software and web development",
    ],
    featured: true,
  },
  {
    id: "diksha-makkar",
    name: "Diksha Makkar",
    role: "Haryana State Education Ambassador",
    designation: "All India Rank 1 (AIR 1) in UGC-NET",
    state: "Haryana",
    district: "Ambala Cantt",
    image: "/diksha-makkar.jpg",
    bioSummary:
      "All India Rank 1 in the national UGC-NET examination (Department of Public Administration). An inspiring youth icon from Ambala Cantt dedicated to academic excellence, scholarship mentorship, and educational empowerment across Haryana.",
    education: [
      {
        degree: "All India Rank 1 (AIR 1) — UGC-NET",
        institution: "Department of Public Administration",
      },
    ],
    achievements: [
      "All India Rank 1 (AIR 1) in UGC-NET Examination (National Achiever)",
      "Haryana State Education Ambassador for Shiksha Sankalp",
      "Department of Public Administration scholar",
      "Youth icon and academic mentor empowering underprivileged students in Haryana",
    ],
    featured: true,
  },
];
