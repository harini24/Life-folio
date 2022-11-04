import { Box } from "@mui/material";
interface project {
  name?: string;
  description?: string;
  sourceCode?: string;
  demoLink?: string;
}
interface Prop {
  project: project;
}
export const Project = ({ project }: Prop) => {
  const {
    name = "",
    description = "",
    sourceCode = "",
    demoLink = "",
  } = project;
  return (
    <Box>
      <Box>
        <div>{name}</div>
        <div>{description}</div>
        <div></div>
      </Box>
      <Box></Box>
    </Box>
  );
};
