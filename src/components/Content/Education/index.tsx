import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { Education } from "./Education";
import education from "../../../data/Education.json";
export const EducationContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>EDUCATION</TitleWrapper>
      <Box>
        <Grid container spacing={3}>
          {education.map((edu, ind) => (
            <Grid item xs={12} key={ind}>
              <Education education={edu} ind={ind} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};
