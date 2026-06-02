import logoSrc from '../photos/vis4.png';
import portraitSrc from '../photos/masha.png';

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden border border-slate-950/10 bg-[#0f172a] text-white shadow-[0_34px_120px_rgba(15,23,42,0.24)]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.24),transparent_34%),linear-gradient(300deg,rgba(30,41,59,0.58),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.09)_0_1px,transparent_1px_12px)]" />
      <div className="relative grid min-h-[calc(100svh-6.75rem)] md:grid-cols-[1.04fr_0.96fr]">
        <div className="flex flex-col justify-between gap-8 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Design + Data + Code</span>
            <span className="border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300">Available for select builds</span>
          </div>
          <div className="max-w-3xl space-y-5">
            <div className="flex h-14 w-14 items-center justify-center bg-white">
              <img src={logoSrc} alt="CosmoTech logo" className="h-10 w-auto max-w-[3rem] object-contain" />
            </div>
            <h1 className="text-4xl font-semibold leading-[1] tracking-normal text-white sm:text-5xl lg:text-6xl">Digital work with a sharper point of view.</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">I shape polished interfaces, brand systems, analytics dashboards, and React experiences for teams that need their digital presence to feel current, credible, and memorable.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="inline-flex items-center justify-center bg-sky-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:-translate-y-1 hover:bg-white">Explore Work</a>
              <a href="#contact" className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-500">Start a Project</a>
            </div>
          </div>
          <div className="grid max-w-2xl grid-cols-3 border-y border-white/10 text-sm">
            {['UX systems', 'Front-end', 'Data stories'].map((item) => (
              <div key={item} className="border-r border-white/10 px-3 py-3 text-slate-300 last:border-r-0">{item}</div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-0 border-l border-white/10 bg-slate-200 md:block">
          <img src={portraitSrc} alt="Portrait of Paul" className="absolute inset-0 h-full w-full object-cover grayscale-[15%] contrast-110" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(16,21,31,0.86)_100%)]" />
          <div className="absolute left-5 top-5 bg-sky-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:left-8 sm:top-8">Independent portfolio</div>
          <div className="absolute bottom-6 left-5 right-5 border border-white/15 bg-slate-950/68 p-5 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">CosmoTech Studio</p>
            <p className="mt-3 text-2xl font-semibold tracking-normal text-white">Creative direction grounded in product clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
