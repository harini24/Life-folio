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
  [theme.breakpoints.down("sm")]: {
    fontSize: "2em",
    padding: 20,
  },
}));
export const Header = () => {
  return (
    <IntroductionContainer>
      (Lif)E - portfolio of Harini Sivakumar
    </IntroductionContainer>
  );
};
