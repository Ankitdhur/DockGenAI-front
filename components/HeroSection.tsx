export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center mt-16 px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent animate-pulse">
        Build Docker Images with AI ⚡
      </h2>
      <p className="text-gray-300 mt-4 max-w-2xl">
        Paste your GitHub repo and let DockGen AI detect, generate, and build your Docker image — 
        automatically using GPT-powered intelligence.
      </p>
    </section>
  );
}
