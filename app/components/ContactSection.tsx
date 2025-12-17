"use client";

import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "J.stowers1@icloud.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto mb-24 text-center">
      
      {/* Header */}
      <h2 className="font-mono text-sm text-neutral-500 mb-8 uppercase tracking-widest">
        Initialize Handshake
      </h2>

      {/* The Terminal Window */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-2xl text-left font-mono text-sm relative group">
        
        {/* Window Controls */}
        <div className="bg-neutral-800/50 p-3 flex gap-2 border-b border-neutral-800">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          <div className="ml-auto text-xs text-neutral-500">bash — 80x24</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-10 space-y-6">
          
          {/* Line 1: The Command */}
          <div>
            <span className="text-green-500">guest@portfolio:~$</span>
            <span className="text-neutral-300 ml-2">./connect_to_developer.sh</span>
          </div>

          {/* Line 2: The Output */}
          <div className="text-neutral-400 pl-4 border-l-2 border-neutral-800">
            <p className="mb-2">Executing connection protocol...</p>
            <p className="mb-4 text-accent-cyan">Connection established.</p>
            
            <p className="mb-6">Select a communication channel:</p>

            {/* The Links Grid */}
            <div className="grid gap-4 md:grid-cols-2 max-w-lg">
              
              {/* 1. Email with Copy Logic */}
              <button 
                onClick={handleCopy}
                className="flex items-center gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-accent-purple transition-all group/btn text-left"
              >
                <span className="text-xl">📧</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-neutral-500 uppercase">Email Address</div>
                  <div className="text-neutral-200 truncate">{email}</div>
                </div>
                <div className="text-xs text-accent-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity">
                  {copied ? "[COPIED]" : "[COPY]"}
                </div>
              </button>

              {/* 2. LinkedIn */}
              <a 
                href="https://linkedin.com/in/johnathan-stowers-04698a321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500/50 transition-colors text-left"
              >
                <span className="text-xl">💼</span>
                <div>
                  <div className="text-xs text-neutral-500 uppercase">LinkedIn</div>
                  <div className="text-neutral-200">/in/johnathan-stowers-04698a321</div>
                </div>
              </a>

              {/* 3. GitHub */}
              <a 
                href="https://github.com/Jstowers1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 transition-colors text-left"
              >
                <span className="text-xl">🐙</span>
                <div>
                  <div className="text-xs text-neutral-500 uppercase">GitHub</div>
                  <div className="text-neutral-200">@Jstowers1</div>
                </div>
              </a>
              
              {/* 4. Resume Download (Optional) */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="flex items-center gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500/50 transition-colors text-left"
              >
                <span className="text-xl">📄</span>
                <div>
                  <div className="text-xs text-neutral-500 uppercase">Resume</div>
                  <div className="text-neutral-200">Download .pdf</div>
                </div>
              </a>

            </div>
          </div>

          {/* Line 3: Cursor */}
          <div>
            <span className="text-green-500">guest@portfolio:~$</span>
            <span className="inline-block w-2.5 h-5 bg-neutral-500 ml-2 animate-pulse align-middle"></span>
          </div>

        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="mt-12 text-neutral-600 text-xs font-mono">
        <p>Built with Next.js and Tailwind.</p>
        <p className="mt-2">{new Date().getFullYear()} Johnathan Stowers. All systems nominal.</p>
      </div>

    </div>
  );
}
