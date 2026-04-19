import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 pt-24 pb-14 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          Ink is not design
        </h1>

        <h2 className="text-2xl md:text-4xl mt-2 text-white/80">
          It is Identity
        </h2>

        <p className="mt-6 text-white/50 max-w-xl mx-auto text-sm md:text-base">
          We design tattoos that live on your skin forever — bold, minimal, or realistic.
        </p>
      </section>

      {/* IMAGE STYLE STRIP (tattoo vibe) */}
      <section className="px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {["Dragon", "Skull", "Tribal", "Koi"].map((item, i) => (
            <div
              key={i}
              className="h-28 md:h-40 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition"
            >
              <p className="text-white/70 text-sm">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Our Philosophy
        </h2>

        <p className="text-white/60 leading-relaxed text-sm md:text-base">
          Every tattoo starts with emotion — pain, memory, strength or identity.
          We convert that feeling into ink that fits your body perfectly.
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 grid grid-cols-3 gap-3 max-w-4xl mx-auto text-center">

        <div className="border border-white/10 rounded-xl p-4">
          <h3 className="text-xl md:text-3xl">10K+</h3>
          <p className="text-white/40 text-xs md:text-sm">Designs</p>
        </div>

        <div className="border border-white/10 rounded-xl p-4">
          <h3 className="text-xl md:text-3xl">5+</h3>
          <p className="text-white/40 text-xs md:text-sm">Years</p>
        </div>

        <div className="border border-white/10 rounded-xl p-4">
          <h3 className="text-xl md:text-3xl">100%</h3>
          <p className="text-white/40 text-xs md:text-sm">Custom</p>
        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-light">
          Ready for your ink?
        </h2>

        <p className="text-white/50 mt-2 text-sm">
          Let’s design something powerful together.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full active:scale-95 transition"
        >
          Book Appointment
        </Link>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}