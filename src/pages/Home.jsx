import About from '../components/About.jsx';
import BackToTop from '../components/BackToTop.jsx';
import Contact from '../components/Contact.jsx';
import Education from '../components/Education.jsx';
import GitHubStats from '../components/GitHubStats.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Projects from '../components/Projects.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import SiteBackdrop from '../components/SiteBackdrop.jsx';
import Skills from '../components/Skills.jsx';

function Home({ theme, setTheme }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SiteBackdrop />
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <GitHubStats />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default Home;
