import portraitSrc from '../photos/masha.png';

export default function ContactSection({ tools }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl overflow-hidden border border-slate-950/10 bg-white shadow-[0_34px_120px_rgba(15,23,42,0.14)]">
      <div className="grid gap-0 lg:grid-cols-[1.16fr_0.84fr] lg:items-stretch">
        <div className="space-y-8 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Contact</p>
          <h3 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">Let's create something bold and useful together.</h3>
          <p className="max-w-xl text-base leading-8 text-slate-600">If you have a project that needs modern design, polished front-end development, or data-driven delivery, I am ready to help shape it.</p>
          <div className="grid gap-px overflow-hidden border border-slate-950/10 bg-slate-950/10 sm:grid-cols-2">
            <div className="bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Email</p>
              <a href="mailto:paulmacharianderi@gmail.com" className="mt-3 block text-base font-semibold text-slate-900 hover:text-sky-700">paulmacharianderi@gmail.com</a>
            </div>
            <div className="bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Phone</p>
              <a href="tel:+254748068586" className="mt-3 block text-base font-semibold text-slate-900 hover:text-sky-700">+254 748 068 586</a>
            </div>
            <div className="bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Location</p>
              <p className="mt-3 text-base text-slate-700">Remote-ready with hybrid availability for clients worldwide.</p>
            </div>
            <div className="bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Availability</p>
              <p className="mt-3 text-base text-slate-700">Open to new engagements, product launches, and long-term partnership work.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-slate-950 p-8 text-slate-100 sm:p-10">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-[0.72fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.72fr_1fr]">
            <div className="relative min-h-72 bg-slate-200 sm:min-h-full lg:min-h-72 xl:min-h-full">
              <img src={portraitSrc} alt="Portrait of Paul Macharia Nderi" className="absolute inset-0 h-full w-full object-cover object-[50%_18%] contrast-105" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(15,23,42,0.68)_100%)]" />
            </div>
            <div className="bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Portfolio lead</p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-white">Paul Macharia Wanderi</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Design-focused builder creating interfaces, dashboards, and brand systems with a sharp product lens.</p>
            </div>
          </div>
          <div className="border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Next step</p>
            <p className="mt-2 text-2xl font-semibold leading-tight">Schedule a conversation or share your brief.</p>
          </div>
          <div className="grid gap-3">
            <a href="mailto:paulmacharianderi@gmail.com" className="inline-flex w-full items-center justify-center bg-sky-400 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white">Email me</a>
            <a href="tel:+254748068586" className="inline-flex w-full items-center justify-center border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-sky-500">Call me</a>
          </div>
          <div className="border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Social</p>
            <div className="mt-4 grid gap-3">
              <a href="https://www.linkedin.com/in/paul-portfolio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white">LinkedIn<span>-&gt;</span></a>
              <a href="https://github.com/paul-portfolio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white">GitHub<span>-&gt;</span></a>
              <a href="https://dribbble.com/paul-portfolio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white">X<span>-&gt;</span></a>
            </div>
          </div>
          <div className="border border-white/10 bg-white/5 p-6 text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Primary tools</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
