import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Michaela Nunn" },
      { name: "description", content: "Experience, projects and story of Michaela Nunn." },
      { property: "og:title", content: "Resume — Michaela Nunn" },
      { property: "og:description", content: "Experience, projects and story of Michaela Nunn." },
    ],
  }),
  component: Resume,
});

const roles = [
  { n: "01", co: "ScaleHouse Systems", role: "Full-stack programmer", body: "Built a platform that helps dental teams create and maintain OSHA- and HIPAA-compliant documentation.", tone: "bg-rose" },
  { n: "02", co: "Stantec", role: "Electrical design", body: "Designed electrical systems for real buildings — precision, codes and drawings that have to work.", tone: "bg-sage" },
];

const stats = [
  { v: "8", l: "products built" },
  { v: "2", l: "engineering disciplines" },
  { v: "DC", l: "home base" },
];

function Resume() {
  return (
    <main className="-mx-6 sm:-mx-24 lg:-mx-48">
      <section className="gingham relative overflow-hidden rounded-3xl border border-border px-8 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cherry">Resume · № 001</p>
        <h1 className="mt-2 font-script text-7xl leading-tight text-foreground sm:text-8xl">Michaela Nunn</h1>
        <p className="mx-auto mt-4 max-w-md text-xl italic">
          Wires by training. <span className="text-primary">Software</span> by obsession.
        </p>
        <span className="absolute left-6 top-6 text-3xl text-primary">✿</span>
        <span className="absolute bottom-6 right-8 text-4xl text-sage">❀</span>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={s.l} className={`rounded-2xl border border-border p-6 ${["bg-butter", "bg-blush", "bg-secondary"][i]}`}>
            <div className="text-5xl font-semibold text-cherry">{s.v}</div>
            <div className="mt-1 text-sm uppercase tracking-[0.2em]">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-4xl">Experience, <em className="text-primary">in bloom.</em></h2>
        <div className="mt-6 space-y-4">
          {roles.map((r) => (
            <article key={r.co} className="grid gap-4 rounded-3xl border border-border bg-card p-8 sm:grid-cols-[auto_1fr]">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${r.tone} text-xl font-semibold`}>{r.n}</div>
              <div>
                <h3 className="text-3xl">{r.co}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-cherry">{r.role}</p>
                <p className="mt-3 text-muted-foreground">{r.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-primary p-10 text-primary-foreground">
        <p className="text-sm uppercase tracking-[0.3em]">A little context</p>
        <h2 className="mt-2 text-4xl">More than <em>a job title.</em></h2>
        <p className="mt-4 max-w-xl text-lg opacity-90">
          I move between the physical and the digital — from electrical drawings to full-stack apps. I read widely,
          write about culture and ideas, and build things whenever an idea won't leave me alone.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Engineering", "Full-stack", "Books", "Writing", "Design"].map((t) => (
            <span key={t} className="rounded-full bg-background px-4 py-1 text-sm text-foreground">{t}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
