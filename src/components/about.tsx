import Education from "./education";
import WorkExperience from "./work-experience";

export default function About() {
  return (
    <section className="flex flex-col gap-8 my-10">
      <div>
        <h2 className="text-2xl font-semibold text-dark-text dark:text-light-text">About</h2>
        <p className="text-dark-content dark:text-light-content">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-dark-text dark:text-light-text">
          Work Experience
        </h2>
        <div className="flex flex-col gap-4">
          <WorkExperience />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-dark-text dark:text-light-text">Education</h2>
        <Education />
      </div>
    </section>
  );
}
