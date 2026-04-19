import { Link } from "react-router-dom";
import InkSmokeBackground from "./InkSmokeBackground";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      <InkSmokeBackground />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">

        {/* BRAND */}
        <div className="text-center mb-20">
          <h1 className="text-[10vw] leading-none font-extralight tracking-tight">
            INK
          </h1>
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase mt-3">
            Tattoo Studio
          </p>
        </div>

        {/* NAV GRID FIXED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

          {/* NAVIGATION */}
          <div className="flex flex-col items-center md:items-start">

            <p className="text-white/30 text-xs mb-6 tracking-widest uppercase">
              Navigation
            </p>

            {/* FIXED ALIGNMENT */}
            <div className="flex flex-col gap-4 text-lg font-light">

              <Link
                to="/"
                className="text-white/60 hover:text-white transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-white/60 hover:text-white transition duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-white/60 hover:text-white transition duration-300"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* STUDIO */}
          <div>
            <p className="text-white/30 text-xs mb-6 tracking-widest uppercase">
              Studio
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Custom tattoo design inspired by identity, emotion and minimal aesthetics.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-white/30 text-xs mb-6 tracking-widest uppercase">
              Contact
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Pune, India <br />
              inkstudio@email.com
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between text-xs text-white/30 gap-3">

          <p>© {new Date().getFullYear()} Ink Studio</p>

          <p className="tracking-widest">
            Designed with ink & silence
          </p>

        </div>

      </div>
    </footer>
  );
}