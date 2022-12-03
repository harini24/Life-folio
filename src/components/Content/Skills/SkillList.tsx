import { Box, styled } from "@mui/material";
import SoftSkill from "../../../assets/softSkills.png";
import HardSkill from "../../../assets/hardSkills.png";
import { StyleConstants } from "../../../styles/StyleConstants";
interface Prop {
  skills: string[];
  type: string;
}

const SkillListWrapper = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& .skillType": {
    width: "80%",
    textAlign: "center",
    border: "1px solid black",
    background: StyleConstants.SKILLS_BG,
  },
  "& .skillIcon": {
    height: 75,
    width: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "50%",
    position: "absolute",
    background: StyleConstants.SKILLS_BG,
    top: 23,
    "& img": {
      height: 58,
      width: 58,
    },
  },
  "& .skillsList": {
    display: "flex",
    flexDirection: "column",
    justifyContent: StyleConstants.SKILLS_BG,
    width: 250,
    height: 250,
    marginTop: 78,
    border: "1px solid black",
    background: "#bcd1e3",
    padding: 25,
    "& div": {
      padding: 5,
    },
  },
}));
export const SkillList = ({ type, skills }: Prop) => {
  return (
    <SkillListWrapper>
      <Box className="skillType bold">{`${
        type === "softSkills" ? "Soft" : "Hard"
      } Skills`}</Box>
      <Box className="skillIcon">
        <img src={type === "softSkills" ? SoftSkill : HardSkill} />
      </Box>
      <Box className="skillsList">
        {skills.map((skill, ind) => (
          <div key={ind}>{`${ind + 1}) ${skill}`}</div>
        ))}
      </Box>
    </SkillListWrapper>
  );
};
