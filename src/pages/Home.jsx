import Hero from "../components/Hero";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/Footer";
import InkCursor from "../components/ui/InkCursor";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-black text-white overflow-x-hidden relative">

      <InkCursor />

      <Hero />

      <Gallery />

      {/* CTA */}
      <section className="py-28 text-center px-4">

        <h2 className="text-2xl md:text-5xl font-light text-white/70">
          Ink is not design. <br />
          It is identity.
        </h2>

        {/* BUTTON → CONTACT PAGE */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-10 px-6 py-3 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition"
        >
          Book Appointment
        </button>

      </section>

      <Footer />

    </main>
  );
}