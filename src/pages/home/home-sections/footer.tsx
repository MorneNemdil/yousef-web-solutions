export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold hover:cursor-pointer">
          Yousef Web Solutions<span className="text-primary">.</span>
          <p className="text-xs font-normal text-muted-foreground mt-1">
            © 2026 — Built with precision and React.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#portfolio" className="hover:text-primary transition-colors">Work</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}