# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (HMR)
npm run build    # type-check + production build
npm run lint     # ESLint
npm run preview  # serve the dist/ build locally
```

There is no test suite.

## Architecture

Single-page Italian vocabulary quiz. No routing — the entire app is one stateful component tree.

**Game state machine** (`App.tsx`): top-level `status` cycles through `"idle" → "playing" → "finished"`. Each transition re-renders a different screen component; state (questions, score, results) lives in `App` and is passed down via props.

**Data flow**:
- `src/data/words.json` is the word bank. Each `WordEntry` has `word`, `definition`, and three pre-written `distractors` (wrong answers).
- `buildQuestions()` (`src/utils/quiz.ts`) randomly picks 10 words, shuffles their options, and returns `Question[]` ready for rendering.
- `QuizScreen` owns per-question UI state: which option was selected, per-option highlight states (`idle | selected-correct | selected-wrong | reveal-correct`), and a 1400 ms auto-advance timer after each answer.

**Screens** (`src/components/`):
- `StartScreen` — entry point, shows word count
- `QuizScreen` — question + 4 options, progress bar, auto-advances after feedback
- `ResultScreen` — final score + per-question pass/fail summary

**Styling**: Tailwind CSS. Custom utilities are in `tailwind.config.js` (animations: `shake`, `slide-up`, `fade-in`, `pop`, `pulse-ring`) and `src/index.css` (`.glass` glassmorphism class).

## Extending the word bank

Add entries to `src/data/words.json` following the `WordEntry` shape: `id` (unique int), `word`, `definition`, and `distractors` (array of exactly 3 strings). The quiz always draws 10 random questions.
