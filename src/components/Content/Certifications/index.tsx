import { Box } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { Certification } from "./Certification";
import Certifications from "./Certifications.json";
export const CertificationsContainer = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>LICENSES & CERTIFICATIONS</TitleWrapper>
      <Box>
        {Certifications.map((certficate) => (
          <Certification certficate={certficate} />
        ))}
      </Box>
    </SectionWrapper>
  );
};
