import { techStack } from "@/data/tech-stack";
export default function TechStack() {

  return (
    <section className="flex flex-col items-center justify-center gap-4 my-10">
      <h2 className="text-4xl font-bold text-dark-text dark:text-light-text">Tech Stack</h2>
      <p className="text-lg text-gray-500">Technologis I've been working with recently</p>
      <div className="w-full grid grid-cols-6 gap-4">
        {techStack.map(({ name, Icon, color }) => {
          return (
            <div key={name} className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <Icon className="w-10 h-10" color={color} colorRendering={"#000"} />
              <p className="text-sm text-gray-500">{name}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

