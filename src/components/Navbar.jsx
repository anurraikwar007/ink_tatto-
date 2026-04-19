import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "relative text-sm font-medium text-gray-600 hover:text-black transition group";

  const underline =
    "absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
      ${
        scrolled
          ? "h-14 bg-white/90 backdrop-blur-2xl shadow-sm border-b border-black/5"
          : "h-16 bg-white/70 backdrop-blur-xl border-b border-gray-200"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300
        ${scrolled ? "h-14" : "h-16"}`}
      >
        {/* Logo */}
        <div className="font-semibold tracking-wide text-black">
          Ink Studio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li className={linkClass}>
            <Link to="/">
              Home <span className={underline}></span>
            </Link>
          </li>

          <li className={linkClass}>
            <Link to="/about">
              About <span className={underline}></span>
            </Link>
          </li>

          <li className={linkClass}>
            <Link to="/contact">
              Contact <span className={underline}></span>
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block relative px-5 py-2 text-sm font-medium text-black border border-black/20 rounded-full overflow-hidden group transition">
          <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          <span className="relative group-hover:text-white transition">
            Book Now
          </span>
        </button>

        {/* Hamburger Button (ANIMATED) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-200 ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4 text-sm text-gray-600">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <button className="mt-2 px-4 py-2 border border-black/20 rounded-full active:scale-95 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}