import { createFileRoute } from "@tanstack/react-router";
import { LINKEDIN } from "@/components/SiteFooter";

const EMAIL = "michaelalouisenunn@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Michaela Nunn" },
      { name: "description", content: "Say hello to Michaela Nunn." },
      { property: "og:title", content: "Contact — Michaela Nunn" },
      { property: "og:description", content: "Say hello to Michaela Nunn." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="space-y-4">
      <p className="reveal text-muted-foreground">Say hello</p>
      <a href={`mailto:${EMAIL}`} className="reveal block break-all text-2xl font-medium hover:text-primary sm:text-3xl" style={{ animationDelay: "100ms" }}>
        {EMAIL}
      </a>
      <p className="reveal text-muted-foreground" style={{ animationDelay: "200ms" }}>
        or via <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-soft">LinkedIn</a>. You can also{" "}
        <a href="https://calendly.com/michaelalouisenunn" target="_blank" rel="noreferrer" className="link-soft">book a call</a>.
      </p>
    </main>
  );
}
