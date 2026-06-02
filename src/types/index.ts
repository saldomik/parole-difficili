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

export type AnswerStatus = "unanswered" | "correct" | "wrong";

export type GameStatus = "idle" | "playing" | "finished";

export interface GameState {
  status: GameStatus;
  questions: Question[];
  currentIndex: number;
  score: number;
  selectedAnswer: string | null;
  answerStatus: AnswerStatus;
  results: AnswerStatus[];
}
