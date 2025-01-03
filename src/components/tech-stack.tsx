import Image from "next/image";

export default function TechStack() {
  const techStack = [
    { name: "React", icon: "react.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Tailwind", icon: "tailwind.svg" },
    { name: "Typescript", icon: "typescript.svg" },
  ];
  return (
    <section>
      <h2>Tech Stack</h2>
      <p>Technologis I've been working with recently</p>
      <div>
        {techStack.map((item) => (
          <div key={item.name}>
            <Image src={item.icon} alt={item.name} width={50} height={50} />
          </div>
        ))}
      </div>
    </section>
  );
}

