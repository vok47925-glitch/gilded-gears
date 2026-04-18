export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="text-gold font-display text-2xl font-bold tracking-tight">
              AURUM
            </div>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              A curated atelier of the world&apos;s most exceptional automobiles. By
              invitation, by passion, by design.
            </p>
          </div>
          <div>
            <div className="text-foreground/90 mb-4 text-xs uppercase tracking-[0.3em]">
              Atelier
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>The Collection</li>
              <li>Bespoke Commissions</li>
              <li>Concierge</li>
              <li>Heritage</li>
            </ul>
          </div>
          <div>
            <div className="text-foreground/90 mb-4 text-xs uppercase tracking-[0.3em]">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monaco · Dubai · London</li>
              <li>concierge@aurummotors.com</li>
              <li>+377 99 00 00 00</li>
            </ul>
          </div>
        </div>
        <div className="gold-divider mt-16" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Aurum Motors</div>
          <div>Crafted with obsession</div>
        </div>
      </div>
    </footer>
  );
}
