import { Link } from "@tanstack/react-router";

const links = [
  { to: "/blog", label: "blog" },
  { to: "/projects", label: "projects" },
  { to: "/resume", label: "resume" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="reveal mb-16 flex items-baseline justify-between">
      <Link to="/" className="font-medium text-foreground hover:text-primary">
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
