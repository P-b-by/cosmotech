import logoSrc from '../photos/vis4.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 px-4 py-3 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between border border-slate-950/10 bg-white/82 px-3 py-2.5 shadow-[0_18px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-slate-950">
            <img src={logoSrc} alt="CosmoTech logo" className="h-7 w-auto max-w-[2.2rem] object-contain invert" />
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 sm:block">CosmoTech</span>
          <span className="sr-only">CosmoTech</span>
        </a>
        <nav className="hidden items-center gap-1 text-sm font-semibold text-slate-700 md:flex">
          {[
            ['About', '/#about'],
            ['Work', '/#work'],
            ['Skills', '/#skills'],
            ['Contact', '/#contact']
          ].map(([label, href]) => (
            <a key={label} href={href} className="px-4 py-2 transition hover:bg-slate-950 hover:text-white">{label}</a>
          ))}
        </nav>
        <a href="/#contact" className="inline-flex items-center justify-center bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-950">Book</a>
      </div>
    </header>
  );
}
