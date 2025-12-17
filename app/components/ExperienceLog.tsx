interface Job {
  id: string;    
  date: string;
  role: string;
  company: string;
  description: string[];
}

const history: Job[] = [
  {
    id: "HEAD",
    date: "September 2025 - Present",
    role: "AI Student Researcher",
    company: "Mercer University",
    description: [
      "Developed and trained Convulutional Neural Networks to analyze data measured by the Icecube Neutrino Observatory.",
      "Developed Data Processing streams using NumPy to create simulation data for more accurate CNNs.",
      "Reworked and reimplemented legacy code for modern day solutions."
    ]
  },
  {
    id: "v2.0",
    date: "August 2024 - Present",
    role: "Reading Tutor",
    company: "America Reads America Counts",
    description: [
      "Facillitated weekly reading sessions for children aged 6-8.",
      "Utilized interactive and innovative techniques to retain attention while improving comprehension."
    ]
  },
  {
    id: "v3.0",
    date: "August 2023 - May 2024",
    role: "Full Stack Developer Intern",
    company: "Caring Senior Service HQ",
    description: [
      "Developed and integrated a custom, mobile first LMS.",
      "Utilized NodeJS, Bootstrap5, and MySQL to create a full-stack application from the ground up.",
      "Worked directly under the CEO to improve company systems."
    ]
  },
];

export default function ExperienceLog() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {history.map((job, index) => (
        <div key={job.id} className="flex gap-6 group">
          
          {/* LEFT COLUMN: The "Git Info" */}
          <div className="flex flex-col items-end w-24 flex-shrink-0 pt-1">
            <span className="font-mono text-xs text-accent-cyan opacity-70 group-hover:opacity-100 transition-opacity">
              {job.id}
            </span>
            <span className="font-mono text-sm text-neutral-400 font-bold">
              {job.date}
            </span>
          </div>

          {/* CENTER COLUMN: The Timeline Line & Dot */}
          <div className="relative flex flex-col items-center">
            {/* The Dot */}
            <div className={`w-3 h-3 rounded-full z-10 mt-2 border-2 border-neutral-900
              ${index === 0 ? "bg-accent-purple animate-pulse" : "bg-neutral-600 group-hover:bg-neutral-400"}`} 
            />
            {/* The Line (Only show if not the last item) */}
            {index !== history.length - 1 && (
              <div className="w-px h-full bg-neutral-800 absolute top-4 bottom-0" />
            )}
          </div>

          {/* RIGHT COLUMN: The Content */}
          <div className="pb-12 pt-0.5">
            <h3 className="text-xl font-bold text-neutral-200 group-hover:text-accent-purple transition-colors">
              {job.role}
            </h3>
            <p className="font-mono text-sm text-neutral-500 mb-4">
              @ {job.company}
            </p>
            <ul className="space-y-2 text-neutral-400 text-sm">
              {job.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent-cyan font-mono">{">"}</span>
                  {item}
              </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
