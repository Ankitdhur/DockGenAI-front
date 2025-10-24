"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DockGenForm from "@/components/DockGenForm";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />

      <Header />
      <HeroSection />
      <DockGenForm />

      <footer className="text-center text-gray-400 text-sm mt-20 mb-6 opacity-70">
        © {new Date().getFullYear()} DockGen AI. All rights reserved.
      </footer>
    </main>
  );
}
