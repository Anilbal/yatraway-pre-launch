import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative z-40">
      <div className="relative h-15 w-26">
        <Image
          src="/logo.png"
          alt="YatraWay Nepal Travels & Tours Logo"
          fill
          className="object-contain "
          priority
          sizes="200px"
        />
      </div>

      <div className="flex items-center gap-4 text-slate-400">
        <a
          href="#"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-900 rounded-full border border-slate-800"
        >
          <FaInstagram className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-900 rounded-full border border-slate-800"
        >
          <FaTiktok className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-900 rounded-full border border-slate-800"
        >
          <FaYoutube className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-900 rounded-full border border-slate-800"
        >
          <FaFacebook className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
