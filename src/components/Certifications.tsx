import { Award, GraduationCap, BookOpen } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "CompTIA Security+ (SY0-701)",
    subtitle: "In Progress",
    accent: true,
  },
  {
    icon: GraduationCap,
    title: "Post-Graduate Certificate, Cybersecurity",
    subtitle: "Seneca College",
  },
  {
    icon: BookOpen,
    title: "B.A. Information Technology",
    subtitle: "York University",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <h2 className="reveal font-mono font-bold text-2xl sm:text-3xl text-foreground mb-3">
          <span className="text-primary">#</span> Certifications & Education
        </h2>
        <div className="reveal w-12 h-0.5 bg-primary mb-10 opacity-60" />

        <div className="stagger-children space-y-4">
          {items.map(({ icon: Icon, title, subtitle, accent }) => (
            <div
              key={title}
              className="reveal flex items-center gap-4 rounded-lg border border-border bg-card p-5 border-glow"
            >
              <div className={`p-2.5 rounded-lg ${accent ? 'bg-primary/10' : 'bg-secondary'}`}>
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-medium text-sm text-foreground">
                  {title}
                </h3>
                <p className={`text-xs mt-0.5 ${accent ? 'text-primary font-mono' : 'text-muted-foreground'}`}>
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
