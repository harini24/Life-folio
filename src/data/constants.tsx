import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/project.jpg";
interface Map {
  [key: string]: string | undefined;
}
export const logo: Map = {
  google: Google,
  verizon: Verizon,
};

export enum Constants {
  USERNAME = "Your Name",
}

export const projectImage: Map = {
  ["project name 1"]: ProjectImg,
};
