"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl tracking-tight">
          Scam Guardian
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/scan" className="hover:text-gray-600">
            Scan
          </Link>
          <Link href="/alerts" className="hover:text-gray-600">
            Alerts
          </Link>
          <Link href="/pricing" className="hover:text-gray-600">
            Pricing
          </Link>

          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}