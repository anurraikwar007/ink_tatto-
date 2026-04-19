import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-900">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}