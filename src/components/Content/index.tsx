import { Box, styled } from "@mui/material";
import { NavigationList } from "../Navigation";
const Wrapper = styled(Box)(() => ({
  width: "85%",
  background: "yellow",
  height: "100vh",
  margin: "0 auto",
}));
export const ContentContainer = () => {
  return (
    <Wrapper>
      <Box>
        <NavigationList />
      </Box>
      <Box></Box>
    </Wrapper>
  );
};
