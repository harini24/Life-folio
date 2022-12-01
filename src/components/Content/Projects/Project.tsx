import { Box, styled, Button } from "@mui/material";
import ProjectImg from "../../../assets/project.jpg";
import { StyleConstants } from "../../../styles/StyleConstants";
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
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
  },
  "& .desc": {
    padding: 10,
  },
}));
const ProjectWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  marginRight: 10,
  "& img": {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
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
        <div className="name bold">{name}</div>
        <div className="desc">{description}</div>
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
