import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { SkillList } from "./SkillList";
import Skills from "../../../data/Skills.json";
export const SkillsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionWrapper>
      <TitleWrapper>SKILLS</TitleWrapper>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SkillList type="softSkills" skills={Skills.softSkills} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillList type="hardSkills" skills={Skills.hardSkills} />
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};
