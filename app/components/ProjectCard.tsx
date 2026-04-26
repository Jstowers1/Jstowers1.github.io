"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  codeSnippet: string;
  image: string;
  link?: {
    url: string;
    label: string;
  };
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

      <div className="grid md:grid-cols-2 gap-0">
        
        {/* Left Column: Description */}
        <div className="p-6 border-r border-neutral-700 flex flex-col justify-center">
          <p className="font-sans text-neutral-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* OPTIONAL LINK RENDER */}
          {project.link && (
            <div className="mb-4">
              <a 
                href={project.link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan hover:text-white border border-accent-cyan/30 hover:border-accent-cyan bg-accent-cyan/10 px-3 py-1.5 rounded transition-colors"
              >
                {project.link.label}
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-mono bg-neutral-700 rounded text-accent-cyan">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: The View Window */}
        {/* KEY CHANGE 1: We set a fixed height (h-80 or h-96). 
            This forces the box to stay this size no matter what. */}
        <div className="bg-black relative h-80 md:h-96 w-full">
          
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
            // KEY CHANGE 2: 'absolute inset-0' pins the text container to the edges 
            // of the parent. 'overflow-auto' adds the scrollbar.
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
