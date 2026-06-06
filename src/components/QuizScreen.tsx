import { useState, useEffect } from "react";
import type { Question, QuestionResult } from "../types";
import ProgressBar from "./ProgressBar";
import { playCorrectSound } from "../utils/sounds";

interface Props {
  questions: Question[];
  onFinish: (score: number, results: QuestionResult[]) => void;
}

type OptionState = "idle" | "selected-correct" | "selected-wrong" | "reveal-correct";

const QUESTION_TIME = 60;

const STREAK_MILESTONES: Record<number, string> = {
  3: "🔥 Tripletta!",
  5: "⚡ Cinque di fila!",
  7: "🎯 Sette su sette!",
  10: "👑 Imbattibile!",
};

const CONFETTI_COLORS = [
  "#a78bfa", "#7c3aed", "#c4b5fd", "#fbbf24",
  "#34d399", "#60a5fa", "#f472b6", "#fb923c",
];

export default function QuizScreen({ questions, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [optionStates, setOptionStates] = useState<Record<string, OptionState>>({});
  const [transitioning, setTransitioning] = useState(false);
  const [cardKey, setCardKey] = useState(0);
  const [pendingScore, setPendingScore] = useState(0);
  const [pendingResults, setPendingResults] = useState<QuestionResult[]>([]);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [milestoneMsg, setMilestoneMsg] = useState<string | null>(null);
  const [showBurst, setShowBurst] = useState(false);

  const question = questions[index];
  const isLast = index + 1 >= questions.length;

  // Reset burst animation on each new question
  useEffect(() => {
    setShowBurst(false);
  }, [cardKey]);

  // Countdown — pauses when user has answered
  useEffect(() => {
    if (selected !== null || timeLeft <= 0) return;
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, selected]);

  // Timeout — fires when timer hits 0 with no answer
  // setTimeLeft(QUESTION_TIME) in handleNext ensures timeLeft is 20
  // before selected becomes null, so this never fires spuriously on advance
  useEffect(() => {
    if (timeLeft !== 0 || selected !== null) return;
    const states: Record<string, OptionState> = {};
    question.options.forEach(o => {
      if (o === question.correctAnswer) states[o] = "reveal-correct";
    });
    setOptionStates(states);
    setSelected("__timeout__");
    setStreak(0);
    setPendingScore(score);
    setPendingResults(prev => [
      ...prev,
      { word: question.word, correctAnswer: question.correctAnswer, userAnswer: null, status: "timeout" },
    ]);
  }, [timeLeft, selected, question, score]);

  // Streak milestone popup
  useEffect(() => {
    if (!STREAK_MILESTONES[streak]) return;
    setMilestoneMsg(STREAK_MILESTONES[streak]);
    const id = setTimeout(() => setMilestoneMsg(null), 1800);
    return () => clearTimeout(id);
  }, [streak]);

  function handleSelect(option: string) {
    if (selected !== null || transitioning) return;

    setSelected(option);
    const isCorrect = option === question.correctAnswer;

    const states: Record<string, OptionState> = {};
    question.options.forEach(o => {
      if (o === question.correctAnswer) states[o] = "reveal-correct";
      else if (o === option && !isCorrect) states[o] = "selected-wrong";
    });
    setOptionStates(states);
    setStreak(isCorrect ? streak + 1 : 0);
    setPendingScore(isCorrect ? score + 1 : score);
    setPendingResults(prev => [
      ...prev,
      {
        word: question.word,
        correctAnswer: question.correctAnswer,
        userAnswer: option,
        status: isCorrect ? "correct" : "wrong",
      },
    ]);
    if (isCorrect) {
      setShowBurst(true);
      playCorrectSound();
    }
  }

  function handleNext() {
    if (isLast) {
      onFinish(pendingScore, pendingResults);
    } else {
      // Reset timer BEFORE selected becomes null — prevents spurious timeout
      setTimeLeft(QUESTION_TIME);
      setTransitioning(true);
      setTimeout(() => {
        setScore(pendingScore);
        setIndex(i => i + 1);
        setSelected(null);
        setOptionStates({});
        setCardKey(k => k + 1);
        setTransitioning(false);
      }, 250);
    }
  }

  function getOptionClass(option: string): string {
    const state = optionStates[option] ?? "idle";
    const base = "w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 font-medium text-sm leading-relaxed ";
    switch (state) {
      case "reveal-correct":
        return base + "border-emerald-500 bg-emerald-500/15 text-emerald-300 scale-[1.01] shadow-lg shadow-emerald-500/10";
      case "selected-wrong":
        return base + "border-red-500 bg-red-500/15 text-red-300 animate-shake";
      default:
        if (selected !== null) {
          return base + "border-slate-700/40 bg-slate-800/20 text-slate-500 cursor-not-allowed";
        }
        return base + "border-slate-700 bg-slate-800/50 text-slate-200 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white cursor-pointer active:scale-[0.98]";
    }
  }

  function getOptionIcon(option: string): string {
    const state = optionStates[option] ?? "idle";
    if (state === "reveal-correct") return "✓";
    if (state === "selected-wrong") return "✗";
    return "";
  }

  const timerPct = (timeLeft / QUESTION_TIME) * 100;
  const timerGradient = timeLeft <= 5
    ? "from-red-500 to-red-400"
    : timeLeft <= 10
    ? "from-orange-500 to-amber-400"
    : "from-violet-500 to-purple-400";
  const timerTextColor = timeLeft <= 5 ? "text-red-400" : timeLeft <= 10 ? "text-orange-400" : "text-slate-500";

  return (
    <div className="flex flex-col min-h-screen">
      <ProgressBar current={index + 1} total={questions.length} score={score} streak={streak} />

      {/* Timer bar */}
      <div className="w-full max-w-lg mx-auto px-4 mt-1.5">
        <div className="h-1 w-full bg-slate-700/40 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${timerGradient} rounded-full transition-all duration-1000 ease-linear`}
            style={{ width: `${timerPct}%` }}
          />
        </div>
        <div className="flex justify-end mt-0.5">
          <span className={`text-xs font-mono font-semibold tabular-nums ${timerTextColor}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Streak milestone toast */}
      {milestoneMsg && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="animate-milestone-in glass-strong px-6 py-3 rounded-2xl text-white font-bold text-lg shadow-2xl border border-violet-400/30">
            {milestoneMsg}
          </div>
        </div>
      )}

      <div
        key={cardKey}
        className={`flex-1 flex flex-col items-center justify-center px-4 py-6 transition-opacity duration-250 ${
          transitioning ? "opacity-0" : "opacity-100 animate-slide-up"
        }`}
      >
        <div className="w-full max-w-lg">
          {/* Word card with confetti burst */}
          <div className="glass rounded-3xl p-7 mb-6 text-center relative overflow-hidden">
            {showBurst && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {CONFETTI_COLORS.map((color, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full animate-confetti-fly"
                      style={{
                        backgroundColor: color,
                        animationDelay: `${i * 35}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-3">
              Che cosa significa?
            </p>
            <h2 className="font-display text-5xl font-bold text-white tracking-tight leading-tight">
              {question.word}
            </h2>
          </div>

          {/* Answer options */}
          <div className="space-y-3">
            {question.options.map((option, i) => {
              const icon = getOptionIcon(option);
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(option)}
                  className={getOptionClass(option)}
                >
                  <span className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold mt-0.5">
                      {icon || String.fromCharCode(65 + i)}
                    </span>
                    <span>{option}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-5 animate-fade-in">
              {selected === "__timeout__" && (
                <p className="text-center text-slate-400 text-sm mb-3">
                  ⏱ Tempo scaduto — ecco la risposta corretta
                </p>
              )}
              <button
                onClick={handleNext}
                className="w-full py-4 rounded-2xl font-semibold text-sm bg-violet-600 hover:bg-violet-500 active:scale-[0.98] transition-all duration-150 text-white shadow-lg shadow-violet-900/30"
              >
                {isLast ? "Vedi risultati" : "Prossima domanda →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
