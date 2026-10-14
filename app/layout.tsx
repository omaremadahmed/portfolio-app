import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "Omar Emad Ahmed — Nine Domains. One Strategic Mindset.",
  description:
    "Multidisciplinary technology portfolio of Omar Emad Ahmed, Business Information Systems (BIS) student, spanning nine parallel domains and CS50 verified coursework.",
  keywords: [
    "Omar Emad Ahmed",
    "عمر عماد أحمد",
    "Portfolio",
    "BIS",
    "Business Information Systems",
    "CS50",
    "CS50x",
    "Software Engineering",
    "Web Development",
    "Networking",
    "Cloud Computing",
    "DevOps",
    "Hardware Systems",
    "UI/UX Design",
    "Next Mind.AI",
    "House Platform",
    "Bezrah",
    "Enterprise Platform"
  ],
  authors: [{ name: "Omar Emad Ahmed" }],
  openGraph: {
    title: "Omar Emad Ahmed — Nine Domains. One Strategic Mindset.",
    description:
      "Multidisciplinary technology portfolio spanning nine parallel domains with a chess-inspired engineering strategy.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body style={{ backgroundColor: "#000000", color: "#FFFFFF", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
