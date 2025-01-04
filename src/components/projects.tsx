import CardProjects from "./card-projects";

export default function Projects() {
  return (
    <section className="my-4 flex flex-col gap-4 items-center">
      <h2 className="text-4xl font-bold text-dark-text dark:text-light-text">Projects</h2>
      <p className="text-lg text-gray-500">Things I've built so far</p>
      <div className="grid grid-cols-3 gap-4 items-center w-full">
        <CardProjects />
      </div>
    </section>
  );
}
