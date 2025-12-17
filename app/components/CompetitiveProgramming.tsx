interface Competition {
  name: string;
  role: "Captain" | "Member" | "Solo";
  rank: string; // e.g., "#6" or "Pending"
  date: string;
  status: "completed" | "upcoming";
}

const competitions: Competition[] = [
  {
    name: "2025 CCSC @ Mercer University",
    role: "Member",
    rank: "#7 Overall",
    date: "Nov 2025",
    status: "completed",
  },
  {
    name: "2026 Binary Bears Member",
    role: "Captian",
    rank: "Pending",
    date: "Nov 2026",
    status: "upcoming",
  },
];

export default function CompetitionLog() {
  return (
    <div className="max-w-5xl mx-auto mb-32">
      
      {/* Section Header */}
      <h2 className="font-mono text-sm text-neutral-500 mb-8 uppercase tracking-widest border-b border-neutral-800 pb-2">
        Competitive Programming
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* PANEL 1: The "Why This Matters" Info Panel (Spans 2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* The "Hook" Card */}
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <h3 className="text-amber-400 font-mono text-xs uppercase tracking-widest">
                  Future Captain
                </h3>
              </div>
              
              <h4 className="text-2xl font-bold text-neutral-100 font-sans mb-4">
                Pressure & Precision
              </h4>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Competitive programming is more than coding, it's about
                abstract problem solving under strict time limits and while working in a team.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-accent-cyan mt-1">▹</span>
                  <p className="text-xs text-neutral-300 font-mono">
                    <strong className="text-white">Leadership:</strong> Coordinating team strategy and delegating problems based on member strengths.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-cyan mt-1">▹</span>
                  <p className="text-xs text-neutral-300 font-mono">
                    <strong className="text-white">Efficency:</strong> Writing efficent solutions in Python that handle vasts amount of data.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Badge Footer */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap gap-2">
              {["Python", "Data Processing", "Problem Solving", "Team Management"].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PANEL 2: The Scrollable Log (Spans 3 columns) */}
        <div className="lg:col-span-3 bg-neutral-900/30 border border-neutral-800 rounded-lg overflow-hidden flex flex-col">
          
          {/* Log Header */}
          <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex justify-between items-center">
            <span className="font-mono text-xs text-neutral-500 uppercase">Event History</span>
            <span className="font-mono text-xs text-neutral-600">{competitions.length} Records</span>
          </div>

          {/* Scrollable Container - This keeps it compact even if you add 50 events */}
          <div className="overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
            <table className="w-full text-left border-collapse">
              <thead className="bg-neutral-900/50 text-xs text-neutral-500 font-mono sticky top-0 backdrop-blur-md">
                <tr>
                  <th className="p-4 font-normal">Competition</th>
                  <th className="p-4 font-normal">Role</th>
                  <th className="p-4 font-normal">Rank</th>
                </tr>
              </thead>
              <tbody className="text-sm font-mono divide-y divide-neutral-800">
                {competitions.map((comp, i) => (
                  <tr key={i} className="hover:bg-neutral-800/30 transition-colors">
                    <td className="p-4 text-neutral-300">
                      {comp.name}
                      <div className="text-[10px] text-neutral-600 mt-0.5">{comp.date}</div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                        comp.role === "Captain" 
                        ? "border-amber-900/40 text-amber-500 bg-amber-900/10" 
                        : "border-neutral-700 text-neutral-500"
                      }`}>
                        {comp.role}
                      </span>
                    </td>
                    <td className="p-4">
                      {comp.status === "upcoming" ? (
                        <span className="text-neutral-600 italic text-xs">Pending</span>
                      ) : (
                        <span className={comp.rank.includes("#7") ? "text-accent-cyan font-bold" : "text-neutral-400"}>
                          {comp.rank}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
