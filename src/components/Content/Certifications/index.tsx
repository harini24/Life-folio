import { useEffect } from "react";
import { Box } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { Certification } from "./Certification";
import Certifications from "../../../data/Certifications.json";
export const CertificationsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>LICENSES & CERTIFICATIONS</TitleWrapper>
      <Box>
        {Certifications.map((certficate) => (
          <Certification certficate={certficate} key={certficate.name} />
        ))}
      </Box>
    </SectionWrapper>
  );
};
