import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 h-[55px] bg-gray-100">
      <div className="flex space-x-6">
        <Link to="/" className="text-green-500 text-lg font-bold hover:text-gray-400 transition">Home</Link>
        <Link to="/news" className="text-green-500 text-lg font-bold hover:text-gray-400 transition">News</Link>

        <Link to="/contact" className="text-green-500 text-lg font-bold hover:text-gray-400 transition">Contact</Link>
      </div>
      <input 
        type="text" 
        placeholder="Search" 
        className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </header>
  );
}
