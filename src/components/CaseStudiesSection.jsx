export default function CaseStudiesSection({ caseStudies }) {
  return (
    <section id="work" className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Case Studies</p>
          <h3 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">Two signature experiences that showcase strategy, design, and measurable impact.</h3>
        </div>
        <p className="max-w-xl border-l-4 border-slate-950 pl-5 text-sm leading-6 text-slate-700">Each project is grounded in process, clarity, and a sharp visual system to support business goals.</p>
      </div>

      <div className="mt-10 grid gap-6">
        {caseStudies.map((study, index) => (
          <article key={study.title} className={`group grid overflow-hidden border border-slate-950/10 shadow-[0_24px_90px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 lg:grid-cols-[0.42fr_0.58fr] ${index % 2 ? 'bg-[#171717] text-white' : 'bg-white'}`}>
            <div className={`relative min-h-64 p-8 ${index % 2 ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'}`}>
              <span className="text-6xl font-semibold leading-none opacity-20">0{index + 1}</span>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">{study.type}</p>
                <div className="mt-6 h-2 w-full bg-white/30">
                  <div className="h-full w-2/3 bg-sky-300 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <h4 className={`text-3xl font-semibold leading-tight ${index % 2 ? 'text-white' : 'text-slate-950'}`}>{study.title}</h4>
              </div>
              <a href="#contact" className={`inline-flex items-center justify-center px-5 py-3 text-sm font-semibold transition ${index % 2 ? 'bg-white text-slate-950 hover:bg-sky-500 hover:text-white' : 'bg-slate-950 text-white hover:bg-sky-500'}`}>Request walkthrough</a>
            </div>
            <p className={`mt-6 max-w-3xl text-base leading-8 ${index % 2 ? 'text-slate-300' : 'text-slate-700'}`}>{study.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {study.highlights.map((highlight) => (
                <div key={highlight} className={`border px-4 py-4 text-sm ${index % 2 ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-950/10 bg-slate-50 text-slate-700'}`}>{highlight}</div>
              ))}
            </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
