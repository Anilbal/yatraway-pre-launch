"use client";
import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 38,
    seconds: 52,
  });

  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }

        if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        }

        if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }

        if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16 overflow-hidden bg-slate-950">
      {/* Blue background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.10),transparent_35%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 mb-6 shadow-xl">
          <span className="flex h-2 w-2 relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>

          <span className="text-xs sm:text-sm font-medium text-blue-300">
            Platform Launching Summer 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          Unveil The Extraordinary.
          <br />
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            Your Next Adventure Awaits.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Tell us what moves you — adventure, culture, food, nature, wellness,
          romance, discovery — and we'll build an experience around you.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto mb-12 p-3 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-2xl">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
            >
              <span className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight">
                {String(item.value).padStart(2, "0")}
              </span>

              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div id="vip-form" className="max-w-md mx-auto">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 p-2 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
            >
              <FaBell className="w-4 h-4" />
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
