import { Box, Grid, styled } from "@mui/material";
import { NavigationList } from "./Navigation";
import { SectionsRoot } from "./SectionsRoot";
const Wrapper = styled(Box)(({ theme }) => ({
  width: "85%",
  height: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  marginTop: 84,
  "& .grid": {
    margin: 0,
  },
  "& .section": {
    // position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  "& .content": {
    padding: 0,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
    justifyContent: "flex-start",
    alignItems: "center",
    "& .content": {
      marginTop: 104,
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .content": {
      // marginLeft: 140,
    },
  },
}));
export const ContentContainer = () => {
  return (
    <Wrapper>
      <NavigationList />
      <SectionsRoot />
    </Wrapper>
  );
};
