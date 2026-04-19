import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Navbar only after loading */}
      {!loading && <Navbar />}

      {/* Loader */}
      {loading && <Loader />}

      {/* Routes */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}