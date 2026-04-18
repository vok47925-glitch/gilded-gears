import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-supercar.jpg";
import { cars } from "@/data/cars";
import { CarCard } from "@/components/site/CarCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURUM Motors — A Curated Atelier of Supercars" },
      {
        name: "description",
        content:
          "An invitation to the world's most exceptional automobiles. Discover Bugatti, Ferrari, Lamborghini, McLaren and more.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = cars.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Black supercar with gold rims on a wet night road"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-32">
          <div className="max-w-3xl">
            <div className="text-gold mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em]">
              <span className="bg-gold h-px w-12" />
              Atelier Est. 2025
            </div>
            <h1 className="font-display text-5xl font-bold leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
              Engineered
              <br />
              for the <span className="text-gold italic">few.</span>
            </h1>
            <p className="text-foreground/70 mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
              A curated atelier of the world&apos;s most exceptional automobiles —
              presented to those who understand that true luxury is never produced
              at scale.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/cars"
                className="bg-gold text-gold-foreground hover:shadow-gold group inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 ease-luxury hover:scale-[1.02]"
              >
                View Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-luxury group-hover:translate-x-1" />
              </Link>
              <Link
                to="/register"
                className="text-foreground/90 hover:text-gold border-b border-foreground/40 hover:border-gold pb-1 text-xs uppercase tracking-[0.25em] transition-colors"
              >
                Request invitation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="text-gold mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em]">
              <span className="bg-gold h-px w-8" />
              Featured
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              The current <span className="text-gold italic">obsessions.</span>
            </h2>
          </div>
          <Link
            to="/cars"
            className="text-foreground/80 hover:text-gold group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] transition-colors"
          >
            All vehicles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 ease-luxury" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <CarCard car={c} index={i} key={c.id} />
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-gradient-dark border-y border-border/60 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <div className="text-gold mb-6 text-xs uppercase tracking-[0.4em]">
            Manifesto
          </div>
          <p className="font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl lg:text-4xl">
            &ldquo;A supercar is not transport. It is{" "}
            <span className="text-gold italic">a quiet rebellion</span> against the
            ordinary — a sculpted argument that beauty and engineering are the same
            discipline.&rdquo;
          </p>
          <div className="text-muted-foreground mt-8 text-xs uppercase tracking-[0.3em]">
            — The Aurum Atelier
          </div>
        </div>
      </section>
    </>
  );
}
