import { navData } from "@/data/nav-data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex gap-8">
        {navData.map((item) => (
          <li key={item.id}>
            <Link href={item.link} className="text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text font-semibold">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
