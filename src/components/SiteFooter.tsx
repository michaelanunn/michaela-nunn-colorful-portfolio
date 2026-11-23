import { Github, Linkedin } from "lucide-react";

export const LINKEDIN = "https://www.linkedin.com/in/michaelanunn";
export const GITHUB = "https://github.com/michaelanunn";

export function SiteFooter() {
  return (
    <footer className="site-footer reveal mt-24 flex items-center justify-between border-t border-border pt-6 text-sm text-muted-foreground" style={{ animationDelay: "900ms" }}>
      <span>© {new Date().getFullYear()} Michaela Nunn</span>
      <div className="flex gap-4">
        <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-4 w-4" /></a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
      </div>
    </footer>
  );
}
