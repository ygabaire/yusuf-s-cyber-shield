const skillCategories = [
  {
    category: "Security",
    skills: ["SIEM (ELK, Splunk)", "Nmap", "Nessus", "Burp Suite", "Metasploit", "SET", "Ostorlab", "MITRE ATT&CK", "MITRE ATLAS", "STIX/TAXII", "SigmaHQ", "OWASP"],
  },
  {
    category: "Systems & Infrastructure",
    skills: ["Windows Server", "Linux (Ubuntu/CentOS)", "Active Directory", "Group Policy", "DNS/DHCP", "Azure", "AWS EC2", "Moodle LMS", "MariaDB", "PHP-FPM"],
  },
  {
    category: "Networking",
    skills: ["TCP/IP", "RADIUS/AAA", "Cisco Packet Tracer", "Firewalls", "VPN"],
  },
  {
    category: "Dev & Automation",
    skills: ["Python", "Bash", "PowerShell", "Elasticsearch", "MISP"],
  },
  {
    category: "Platforms",
    skills: ["Microsoft 365", "Azure AD", "AWS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50">
      <div className="section-container">
        <h2 className="reveal font-mono font-bold text-2xl sm:text-3xl text-foreground mb-3">
          <span className="text-primary">#</span> Skills & Tools
        </h2>
        <div className="reveal w-12 h-0.5 bg-primary mb-10 opacity-60" />

        <div className="stagger-children space-y-8">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="reveal">
              <h3 className="font-mono text-sm font-semibold text-primary mb-3 tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md border border-border bg-card text-foreground text-xs font-mono transition-colors duration-200 hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
