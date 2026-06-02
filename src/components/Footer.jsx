import logoSrc from '../photos/vis4.png';

export default function Footer() {
  const navItems = [
    ['About', '/#about'],
    ['Work', '/#work'],
    ['Skills', '/#skills'],
    ['Contact', '/#contact']
  ];

  const socialItems = [
    ['LinkedIn', 'https://www.linkedin.com/in/paul-portfolio'],
    ['GitHub', 'https://github.com/paul-portfolio'],
    ['X', 'https://x.com/paul-portfolio']
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0f172a] px-4 pb-6 pt-16 text-white sm:px-6 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.14),transparent_34%),linear-gradient(300deg,rgba(30,41,59,0.58),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="bg-[#0f172a]/95 p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center bg-white">
                <img src={logoSrc} alt="CosmoTech logo" className="h-10 w-auto max-w-[3rem] object-contain" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">CosmoTech</p>
                <p className="mt-1 text-sm text-slate-400">Design systems, data stories, and React interfaces.</p>
              </div>
            </div>

            <h2 className="mt-10 max-w-4xl text-5xl font-semibold leading-[1] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Build the next standout digital experience.
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:paulmacharianderi@gmail.com" className="inline-flex items-center justify-center bg-sky-400 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:-translate-y-1 hover:bg-white">Email Paul</a>
              <a href="/#work" className="inline-flex items-center justify-center border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-sky-500">View Work</a>
            </div>
          </div>

          <div className="grid bg-[#0f172a]/95 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-b border-white/10 p-7 sm:border-r lg:border-r-0 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Navigate</p>
              <nav className="mt-6 grid gap-3">
                {navItems.map(([label, href]) => (
                  <a key={label} href={href} className="group inline-flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white">
                    {label}
                    <span className="transition group-hover:translate-x-1">-&gt;</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Connect</p>
              <div className="mt-6 grid gap-3">
                <a href="tel:+254748068586" className="border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white">+254 748 068 586</a>
                {socialItems.map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white">
                    {label}
                    <span>-&gt;</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-x border-b border-white/10 bg-[#0c111a] px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 CosmoTech. Built by Macharia Paul Wanderi.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/privacy" className="transition hover:text-sky-300">Privacy</a>
            <a href="/terms" className="transition hover:text-sky-300">Terms</a>
            <a href="/credits" className="transition hover:text-sky-300">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
