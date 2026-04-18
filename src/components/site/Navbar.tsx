import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/cars" as const, label: "Cars" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-luxury ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-gold font-display text-2xl font-bold tracking-tight transition-transform group-hover:scale-105 ease-luxury">
            AURUM
          </span>
          <span className="text-foreground/60 hidden text-xs uppercase tracking-[0.3em] sm:inline">
            Motors
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/80 hover:text-gold relative text-sm uppercase tracking-[0.2em] transition-colors duration-300"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="text-foreground/80 hover:text-gold text-sm uppercase tracking-[0.2em] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gold text-gold-foreground hover:shadow-gold inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ease-luxury hover:scale-[1.02]"
          >
            Join
          </Link>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-gold py-3 text-sm uppercase tracking-[0.2em]"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="border-border text-foreground hover:border-gold flex-1 border px-5 py-3 text-center text-xs uppercase tracking-[0.2em]"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="bg-gold text-gold-foreground flex-1 px-5 py-3 text-center text-xs uppercase tracking-[0.2em] font-medium"
              >
                Join
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
