import type { Metadata } from "next";
import { IBM_Plex_Mono, SUSE_Mono  } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight:["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

const suseMono = SUSE_Mono({
  weight:["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jstowers1.github.io"),
  title: "Johnathan Stowers Personal Portfolio",
  description: "Computer Science student at Mercer University. AI researcher, competitive programmer, and full-stack developer specializing in C++, Python, and secure systems.",
  openGraph: {
    title: "Johnathan Stowers Personal Portfolio",
    description: "Computer Science student at Mercer University. AI researcher, competitive programmer, and full-stack developer.",
    type: "website",
    url: "https://jstowers1.github.io",
    images: [{ url: "/researchPoster.png", width: 1600, height: 1200, alt: "Johnathan Stowers Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnathan Stowers Personal Portfolio",
    description: "Computer Science student at Mercer University. AI researcher, competitive programmer, and full-stack developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${suseMono.variable} bg-neutral-900 text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
