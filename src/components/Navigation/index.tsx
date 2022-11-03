import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/types";
export const NavigationList = () => {
  const sections = useSelector((state: IRootState) => state.sections);
  console.log(sections);
  return <Box></Box>;
};
