import { styled, Box } from "@mui/material";

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
