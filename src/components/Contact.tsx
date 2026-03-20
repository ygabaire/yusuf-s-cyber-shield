import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card/50">
      <div className="section-container">
        <h2 className="reveal font-mono font-bold text-2xl sm:text-3xl text-foreground mb-3">
          <span className="text-primary">#</span> Get In Touch
        </h2>
        <div className="reveal w-12 h-0.5 bg-primary mb-10 opacity-60" />

        <div className="reveal max-w-lg">
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you're looking for a cybersecurity analyst, have a project in mind, or just want to connect — my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ygabaire@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_hsl(var(--glow)/0.3)] active:scale-[0.97]"
            >
              <Mail size={16} />
              ygabaire@gmail.com
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/ygabaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-border text-foreground font-mono text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary active:scale-[0.97]"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
