import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LINKEDIN } from "@/components/SiteFooter";

const EMAIL = "michaelalouisenunn@gmail.com";

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

const reasons = ["Building something together", "A work opportunity", "A question or an idea", "Just saying hello"];
const d = (ms: number) => ({ animationDelay: `${ms}ms` });
const field = "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", reason: reasons[0] ?? "", msg: "" });
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(`${form.reason} — ${form.name}`)}&body=${encodeURIComponent(`${form.msg}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <main className="space-y-6">
      <section className="reveal rounded-2xl border border-border bg-card p-6" style={d(100)}>
        <p className="text-sm text-sage">The direct route</p>
        <a href={`mailto:${EMAIL}`} className="mt-2 block text-xl font-medium hover:text-primary">{EMAIL} ↗</a>
        <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
          <button
            onClick={() => { navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
            className="link-soft"
          >
            {copied ? "copied ✓" : "copy email +"}
          </button>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-soft">linkedin ↗</a>
          <a href="https://calendly.com/michaelalouisenunn" target="_blank" rel="noreferrer" className="link-soft">book a call ↗</a>
        </div>
      </section>

      <section className="reveal rounded-2xl border border-border p-6" style={d(250)}>
        <h2 className="font-medium">A little context goes a long way.</h2>
        <p className="mt-1 text-sm text-muted-foreground">This prepares an email in your own email app. Nothing is sent until you send it there.</p>
        <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}>
          <input required placeholder="Your name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Your email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <select className={`${field} sm:col-span-2`} value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}>
            {reasons.map((r) => <option key={r}>{r}</option>)}
          </select>
          <textarea required rows={4} placeholder="What are you thinking?" className={`${field} sm:col-span-2`} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} />
          <button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90 sm:col-span-2">Prepare email ↗</button>
        </form>
      </section>

      <p className="reveal text-sm text-muted-foreground" style={d(400)}>Washington, DC</p>
    </main>
  );
}
