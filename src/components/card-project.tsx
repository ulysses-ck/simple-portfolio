import Image from "next/image";
import Link from "next/link";

export default function CardProject() {
  return (
    <div className="flex flex-col">
      <Image src="/images/project.png" alt="Project" width={500} height={500} />
      <h3>Project Name</h3>
      <p>Project Description</p>
      <div>
        <div>Tech Stack: React, Next.js, Tailwind</div>
        <div>
          <Link href="https://github.com/pavangm/project">Live Preview</Link>
          <Link href="https://github.com/pavangm/project">Github</Link>
        </div>
      </div>
    </div>
  );
}
