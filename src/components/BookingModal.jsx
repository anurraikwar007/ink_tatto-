import { useState } from "react";
import gsap from "gsap";

export default function BookingModal({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    idea: "",
  });

  const submit = () => {
    const msg = `Name: ${form.name}%0APhone: ${form.phone}%0AIdea: ${form.idea}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Book Tattoo</h2>

        <input
          placeholder="Name"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Your Idea"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, idea: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-black text-white py-2 rounded"
        >
          Send on WhatsApp
        </button>

        <button
          onClick={() => setOpen(false)}
          className="mt-2 text-sm text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}