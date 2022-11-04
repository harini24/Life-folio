import Education from "../../assets/education.png";
import Skills from "../../assets/skills.png";
import Person from "../../assets/hacker.png";
import Experience from "../../assets/experience.png";
import Projects from "../../assets/idea.png";
import Certifications from "../../assets/certificate.png";
import Achievements from "../../assets/growth.png";
import Contact from "../../assets/contact.png";

interface IObjectKeys {
  [key: string]: string | undefined;
}

export const sectionsInfo = {
  aboutMe: { src: Person },
  experience: { src: Experience },
  projects: { src: Projects },
  education: { src: Projects },
  achievements: { src: Achievements },
  certifications: { src: Certifications },
  contact: { src: Contact },
};
export const sectionImages: IObjectKeys = {
  aboutMe: Person,
  experience: Experience,
  projects: Projects,
  education: Education,
  skills: Skills,
  achievements: Achievements,
  certifications: Certifications,
  contact: Contact,
};
