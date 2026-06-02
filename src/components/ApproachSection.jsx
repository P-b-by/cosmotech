export default function ApproachSection() {
  return (
    <section className="mx-auto max-w-7xl border border-slate-950/10 bg-slate-950 text-slate-100 shadow-[0_34px_120px_rgba(15,23,42,0.20)]">
      <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
        <div className="space-y-6 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Project Approach</p>
          <h3 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">Design systems with motion, meaning, and measurable outcomes.</h3>
          <p className="max-w-xl text-base leading-8 text-slate-300">I develop work that feels confident but remains inviting. Each project is built with a clear problem statement, thoughtful interaction, and a scalable visual language.</p>
        </div>
        <div className="grid border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
          <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Visual design</p>
            <p className="mt-4 text-xl font-semibold leading-snug text-white">High-fidelity systems with structured motion and typographic hierarchy.</p>
          </div>
          <div className="bg-sky-500 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Analytics and insight</p>
            <p className="mt-4 text-xl font-semibold leading-snug text-white">Data-driven decisions with clean dashboards and readable data visuals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
