import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";

const IntroductionContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: 84,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#6489a7",
  top: 0,
  fontSize: "2em",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
    fontWeight: 600,
  },
}));
export const Header = () => {
  return (
    <IntroductionContainer>
      (Lif)E - portfolio of Harini Sivakumar
    </IntroductionContainer>
  );
};
