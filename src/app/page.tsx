import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="w-full bg-gradient-to-r from-[#0b1020] to-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 w-full items-center">

            <div className="w-1/4 flex items-center">
              <svg
                className="h-7 w-7 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 12c4-6 12-6 16 0-4 6-12 6-16 0z" />
              </svg>
            </div>

            <nav className="w-2/4 hidden md:flex justify-center gap-8 text-sm font-medium text-gray-200">
              <a href="#" className="hover:text-white transition">Início</a>
              <a href="#" className="hover:text-white transition">Sobre mim</a>
              <a href="#" className="hover:text-white transition">Contato</a>
            </nav>

            <div className="w-1/4 flex justify-end">
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition"
              >
                Log in →
              </a>
            </div>

          </div>
        </div>
      </header>
      <section>
        
      </section>
    </div>
  );
}
