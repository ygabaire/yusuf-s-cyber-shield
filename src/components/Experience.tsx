import { Building2 } from "lucide-react";

const responsibilities = [
  "Supported 500+ users across Windows and Linux environments",
  "Managed Active Directory, Microsoft 365, and Azure administration",
  "Administered and migrated Moodle LMS servers, including MariaDB tuning and PHP-FPM optimization",
  "Infrastructure provisioning, networking, and end-user support at scale",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card/50">
      <div className="section-container">
        <h2 className="reveal font-mono font-bold text-2xl sm:text-3xl text-foreground mb-3">
          <span className="text-primary">#</span> Experience
        </h2>
        <div className="reveal w-12 h-0.5 bg-primary mb-10 opacity-60" />

        <div className="reveal rounded-xl border border-border bg-card p-6 md:p-8 border-glow">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-secondary">
              <Building2 size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-mono font-semibold text-lg text-foreground">
                IT Systems Administrator
              </h3>
              <p className="text-muted-foreground text-sm mt-0.5">
                Gibson School Systems · 5+ years
              </p>
            </div>
          </div>

          <ul className="stagger-children space-y-3 ml-1">
            {responsibilities.map((item, i) => (
              <li key={i} className="reveal flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
