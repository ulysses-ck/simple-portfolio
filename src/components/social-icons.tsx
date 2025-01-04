import Link from "next/link";
import { social } from "@/data/social";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      {social.map((item) => (
        <Link href={item.url} key={item.url}>
          <item.Icon className="w-6 h-6 text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text" />
        </Link>
      ))}
    </div>
  );
}
