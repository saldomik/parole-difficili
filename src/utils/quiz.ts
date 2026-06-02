import type { WordEntry, Question } from "../types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildQuestions(words: WordEntry[], count = 10): Question[] {
  const selected = shuffle(words).slice(0, count);
  return selected.map((entry) => {
    const options = shuffle([entry.definition, ...entry.distractors]);
    return {
      word: entry.word,
      options,
      correctAnswer: entry.definition,
    };
  });
}
