import { useEffect, useRef } from "react";

export default function InkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let drops = [];

    const createDrop = (x, y) => {
      drops.push({
        x,
        y,
        r: Math.random() * 6 + 2,
        alpha: 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, w, h);

      drops.forEach((d, i) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,0,0,${d.alpha})`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();

        d.x += d.dx;
        d.y += d.dy;
        d.alpha -= 0.01;
        d.r *= 0.98;

        if (d.alpha <= 0) drops.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMove = (e) => {
      createDrop(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}