import Image from "next/image";

export default function ResearchPoster() {
  return (
    <div className="max-w-5xl mx-auto mb-32">
     

      <div className="border border-neutral-700 bg-neutral-800/50 rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row group">
        
        {/* LEFT SIDE: The Scrollable Viewer */}
        <div className="md:w-2/5 relative bg-neutral-900 min-h-[400px] border-b md:border-b-0 md:border-r border-neutral-700">
          
          {/* The Scrollable Area: overflow-auto enables the scrollbar */}
          <div className="absolute inset-0 overflow-auto custom-scrollbar">
            
            {/* h-full: Forces the image to touch the top and bottom edges (no black bars).
              w-auto: Scales the width proportionally based on the height.
              max-w-none: CRITICAL. Prevents the parent container from squishing the image,
                          forcing it to overflow horizontally instead.
            */}
            <Image 
              src="/researchPoster.png" 
              alt="IceTop-CNN Research Poster"
              width={1600} 
              height={1200} 
              className="h-full w-auto max-w-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-4 left-4 pointer-events-none z-10">
            <div className="font-mono text-[10px] text-accent-cyan bg-neutral-900/90 px-2 py-1 rounded border border-neutral-700 backdrop-blur-sm shadow-lg shadow-black/50">
              FIGURE 1.0: SCROLLABLE POSTER
            </div>
          </div>
          
        </div>

        {/* RIGHT SIDE: The Abstract & Data */}
        <div className="md:w-3/5 p-8 flex flex-col justify-center">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></span>
            <span className="font-mono text-xs text-accent-purple uppercase tracking-widest">
              Poster Presentation
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 font-sans mb-2">
            Bridging The Gap: Developing Data-Preprocessing Pipelines to Enable Advanced Cosmic-Ray Reconstruction with IceTop-CNN
          </h3>
          
          <p className="font-mono text-sm text-neutral-500 mb-6">
            Presented at Mercer University BEARDay, Spring 2026
          </p>

          <div className="bg-neutral-900/50 border-l-2 border-neutral-600 p-4 mb-6">
            <h4 className="font-mono text-xs text-neutral-400 mb-2 uppercase">System Abstract:</h4>
            <p className="text-neutral-300 text-sm leading-relaxed font-sans">
              The IceCube Neutrino Observatory detects high-energy cosmic rays by capturing the cascading particle showers created by these events. To understand the data captured by IceCube, IceTop-CNN, a convolutional neural network, is being developed here at Mercer to estimate the energy, trajectory, and mass composition of cosmic rays. However, only one dataset is currently being used to train and assess IceTop-CNN’s outputs. Access to additional simulation would allow us to vastly expand our research capability by exploring different snow depths, higher-energy events, and other temporal changes. We developed a new data pipeline for the preprocessing of this additional simulation to enable its usage in IceTop-CNN. This work breaks down a major barrier that this project has faced, and allows future IceTop-CNN research to explore new topics of simulated data, bringing us one step closer to working with real-world data.
            </p>
          </div>

          {/* Tags & Actions */}
          <div className="mt-auto pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-neutral-700">
            <div className="flex flex-wrap gap-2">
              {["Python", "NumPy", "Neural Networks", "Data Pipelines"].map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-neutral-800 rounded border border-neutral-700 text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Download/View Button */}
            <a 
              href="/researchPosterPDF.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-accent-cyan transition-all rounded font-mono text-xs text-neutral-200 group/btn"
            >
              <span>./view_full</span>
              <span className="text-accent-cyan group-hover/btn:translate-y-[-2px] transition-transform">↓</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
