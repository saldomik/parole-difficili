import { useState, useEffect } from "react";

interface Props {
  onComplete: () => void;
}

// Splash screen: plays once on app load, then fades out to reveal StartScreen.
// Timing: icon → title → subtitle → dots, each staggered.
// Uses animationFillMode: 'backwards' so elements stay invisible during their delay.
export default function SplashScreen({ onComplete }: Props) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2100);
    const doneTimer = setTimeout(onComplete, 2600);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center select-none">
        {/* Icon — enters with spring scale+fade, then pulse rings suggest life */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Dual pulse rings at offset delays — "heartbeat" effect */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-violet-500/20 animate-pulse-ring" />
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-violet-400/15 animate-pulse-ring"
              style={{ animationDelay: "0.75s" }}
            />
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-900/60 animate-logo-in">
              <span className="text-6xl">📖</span>
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-logo-in" style={{ animationDelay: "400ms", animationFillMode: "backwards" }}>
              <span className="text-sm font-bold text-yellow-900">✦</span>
            </div>
          </div>
        </div>

        {/* Title — slides up after icon has landed */}
        <h1
          className="font-display text-5xl font-bold text-white tracking-tight mb-2 animate-slide-up"
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          Parole Difficili
        </h1>

        {/* Subtitle — fades in after title */}
        <p
          className="text-purple-300 text-lg animate-fade-in"
          style={{ animationDelay: "600ms", animationFillMode: "backwards" }}
        >
          Il quiz del lessico italiano
        </p>

        {/* Loading dots — last element, signal "loading" while user waits */}
        <div
          className="mt-8 flex justify-center gap-2 animate-fade-in"
          style={{ animationDelay: "950ms", animationFillMode: "backwards" }}
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-400/70 animate-dot-pulse"
              style={{ animationDelay: `${950 + i * 220}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
