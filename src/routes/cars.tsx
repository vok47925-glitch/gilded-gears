import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cars } from "@/data/cars";
import { CarCard } from "@/components/site/CarCard";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "The Collection — AURUM Motors" },
      {
        name: "description",
        content:
          "Browse our complete collection of curated supercars from Bugatti, Ferrari, Lamborghini, McLaren, Porsche and Aston Martin.",
      },
      { property: "og:title", content: "The Collection — AURUM Motors" },
      {
        property: "og:description",
        content: "Browse our complete collection of the world's finest supercars.",
      },
    ],
  }),
  component: CarsPage,
});

function CarsPage() {
  const brands = useMemo(
    () => ["All", ...Array.from(new Set(cars.map((c) => c.brand)))],
    [],
  );
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? cars : cars.filter((c) => c.brand === filter);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="max-w-3xl">
        <div className="text-gold mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em]">
          <span className="bg-gold h-px w-8" />
          The Collection
        </div>
        <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          Every silhouette, <span className="text-gold italic">considered.</span>
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed">
          Each automobile in our collection is selected by hand, vetted by
          provenance, and presented with reverence for the craft behind it.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-2 border-y border-border/60 py-4">
        {brands.map((b) => (
          <button
            key={b}
            onClick={() => setFilter(b)}
            className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
              filter === b
                ? "text-gold border-gold border-b"
                : "text-muted-foreground hover:text-foreground border-b border-transparent"
            }`}
          >
            {b}
          </button>
        ))}
        <div className="text-muted-foreground ml-auto text-xs uppercase tracking-[0.2em]">
          {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <CarCard car={c} index={i} key={c.id} />
        ))}
      </div>
    </section>
  );
}
