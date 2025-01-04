import IconsStack from "./icons-stack";
export default function TechStack() {

  return (
    <section className="flex flex-col items-center justify-center gap-4 my-10 w-full">
      <h2 className="text-4xl font-bold text-dark-text dark:text-light-text">Tech Stack</h2>
      <p className="text-lg text-gray-500">Technologis I've been working with recently</p>
      <div className="w-full grid grid-cols-6 gap-4">
        <IconsStack />
      </div>
    </section>
  );
}

