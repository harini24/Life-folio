import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/project.jpg";
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  google: Google,
  verizon: Verizon,
};

export enum Constants {
  USERNAME = "Your Name",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "project name 1": ProjectImg,
  "project name 2": ProjectImg,
};
