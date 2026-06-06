import { useState } from "react";
import type { QuestionResult } from "../types";

interface Props {
  score: number;
  total: number;
  results: QuestionResult[];
  onRestart: () => void;
}

function getGrade(score: number, total: number) {
  const pct = score / total;
  if (pct === 1)
    return { emoji: "🏆", label: "Perfetto!", color: "text-yellow-400", desc: "Hai risposto correttamente a tutte le domande. Sei un vero maestro del lessico!" };
  if (pct >= 0.8)
    return { emoji: "🎉", label: "Ottimo!", color: "text-emerald-400", desc: "Conosci molto bene le parole difficili della lingua italiana. Complimenti!" };
  if (pct >= 0.6)
    return { emoji: "👍", label: "Buono!", color: "text-blue-400", desc: "Un risultato solido. Continua ad ampliare il tuo vocabolario!" };
  if (pct >= 0.4)
    return { emoji: "📚", label: "Sufficiente", color: "text-orange-400", desc: "Ci sei quasi! Riprova per migliorare la tua conoscenza lessicale." };
  return { emoji: "💪", label: "Da migliorare", color: "text-red-400", desc: "Non arrenderti, il lessico si impara con la pratica. Riprova!" };
}

export default function ResultScreen({ score, total, results, onRestart }: Props) {
  const [showReview, setShowReview] = useState(false);
  const grade = getGrade(score, total);
  const pct = Math.round((score / total) * 100);
  const wrongs = results.filter(r => r.status !== "correct");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 animate-slide-up">
      <div className="w-full max-w-md text-center">
        <div className="text-7xl mb-4 animate-pop">{grade.emoji}</div>
        <h2 className={`text-3xl font-extrabold mb-1 ${grade.color}`}>{grade.label}</h2>
        <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">{grade.desc}</p>

        {/* Score card */}
        <div className="glass rounded-3xl p-6 mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="font-display text-6xl font-bold text-white tabular-nums">{score}</span>
            <span className="text-2xl text-slate-500 font-light">/ {total}</span>
          </div>
          <p className="text-slate-400 text-sm">{pct}% di risposte corrette</p>

          <div className="mt-5 flex justify-center gap-2 flex-wrap">
            {results.map((r, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  r.status === "correct"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : r.status === "timeout"
                    ? "bg-slate-600/30 text-slate-400 border border-slate-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                {r.status === "correct" ? "✓" : r.status === "timeout" ? "⏱" : "✗"}
              </div>
            ))}
          </div>

          <div className="mt-5 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="glass rounded-2xl p-4 mb-4 flex justify-around">
          <div className="text-center">
            <p className="text-emerald-400 text-2xl font-bold tabular-nums">
              {results.filter(r => r.status === "correct").length}
            </p>
            <p className="text-slate-500 text-xs mt-0.5">Corrette</p>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-red-400 text-2xl font-bold tabular-nums">
              {results.filter(r => r.status === "wrong").length}
            </p>
            <p className="text-slate-500 text-xs mt-0.5">Errate</p>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-slate-400 text-2xl font-bold tabular-nums">
              {results.filter(r => r.status === "timeout").length}
            </p>
            <p className="text-slate-500 text-xs mt-0.5">Scadute</p>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-violet-400 text-2xl font-bold tabular-nums">{pct}%</p>
            <p className="text-slate-500 text-xs mt-0.5">Precisione</p>
          </div>
        </div>

        {/* Word review — educational section */}
        {wrongs.length > 0 && (
          <div className="glass rounded-2xl mb-4 overflow-hidden">
            <button
              onClick={() => setShowReview(v => !v)}
              className="w-full px-5 py-3.5 flex items-center justify-between text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span>📖 Parole da ripassare ({wrongs.length})</span>
              <span className="text-slate-500 text-xs">{showReview ? "▲" : "▼"}</span>
            </button>
            {showReview && (
              <div className="border-t border-white/8 divide-y divide-white/5">
                {wrongs.map((r, i) => (
                  <div key={i} className="px-5 py-4 text-left">
                    <p className="font-display text-xl font-bold text-white mb-1.5">{r.word}</p>
                    {r.userAnswer ? (
                      <p className="text-red-400/70 text-xs line-through mb-1.5 leading-relaxed">
                        {r.userAnswer}
                      </p>
                    ) : (
                      <p className="text-slate-500 text-xs mb-1.5">⏱ Tempo scaduto</p>
                    )}
                    <p className="text-emerald-400 text-sm leading-relaxed">{r.correctAnswer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <button
          onClick={onRestart}
          className="w-full py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-purple-900/40 transition-all duration-200 active:scale-95 hover:scale-[1.02]"
        >
          Gioca ancora →
        </button>
        <p className="text-slate-600 text-xs mt-3">Le domande vengono scelte casualmente ogni partita</p>
      </div>
    </div>
  );
}
