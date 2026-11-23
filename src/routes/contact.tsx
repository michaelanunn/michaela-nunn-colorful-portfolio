import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus("Email copied to clipboard.");
    } catch {
      setCopyStatus("Could not copy email. Please select and copy it manually.");
    }
  }

  return (
    <main className="space-y-4">
      <p className="reveal text-muted-foreground">Say hello</p>
      <div className="reveal flex flex-wrap items-baseline gap-x-3 gap-y-1" style={{ animationDelay: "100ms" }}>
        <a href={`mailto:${EMAIL}`} className="break-all text-2xl font-medium hover:text-primary sm:text-3xl">
          {EMAIL}
        </a>
        <button type="button" onClick={copyEmail} className="link-soft text-sm text-muted-foreground">
          click to copy
        </button>
      </div>
      {copyStatus && <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{copyStatus}</p>}
      <p className="reveal text-muted-foreground" style={{ animationDelay: "200ms" }}>
        or via <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-soft">LinkedIn</a>. You can also{" "}
        <a href="https://calendly.com/michaelalouisenunn" target="_blank" rel="noreferrer" className="link-soft">book a call</a>.
      </p>
    </main>
  );
}
