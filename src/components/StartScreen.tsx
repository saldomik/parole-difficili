interface Props {
  onStart: () => void;
  wordCount: number;
}

export default function StartScreen({ onStart, wordCount }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in">
      <div className="text-center max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-900/50">
              <span className="text-5xl">📖</span>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-yellow-900">✦</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
          Parole Difficili
        </h1>
        <p className="text-purple-300 text-lg font-medium mb-1">
          Il quiz per diventare un maestro del lessico italiano
        </p>
        <p className="text-slate-400 text-sm mb-8">
          {wordCount} parole nel dizionario · 10 domande a partita
        </p>

        <div className="glass rounded-2xl p-5 mb-8 text-left space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">🎯</span>
            <div>
              <p className="text-white font-semibold text-sm">Come si gioca</p>
              <p className="text-slate-400 text-sm">
                Ti verrà mostrata una parola rara o poco comune della lingua italiana.
                Scegli la definizione corretta tra le 4 proposte.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">⚡</span>
            <div>
              <p className="text-white font-semibold text-sm">Selezione casuale</p>
              <p className="text-slate-400 text-sm">
                Ogni partita sceglie 10 parole diverse dal database, così ogni
                round è una sfida unica.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">🏆</span>
            <div>
              <p className="text-white font-semibold text-sm">Punteggio</p>
              <p className="text-slate-400 text-sm">
                Guadagna 1 punto per ogni risposta corretta. Arriva a 10/10 e
                diventa un maestro del lessico!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full py-4 px-8 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-purple-900/40 transition-all duration-200 active:scale-95 hover:scale-[1.02]"
        >
          Inizia il Quiz →
        </button>
      </div>
    </div>
  );
}
