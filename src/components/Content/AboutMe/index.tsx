import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../../styles/StyleConstants";
const AboutMeContainer = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  background: StyleConstants.APP_INTRO_GROUND,
  padding: "40px 20px",
  boxSizing:'border-box'
}));
const TitleWrapper = styled(Box)(() => ({
  alignSelf: "center",
  fontSize: "2em",
  paddingBottom: 10,
}));
const DetailsWrapper = styled(Box)(() => ({
  alignSelf: "center",
  fontSize: "1.5em",
}));
export const AboutMe = () => {
  return (
    <AboutMeContainer>
      <TitleWrapper>About Me</TitleWrapper>
      <DetailsWrapper>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        sit earum at repudiandae ratione blanditiis, possimus et explicabo
        sequi, voluptatibus ducimus minima error excepturi animi nisi, veritatis
        a consequatur ad.
      </DetailsWrapper>
    </AboutMeContainer>
  );
};
