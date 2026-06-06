/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pop": "pop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "shake": "shake 0.4s ease-out",
        "pulse-ring": "pulseRing 1.5s ease-out infinite",
        "orb-float-1": "orbFloat1 10s ease-in-out infinite",
        "orb-float-2": "orbFloat2 14s ease-in-out infinite",
        "orb-float-3": "orbFloat3 18s ease-in-out infinite",
        "streak-pop": "streakPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "milestone-in": "milestoneIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "confetti-fly": "confettiFly 0.65s ease-out forwards",
        "logo-in": "logoIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "dot-pulse": "dotPulse 1.4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        orbFloat1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        orbFloat2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "40%": { transform: "translate(-50px, 40px) scale(1.08)" },
          "70%": { transform: "translate(30px, -20px) scale(0.92)" },
        },
        orbFloat3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(20px, 30px) scale(1.1)" },
          "75%": { transform: "translate(-30px, -10px) scale(0.9)" },
        },
        streakPop: {
          "0%": { transform: "scale(0.4)", opacity: "0" },
          "60%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        milestoneIn: {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.85)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        confettiFly: {
          "0%": { transform: "translateX(0px) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(72px) scale(0)", opacity: "0" },
        },
        logoIn: {
          "0%": { opacity: "0", transform: "scale(0.65)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        dotPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
