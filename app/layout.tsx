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
  title: "Johnathan Stowers  Personal Portfolio",
  description: "Built with React and Next.js",
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
