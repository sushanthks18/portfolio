import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sushanth K S | ECE Engineer | Embedded Systems & IoT Portfolio",
  description: "Professional portfolio of Sushanth K S, 3rd Year ECE student at SIT specializing in Embedded Systems, IoT, AI, and Full-stack Development. Explore projects in smart farming, AI irrigation, and embedded systems.",
  keywords: [
    "Sushanth K S",
    "ECE Engineer",
    "Embedded Systems",
    "IoT",
    "Arduino",
    "ESP32",
    "Full-stack Developer",
    "Machine Learning",
    "Electronics Engineering",
    "SIT Tumkur",
  ],
  authors: [{ name: "Sushanth K S" }],
  creator: "Sushanth K S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sushanthks.vercel.app",
    title: "Sushanth K S | ECE Engineer & Developer",
    description: "Portfolio showcasing embedded systems, IoT, and software development projects",
    siteName: "Sushanth K S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushanth K S | ECE Engineer & Developer",
    description: "Portfolio showcasing embedded systems, IoT, and software development projects",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
