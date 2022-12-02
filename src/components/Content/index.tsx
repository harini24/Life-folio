import { Box, Grid, styled } from "@mui/material";
import { NavigationList } from "./Navigation";
import { SectionsRoot } from "./SectionsRoot";
const Wrapper = styled(Box)(({ theme }) => ({
  width: "85%",
  margin: "0 auto",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  marginTop: 84,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
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
