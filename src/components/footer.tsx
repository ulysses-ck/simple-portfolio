import Link from "next/link";
import GradientText from "./gradient-text";
import Navbar from "./navbar";
import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 mb-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-dark-content dark:text-light-content">
          Pavan MG
        </h3>
        <div className="flex gap-8">
          <div className="flex gap-4">
            <Link
              href="tel:+911234567890"
              className="text-light-content dark:text-dark-content hover:text-dark-text dark:hover:text-light-content"
            >
              +91 1234567890
            </Link>
            <Link
              href="mailto:info@example.com"
              className="text-light-content dark:text-dark-content hover:text-dark-text dark:hover:text-light-content"
            >
              info@example.com
            </Link>
          </div>
          <SocialIcons />
        </div>
      </div>
      <hr className="w-full border-black dark:border-white" />
      <div className="flex justify-between items-center">
        <Navbar />
        <p className="text-dark-content dark:text-light-content">
          Designed and built by <GradientText>Pavan MG</GradientText> with{" "}
          <GradientText>Love</GradientText> &{" "}
          <GradientText>Coffee</GradientText>
        </p>
      </div>
    </footer>
  );
}
