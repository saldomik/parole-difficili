import { useEffect, useRef, useState } from "react";
import type { Question, AnswerStatus } from "../types";
import ProgressBar from "./ProgressBar";

interface Props {
  questions: Question[];
  onFinish: (score: number, results: AnswerStatus[]) => void;
}

type OptionState = "idle" | "selected-correct" | "selected-wrong" | "reveal-correct";

export default function QuizScreen({ questions, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [optionStates, setOptionStates] = useState<Record<string, OptionState>>({});
  const [results, setResults] = useState<AnswerStatus[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const [cardKey, setCardKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = questions[index];

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleSelect(option: string) {
    if (selected !== null || transitioning) return;

    setSelected(option);
    const isCorrect = option === question.correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    const newResults: AnswerStatus[] = [...results, isCorrect ? "correct" : "wrong"];

    const states: Record<string, OptionState> = {};
    question.options.forEach((o) => {
      if (o === question.correctAnswer) {
        states[o] = "reveal-correct";
      } else if (o === option && !isCorrect) {
        states[o] = "selected-wrong";
      }
    });
    setOptionStates(states);

    timerRef.current = setTimeout(() => {
      if (index + 1 >= questions.length) {
        onFinish(newScore, newResults);
      } else {
        setTransitioning(true);
        setTimeout(() => {
          setScore(newScore);
          setResults(newResults);
          setIndex(index + 1);
          setSelected(null);
          setOptionStates({});
          setCardKey((k) => k + 1);
          setTransitioning(false);
        }, 250);
      }
    }, 1400);
  }

  function getOptionClass(option: string): string {
    const state = optionStates[option] ?? "idle";
    const base =
      "w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 font-medium text-sm leading-relaxed ";

    switch (state) {
      case "reveal-correct":
        return base + "border-emerald-500 bg-emerald-500/15 text-emerald-300 scale-[1.01]";
      case "selected-wrong":
        return base + "border-red-500 bg-red-500/15 text-red-300 animate-shake";
      default:
        if (selected !== null) {
          return base + "border-slate-700/40 bg-slate-800/30 text-slate-500 cursor-not-allowed";
        }
        return (
          base +
          "border-slate-700 bg-slate-800/50 text-slate-200 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white cursor-pointer active:scale-[0.98]"
        );
    }
  }

  function getOptionIcon(option: string): string {
    const state = optionStates[option] ?? "idle";
    if (state === "reveal-correct") return "✓";
    if (state === "selected-wrong") return "✗";
    return "";
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProgressBar current={index + 1} total={questions.length} score={score} />

      <div
        key={cardKey}
        className={`flex-1 flex flex-col items-center justify-center px-4 py-6 transition-opacity duration-250 ${transitioning ? "opacity-0" : "opacity-100 animate-slide-up"}`}
      >
        <div className="w-full max-w-lg">
          <div className="glass rounded-3xl p-7 mb-6 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-3">
              Che cosa significa?
            </p>
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
              {question.word}
            </h2>
          </div>

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
            <p className="text-center text-slate-500 text-xs mt-5 animate-fade-in">
              Prossima domanda in un momento…
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
