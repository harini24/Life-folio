import { styled, Box, createTheme } from "@mui/material";
export const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 665,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: 45,
  width: 800,
  [theme.breakpoints.down("md")]: {
    width: 575,
    margin:45
  },
  [theme.breakpoints.down("sm")]: {
    width: 370,
    margin:5
  },
}));

export const TitleWrapper = styled(Box)(() => ({
  fontSize: "2em",
  paddingBottom: 50,
}));
