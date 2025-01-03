export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-4">
        <div>Github</div>
        <div>Twitter</div>
        <div>LinkedIn</div>
      </div>
    </nav>
  );
}
