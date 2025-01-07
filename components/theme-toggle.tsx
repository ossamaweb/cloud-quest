"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <select
      onChange={(e) => setTheme(e.target.value)}
      className="bg-background text-foreground p-2 rounded border border-input"
      aria-label="Select theme"
      value={theme}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
