import { styled, Box } from "@mui/material";
import { Constants } from "../../data/constants";
import { StyleConstants } from "../../styles/StyleConstants";

const IntroductionContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: 84,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.HEADER,
  top: 0,
  fontSize: "2em",
  zIndex: 1,
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
  },
}));
export const Header = () => {
  return (
    <IntroductionContainer>
      (Lif)E - portfolio of {Constants.USERNAME}
    </IntroductionContainer>
  );
};
