import type { AnswerStatus } from "../types";

interface Props {
  score: number;
  total: number;
  results: AnswerStatus[];
  onRestart: () => void;
}

function getGrade(score: number, total: number) {
  const pct = score / total;
  if (pct === 1) return { emoji: "🏆", label: "Perfetto!", color: "text-yellow-400", desc: "Hai risposto correttamente a tutte le domande. Sei un vero maestro del lessico!" };
  if (pct >= 0.8) return { emoji: "🎉", label: "Ottimo!", color: "text-emerald-400", desc: "Conosci molto bene le parole difficili della lingua italiana. Complimenti!" };
  if (pct >= 0.6) return { emoji: "👍", label: "Buono!", color: "text-blue-400", desc: "Un risultato solido. Continua ad ampliare il tuo vocabolario!" };
  if (pct >= 0.4) return { emoji: "📚", label: "Sufficiente", color: "text-orange-400", desc: "Ci sei quasi! Riprova per migliorare la tua conoscenza lessicale." };
  return { emoji: "💪", label: "Da migliorare", color: "text-red-400", desc: "Non arrenderti, il lessico si impara con la pratica. Riprova!" };
}

export default function ResultScreen({ score, total, results, onRestart }: Props) {
  const grade = getGrade(score, total);
  const pct = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-slide-up">
      <div className="w-full max-w-md text-center">
        <div className="text-7xl mb-4">{grade.emoji}</div>
        <h2 className={`text-3xl font-extrabold mb-1 ${grade.color}`}>{grade.label}</h2>
        <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">{grade.desc}</p>

        <div className="glass rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-5xl font-extrabold text-white">{score}</span>
            <span className="text-2xl text-slate-500 font-light">/ {total}</span>
          </div>
          <p className="text-slate-400 text-sm">{pct}% di risposte corrette</p>

          <div className="mt-5 flex justify-center gap-2">
            {results.map((r, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  r === "correct"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                {r === "correct" ? "✓" : "✗"}
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

        <div className="glass rounded-2xl p-4 mb-6 flex justify-around">
          <div className="text-center">
            <p className="text-emerald-400 text-2xl font-bold">{results.filter((r) => r === "correct").length}</p>
            <p className="text-slate-500 text-xs mt-0.5">Corrette</p>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-red-400 text-2xl font-bold">{results.filter((r) => r === "wrong").length}</p>
            <p className="text-slate-500 text-xs mt-0.5">Errate</p>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-violet-400 text-2xl font-bold">{pct}%</p>
            <p className="text-slate-500 text-xs mt-0.5">Precisione</p>
          </div>
        </div>

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
