import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function CardProjects() {
  return projects.map(
    ({ title, description, image, linkPreview, linkGithub, stack }) => (
      <div
        key={title}
        className="flex flex-col rounded-t-lg rounded-b-lg flex-1 w-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
      >
        <Image className="" src={image} alt={title} width={500} height={500} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <div>Tech Stack:{stack.join(", ")}</div>
          <div>
            <Link href={linkPreview}>Live Preview</Link>
            <Link href={linkGithub}>Github</Link>
          </div>
        </div>
      </div>
    ),
  );
}
