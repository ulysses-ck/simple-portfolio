import Navbar from "./navbar";
import SocialIcons from "./social-icons";
export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1>Brand</h1>
      <Navbar />
      <SocialIcons />
    </header>
  );
}

