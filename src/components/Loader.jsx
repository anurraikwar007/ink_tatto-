import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  const loaderRef = useRef(null);
  const strokeRef = useRef(null);
  const glowRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // 🎬 entry animation (fade + slight zoom)
    tl.fromTo(
      loaderRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );

    // ✍️ ink stroke draw
    gsap.fromTo(
      strokeRef.current,
      { strokeDashoffset: 700 },
      {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "power2.out",
      }
    );

    // ⚡ subtle glow flicker (tattoo ink vibe)
    gsap.to(glowRef.current, {
      opacity: 0.4,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "sine.inOut",
    });

    // 📊 smooth progress (non-linear like real loading)
    let val = 0;

    const interval = setInterval(() => {
      const increment = Math.random() * 6 + 1; // smooth irregular
      val += increment;

      if (val > 100) val = 100;
      setProgress(Math.floor(val));

      if (val === 100) {
        clearInterval(interval);

        // ⚡ exit animation (cinematic vanish)
        gsap.to(loaderRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: onFinish,
        });
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-[#0b0b0b] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* PAPER / INK BACKGROUND FEEL */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* GLOW BEHIND LOGO */}
      <div
        ref={glowRef}
        className="absolute w-60 h-60 bg-green-500 blur-[120px] opacity-20"
      />

      {/* SVG STROKE */}
      <svg width="240" height="120" viewBox="0 0 200 100" className="relative z-10">
        <path
          ref={strokeRef}
          d="M20 70 Q50 10 80 70 T140 70 T180 70"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
          strokeDasharray="700"
          strokeDashoffset="700"
          strokeLinecap="round"
        />
      </svg>

      {/* TEXT */}
      <h1 className="mt-6 text-3xl tracking-[0.4em] font-light z-10">
        INK STUDIO
      </h1>

      <p className="text-white/40 text-sm mt-2 z-10">
        Crafting Emotion in Ink
      </p>

      {/* PROGRESS */}
      <p className="mt-8 text-sm tracking-widest text-green-400 z-10">
        {progress}%
      </p>

      {/* PROGRESS BAR */}
      <div className="w-64 h-[2px] bg-white/10 mt-4 overflow-hidden z-10">
        <div
          className="h-full bg-green-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}