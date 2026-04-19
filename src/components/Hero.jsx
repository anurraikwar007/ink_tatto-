import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const wrapRef = useRef(null);
  const inkRef = useRef(null);
  const lineRef = useRef(null);
  const subRef = useRef(null);

  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 🧠 INITIAL STATE (hidden from RIGHT)
      gsap.set(inkRef.current, {
        xPercent: 100,
      });

      gsap.set(lineRef.current, {
        xPercent: 100,
        opacity: 1,
      });

      // 🌊 BACKGROUND
      gsap.from([layer1.current, layer2.current, layer3.current], {
        opacity: 0,
        scale: 1.15,
        duration: 2,
        ease: "power2.out",
      });

      // 🎬 TEXT ENTRY
      tl.from(wrapRef.current.querySelectorAll(".word"), {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        ease: "power4.out",
      })

        .to({}, { duration: 0.2 })

        // ✍️ RIGHT → LEFT REVEAL (SYNCED LINE + TEXT)
        .to([inkRef.current, lineRef.current], {
          xPercent: 0,
          duration: 1.6,
          ease: "power2.inOut",
        })

        // 👋 AFTER COMPLETE → LINE DISAPPEAR
        .to(lineRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        }, "+=0.1")

        // 📝 SUBTITLE
        .from(subRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6");

      // 🌊 PARALLAX
      const move = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;

        gsap.to(layer1.current, { x: x * 0.2, y: y * 0.2, duration: 1.2 });
        gsap.to(layer2.current, { x: x * 0.4, y: y * 0.4, duration: 1.2 });
        gsap.to(layer3.current, { x: x * 0.6, y: y * 0.6, duration: 1.2 });
      };

      window.addEventListener("mousemove", move, { passive: true });

      return () => window.removeEventListener("mousemove", move);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-[#050608]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a,#050608_60%,#000)]" />

      {/* BACKGROUND */}
      <div ref={layer1} className="absolute w-[600px] h-[600px] bg-emerald-500 opacity-10 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
      <div ref={layer2} className="absolute w-[500px] h-[500px] bg-green-400 opacity-10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
      <div ref={layer3} className="absolute w-[400px] h-[400px] bg-lime-300 opacity-10 blur-[180px] rounded-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

      <div ref={wrapRef} className="text-center z-10 max-w-4xl">

        <h1 className="text-[10vw] font-bold flex justify-center gap-4 flex-wrap">

          {/* ✍️ INK REVEAL */}
          <span className="relative inline-block overflow-hidden">

            <span
              ref={inkRef}
              className="inline-block whitespace-nowrap"
            >
              Ink
            </span>

            {/* 🔥 RIGHT SIDE LINE */}
            <span
              ref={lineRef}
              className="absolute right-0 top-0 w-[2px] h-full bg-green-400"
            />
          </span>

          <span className="word">Your</span>
          <span className="word">Emotion</span>
        </h1>

        <p ref={subRef} className="text-gray-300 mt-6 text-lg tracking-wide">
          Minimal. Permanent. Personal.
        </p>

      </div>
    </section>
  );
}