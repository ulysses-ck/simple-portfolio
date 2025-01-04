import { experience } from "@/data/experience";
import CardHistory from "./card-history";

export default function WorkExperience() {
  return experience.map((item) => <CardHistory key={item.title} {...item} />);
}
