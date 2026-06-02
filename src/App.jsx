import Header from './components/Header';
import AnimateSection from './components/AnimateSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MissionVisionSection from './components/MissionVisionSection';
import SkillsSection from './components/SkillsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ApproachSection from './components/ApproachSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import { skillGroups, caseStudies, tools } from './data';

export default function App() {
  const page = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
  const isLegalPage = page === 'privacy' || page === 'terms';

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f8fb] text-slate-950 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(115deg,rgba(14,165,233,0.10),transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef3f8_48%,#f8fafc_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <Header />

      {isLegalPage ? (
        <LegalPage type={page} />
      ) : (
        <main className="space-y-20 px-4 pb-16 pt-3 sm:px-6 md:space-y-28 md:px-8 lg:px-10">
          <AnimateSection delay={0}>
            <HeroSection />
          </AnimateSection>
          <AnimateSection delay={100}>
            <AboutSection />
          </AnimateSection>
          <AnimateSection delay={200}>
            <MissionVisionSection />
          </AnimateSection>
          <AnimateSection delay={300}>
            <SkillsSection skillGroups={skillGroups} />
          </AnimateSection>
          <AnimateSection delay={400}>
            <CaseStudiesSection caseStudies={caseStudies} />
          </AnimateSection>
          <AnimateSection delay={500}>
            <ApproachSection />
          </AnimateSection>
          <AnimateSection delay={600}>
            <ContactSection tools={tools} />
          </AnimateSection>
        </main>
      )}

      <Footer />
    </div>
  );
}
