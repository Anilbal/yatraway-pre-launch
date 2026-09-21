"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "When is the platform launching?",
    answer:
      "We're putting the finishing touches on the platform and launching in Summer 2026. Join the waitlist to be among the first to know when we're live.",
  },
  {
    question: "What kind of travel experiences will you offer?",
    answer:
      "From adventure and culture to food, nature, wellness, romance, and discovery — we'll help create experiences based around what inspires you.",
  },
  {
    question: "Will trips be personalized?",
    answer:
      "Yes. Our goal is to move beyond one-size-fits-all tours. Tell us what you love, and we'll help shape an experience around your interests, travel style, and preferences.",
  },
  {
    question: "Can I join before the platform launches?",
    answer:
      "Absolutely. Enter your email above to join our early-access list. We'll keep you updated on the launch and give you a first look at what's coming.",
  },
  {
    question: "Will you offer international tours?",
    answer:
      "We're building the platform with travelers and destinations around the world in mind. More details about destinations and experiences will be announced closer to launch.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "The easiest way is to join the notification list. We'll send important launch updates, early access information, and announcements directly to your inbox.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_35%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 mb-5 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

            <span className="text-xs sm:text-sm font-medium text-cyan-300">
              Everything You Need To Know
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Frequently Asked
            <br />
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Curious about what we're building? Here are some answers to the
            questions we're hearing most often.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-slate-900 border-blue-500/40 shadow-lg shadow-blue-500/5"
                    : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 text-left px-5 sm:px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-semibold transition-colors ${
                      isOpen ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-500/10 border-blue-400/30 text-blue-400 rotate-180"
                        : "bg-slate-800 border-slate-700 text-slate-400"
                    }`}
                  >
                    <FaChevronDown className="w-3 h-3" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-0">
                      <div className="h-px bg-slate-800 mb-4" />

                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">Still have questions?</p>

          <a
            href="#vip-form"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
