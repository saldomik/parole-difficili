export interface WordEntry {
  id: number;
  word: string;
  definition: string;
  distractors: string[];
}

export interface Question {
  word: string;
  options: string[];
  correctAnswer: string;
}

export interface QuestionResult {
  word: string;
  correctAnswer: string;
  userAnswer: string | null;
  status: "correct" | "wrong" | "timeout";
}

export type GameStatus = "idle" | "playing" | "finished";
