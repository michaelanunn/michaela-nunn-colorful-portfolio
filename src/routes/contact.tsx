import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Michaela Nunn" },
      { name: "description", content: "Get in touch with Michaela Nunn." },
      { property: "og:title", content: "Contact — Michaela Nunn" },
      { property: "og:description", content: "Get in touch with Michaela Nunn." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="reveal space-y-4">
      <h1 className="text-sm text-sage">Contact</h1>
      <p>I'd love to hear from you — about a project, a book, or anything at all.</p>
      <p>
        <a href="mailto:michaelalouisenunn@gmail.com" className="link-soft">michaelalouisenunn@gmail.com</a>
      </p>
      <p><a href="https://calendly.com/michaelalouisenunn" target="_blank" rel="noreferrer" className="link-soft">book a call</a></p>
      <p className="text-muted-foreground">Washington, DC</p>
    </main>
  );
}
