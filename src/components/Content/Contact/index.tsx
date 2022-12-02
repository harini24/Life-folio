import { Box, Link, styled } from "@mui/material";
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
  "& .links": {
    display: "flex",
    padding: 12,
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .email": {
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
  const { emailId = "", linkedIn = "", twitter = "", github = "" } = Contact;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>Contact Info</TitleWrapper>
      <ContactWrapper>
        {emailId && (
          <div className="email">
            <EmailIcon /> {emailId}
          </div>
        )}
        <div className="links">
          {github && (
            <div>
              <Link href={github} target="_blank" style={{ color: "black" }}>
                <GitHubIcon />
              </Link>
            </div>
          )}
          {linkedIn && (
            <div>
              <Link href={linkedIn} target="_blank" style={{ color: "black" }}>
                <LinkedInIcon />
              </Link>
            </div>
          )}
          {twitter && (
            <div>
              <Link href={twitter} target="_blank" style={{ color: "black" }}>
                <TwitterIcon />
              </Link>
            </div>
          )}
        </div>
      </ContactWrapper>
    </SectionWrapper>
  );
};
