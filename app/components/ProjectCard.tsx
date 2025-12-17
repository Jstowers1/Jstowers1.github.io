"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  codeSnippet: string;
  image: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const [view, setView] = useState<"ui" | "code">("ui");

  return (
    <div className="border border-neutral-700 bg-neutral-800 rounded-lg overflow-hidden mb-12 shadow-xl">
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-neutral-700 bg-neutral-900">
        <h3 className="font-mono text-xl font-bold text-neutral-100">
          {project.title}
        </h3>
        
        <div className="flex text-sm font-mono border border-neutral-600 rounded overflow-hidden">
          <button
            onClick={() => setView("ui")}
            className={`px-3 py-1 transition-colors ${
              view === "ui" 
                ? "bg-accent-purple text-white" 
                : "bg-neutral-900 text-neutral-400 hover:text-white"
            }`}
          >
            UI View
          </button>
          <button
            onClick={() => setView("code")}
            className={`px-3 py-1 transition-colors ${
              view === "code" 
                ? "bg-accent-cyan text-neutral-900 font-bold" 
                : "bg-neutral-900 text-neutral-400 hover:text-white"
            }`}
          >
            Code View
          </button>
        </div>
      </div>

      {/* THE GRID CONTAINER */}
      <div className="grid md:grid-cols-2 gap-0">
        
        {/* LEFT COLUMN (The Driver)
            This column has no height restrictions. It grows as much as the text needs.
            Because it is a grid sibling, it stretches the Right Column to match. */}
        <div className="p-6 border-r border-neutral-700 flex flex-col justify-center">
          <p className="font-sans text-neutral-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-mono bg-neutral-700 rounded text-accent-cyan">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (The Follower) 
            1. 'relative': Establishes the boundary for absolute children.
            2. 'min-h-[300px]': Ensures the card is at least 300px tall, 
               even if the description on the left is only one sentence.
        */}
        <div className="bg-black relative min-h-[300px] w-full">
          
          {view === "ui" ? (
            // === IMAGE VIEW ===
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            // === CODE VIEW ===
            // 'absolute inset-0' pins this div to the top/bottom/left/right 
            // of the Right Column. It CANNOT grow the parent.
            // 'overflow-auto' enables the scrollbar.
            <div className="absolute inset-0 overflow-auto p-6 custom-scrollbar">
              <pre className="text-neutral-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
