import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "../styles/tailwind.css";
import "../styles/globals.css";

// This is for reference purpose

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   display: "swap",
//   adjustFontFallback: false,
//   fallback: ["Helvetica", "Arial", "sans-serif"],
//   preload: true,
// });

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gymfluencer",
  description: "Gymfluencer - Track Your Fitness Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
