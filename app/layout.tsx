import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LearnReact - Learn React with interactive tutorials and quizzes",
  description: "A comprehensive guide to React hooks and best practices with interactive tutorials and quizzes by Crestace. Learn React with interactive tutorials and quizzes",
  keywords: ["React", "React hooks", "React tutorials", "React quizzes", "React best practices", "React examples", "React tutorials", "React quizzes", "React best practices", "React examples"],
  authors: [{ name: "Crestace", url: "https://crestace.com" }],
  creator: "Crestace",
  publisher: "Crestace",
  openGraph: {
    title: "LearnReact - Learn React with interactive tutorials and quizzes",
    description: "A comprehensive guide to React hooks and best practices with interactive tutorials and quizzes by Crestace. Learn React with interactive tutorials and quizzes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
