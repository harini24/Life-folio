import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/types";
import { sectionImages } from "./untils";
export const NavigationList = () => {
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  console.log(sections);
  return (
    <Box>
      {sections
        .filter((sec) => !sec?.hide)
        .map((sec) => (
          <div>
            <img
              src={sectionImages[sec.key]}
              style={{ height: 64, width: 64 }}
              alt={sec.key}
            />
          </div>
        ))}
    </Box>
  );
};
