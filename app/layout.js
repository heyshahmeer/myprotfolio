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
    default: "Shahmeer Shahid | Senior Platform Engineer & DevSecOps Expert",
    template: "%s | Shahmeer Shahid"
  },
  description: "Senior Platform Engineer and DevSecOps Specialist architecting secure AI infrastructure, cloud-native platforms, and high-performance automated pipelines. Explore my technical portfolio.",
  keywords: [
    "Shahmeer Shahid",
    "Platform Engineer",
    "DevSecOps Specialist",
    "Cloud Security Expert",
    "AI Infrastructure",
    "Kubernetes Engineering",
    "Secure CI/CD Pipelines",
    "Full-stack Security",
    "Cybersecurity Portfolio"
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
    title: "Shahmeer Shahid | Platform Engineer & DevSecOps Specialist",
    description: "Architecting the future of secure, autonomous AI infrastructure. See my latest projects and engineering strategies.",
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
    title: "Shahmeer Shahid | Platform Engineer & DevSecOps Specialist",
    description: "Securing the software factory from signed commits to verified deployment artifacts.",
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
    "jobTitle": "Senior Platform Engineer & DevSecOps Specialist",
    "description": "Senior Platform Engineer architecting secure AI infrastructure and high-performance cloud-native platforms.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    "skills": ["Platform Engineering", "DevSecOps", "Cloud Security", "Kubernetes", "AI Infrastructure", "Next.js"],
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