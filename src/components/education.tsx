import { education } from "@/data/education";
import CardHistory from "./card-history";

export default function Education() {
  return education.map((item) => <CardHistory key={item.title} {...item} />);
}

