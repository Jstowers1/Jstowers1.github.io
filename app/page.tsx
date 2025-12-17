import ProjectCard from "./components/ProjectCard";

export default function Home() {
  // Mock Data - In a real app, this might come from a JSON file or database
  const projects = [
    {
      title: "Secure Login System",
      description: "A full-stack authentication system focusing on SQL injection prevention and secure session management. I utilized MariaDB for storage and Flask for the backend logic.",
      tags: ["React", "Flask", "MariaDB", "Secure Software Development"],
      uiContent: "Screenshot of Login Form",
      codeSnippet: `// Example Flask/Python backend logic
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    # PREPARED STATEMENTS prevent SQL Injection
    cursor.execute(
       "SELECT * FROM users WHERE user = %s", 
       (username,)
    )
    ...`
    },
    {
      title: "Graph Cycle Detector",
      description: "A C++ tool optimized for memory efficiency. It detects cycles in large directed graphs using a custom Depth First Search algorithm, handling up to 50k nodes.",
      tags: ["C++", "Data  Structures", "Algoirithms", "Resource Efficency"],
      uiContent: "Console Output / Visualization",
      codeSnippet: `// C++ Cycle Detection Logic
bool isCyclicUtil(int v, bool visited[], bool *recStack) {
    if(visited[v] == false) {
        visited[v] = true;
        recStack[v] = true;
        
        for(auto i = adj[v].begin(); i != adj[v].end(); ++i) {
            if ( !visited[*i] && isCyclicUtil(*i, visited, recStack) )
                return true;
            else if (recStack[*i])
                return true;
        }
    }
    recStack[v] = false; 
    return false;
}`
    }
  ];

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <section className="mb-24 mt-12">
        <h1 className="text-5xl md:text-7xl font-sans font-bold mb-4 tracking-tight">
          Hello, I'm <span className="text-accent-cyan">Johnathan Stowers</span>.
        </h1>
        <div className="font-mono text-xl md:text-2xl text-neutral-400 h-8 flex items-center">
          <span className="mr-2">I work with:</span>
          <span className="text-accent-purple bg-neutral-800 px-2 py-1 rounded">
            Full-Stack Solutions, Efficent C++ Algorithms, AI Engineering
          </span>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Core Technologies</h2>
        <div className="flex flex-wrap gap-4 font-mono text-neutral-300">
           {["React", "Next.js", "C++", "Python", "Java", "Flask", "SQL", "Cybersecurity"].map(tech => (
             <div key={tech} className="border border-neutral-700 px-4 py-2 rounded hover:border-accent-cyan hover:text-accent-cyan transition-colors cursor-default">
               {tech}
             </div>
           ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="font-mono text-sm text-neutral-500 mb-8 uppercase tracking-widest">Selected Works</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="mt-32 pt-8 border-t border-neutral-800 font-mono text-neutral-500 text-sm">
        <p>user@portfolio:~$ <span className="text-green-500">./contact_me</span></p>
      </footer>

    </main>
  );
}
