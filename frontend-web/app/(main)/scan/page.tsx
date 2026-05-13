"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ScanPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  // =========================
  // AI ANALYSIS ENGINE (3E PRO)
  // =========================
  const analyzeMessage = (message: string) => {
    const text = message.toLowerCase();

    let score = 0;
    let reasons: string[] = [];
    let detectedWords: string[] = [];

    const rules = [
      {
        keywords: ["urgent", "immediately", "now", "asap"],
        reason: "Urgency manipulation detected",
        weight: 20,
        category: "Phishing",
      },
      {
        keywords: ["won", "prize", "reward", "gift"],
        reason: "Too-good-to-be-true offer detected",
        weight: 15,
        category: "Fraud",
      },
      {
        keywords: ["verify", "login", "account", "password"],
        reason: "Sensitive information request detected",
        weight: 20,
        category: "Phishing",
      },
      {
        keywords: ["http", "bit.ly", "tinyurl", ".com"],
        reason: "Suspicious link detected",
        weight: 15,
        category: "Spam",
      },
      {
        keywords: ["suspended", "blocked", "limited"],
        reason: "Threat-based language detected",
        weight: 15,
        category: "Phishing",
      },
    ];

    let categoryCount: Record<string, number> = {};

    rules.forEach((rule) => {
      rule.keywords.forEach((word) => {
        if (text.includes(word)) {
          score += rule.weight;

          detectedWords.push(word);

          if (!reasons.includes(rule.reason)) {
            reasons.push(rule.reason);
          }

          categoryCount[rule.category] =
            (categoryCount[rule.category] || 0) + 1;
        }
      });
    });

    if (score > 100) score = 100;

    // determine dominant category
    let type = "Safe";

    let maxCategory = Object.entries(categoryCount).sort(
      (a, b) => b[1] - a[1]
    )[0];

    if (maxCategory) {
      type = maxCategory[0];
    }

    // confidence logic
    let confidence = "Low";

    if (score > 70) confidence = "High";
    else if (score > 40) confidence = "Medium";

    return {
      score,
      type,
      reasons,
      confidence,
      detectedWords,
    };
  };

  // =========================
  // SCAN BUTTON
  // =========================
  const handleScan = () => {
    if (!text) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const analysis = analyzeMessage(text);
      setResult(analysis);
      setLoading(false);
    }, 1500);
  };

  // =========================
  // DYNAMIC COLORS
  // =========================
  const getSeverityColor = () => {
    if (!result) return "text-green-400";

    if (result.score > 70) return "text-red-400";
    if (result.score > 40) return "text-yellow-400";

    return "text-green-400";
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold">
          AI SCAN <span className="text-green-400">SYSTEM</span>
        </h1>

        <p className="text-gray-400 mt-2">
          Cyber Threat Detection Engine
        </p>
      </div>

      {/* INPUT CARD */}
      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">

        <textarea
          className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400"
          placeholder="Paste suspicious message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleScan}
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-400 text-black font-bold hover:opacity-90"
        >
          INITIATE SCAN
        </button>
      </div>

      {/* LOADING STATE */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mt-10 text-center"
        >
          <p className="text-green-400 animate-pulse tracking-widest">
            ANALYZING MESSAGE...
          </p>

          <div className="relative w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
            <motion.div
              className="absolute h-full w-1/3 bg-gradient-to-r from-green-400 to-cyan-400 blur-sm"
              animate={{ x: ["-100%", "300%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
            />
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Running AI threat detection model...
          </p>
        </motion.div>
      )}

      {/* RESULT STATE */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6"
          >

            {/* RISK CARD */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-red-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,0,0,0.15)]"
            >
              <h2 className={`${getSeverityColor()} text-xl font-bold`}>
                {result.type}
              </h2>

              <p className="text-gray-400 mt-2">
                Threat patterns detected in submitted message.
              </p>

              {/* REASONS */}
              <div className="mt-4 space-y-2 text-sm">
                {result.reasons.map((r: string, i: number) => (
                  <p key={i} className="flex gap-2">
                    <span className="text-red-400">⚠</span>
                    <span>{r}</span>
                  </p>
                ))}
              </div>

              {/* DETECTED WORDS */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">
                  Detected Risk Keywords
                </p>

                <div className="flex flex-wrap gap-2">
                  {result.detectedWords.map(
                    (word: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs"
                      >
                        {word}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* SCORE CARD */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            >
              <h2 className="text-xl font-bold">
                THREAT SCORE
              </h2>

              {/* SCORE */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`text-6xl font-bold mt-4 ${getSeverityColor()}`}
              >
                {result.score}%Scam Guardian Project Part 4 — Supabase Backend + Authentication + Database
              </motion.div>

              {/* RISK BAR */}
              <div className="w-full bg-white/10 h-3 rounded-full mt-6 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${result.score}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <p className="text-gray-400 mt-4 text-sm">
                Confidence: {result.confidence}
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}