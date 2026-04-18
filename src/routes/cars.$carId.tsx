import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Gauge, Cog, Zap, Timer } from "lucide-react";
import { getCarById, formatPrice } from "@/data/cars";

export const Route = createFileRoute("/cars/$carId")({
  loader: ({ params }) => {
    const car = getCarById(params.carId);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.car.brand} ${loaderData.car.name} — AURUM Motors` },
          { name: "description", content: loaderData.car.description },
          {
            property: "og:title",
            content: `${loaderData.car.brand} ${loaderData.car.name} — AURUM Motors`,
          },
          { property: "og:description", content: loaderData.car.description },
          { property: "og:image", content: loaderData.car.image },
          { name: "twitter:image", content: loaderData.car.image },
        ]
      : [],
  }),
  component: CarDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-gold font-display text-4xl">Vehicle not found</h1>
      <p className="text-muted-foreground mt-3 text-sm">
        This automobile has left the atelier.
      </p>
      <Link
        to="/cars"
        className="bg-gold text-gold-foreground mt-8 inline-flex px-6 py-3 text-xs uppercase tracking-[0.2em]"
      >
        Browse the collection
      </Link>
    </div>
  ),
});

function CarDetailPage() {
  const { car } = Route.useLoaderData();

  const specs = [
    { icon: Gauge, label: "Top Speed", value: car.topSpeed },
    { icon: Cog, label: "Engine", value: car.engine },
    { icon: Zap, label: "Horsepower", value: car.horsepower },
    { icon: Timer, label: "Acceleration", value: car.acceleration },
  ];

  return (
    <article>
      {/* Hero image */}
      <section className="relative h-[70svh] min-h-[500px] w-full overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          width={1280}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 lg:px-10 lg:pb-20">
          <Link
            to="/cars"
            className="text-foreground/70 hover:text-gold mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            The Collection
          </Link>
          <div className="text-gold text-xs uppercase tracking-[0.4em]">
            {car.brand}
          </div>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            {car.name}
          </h1>
          <p className="text-foreground/80 mt-6 max-w-2xl font-display text-lg italic sm:text-xl">
            {car.tagline}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-gold mb-4 text-xs uppercase tracking-[0.4em]">
              The Vehicle
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              A statement, sculpted in motion.
            </h2>
            <p className="text-foreground/80 mt-8 text-base leading-relaxed sm:text-lg">
              {car.description}
            </p>

            <div className="gold-divider my-12" />

            <div className="grid gap-px bg-border/60 sm:grid-cols-2">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="bg-background group flex items-start gap-4 p-6 transition-colors duration-300 hover:bg-card"
                >
                  <div className="border-gold/40 text-gold flex h-12 w-12 shrink-0 items-center justify-center border transition-all duration-500 ease-luxury group-hover:bg-gold group-hover:text-gold-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
                      {s.label}
                    </div>
                    <div className="mt-1 font-display text-xl text-foreground">
                      {s.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing card */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="border-gold/40 bg-card p-8 shadow-elegant">
              <div className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
                Acquisition from
              </div>
              <div className="font-display text-gold mt-2 text-4xl font-bold">
                {formatPrice(car.price)}
              </div>
              <div className="gold-divider my-6" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Acquisition is by private appointment. Our concierge team handles
                provenance, logistics and bespoke commissioning end-to-end.
              </p>
              <button className="bg-gold text-gold-foreground hover:shadow-gold mt-8 w-full px-6 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 ease-luxury hover:scale-[1.02]">
                Request a viewing
              </button>
              <button className="border-border text-foreground hover:border-gold hover:text-gold mt-3 w-full border px-6 py-4 text-xs uppercase tracking-[0.25em] transition-colors duration-300">
                Speak with concierge
              </button>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
