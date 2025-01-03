import { techStack } from "@/data/tech-stack";
export default function TechStack() {

  return (
    <section className="flex flex-col items-center justify-center">
      <h2>Tech Stack</h2>
      <p>Technologis I've been working with recently</p>
      <div className="w-full grid grid-cols-6 gap-4">
        {techStack.map((item) => (
          <div key={item.name} className="flex flex-col items-center justify-center">
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

