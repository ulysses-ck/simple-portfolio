import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      <FaGithub className="w-6 h-6 text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text" />
      <FaTwitter className="w-6 h-6 text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text" />
      <FaLinkedin className="w-6 h-6 text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text" />
    </div>
  );
}
