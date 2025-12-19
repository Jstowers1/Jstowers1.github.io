export default function Education() {
  return (
    <div className="max-w-4xl mx-auto mb-32">

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* ==========================================
            CONTAINER 1: ACADEMIC CORE (University) 
           ========================================== */}
        <div className="border border-neutral-800 bg-neutral-900/50 rounded-lg p-6 flex flex-col h-full">
          
          {/* Header */}
          <div className="mb-6 border-b border-neutral-800 pb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-neutral-200 font-sans">
                B.S. Computer Science
              </h3>
              <span className="text-[10px] px-2 py-0.5 border border-green-900 bg-green-900/20 text-green-400 rounded font-mono">
                ACTIVE
              </span>
            </div>
            <h2>Minors in Cybersecurity and Mathematics</h2>
            <p className="text-neutral-500 font-mono text-xs">Mercer University</p>
            <p className="text-neutral-600 font-mono text-[10px] mt-1">Expected 2028</p>
          </div>

          {/* CS Classes Benchmarks */}
          <div className="space-y-3 flex-1">
            <h4 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
              Computer Science Kernels
            </h4>
            
            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-green-500 pl-3 bg-neutral-800/30 py-2 pr-2 rounded-r">
              <span className="text-neutral-300">Data Structures & Algorithms in C++</span>
              <span className="text-green-400 font-bold">Grade: A</span>
            </div>

            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-neutral-700 pl-3 py-1">
              <span className="text-neutral-400">Artifical Intelligence</span>
              <span className="text-neutral-600">In Progress</span>
            </div>

            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-neutral-700 pl-3 py-1">
              <span className="text-neutral-400">Application Development and Deployement</span>
              <span className="text-neutral-600">In Progress</span>
            </div>
          </div>

          {/* Math Classes Benchmarks */}
          <div className="space-y-3 flex-1 pt-4">
            <h4 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
              Mathematics Kernels
            </h4>

            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-green-500 pl-3 bg-neutral-800/30 py-2 pr-2 rounded-r">
              <span className="text-neutral-300">Discrete Math</span>
              <span className="text-green-400 font-bold">Grade: A</span>
            </div>

            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-green-500 pl-3 bg-neutral-800/30 py-2 pr-2 rounded-r">
              <span className="text-neutral-300">Calculus II</span>
              <span className="text-400 font-bold">Grade: B</span>
            </div>

            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-neutral-700 pl-3 py-1">
              <span className="text-neutral-400">Linear Algebra</span>
              <span className="text-neutral-600">In Progress</span>
            </div>

            <div className="flex justify-between items-center text-sm font-mono border-l-2 border-neutral-700 pl-3 py-1">
              <span className="text-neutral-400">Probability & Mathematical Statistics</span>
              <span className="text-neutral-600">In Progress</span>
            </div>
          </div>

        </div>

        {/* ==========================================
            CONTAINER 2: INDUSTRY MODULES (AWS/Extras) 
           ========================================== */}
        <div className="border border-neutral-800 bg-neutral-900/50 rounded-lg p-6 flex flex-col h-full">
          
          {/* Header */}
          <div className="mb-6 border-b border-neutral-800 pb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-neutral-200 font-sans">
                Cloud & Industry
              </h3>
              <span className="text-[10px] px-2 py-0.5 border border-amber-900 bg-amber-900/20 text-amber-400 rounded font-mono">
                SYNCING
              </span>
            </div>
            <p className="text-neutral-500 font-mono text-xs">Professional Development</p>
            <p className="text-neutral-600 font-mono text-[10px] mt-1">Self-Directed Learning</p>
          </div>

          {/* Modules List */}
          <div className="space-y-4 flex-1">
            <h4 className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
              Loaded Modules
            </h4>

            {/* AWS Course Item */}
            <div className="group">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-mono text-neutral-300 group-hover:text-amber-400 transition-colors">
                  AWS Cloud Practitioner
                </span>
                <span className="text-[10px] font-mono text-neutral-500">15%</span>
              </div>
              
              <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[15%]"></div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}
