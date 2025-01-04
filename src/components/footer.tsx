import GradientText from "./gradient-text";
import Navbar from "./navbar";
import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 mb-10">
      <div className="flex justify-between items-center">
        <h3>Brand</h3>
        <div className="flex gap-8">
          <div className="flex gap-4">
            <span>+91 1234567890</span>
            <span>info@example.com</span>
          </div>
          <SocialIcons />
        </div>
      </div>
      <hr className="w-full border-black dark:border-white" />
      <div className="flex justify-between items-center">
        <Navbar />
        <p>Designed and built by <GradientText>Pavan MG</GradientText> with <GradientText>Love</GradientText> & <GradientText>Coffee</GradientText></p>
      </div>
    </footer>
  );
}
