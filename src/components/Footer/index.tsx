import { styled, Box, Stack, Link } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";
import Contact from "./Contact.json";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const FooterContainer = styled(Box)(({ theme }) => ({
  // position: "fixed",
  height: 150,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.FOOTER,
  bottom: 0,
  zIndex: 1,
  fontWeight: 600,
  "& .mail": {
    display: "flex",
    padding: 12,
    minWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .links": {
    display: "flex",
    padding: 12,
    width: 350,
    justifyContent: "space-between",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
  },
}));
export const Footer = () => {
  const { emailId = "", linkedIn = "", twitter = "", github = "" } = Contact;
  return (
    <FooterContainer>
      <Box className="mail">
        <EmailIcon /> {emailId}
      </Box>
      <Box className="links">
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
      </Box>
    </FooterContainer>
  );
};
