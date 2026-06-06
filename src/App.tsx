import { useState, useCallback } from "react";
import type { GameStatus, QuestionResult } from "./types";
import { buildQuestions } from "./utils/quiz";
import SplashScreen from "./components/SplashScreen";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import wordsData from "./data/words.json";
import type { Question } from "./types";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [status, setStatus] = useState<GameStatus>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);

  const startGame = useCallback(() => {
    setQuestions(buildQuestions(wordsData.words, 10));
    setScore(0);
    setResults([]);
    setStatus("playing");
  }, []);

  const finishGame = useCallback((finalScore: number, finalResults: QuestionResult[]) => {
    setScore(finalScore);
    setResults(finalResults);
    setStatus("finished");
  }, []);

  const restart = useCallback(() => {
    setStatus("idle");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950 relative overflow-hidden">
      {/* Floating background orbs — make glassmorphism convincing */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-purple-600/20 rounded-full blur-3xl animate-orb-float-1" />
        <div className="absolute top-1/2 -right-40 w-[560px] h-[560px] bg-violet-700/15 rounded-full blur-3xl animate-orb-float-2" />
        <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl animate-orb-float-3" />
      </div>

      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="relative z-10 max-w-lg mx-auto">
        {!showSplash && status === "idle" && (
          <StartScreen onStart={startGame} wordCount={wordsData.words.length} />
        )}
        {status === "playing" && (
          <QuizScreen questions={questions} onFinish={finishGame} />
        )}
        {status === "finished" && (
          <ResultScreen
            score={score}
            total={questions.length}
            results={results}
            onRestart={restart}
          />
        )}
      </div>
    </div>
  );
}
