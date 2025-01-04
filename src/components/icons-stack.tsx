"use client";

import { useTheme } from "next-themes";
import { techStack } from "@/data/tech-stack";

export default function IconsStack() {
  const { theme } = useTheme();
  return techStack.map(({ name, Icon, color, darkColor }) => {
    return (
      <div
        key={name}
        className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-md"
      >
        <Icon className="w-10 h-10" color={theme === "dark" && darkColor ? darkColor : color} suppressHydrationWarning />
      </div>
    );
  });
}
