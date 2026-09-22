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

      <div className="flex items-center gap-4 text-slate-400">
        <Link
          href="https://www.facebook.com/yatraway.nepal.travels"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
        >
          <FaFacebook className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.instagram.com/yatraway_nepal_travel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
        >
          <FaInstagram className="w-5 h-5" />
        </Link>
        <Link
          href="https://tiktok.com/@yatrawaynepaltravelstours"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
        >
          <FaTiktok className="w-5 h-5" />
        </Link>
        <Link
          href="https://youtube.com/@yatrawaynepal"
          className="hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full border border-slate-700"
        >
          <FaYoutube className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
}
