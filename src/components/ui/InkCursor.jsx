import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InkCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[999]"
    />
  );
}