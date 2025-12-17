"use client";

import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  codeSnippet: string;
  uiContent: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const [view, setView] = useState<"ui" | "code">("ui");

  return (
    <div className="border border-neutral-700 bg-neutral-800 rounded-lg overflow-hidden mb-12 shadow-xl">
      <div className="flex justify-between items-center p-4 border-b border-neutral-700 bg-neutral-900">
        <h3 className="font-mono text-xl font-bold text-neutral-100">
          {project.title}
        </h3>
        
        <div className="flex text-sm font-mono border border-neutral-600 rounded overflow-hidden">
          <button
            onClick={() => setView("ui")}
            className={`px-3 py-1 transition-colors ${
              view === "ui" 
                ? "bg-accent-purple text-white" // Using the CSS-defined color
                : "bg-neutral-900 text-neutral-400 hover:text-white"
            }`}
          >
            UI View
          </button>
          <button
            onClick={() => setView("code")}
            className={`px-3 py-1 transition-colors ${
              view === "code" 
                ? "bg-accent-cyan text-neutral-900 font-bold" // Using the CSS-defined color
                : "bg-neutral-900 text-neutral-400 hover:text-white"
            }`}
          >
            Code View
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-6 border-r border-neutral-700">
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

        <div className="bg-black p-6 font-mono text-sm overflow-x-auto min-h-[250px] flex items-center">
          {view === "ui" ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-accent-purple border-2 border-dashed border-neutral-800 rounded p-4">
              <span className="text-4xl mb-2">🖥️</span>
              <p>{project.uiContent}</p>
            </div>
          ) : (
            <pre className="text-neutral-300 w-full">
              <code>{project.codeSnippet}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
