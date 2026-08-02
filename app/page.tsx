import TextRotator            from "./components/TextRotator";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import ExperienceLog          from "./components/ExperienceLog";
import Education              from "./components/Education";
import Certifications         from "./components/Certifications";
import ProjectCard            from "./components/ProjectCard";
import ContactSection         from "./components/ContactSection";
import ResearchPoster         from "./components/ResearchPoster";
import NavBar                 from "./components/NavBar";

import projectsData           from "./projectData.json"
export default function Home() {
  // Mock Data - In a real app, this might come from a JSON file or database
  
  return (
    <>
    <NavBar />
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
  
      {/* Hero Section */}
      <section id="top" className="mb-24 mt-12">
        <h1 className="text-5xl md:text-7xl font-sans font-bold mb-4 tracking-tight">
          Hello, I'm <span className="text-accent-cyan">Johnathan Stowers</span>.
        </h1>
        <div className="font-mono text-xl md:text-2xl text-neutral-400 h-8 flex items-center">
          <span className="mr-2">I build:</span>
          <TextRotator />
        </div>
        <div className="font-mono text-sm text-neutral-500 mt-6 space-y-1">
          <p><span className="text-green-500">{">"}</span> CS @ Mercer '28. IceCube CNN researcher by day.</p>
          <p><span className="text-green-500">{">"}</span> Builds servers, games, and secure systems by night.</p>
        </div>
      </section>
      
      {/* Tech Stack Bar */}
      <section id="tech" className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Core Technologies</h2>
        <div className="flex flex-wrap gap-4 font-mono text-neutral-300">
           {["C++", "Python", "Java", "React", "Next.js", "Flask", "SQL", "NumPy", "TensorFlow", "Cybersecurity", "Linux", "CLI"].map(tech => (
             <div key={tech} className="border border-neutral-700 px-4 py-2 rounded hover:border-accent-cyan hover:text-accent-cyan transition-colors cursor-default">
               {tech}
             </div>
           ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Commit History</h2>
        <ExperienceLog />
      </section>

      {/* Education */}
      <section id="education" className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Education & Benchmarks</h2>
        <Education />
        <br />
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Verified Credentials</h2>
        <Certifications />
      </section>

      {/* Research Presentation */}
      <section id="research" className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Research Showcase</h2>
        <ResearchPoster />
      </section>

      {/* Binary Bears Information */}
      <section id="compete" className="mb-24">
        <CompetitiveProgramming />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="font-mono text-sm text-neutral-500 mb-8 uppercase tracking-widest">Selected Works</h2>
        <div className="flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </main>
    </>
  );
}
