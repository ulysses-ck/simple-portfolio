import Navbar from "./navbar";
import SocialIcons from "./social-icons";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-4">
      <h1 className="text-2xl font-bold text-blue-500 dark:text-red-300">
        Brand
      </h1>
      <Navbar />
      <SocialIcons />
      <ThemeToggle />
    </header>
  );
}

