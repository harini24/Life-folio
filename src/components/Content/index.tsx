import { Box, styled } from "@mui/material";
import { NavigationList } from "./Navigation";
import { SectionsRoot } from "./SectionsRoot";
const Wrapper = styled(Box)(() => ({
  width: "85%",
  height: "85vh",
  // background: "yellow",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
}));
export const ContentContainer = () => {
  return (
    <Wrapper>
      <NavigationList />
      <SectionsRoot />
    </Wrapper>
  );
};
