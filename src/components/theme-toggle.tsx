"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();


  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div>
      <button onClick={() => handleThemeChange("light")} type="button">
        Light
      </button>
      <button onClick={() => handleThemeChange("dark")} type="button">
        Dark
      </button>
    </div>
  );
}
