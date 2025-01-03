import { FaReact, FaHtml5, FaCss3, FaJs, FaGithub, FaGit, FaSass, FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

export const techStack: { name: string, Icon: IconType, color: string, darkColor?: string }[] = [
  { name: "HTML", Icon: FaHtml5, color: "#E34F26", darkColor: "#E34F26" },
  { name: "CSS", Icon: FaCss3, color: "#1572B6", darkColor: "#1572B6" },
  { name: "JS", Icon: FaJs, color: "#F7DF1E", darkColor: "#F7DF1E" },
  { name: "REACT", Icon: FaReact, color: "#61DAFB", darkColor: "#61DAFB" },
  { name: "REDUX", Icon: SiRedux, color: "#764ABC", darkColor: "#764ABC" },
  { name: "BOOTSTRAP", Icon: FaBootstrap, color: "#563D7C", darkColor: "#563D7C" },
  { name: "TAILWIND", Icon: RiTailwindCssFill, color: "#38BDF8", darkColor: "#38BDF8" },
  { name: "SASS", Icon: FaSass, color: "#CC6699", darkColor: "#CC6699" },
  { name: "GIT", Icon: FaGit, color: "#F05032", darkColor: "#F05032" },
  { name: "VSCODE", Icon: VscVscode, color: "#007ACC", darkColor: "#007ACC" },
  { name: "GITHUB", Icon: FaGithub, color: "#181717", darkColor: "#ffffff" },
];
