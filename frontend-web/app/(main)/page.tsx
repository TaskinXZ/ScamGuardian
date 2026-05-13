import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Detect scams before they
          <span className="text-red-500"> steal your money</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          AI-powered protection for SMS, WhatsApp, emails, and calls.
          Instantly analyze suspicious messages and stay safe.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/scan"
            className="bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800"
          >
            Scan a Message
          </Link>

          <Link
            href="/signup"
            className="border px-6 py-3 rounded-xl text-lg hover:bg-gray-100"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">10,000+</h3>
          <p className="text-gray-600">Scans completed</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">95%</h3>
          <p className="text-gray-600">Detection accuracy</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">Real-time</h3>
          <p className="text-gray-600">Threat alerts</p>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <textarea
            placeholder="Paste a suspicious message..."
            className="w-full border p-4 rounded-lg mb-4"
          />

          <button className="w-full bg-black text-white py-3 rounded-lg">
            Scan Now
          </button>
        </div>
      </section>
    </div>
  );
}
