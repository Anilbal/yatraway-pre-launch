import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 w-full px-4 sm:px-10 lg:px-20 xl:px-30 text-slate-400 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

        <p className="text-xs text-slate-500">
          &copy; 2026 Wanderlust Travel Agency Inc. All rights reserved.
          Crafting unforgettable journeys.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400">
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          >
            <FaTiktok className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          >
            <FaYoutube className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
          >
            <FaFacebook className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
