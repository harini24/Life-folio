import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../../styles/StyleConstants";
import MyImage from "../../../assets/my-pic.jpg";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { useEffect } from "react";
const AboutMeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignSelf: "center",
  "& img": {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const DetailsWrapper = styled(Box)(({ theme }) => ({
  fontSize: "1.5em",
  marginLeft: 15,
  [theme.breakpoints.down("md")]: {
    margin: "10px  0 0 0",
  },
}));
export const AboutMe = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SectionWrapper>
      <TitleWrapper>About Me</TitleWrapper>
      <AboutMeContainer>
        <img src={MyImage} />
        <DetailsWrapper>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sit earum at repudiandae ratione blanditiis, possimus et explicabo
          sequi, voluptatibus ducimus minima error excepturi animi nisi,
          veritatis a consequatur ad.
        </DetailsWrapper>
      </AboutMeContainer>
    </SectionWrapper>
  );
};
