import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { Project } from "./Project";
import projects from "../../../data/Projects.json";
export const ProjectsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionWrapper>
      <TitleWrapper>PROJECTS</TitleWrapper>
      <Box>
        {projects.map((project,ind) => (
          <Project project={project} key={ind}/>
        ))}
      </Box>
    </SectionWrapper>
  );
};
