const legalContent = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy, handled with clarity.',
    updated: 'Last updated: June 1, 2026',
    intro:
      'This policy explains how CosmoTech handles information shared through this portfolio website and project inquiry channels.',
    sections: [
      {
        title: 'Information collected',
        body:
          'When you contact me, I may receive your name, email address, phone number, company or project details, and any message you choose to share. Basic technical information such as browser type, device type, and approximate usage patterns may also be collected through standard website hosting or analytics tools.'
      },
      {
        title: 'How information is used',
        body:
          'Information is used to respond to inquiries, discuss potential work, manage project communication, improve the website experience, and maintain professional records related to active or past engagements.'
      },
      {
        title: 'Sharing and retention',
        body:
          'I do not sell personal information. Information may be shared only with trusted service providers when needed for hosting, email, analytics, project delivery, or legal compliance. Contact and project records are kept only as long as reasonably necessary for business, legal, or operational purposes.'
      },
      {
        title: 'Your choices',
        body:
          'You can request access, correction, or deletion of your personal information by emailing paulmacharianderi@gmail.com. Some records may need to be retained when required for legitimate business or legal reasons.'
      }
    ]
  },
  terms: {
    eyebrow: 'Terms of Use',
    title: 'Professional terms for using this site.',
    updated: 'Last updated: June 1, 2026',
    intro:
      'These terms outline the basic rules for using the CosmoTech portfolio website and reviewing the work, writing, visuals, and contact options presented here.',
    sections: [
      {
        title: 'Website use',
        body:
          'This website is provided for portfolio, informational, and project inquiry purposes. You agree not to misuse the site, attempt unauthorized access, interfere with its operation, or use its content in a misleading way.'
      },
      {
        title: 'Portfolio content',
        body:
          'Designs, copy, images, layouts, case studies, and other materials on this site belong to CosmoTech, Paul Macharia Nderi, or their respective owners. You may view the content for evaluation purposes, but you may not copy, redistribute, or present it as your own work without permission.'
      },
      {
        title: 'Project discussions',
        body:
          'Submitting an inquiry does not create a client relationship or guarantee availability. Project scope, pricing, timelines, deliverables, and ownership terms must be agreed separately in writing before work begins.'
      },
      {
        title: 'No guarantees',
        body:
          'The site is maintained with care, but it is provided as is. I do not guarantee uninterrupted access, error-free content, or that the site will meet every visitor requirement.'
      }
    ]
  }
};

export default function LegalPage({ type }) {
  const content = legalContent[type] || legalContent.privacy;

  return (
    <main className="px-4 pb-16 pt-3 sm:px-6 md:px-8 lg:px-10">
      <section className="mx-auto grid max-w-7xl overflow-hidden border border-slate-950/10 bg-white shadow-[0_34px_120px_rgba(15,23,42,0.14)] lg:grid-cols-[0.42fr_0.58fr]">
        <aside className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">{content.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">{content.title}</h1>
          <p className="mt-6 text-sm leading-7 text-slate-300">{content.intro}</p>
          <p className="mt-10 border-t border-white/10 pt-5 text-sm text-slate-400">{content.updated}</p>
          <a href="/" className="mt-8 inline-flex items-center justify-center bg-sky-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white">
            Back home
          </a>
        </aside>

        <div className="divide-y divide-slate-950/10">
          {content.sections.map((section) => (
            <article key={section.title} className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-normal text-slate-950">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
          <article className="bg-slate-50 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-normal text-slate-950">Contact</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Questions about this page can be sent to{' '}
              <a href="mailto:paulmacharianderi@gmail.com" className="font-semibold text-sky-700 hover:text-slate-950">
                paulmacharianderi@gmail.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
