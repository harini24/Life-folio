import { Box, styled } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import Contact from "./Contact.json";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useEffect } from "react";
const ContactWrapper = styled(Box)(() => ({
  padding: "0 20px",
  "& div": {
    padding: 12,
    display: "flex",
    alignItems: "center",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
}));
export const ContactContainer = () => {
  const {
    emailId = "",
    mobileNum = "",
    linkedIn = "",
    twitter = "",
    github = "",
  } = Contact;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>Contact Info</TitleWrapper>
      <ContactWrapper>
        {mobileNum && (
          <div>
            <PhoneIcon /> {mobileNum}
          </div>
        )}
        {emailId && (
          <div>
            <EmailIcon /> {emailId}
          </div>
        )}
        {github && (
          <div>
            <GitHubIcon /> {github}
          </div>
        )}
        {linkedIn && (
          <div>
            <LinkedInIcon /> {linkedIn}
          </div>
        )}
        {twitter && (
          <div>
            <TwitterIcon /> {twitter}
          </div>
        )}
      </ContactWrapper>
    </SectionWrapper>
  );
};
