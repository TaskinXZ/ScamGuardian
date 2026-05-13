import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">
          Detect scams before they steal from you.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          AI-powered protection for SMS, WhatsApp, Email, and Calls.
        </p>

        <div className="flex gap-4">
          <Link
            href="/scan"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Scan Message
          </Link>

          <Link
            href="/signup"
            className="border px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </main>
    </>
  );
}