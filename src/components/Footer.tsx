export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yusuf Gabaire
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with focus & caffeine
        </p>
      </div>
    </footer>
  );
}
