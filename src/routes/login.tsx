import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — AURUM Motors" },
      { name: "description", content: "Sign in to your AURUM Motors account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <section className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl items-center px-6 py-16 lg:px-10">
      <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
        <div className="hidden lg:block">
          <div className="text-gold mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em]">
            <span className="bg-gold h-px w-8" />
            Members
          </div>
          <h1 className="font-display text-6xl font-bold leading-[1.05]">
            Welcome <span className="text-gold italic">back.</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-md text-base leading-relaxed">
            Access your private dossier, exclusive previews, and direct line to the
            atelier concierge.
          </p>
        </div>

        <div className="bg-card border-gold/30 mx-auto w-full max-w-md border p-8 shadow-elegant lg:p-10">
          <div className="text-gold text-xs uppercase tracking-[0.4em] lg:hidden">
            Members
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold lg:text-2xl">
            Sign in
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Enter your credentials to continue.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <Field label="Email" type="email" placeholder="you@domain.com" required />
            <Field label="Password" type="password" placeholder="••••••••" required />

            <div className="flex items-center justify-between text-xs">
              <label className="text-muted-foreground inline-flex items-center gap-2">
                <input type="checkbox" className="accent-gold" />
                Remember me
              </label>
              <a href="#" className="text-gold hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gold text-gold-foreground hover:shadow-gold group inline-flex w-full items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 ease-luxury hover:scale-[1.01] disabled:opacity-60"
            >
              {loading ? (
                <span className="border-gold-foreground/40 border-t-gold-foreground h-4 w-4 animate-spin rounded-full border-2" />
              ) : (
                <>
                  Enter the atelier
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 ease-luxury" />
                </>
              )}
            </button>
          </form>

          <div className="gold-divider my-8" />
          <p className="text-muted-foreground text-center text-xs uppercase tracking-[0.2em]">
            New to AURUM?{" "}
            <Link to="/register" className="text-gold hover:underline">
              Request invitation
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-foreground/80 text-[10px] uppercase tracking-[0.3em]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-input border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:ring-gold/20 mt-2 block w-full border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
      />
    </label>
  );
}
