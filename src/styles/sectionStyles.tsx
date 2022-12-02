import { styled, Box, Button } from "@mui/material";
import { StyleConstants } from "./StyleConstants";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 45,
  marginLeft: 75,
  width: 800,
  [theme.breakpoints.down("md")]: {
    width: 575,
    margin: 45,
  },
  [theme.breakpoints.down("sm")]: {
    width: 370,
    margin: "20px 5px 0",
  },
}));

export const TitleWrapper = styled(Box)(() => ({
  fontSize: "2em",
  paddingBottom: 50,
  fontWeight: 600,
}));

export const CustomButton = styled(Button)(() => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: StyleConstants.BLACK_COLOR,
  color: StyleConstants.BLACK_COLOR,
  textTransform: "capitalize",
  height: 36,
  fontWeight: 500,

  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
}));
