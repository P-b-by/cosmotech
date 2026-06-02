export default function MissionVisionSection() {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden border border-slate-950/10 bg-[#151515] text-slate-100 shadow-[0_34px_120px_rgba(15,23,42,0.18)]">
      <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="space-y-5 border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Mission & Vision</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">A clear mission, a bold future, and values built for growth.</h2>
          <p className="max-w-xl text-base leading-8 text-slate-300">My work brings together UI/UX design, web development, and data analytics so businesses can scale with confidence, connect with broader audiences, and make every digital interaction count.</p>
        </div>
        <div className="grid sm:grid-cols-2">
          <div className="bg-sky-500 p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">Mission</p>
            <p className="mt-4 text-base leading-7 text-white/90">I empower businesses to scale and reach wider audiences by blending analytical insights with exceptional design and robust web engineering. I turn complex data into user-centric digital experiences that drive measurable growth.</p>
          </div>
          <div className="bg-slate-100 p-8 text-slate-950 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Vision</p>
            <p className="mt-4 text-base leading-7 text-slate-700">To be the premier catalyst for business evolution, engineering a future where data, design, and technology converge to help enterprises achieve limitless scale.</p>
          </div>
        </div>
      </div>
      <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'Integrity',
            description: 'Honest, dependable, and professional delivery in every project and interaction.'
          },
          {
            title: 'Data-Driven Creativity',
            description: 'We blend intuition with evidence. Every aesthetic choice and user flow is backed by behavioral data to drive measurable growth.'
          },
          {
            title: 'Built to Scale',
            description: 'We engineer for the future with robust, flexible digital systems that grow with your business.'
          },
          {
            title: 'Human-Centric Precision',
            description: 'We transform complex technology into intuitive, frictionless, and memorable human experiences.'
          }
        ].map((value) => (
          <div key={value.title} className="border-b border-white/10 p-6 transition hover:bg-white/10 sm:border-r lg:border-b-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{value.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
