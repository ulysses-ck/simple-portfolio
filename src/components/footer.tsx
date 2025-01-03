import Navbar from "./navbar";

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>Brand</h3>
        <div>
          <span>+91 1234567890</span>
          <span>info@example.com</span>
        </div>
        <div>
          <span>Github</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </div>
      <div>
        <Navbar />
        <p>Designed and built by Pavan MG with Love & Coffee</p>
      </div>
    </footer>
  );
}

