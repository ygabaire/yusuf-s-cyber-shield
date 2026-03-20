import { Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="section-container relative z-10 py-32">
        <div className="space-y-6 max-w-2xl">
          <div className="font-mono text-sm text-primary tracking-wider opacity-80">
            <span className="inline-block animate-cursor-blink mr-1">▍</span>
            ~/yusuf-gabaire
          </div>

          <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
            Yusuf<br />
            <span className="text-glow text-primary">Gabaire</span>
          </h1>

          <p className="font-mono text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl" style={{ textWrap: 'balance' as any }}>
            Cybersecurity Analyst{" "}
            <span className="text-primary">|</span>{" "}
            Systems Administrator
          </p>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg" style={{ textWrap: 'pretty' as any }}>
            Defending networks and hardening infrastructure with 5+ years of hands-on IT and sysadmin experience. Building the bridge between offensive security research and production-grade systems.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} className="text-primary" />
            Greater Toronto Area, ON
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/ygabaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_hsl(var(--glow)/0.3)] active:scale-[0.97]"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:ygabaire@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-foreground font-mono text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary active:scale-[0.97]"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
