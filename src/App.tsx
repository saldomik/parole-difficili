import { useState, useCallback } from "react";
import type { GameStatus, AnswerStatus } from "./types";
import { buildQuestions } from "./utils/quiz";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import wordsData from "./data/words.json";
import type { Question } from "./types";

export default function App() {
  const [status, setStatus] = useState<GameStatus>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<AnswerStatus[]>([]);

  const startGame = useCallback(() => {
    setQuestions(buildQuestions(wordsData.words, 10));
    setScore(0);
    setResults([]);
    setStatus("playing");
  }, []);

  const finishGame = useCallback((finalScore: number, finalResults: AnswerStatus[]) => {
    setScore(finalScore);
    setResults(finalResults);
    setStatus("finished");
  }, []);

  const restart = useCallback(() => {
    setStatus("idle");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950">
      <div className="max-w-lg mx-auto">
        {status === "idle" && (
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
