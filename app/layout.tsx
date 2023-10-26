import React from "react";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { orbitron, exo2 } from "./fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indie games, reviewed for you!",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="flex flex-col px-4 py-2 min-h-screen bg-orange-50">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center text-xs border-t py-3 text-slate-500">
          Game data and images courstey of{" "}
          <a
            href="https://www.rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
