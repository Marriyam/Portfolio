import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import OtherProjects from "./components/OtherProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { caseStudies } from "./data/content";

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <div id="work">
        {caseStudies.map((study, i) => (
          <CaseStudy key={study.id} study={study} index={i} />
        ))}
      </div>
      <OtherProjects />
      <Skills />
      <Contact />
      <footer className="text-center text-slate-600 text-xs font-mono py-6 border-t border-cyan/10">
        Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}

export default App;
