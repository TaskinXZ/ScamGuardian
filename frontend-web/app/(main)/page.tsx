"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,255,0.12),transparent_35%)]" />

      {/* NAVBAR */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wider">
          SCAM<span className="text-green-400">GUARDIAN</span>
        </h1>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            AI Threat Intelligence
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Detect scams
            <br />
            before they
            <span className="text-green-400"> destroy trust.</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">
            ScamGuardian uses AI-powered analysis to detect phishing,
            fraud, malicious links, fake giveaways, and social engineering
            attacks across SMS, WhatsApp, Email, and Calls.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/scan"
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Start Scanning
            </Link>

            <Link
              href="/report"
              className="border border-white/15 px-8 py-4 rounded-xl hover:bg-white/5 transition"
            >
              Report Scam
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            <div>
              <h2 className="text-3xl font-bold text-green-400">98%</h2>
              <p className="text-gray-500 text-sm mt-1">
                Detection Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
              <p className="text-gray-500 text-sm mt-1">
                Threat Monitoring
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-400">10K+</h2>
              <p className="text-gray-500 text-sm mt-1">
                Scans Completed
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_60px_rgba(0,255,170,0.08)]">

            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-400 text-sm">
                  LIVE ANALYSIS
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  Threat Scanner
                </h2>
              </div>

              <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* FAKE CHAT */}
            <div className="space-y-4">

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 text-sm">
                  ⚠ Suspicious Message Detected
                </p>

                <p className="text-gray-300 text-sm mt-2">
                  “Your account has been suspended. Verify immediately:
                  bit.ly/security-check”
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">
                    Risk Score
                  </span>

                  <span className="text-red-400 font-bold">
                    89%
                  </span>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "89%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-xs">
                    CATEGORY
                  </p>

                  <h3 className="text-lg font-bold mt-2 text-red-400">
                    Phishing
                  </h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-xs">
                    CONFIDENCE
                  </p>

                  <h3 className="text-lg font-bold mt-2 text-green-400">
                    High
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* GLOW */}
          <div className="absolute -z-10 inset-0 blur-3xl bg-green-400/10 rounded-full" />
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2026 ScamGuardian. AI Scam Detection Platform.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>

            <Link href="/alerts" className="hover:text-white">
              Alerts
            </Link>

            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}