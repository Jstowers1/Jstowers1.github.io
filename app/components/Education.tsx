export default function Education() {
  return (
    <div className="border border-neutral-800 bg-neutral-900/50 rounded-lg p-8 max-w-3xl mx-auto">
      
      {/* Header: University & Degree */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 border-b border-neutral-800 pb-6">
        <div>
          <h3 className="text-2xl font-bold text-neutral-100 font-sans">
            B.S. Computer Science
          </h3>
          <h4>
            Minors in Mathematics and Cybersecurity
          </h4>
          <p className="text-neutral-400 font-mono mt-1">
            @ Mercer University
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <span className="inline-block px-3 py-1 bg-neutral-800 text-accent-cyan text-xs font-mono rounded border border-neutral-700">
            Expected 2028
          </span>
        </div>
      </div>

      {/* The "Benchmark" / Coursework Section */}
      <div>
        <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
          Computer Science Benchmarks
        </h4>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded border border-green-900/50 bg-green-900/10 flex justify-between items-center group">
            <span className="font-mono text-green-400 font-bold group-hover:underline decoration-green-500/50 underline-offset-4">
              Data Structures & Algorithms in C++
            </span>
            <span className="font-mono text-xs font-bold bg-green-900 text-green-300 px-2 py-1 rounded">
              GRADE: A
            </span>
          </div>

          <div className="p-4 rounded border border-neutral-800 bg-neutral-900 flex justify-between items-center">
            <span className="font-mono text-neutral-300">
              Artifical Intelligence
            </span>
            <span className="font-mono text-xs text-neutral-500">
              IN PROGRESS
            </span>
          </div>

          <div className="p-4 rounded border border-neutral-800 bg-neutral-900 flex justify-between items-center">
            <span className="font-mono text-neutral-300">
              Application Development and Deployement
            </span>
            <span className="font-mono text-xs text-neutral-500">
              IN PROGRESS
            </span>
          </div>
        </div>
        <br />

        <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
          Mathematics Benchmarks
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded border border-neutral-800 bg-neutral-900 flex justify-between items-center">
            <span className="font-mono text-neutral-300">
              Calculus II
            </span>
            <span className="font-mono text-xs px-2 py-1 rounded">
              GRADE: B
            </span>
          </div>

          <div className="p-4 rounded border border-neutral-800 bg-neutral-900 flex justify-between items-center">
            <span className="font-mono text-neutral-300">
              Linear Algebra
            </span>
            <span className="font-mono text-xs text-neutral-500">
              IN PROGRESS
            </span>
          </div>

          <div className="p-4 rounded border border-neutral-800 bg-neutral-900 flex justify-between items-center">
            <span className="font-mono text-neutral-300">
              Probability & Mathematical Statistics 
            </span>
            <span className="font-mono text-xs text-neutral-500">
              IN PROGRESS
            </span>
          </div>

        </div>

      </div>
      
      <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
        <p className="font-mono text-sm text-neutral-500">
          Cumulative GPA: <span className="text-neutral-200">3.8/4.0</span>
        </p>
      </div>

    </div>
  );
}
