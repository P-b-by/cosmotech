export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-l-8 border-slate-950 bg-white/70 p-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">About</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">A creator operating where interface, insight, and identity overlap.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">I combine graphic and UX design expertise with front-end craftsmanship and data analysis to deliver products that feel intuitive and perform with clarity. My work emphasizes visual storytelling, meaningful interaction, and actionable analytics.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]">
            <span className="text-3xl font-semibold text-sky-300">01</span>
            <h3 className="mt-5 text-lg font-semibold text-white">Graphic + UI design</h3>
            <p className="mt-2 text-sm text-slate-300">Visual systems, brand assets, and polished interfaces built in Figma and Adobe.</p>
          </div>
          <div className="border border-slate-950/10 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <span className="text-3xl font-semibold text-sky-600">02</span>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">Web development</h3>
            <p className="mt-2 text-sm text-slate-600">Responsive React experiences with Tailwind, semantic HTML, and interactive polish.</p>
          </div>
          <div className="border border-slate-950/10 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <span className="text-3xl font-semibold text-slate-500">03</span>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">Data storytelling</h3>
            <p className="mt-2 text-sm text-slate-600">Insights, dashboards, and regression analysis that support smarter decisions.</p>
          </div>
          <div className="bg-sky-500 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.10)]">
            <span className="text-3xl font-semibold text-sky-100">04</span>
            <h3 className="mt-5 text-lg font-semibold">Product thinking</h3>
            <p className="mt-2 text-sm text-sky-50">Process-driven planning from research to launch with a focus on user clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
