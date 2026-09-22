import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 w-full px-4 sm:px-10 lg:px-20 xl:px-30 py-4 flex items-center justify-between z-40 bg-transparent">
      <div className="relative h-15 w-26">
        <Image
          src="/logo.png"
          alt="YatraWay Nepal Travels & Tours Logo"
          fill
          className="object-contain cursor-pointer"
          priority
          sizes="200px"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4 text-slate-400">
        <a
          href="https://www.facebook.com/yatraway.nepal.travels"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          target="_blank"
        >
          <FaFacebook className="w-3 h-3 md:h-5 md:w-5" />
        </a>
        <a
          href="https://www.instagram.com/yatraway_nepal_travel/"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          target="_blank"
        >
          <FaInstagram className="w-3 h-3 md:h-5 md:w-5" />
        </a>
        <a
          href="https://www.tiktok.com/@yatraway.nepal.travel"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          target="_blank"
        >
          <FaTiktok className="w-3 h-3 md:h-5 md:w-5" />
        </a>
        <a
          href="https://www.youtube.com/@YatraWayNepalTravelTours"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          target="_blank"
        >
          <FaYoutube className="w-3 h-3 md:h-5 md:w-5" />
        </a>
      </div>
    </nav>
  );
}
