import Navbar from '../components/Navbar';
import AboutMeSection from '../components/AboutMeSection';
import DomainsSection from '../components/DomainsSection';
import CertificationsSection from '../components/CertificationsSection';
import ProjectsSection from '../components/ProjectsSection';
import PlaybookSection from '../components/PlaybookSection';
import TechArsenalSection from '../components/TechArsenalSection';
import UiUxSection from '../components/UiUxSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <Navbar />
      <main id="main-content" style={{ flex: 1, backgroundColor: '#000000' }}>
        {/* 1. About Me (Top - personal photo, BIS student intro, and professional summary) */}
        <AboutMeSection />

        {/* 2. My Nine Technical Domains */}
        <DomainsSection />

        {/* 3. Certifications & Courses (CS50 courses) */}
        <CertificationsSection />

        {/* 4. Strategic Builds (Selected Projects) */}
        <ProjectsSection />

        {/* 5. The Engineering Playbook */}
        <PlaybookSection />

        {/* 6. The Technical Arsenal */}
        <TechArsenalSection />

        {/* 7. UI/UX Direction */}
        <UiUxSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
