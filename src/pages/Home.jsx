import React, { Suspense } from 'react';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import SiteBackdrop from '../components/SiteBackdrop.jsx';
import RandomPathDrawing from '../components/RandomPathDrawing.jsx';

// Lazy loaded components for massive chunk splitting performance boost
const About = React.lazy(() => import('../components/About.jsx'));
const Education = React.lazy(() => import('../components/Education.jsx'));
const Projects = React.lazy(() => import('../components/Projects.jsx'));
const Skills = React.lazy(() => import('../components/Skills.jsx'));
const GitHubStats = React.lazy(() => import('../components/GitHubStats.jsx'));
const Contact = React.lazy(() => import('../components/Contact.jsx'));
const BackToTop = React.lazy(() => import('../components/BackToTop.jsx'));

function Home({ theme, setTheme }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SiteBackdrop />
      <RandomPathDrawing />
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-mint border-t-transparent animate-spin"></div></div>}>
          <About />
          <Education />
          <Projects />
          <Skills />
          <GitHubStats />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default Home;
