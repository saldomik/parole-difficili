interface Props {
  current: number;
  total: number;
  score: number;
}

export default function ProgressBar({ current, total, score }: Props) {
  const pct = (current / total) * 100;

  return (
    <div className="w-full max-w-lg mx-auto px-4 pt-6 pb-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 text-sm font-medium">
          Domanda <span className="text-white font-bold">{current}</span> di{" "}
          {total}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-400 text-sm">⭐</span>
          <span className="text-white font-bold text-sm">{score}</span>
          <span className="text-slate-500 text-sm">/ {total}</span>
        </div>
      </div>
      <div className="h-2 w-full bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
