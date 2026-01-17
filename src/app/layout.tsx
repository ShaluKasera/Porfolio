import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesHero from "@/components/ParticleBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Shalu Kumari | Full Stack Web Developer",
  description: "Passionate Full Stack Web Developer specializing in creating modern web applications, brands, and digital experiences. Explore my portfolio of innovative projects.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio", "Shalu Kumari"],
  authors: [{ name: "Shalu Kumari" }],
  creator: "Shalu Kumari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Shalu Kumari Portfolio",
    title: "Shalu Kumari | Full Stack Web Developer",
    description: "Passionate Full Stack Web Developer specializing in creating modern web applications, brands, and digital experiences.",
    images: [
      {
        url: "/human.png",
        width: 1200,
        height: 630,
        alt: "Shalu Kumari Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalu Kumari | Full Stack Web Developer",
    description: "Passionate Full Stack Web Developer specializing in creating modern web applications, brands, and digital experiences.",
    images: ["/human.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative bg-gray-900 text-white`}>
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10">
          <ParticlesHero />
        </div>

        {/* Page content */}
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
