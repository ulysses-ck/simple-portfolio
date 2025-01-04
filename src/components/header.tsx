import GradientText from "./gradient-text";
import Navbar from "./navbar";
import SocialIcons from "./social-icons";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-4">
      <h1 className="text-2xl font-bold">
        <GradientText>Pavan MG</GradientText>
      </h1>
      <Navbar />
      <SocialIcons />
      <ThemeToggle />
    </header>
  );
}

