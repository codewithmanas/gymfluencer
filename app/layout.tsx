import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Inter, Inter_Tight } from "next/font/google";
import "../styles/tailwind.css";
import "../styles/globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymFluencer",
  description: "GymFluencer - Track Your Fitness Journey",
  icons: {
    icon: [
      { url: "/assets/images/asset27.svg", type: "image/svg+xml" },
      { url: "/assets/images/asset27.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/assets/images/asset27.svg",
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
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable} ${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
