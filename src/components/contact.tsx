import Link from "next/link";
import GradientText from "./gradient-text";

export default function Contact() {
  return (
    <div className="flex flex-col flex-grow w-full h-full justify-center items-center self-center gap-2">
      <h2 className="text-5xl font-semibold text-dark-text">
        For any questions please mail us:
      </h2>
      <Link href="mailto:hi@pavangm.in" className="text-5xl">
        <GradientText>hi@pavangm.in</GradientText>
      </Link>
    </div>
  );
}
