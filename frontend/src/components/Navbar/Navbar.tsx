function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold text-white">
          FounderAI 🚀
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">About</a>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;