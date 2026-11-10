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
    role: "ML Student Researcher",
    company: "Mercer University",
    description: [
      "Engineered high-throughput CNN data pipelines using Python and NumPy processing large-scale cosmic ray simulation datasets from the Nobel-Winning IceCube Neutrino Observatory (5,160 optical sensors across 1km cubed of Antarctic Ice.",
      "Architechted a distributed extraction pipeline on a HTCondor compute cluster using IceCube's I3Tray framework, transforming gigabytes of raw detector siimulations into 10x10x8 hexagonal-to-square spatial tensors for model training.",
      "Built automated batch submission scripts for an HTCondor compute cluster, eliminating manul ajob orchestration accross distributed compute nodes.",
      "Created training and assessment scripts to produce new Convolutional Neural Networks to do state-of-the-art research on snow-depth with datasets over six million events big.",
    ]
  },
  {
    id: "v2.0",
    date: "August 2024 - May 2026",
    role: "Reading Tutor",
    company: "America Reads America Counts",
    description: [
      "Facilitated weekly reading sessions for children aged 6-8.",
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
      "Worked directly under the CEO to improve company systems.",
      "Designed entire systems using Figma."
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
