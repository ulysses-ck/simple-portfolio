import CardProjects from "./card-projects";

export default function Projects() {
  return (
    <section className="my-4 flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-blue-500 dark:text-red-300">Projects</h2>
      <p>Things I've built so far</p>
      <div className="grid grid-cols-3 gap-4 items-center w-full">
        <CardProjects />
      </div>
    </section>
  );
}
