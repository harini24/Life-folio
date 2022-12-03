import Securin from "../assets/securin.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/project.jpg";
export enum Constants {
  USERNAME = "Harini Sivakumar",
}
interface Map {
  [key: string]: string | undefined;
}
export const logo: Map = {
  securin: Securin,
  verizon: Verizon,
};

export const projectImage: Map = {
  ["project name 1"]: ProjectImg,
};
