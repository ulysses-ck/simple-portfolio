"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme,setTheme } = useTheme();


  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button type="button" onClick={() => handleThemeChange()} suppressHydrationWarning>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
