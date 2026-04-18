import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { type Car, formatPrice } from "@/data/cars";

export function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  return (
    <Link
      to="/cars/$carId"
      params={{ carId: car.id }}
      className="group bg-card relative block overflow-hidden border border-border/60 transition-all duration-700 ease-luxury hover:border-gold/60 hover:shadow-elegant"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-dark">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-luxury group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background/40 text-gold opacity-0 backdrop-blur-md transition-all duration-500 ease-luxury group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="p-6">
        <div className="text-gold/80 text-[10px] uppercase tracking-[0.3em]">
          {car.brand}
        </div>
        <h3 className="mt-2 font-display text-2xl text-foreground transition-colors duration-300 group-hover:text-gold">
          {car.name}
        </h3>
        <div className="mt-4 flex items-end justify-between">
          <div className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
            From
          </div>
          <div className="font-display text-xl text-foreground">
            {formatPrice(car.price)}
          </div>
        </div>
      </div>
    </Link>
  );
}
