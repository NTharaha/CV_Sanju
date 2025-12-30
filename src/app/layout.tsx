import "./globals.css";
import type { Metadata } from "next";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.headline,
  metadataBase: new URL("https://example.com"),
  keywords: [
    "façade engineering",
    "techno-commercial",
    "construction",
    "architecture",
    "engineering",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-zinc-950 antialiased dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
