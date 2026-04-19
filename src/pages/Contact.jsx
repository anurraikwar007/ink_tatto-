import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi, I want a tattoo design:%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

    // WhatsApp redirect (premium studio flow)
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-xl">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-light text-center mb-2">
          Book Your Ink
        </h1>

        <p className="text-center text-white/50 mb-10 text-sm">
          Tell us your idea — we’ll turn it into art.
        </p>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5 backdrop-blur-md"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 p-3 rounded-lg outline-none focus:border-white/40 transition"
            required
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 p-3 rounded-lg outline-none focus:border-white/40 transition"
            required
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Describe your tattoo idea..."
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-black/40 border border-white/10 p-3 rounded-lg outline-none focus:border-white/40 transition resize-none"
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-medium hover:scale-[1.02] active:scale-95 transition"
          >
            Send via WhatsApp
          </button>

        </form>

        {/* NOTE */}
        <p className="text-center text-white/30 text-xs mt-6">
          We reply within 24 hours ⚡
        </p>

      </div>
    </main>
  );
}