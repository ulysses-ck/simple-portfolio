"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme,setTheme } = useTheme();


  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button type="button" onClick={() => handleThemeChange()} suppressHydrationWarning className="text-dark-content dark:text-light-content">
      {theme === "light" ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
    </button>
  );
}
