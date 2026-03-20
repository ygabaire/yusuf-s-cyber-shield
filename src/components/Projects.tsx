import { useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";

interface Project {
  title: string;
  tag: string;
  summary: string;
  detail: string;
}

const projects: Project[] = [
  {
    title: "SIEM Deployment (ELK Stack on AWS EC2)",
    tag: "SIEM",
    summary: "Centralized log ingestion and security monitoring on AWS.",
    detail: "Deployed a full Elasticsearch, Logstash, Kibana stack on AWS EC2 for centralized log ingestion and security monitoring. Configured ingest pipelines, dashboards, and alerting rules for real-time threat visibility.",
  },
  {
    title: "CTI Normalization & RAG Data Pipeline",
    tag: "Threat Intel",
    summary: "Python pipeline for normalizing cyber threat intelligence.",
    detail: "Built a Python-based pipeline for normalizing cyber threat intelligence using STIX/TAXII, MISP, and Elasticsearch, with a Retrieval-Augmented Generation (RAG) component for analyst querying against ingested intelligence data.",
  },
  {
    title: "Penetration Testing Lab (Metasploitable2)",
    tag: "Pen Test",
    summary: "Hands-on exploitation of a deliberately vulnerable environment.",
    detail: "Conducted penetration testing using Nmap, Nessus, Burp Suite, and Metasploit against Metasploitable2. Documented findings including vulnerability exploitation, privilege escalation, and remediation steps.",
  },
  {
    title: "Phishing Email Investigation & Threat Attribution",
    tag: "Forensics",
    summary: "Structured analysis of phishing campaigns with team-based attribution.",
    detail: "Group project involving structured analysis of phishing campaigns, with defined team roles and attribution methodology. Performed header analysis, URL deobfuscation, and IOC extraction.",
  },
  {
    title: "Mobile App Vulnerability Scanning (Ostorlab)",
    tag: "Mobile Sec",
    summary: "Automated vulnerability assessment of mobile applications.",
    detail: "Performed automated vulnerability assessment of mobile applications using Ostorlab scanning tools. Identified OWASP Mobile Top 10 vulnerabilities and produced remediation reports.",
  },
  {
    title: "AI Security & MITRE ATLAS Deliverables",
    tag: "AI Security",
    summary: "Research on adversarial ML threats aligned to MITRE ATLAS.",
    detail: "Researched and documented adversarial machine learning threats aligned to the MITRE ATLAS framework. Covered techniques including model evasion, data poisoning, and model theft scenarios.",
  },
  {
    title: "Cisco Packet Tracer AAA/RADIUS Labs",
    tag: "Networking",
    summary: "RADIUS authentication in simulated enterprise environments.",
    detail: "Configured Authentication, Authorization, and Accounting using RADIUS in simulated enterprise network environments within Cisco Packet Tracer. Tested role-based access control policies.",
  },
  {
    title: "Splunk Forwarder Troubleshooting",
    tag: "SIEM",
    summary: "Diagnosed and resolved Splunk log ingestion issues.",
    detail: "Diagnosed and resolved Splunk universal forwarder deployment and log ingestion issues. Addressed configuration errors, network connectivity, and indexer communication problems.",
  },
  {
    title: "OSINT Framework Analysis",
    tag: "OSINT",
    summary: "Leveraging open-source intelligence for threat investigation.",
    detail: "CYT250 coursework on leveraging open-source intelligence tools and frameworks for cyber threat investigation. Conducted reconnaissance using Maltego, Shodan, and theHarvester.",
  },
  {
    title: "Social Engineering & Credential Harvesting Lab",
    tag: "Red Team",
    summary: "Credential harvesting simulation using SET.",
    detail: "CYT230 hands-on lab using the Social Engineering Toolkit (SET) in a controlled environment for credential harvesting simulation. Demonstrated phishing site cloning and payload delivery.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="reveal w-full text-left rounded-lg border border-border bg-card p-5 card-hover border-glow cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
              {project.tag}
            </span>
          </div>
          <h3 className="font-mono font-semibold text-sm text-foreground leading-snug mb-1.5">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>
        </div>
        <ChevronDown
          size={16}
          className={`text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-3 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.detail}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <h2 className="reveal font-mono font-bold text-2xl sm:text-3xl text-foreground mb-3">
          <span className="text-primary">#</span> Projects
        </h2>
        <div className="reveal w-12 h-0.5 bg-primary mb-4 opacity-60" />
        <p className="reveal text-muted-foreground text-sm mb-10 flex items-center gap-2">
          <Terminal size={14} className="text-primary" />
          Click any card to expand details
        </p>

        <div className="stagger-children grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
