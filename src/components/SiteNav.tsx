import { Link } from "@tanstack/react-router";

const links = [
  { to: "/blog", label: "blog" },
  { to: "/resume", label: "resume" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="mb-16 flex items-baseline justify-between text-base">
      <Link to="/" className="font-script text-3xl text-foreground hover:text-primary">
        michaela nunn
      </Link>
      <div className="flex gap-6 text-muted-foreground">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
