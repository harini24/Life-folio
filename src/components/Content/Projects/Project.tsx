import { Box, styled, Button } from "@mui/material";
import ProjectImg from "../../../assets/project.jpg";
interface project {
  name?: string;
  description?: string;
  sourceCode?: string;
  demoLink?: string;
}
interface Prop {
  project: project;
}

const InfoWrapper = styled(Box)(() => ({
  "& .name": {
    marginBottom: 15,
  },
}));
const ProjectWrapper = styled(Box)(() => ({
  display: "flex",
  marginBottom: "3rem",
}));
const ImageBox = styled(Box)(() => ({
  marginRight: 10,
  "& img": {
    width: 400,
  },
}));
export const Project = ({ project }: Prop) => {
  const {
    name = "",
    description = "",
    sourceCode = "",
    demoLink = "",
  } = project;
  return (
    <ProjectWrapper>
      <InfoWrapper>
        <div className="name">{name}</div>
        <div>{description}</div>
        <div>
          <Button>Source Code</Button>
          <Button>Demo</Button>
        </div>
      </InfoWrapper>
      <ImageBox>
        <img src={ProjectImg} />
      </ImageBox>
    </ProjectWrapper>
  );
};
