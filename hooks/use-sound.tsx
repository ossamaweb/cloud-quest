"use client";

import * as React from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playCorrect: () => void;
  playIncorrect: () => void;
  playGameComplete: () => void;
  playStreak: () => void;
}

const SoundContext = React.createContext<SoundContextType | undefined>(
  undefined
);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = React.useState<boolean>(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("soundMuted");
    return saved ? JSON.parse(saved) : false;
  });

  // Create refs to hold audio instances
  const correctSound = React.useRef<HTMLAudioElement | null>(null);
  const incorrectSound = React.useRef<HTMLAudioElement | null>(null);
  const gameCompleteSound = React.useRef<HTMLAudioElement | null>(null);
  const streakSound = React.useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements after component mounts
  React.useEffect(() => {
    correctSound.current = new Audio("/sounds/correct.mp3");
    incorrectSound.current = new Audio("/sounds/incorrect.mp3");
    gameCompleteSound.current = new Audio("/sounds/game-complete.mp3");
    streakSound.current = new Audio("/sounds/streak.mp3");
  }, []);

  const toggleMute = React.useCallback(() => {
    setIsMuted((prev) => {
      const newValue = !prev;
      localStorage.setItem("soundMuted", JSON.stringify(newValue));
      return newValue;
    });
  }, []);

  const playSound = React.useCallback(
    (audio: HTMLAudioElement | null) => {
      if (!isMuted && audio) {
        audio.currentTime = 0; // Reset sound to start
        audio.play().catch((error) => {
          console.warn("Audio playback failed:", error);
        });
      }
    },
    [isMuted]
  );

  const playCorrect = React.useCallback(() => {
    playSound(correctSound.current);
  }, [playSound]);

  const playIncorrect = React.useCallback(() => {
    playSound(incorrectSound.current);
  }, [playSound]);

  const playGameComplete = React.useCallback(() => {
    playSound(gameCompleteSound.current);
  }, [playSound]);

  const playStreak = React.useCallback(() => {
    playSound(streakSound.current);
  }, [playSound]);

  const value = {
    isMuted,
    toggleMute,
    playCorrect,
    playIncorrect,
    playGameComplete,
    playStreak,
  };

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound() {
  const context = React.useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
