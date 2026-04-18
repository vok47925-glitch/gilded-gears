import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Request Invitation — AURUM Motors" },
      {
        name: "description",
        content: "Request an invitation to join AURUM Motors.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
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
            Invitation
          </div>
          <h1 className="font-display text-6xl font-bold leading-[1.05]">
            By request, <br />
            <span className="text-gold italic">never by default.</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-md text-base leading-relaxed">
            Membership at AURUM is granted, not purchased. Tell us about yourself
            and our concierge will be in touch within 48 hours.
          </p>
          <ul className="text-foreground/70 mt-10 space-y-3 text-sm">
            {[
              "Private viewings & previews",
              "Direct line to the atelier",
              "Provenance & bespoke commissioning",
              "Members-only events worldwide",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="bg-gold h-1 w-1 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border-gold/30 mx-auto w-full max-w-md border p-8 shadow-elegant lg:p-10">
          <div className="text-gold text-xs uppercase tracking-[0.4em] lg:hidden">
            Invitation
          </div>
          <h2 className="font-display mt-2 text-3xl font-bold lg:text-2xl">
            Request invitation
          </h2>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" placeholder="Alessandra" required />
              <Field label="Last name" placeholder="Moreau" required />
            </div>
            <Field label="Email" type="email" placeholder="you@domain.com" required />
            <Field label="Password" type="password" placeholder="••••••••" required />

            <button
              type="submit"
              disabled={loading}
              className="bg-gold text-gold-foreground hover:shadow-gold group inline-flex w-full items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 ease-luxury hover:scale-[1.01] disabled:opacity-60"
            >
              {loading ? (
                <span className="border-gold-foreground/40 border-t-gold-foreground h-4 w-4 animate-spin rounded-full border-2" />
              ) : (
                <>
                  Submit request
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 ease-luxury" />
                </>
              )}
            </button>

            <p className="text-muted-foreground text-center text-[10px] uppercase tracking-[0.2em]">
              By submitting you agree to our terms & discretion policy.
            </p>
          </form>

          <div className="gold-divider my-8" />
          <p className="text-muted-foreground text-center text-xs uppercase tracking-[0.2em]">
            Already a member?{" "}
            <Link to="/login" className="text-gold hover:underline">
              Sign in
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
