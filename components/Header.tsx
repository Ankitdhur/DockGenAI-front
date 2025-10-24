export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-6xl mx-auto px-6 py-5">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
        DockGen AI
      </h1>

      <nav className="hidden md:flex space-x-8 text-gray-300 text-sm">
        <a href="#features" className="hover:text-white transition">Features</a>
        <a href="#demo" className="hover:text-white transition">Demo</a>
        <a href="#about" className="hover:text-white transition">About</a>
      </nav>
    </header>
  );
}
