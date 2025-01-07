// KeyboardContext.tsx
import React, { createContext, useContext, useEffect } from "react";

type KeyboardContextType = {
  registerShortcut: (key: string, callback: () => void) => void;
  unregisterShortcut: (key: string) => void;
};

const KeyboardContext = createContext<KeyboardContextType | null>(null);

export const KeyboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const shortcuts = React.useRef(new Map<string, () => void>());

  const keyHandler = React.useCallback((event: KeyboardEvent) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      return;
    }

    const callback = shortcuts.current.get(event.key);

    if (callback) {
      callback();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [keyHandler]);

  const registerShortcut = React.useCallback(
    (key: string, callback: () => void) => {
      shortcuts.current.set(key, callback);
    },
    [shortcuts]
  );

  const unregisterShortcut = React.useCallback(
    (key: string) => {
      shortcuts.current.delete(key);
    },
    [shortcuts]
  );

  return (
    <KeyboardContext.Provider value={{ registerShortcut, unregisterShortcut }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboard must be used within a KeyboardProvider");
  }
  return context;
};
