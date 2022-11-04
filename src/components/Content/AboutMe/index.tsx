import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../../styles/StyleConstants";
import MyImage from "../../../assets/my-pic.jpg";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
const AboutMeContainer = styled(Box)(() => ({
  display: "flex",
  alignSelf: "center",
  "& img": {
    width: 400,
  },
}));

const DetailsWrapper = styled(Box)(() => ({
  fontSize: "1.5em",
  marginLeft: 15,
}));
export const AboutMe = () => {
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
