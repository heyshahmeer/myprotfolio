import { Geist, Geist_Mono, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";

import Navbar from "./nav/page";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://shahmeerhere.vercel.app'),
  title: {
    default: "Shahmeer Shahid | Full-Stack Developer & AI Automation Builder",
    template: "%s | Shahmeer Shahid"
  },
  description: "Full-stack developer and AI automation builder. I build voice agents, workflow automation, and full-stack apps for real clients. Explore my projects and technical background.",
  keywords: [
    "Shahmeer Shahid",
    "Full-Stack Developer",
    "AI Automation Developer",
    "n8n Automation",
    "RAG Development",
    "Next.js Developer",
    "Voice AI Agents",
    "Freelance Developer Pakistan"
  ],
  authors: [{ name: "Shahmeer Shahid", url: "https://shahmeerhere.vercel.app" }],
  creator: "Shahmeer Shahid",
  publisher: "Shahmeer Shahid",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahmeerhere.vercel.app",
    title: "Shahmeer Shahid | Full-Stack Developer & AI Automation Builder",
    description: "Building AI automation systems and full-stack apps for real clients. See my latest projects.",
    siteName: "Shahmeer Shahid Professional Portfolio",
    images: [
      {
        url: "/hero_office.png",
        width: 1200,
        height: 630,
        alt: "Shahmeer Shahid - Professional Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahmeer Shahid | Full-Stack Developer & AI Automation Builder",
    description: "Building AI automation systems and full-stack apps for real clients.",
    images: ["/hero_office.png"],
    creator: "@heyshahmeer",
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shahmeer Shahid",
    "url": "https://shahmeerhere.vercel.app",
    "image": "https://shahmeerhere.vercel.app/hero_office.png",
    "jobTitle": "Full-Stack Developer & AI Automation Builder",
    "description": "Full-stack developer building AI automation systems, voice agents, and web applications for freelance clients.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    "skills": ["Full-Stack Development", "AI Automation", "n8n", "LangChain", "RAG Systems", "Next.js", "React", "Node.js"],
    "sameAs": [
      "https://github.com/heyshahmeer",
      "https://linkedin.com/in/shahmeershahid",
      "https://instagram.com/heyshahmeer_",
      "https://www.fiverr.com/shahmeerhere",
      "https://www.upwork.com/freelancers/~01cf0ddf9b8b985b15"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1a1a1c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${dancingScript.variable} antialiased bg-black text-white font-sans`}
      >
        <SplashCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}