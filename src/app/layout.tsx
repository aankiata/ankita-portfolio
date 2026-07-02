import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankita Kumari — Backend & Cloud Engineer",
  description:
    "Portfolio of Ankita Kumari — Backend & Cloud Engineer specializing in Java, Spring Boot, AWS microservices, and CI/CD automation.",
  keywords: [
    "Backend Engineer",
    "Cloud Engineer",
    "Java",
    "Spring Boot",
    "AWS",
    "Microservices",
    "DevOps",
  ],
  openGraph: {
    title: "Ankita Kumari — Backend & Cloud Engineer",
    description:
      "Building scalable cloud-native systems with Java, Spring Boot, and AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="relative min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
