interface Cert {
  name: string;
  issuer: string;
  date: string;
  id?: string; // Optional: Credential ID
  icon: string; // Emoji or Icon component
}

const certs: Cert[] = [
  {
    name: "Certiport IT Specialist: Java",
    issuer: "Pearson IT",
    date: "2024",
    id: "wmN5N-48Ju",
    icon: "☕",
  },
  {
    name: "Introduction to Programming Using Python",
    issuer: "Microsoft",
    date: "2023",
    id: "98-381 MTA",
    icon: "🐍",
  },
];

export default function Certifications() {
  return (
    <div className="max-w-3xl mx-auto mb-24">
      <h2 className="font-mono text-sm text-neutral-500 mb-8 uppercase tracking-widest border-b border-neutral-800 pb-2">
        Verified Credentials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, index) => (
          <div 
            key={index}
            className="group flex items-center gap-4 p-4 rounded border border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 transition-colors"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 flex items-center justify-center bg-neutral-800 rounded text-2xl group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-neutral-200 text-sm truncate">
                {cert.name}
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-1">
                {cert.issuer} • <span className="text-neutral-400">{cert.date}</span>
              </p>
              {cert.id && (
                <p className="text-[10px] text-neutral-600 font-mono mt-1 uppercase tracking-wide">
                  ID: {cert.id}
                </p>
              )}
            </div>

            {/* Valid Checkmark */}
            {cert.date !== "Pending" && (
              <div className="text-green-500/50 group-hover:text-green-400 transition-colors" title="Verified">
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
