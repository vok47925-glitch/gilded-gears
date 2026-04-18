import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AURUM Motors — A Curated Atelier of Supercars" },
      {
        name: "description",
        content:
          "Discover the world's most exceptional supercars at AURUM Motors. Bugatti, Ferrari, Lamborghini, McLaren, Porsche, Aston Martin — by invitation, by passion, by design.",
      },
      { name: "author", content: "AURUM Motors" },
      { property: "og:title", content: "AURUM Motors — A Curated Atelier of Supercars" },
      {
        property: "og:description",
        content: "The world's most exceptional supercars, curated by AURUM Motors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-gold font-display text-7xl font-bold">404</h1>
        <h2 className="text-foreground mt-4 font-display text-xl">
          This road does not exist
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          The page you sought has drifted off the route.
        </p>
        <a
          href="/"
          className="bg-gold text-gold-foreground mt-8 inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] transition-transform hover:scale-[1.02]"
        >
          Return home
        </a>
      </div>
    </div>
  );
}
