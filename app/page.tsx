import TextRotator            from "./components/TextRotator";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import ExperienceLog          from "./components/ExperienceLog";
import Education              from "./components/Education"; 
import Certifications         from "./components/Certifications"; 
import ProjectCard            from "./components/ProjectCard";
import ContactSection         from "./components/ContactSection";

export default function Home() {
  // Mock Data - In a real app, this might come from a JSON file or database
  const projects = [
    {
      title: "Secure Login System",
      description: "A full-stack authentication system focusing on SQL injection prevention and secure database management. I utilized MariaDB for storage and Flask for the backend logic. Made for a public demonstration that deepened class understanding of secure data management.",
      tags: ["React", "Flask", "MariaDB", "Secure Software Development"],
      image: "/cysInjection.png",
      codeSnippet: `

#Route made for the insecure submission, this does NOT protect against SQLInjection
@app.route('/submitInsec', methods=['POST'])
def submitInsec():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    query = (f"INSERT INTO users (name, email, password) "
             f"VALUES ('{name}', '{email}', '{password}')"
            )

    try:
        #Exeute the query, return the most recent addition
        db.session.execute(text(query))
        db.session.commit()
        recentUser = db.session.execute(db.select(Submission).order_by(Submission.userID.desc()).limit(1)).scalar_one_or_none()
        print(f"Executed Query: {query}", file = sys.stdout)

        return jsonify({"message":f"Registered new user! Welcome to the database, {recentUser.name}"})
    except Exception as e:
        print(f"Query not executed??? Here's why: {e}", file = sys.stdout)
        db.session.rollback()
        return jsonify({"message":"No query executed... sorry!"})

    ...`
    },
    {
      title: "Dijkstra Implementation in C++",
      description: "A C++ project that works with Graphs. It builds a graph off of an input file, then builds a summary table using Dijkstras Algorithm. Finally, it detects all cycles in a directed graph using a custom Depth First Search algorithm.",
      tags: ["C++", "Data  Structures", "Algoirithms", "Resource Efficency", "Graphs"],
      image: "/dijkstra.png",
      codeSnippet: ` //Small, Obsfucated Snippet for academic hoensty reasons. Not accurate to submitted assignment.
//Builds the information of the current path
vector<string> buildCycle(vector<string>& currPath, string neighbor){
	//Get the index of the starting vertex in the cycle
	int start = searchVector(currPath, neighbor);

	//Build the vector of strings that represent the cycle itself
	vector<string> cycle;
	cycle.reserve(currPath.size()-start);
	for(int i = start; i < currPath.size(); i++){
		cycle.push_back(currPath.at(i));
	}
	
}
`
    },
    {
      title: "Zip and Unzip in C++",
      description: "A C++ project that compresses and uncompresses text documents. It uses Huffman Encoding to build an output file, and a map to rebuild the uncompressed file.",
      tags: ["C++", "Data Structures", "Algorithms", "Data Compression"],
      image: "/huffman.png",
      codeSnippet: ` //Small, Obsfucated Snippet for academic hoensty reasons. Not accurate to submitted assignment.
//Builds a map that maps a character and its weight in the passed input file
//The weight represents how many times it appears within the file
map<char, int> buildWeights(ifstream& inFile){
	map<char, int> chars;
	chars['\n'] = 0;
	string line;
	while(getline(inFile, line)){
		for(int i = 0; i < line.size(); i++){
			//If the character isn't in the map
			if(chars.find(line[i]) == chars.end()){
				chars[line[i]] = 1;
			}
			//If the character is in the map
			else {
				chars[line[i]]++;
			}
		}
		chars['\n']++;
	}
	return chars;
}
      `
    },
  ];

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <section className="mb-24 mt-12">
        <h1 className="text-5xl md:text-7xl font-sans font-bold mb-4 tracking-tight">
          Hello, I'm <span className="text-accent-cyan">Johnathan Stowers</span>.
        </h1>
        <div className="font-mono text-xl md:text-2xl text-neutral-400 h-8 flex items-center">
          <span className="mr-2">I build:</span>
          <TextRotator />
        </div>
      </section>
      
      {/* Tech Stack Bar */}
      <section className="mb-24">
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
      <section className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Commit History</h2>
        <ExperienceLog />
      </section>

      {/* Education */}
      <section className="mb-24">
        <h2 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-widest">Education & Benchmarks</h2>
        <Education />
        <br />
        <Certifications />
      </section>

      {/* Binary Bears Information */}
      <section className="mb-24">
        <CompetitiveProgramming />
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

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
