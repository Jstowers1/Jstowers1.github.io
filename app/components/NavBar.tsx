"use client";

import { useState, useEffect } from "react";

const links = [
  { id: "top", label: "~/home" },
  { id: "tech", label: "stack" },
  { id: "experience", label: "exp" },
  { id: "education", label: "edu" },
  { id: "research", label: "research" },
  { id: "compete", label: "compete" },
  { id: "projects", label: "projects" },
];

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-3">
        <a href="#top" className="font-mono text-sm text-accent-cyan hover:text-white transition-colors">
          johnathan@portfolio
        </a>
        <div className="flex gap-4 font-mono text-xs text-neutral-400">
          {links.slice(1).map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-accent-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
