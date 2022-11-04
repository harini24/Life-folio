import { Box, styled } from "@mui/material";
import { NavigationList } from "./Navigation";
const Wrapper = styled(Box)(() => ({
  width: "85%",
  height: "85vh",
  background: "yellow",
  margin: "0 auto",
  display: "flex",
}));
export const ContentContainer = () => {
  return (
    <Wrapper>
      <NavigationList />
      <Box></Box>
    </Wrapper>
  );
};
