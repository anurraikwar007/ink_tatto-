import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import t1 from "../../assets/Blackwork Design.jpg";
import t2 from "../../assets/Dark Gothic ink.jpg";
import t3 from "../../assets/Dragon Sleeve.jpg";
import t4 from "../../assets/Geometric Pattern.jpg";
import t5 from "../../assets/Japanese Koi.jpg";
import t6 from "../../assets/Minimal Line Art.jpg";
import t7 from "../../assets/Realism Portrait.jpg";
import t8 from "../../assets/Tribal Shoulder.jpg";
import t9 from "../../assets/Neo Traditional.jpg";
import t10 from "../../assets/Skull & Roses.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: t1, title: "Dragon Sleeve" },
  { src: t2, title: "Skull & Roses" },
  { src: t3, title: "Minimal Line Art" },
  { src: t4, title: "Tribal Shoulder" },
  { src: t5, title: "Realism Portrait" },
  { src: t6, title: "Japanese Koi" },
  { src: t7, title: "Geometric Pattern" },
  { src: t8, title: "Dark Gothic Ink" },
  { src: t9, title: "Neo Traditional" },
  { src: t10, title: "Blackwork Design" },
];

export default function Gallery({ setOpen }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const total = images.length;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",

        // 📱 MOBILE FIX (FAST EXPERIENCE)
        end: `+=${total * (isMobile ? 280 : 600)}`,

        scrub: 0.6,
        pin: true,

        onUpdate: (self) => {
          const index = Math.round(self.progress * (total - 1));
          setActive(index);
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {images.map((item, i) => (
          <div
            key={i}
            className={`absolute w-[85%] sm:w-[60%] md:w-[40%] transition-all duration-700 ${
              active === i
                ? "opacity-100 scale-100 z-30"
                : "opacity-0 scale-110 z-10"
            }`}
          >

            {/* IMAGE */}
            <img
              src={item.src}
              alt={item.title}
              className={`w-full h-full object-cover rounded-xl transition-all duration-700 ${
                active === i
                  ? "grayscale-0 brightness-100 contrast-125"
                  : "grayscale brightness-75"
              }`}
            />

            {/* TITLE */}
            <div className="absolute bottom-6 left-6 text-white text-2xl md:text-4xl font-light">
              {item.title}
            </div>

            {/* BOOKING CTA */}
            {i === images.length - 1 && active === i && (
              <button
                onClick={() => setOpen(true)}
                className="absolute bottom-10 right-10 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
              >
                Book Appointment
              </button>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}