export default function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Skills</p>
          <h3 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">A hybrid toolkit for design, dev, and data.</h3>
        </div>
        <div className="border border-slate-950 bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-[8px_8px_0_#0f172a]">Ready for new visual and digital challenges</div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article key={group.title} className={`border border-slate-950/10 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 ${index === 1 ? 'bg-slate-950 text-white md:-mt-8' : 'bg-white/85'}`}>
            <div className="flex items-start justify-between gap-4">
              <h4 className={`text-2xl font-semibold ${index === 1 ? 'text-white' : 'text-slate-950'}`}>{group.title}</h4>
              <span className={`${index === 1 ? 'bg-sky-400 text-slate-950' : 'bg-slate-200 text-slate-700'} px-3 py-1 text-xs font-semibold`}>0{index + 1}</span>
            </div>
            <ul className={`mt-7 space-y-3 text-sm ${index === 1 ? 'text-slate-300' : 'text-slate-700'}`}>
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className={`inline-flex h-2.5 w-2.5 shrink-0 ${index === 1 ? 'bg-sky-300' : 'bg-slate-950'}`} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
