import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projects";

export default function CardProjects() {
  return projects.map(
    ({ title, description, image, linkPreview, linkGithub, stack }) => (
      <div
        key={title}
        className="flex flex-col bg-white dark:bg-card-bg-custom rounded-xl overflow-hidden transition-transform hover:-translate-y-1 h-full"
      >
        <div className="relative h-48 w-full">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-3xl font-semibold text-black dark:text-light-content">
            {title}
          </h3>
          <p className="text-dark-content dark:text-light-content text-sm">
            {description}
          </p>

          <div className="space-y-2">
            <p className="text-sm font-medium text-dark-content dark:text-light-content">
              Tech stack:{" "}
              <span className="text-dark-content dark:text-light-content">
                {stack.join(", ")}
              </span>
            </p>
          </div>

          <div className="flex justify-between gap-4 mt-2">
            <Link
              href={linkPreview}
              className="flex items-center gap-2 text-sm font-medium text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Preview
            </Link>
            <Link
              href={linkGithub}
              className="flex items-center gap-2 text-sm font-medium text-dark-content hover:text-dark-text dark:text-light-content dark:hover:text-light-text"
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </Link>
          </div>
        </div>
      </div>
    ),
  );
}
