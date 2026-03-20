import { Shield, Server, GraduationCap, Award } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Security-First Mindset" },
  { icon: Server, label: "5+ Years Systems Admin" },
  { icon: GraduationCap, label: "Cybersecurity Post-Grad" },
  { icon: Award, label: "CompTIA Sec+ (In Progress)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <h2 className="reveal font-mono font-bold text-2xl sm:text-3xl text-foreground mb-3">
          <span className="text-primary">#</span> About Me
        </h2>
        <div className="reveal w-12 h-0.5 bg-primary mb-10 opacity-60" />

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5">
            <p className="reveal text-muted-foreground leading-relaxed">
              I hold a <span className="text-foreground font-medium">Bachelor of Arts in Information Technology</span> from York University and I'm currently completing a <span className="text-foreground font-medium">Post-Graduate Certificate in Cybersecurity</span> at Seneca College, Brampton.
            </p>
            <p className="reveal text-muted-foreground leading-relaxed">
              With over five years of hands-on experience in IT and system administration, I've managed enterprise environments supporting 500+ users across Windows and Linux platforms. My background spans Active Directory, cloud administration, server migration, and network infrastructure.
            </p>
            <p className="reveal text-muted-foreground leading-relaxed">
              I'm passionate about bridging the gap between offensive and defensive security—combining real-world infrastructure experience with modern threat intelligence, SIEM operations, and penetration testing methodologies. Currently pursuing the <span className="text-foreground font-medium">CompTIA Security+ (SY0-701)</span> certification.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="stagger-children grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="reveal rounded-lg border border-border bg-card p-4 flex flex-col items-center text-center gap-2 border-glow"
                >
                  <Icon size={20} className="text-primary" />
                  <span className="font-mono text-xs text-foreground leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
