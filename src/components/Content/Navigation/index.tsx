import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/types";
import { sectionImages } from "../utils";
import { setCurrentSection } from "./slice";
const NavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 20px",
  "& .nav-section": {
    display: "flex",
    flexDirection: "column",
  },
  "& .section-name": {
    width: 84,
    fontSize: 12,
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
  },
  "& .nav-item": {
    margin: "10px 0 0 ",
    height: 70,
    width: 70,
    padding: 5,
    border: "2px solid #562783",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: 58,
      width: 58,
    },
  },
  "& .active .nav-item": {
    backgroundColor: "#6489a7",
  },
  "& .active .section-name": {
    backgroundColor: "#6489a7",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 8px",
    flexDirection: "row",
  },
}));
export const NavigationList = () => {
  const dispatch = useDispatch();
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  const selectedSection =
    useSelector((state: IRootState) => state.sections?.currentSection) || "";
  console.log(sections);
  return (
    <NavigationWrapper>
      {sections
        .filter((sec) => !sec?.hide)
        .map((sec) => (
          <Box
            className={`nav-section ${selectedSection === sec.key && "active"}`}
          >
            <Box
              className="nav-item"
              onClick={() => dispatch(setCurrentSection(sec.key))}
            >
              <img src={sectionImages[sec.key]} alt={sec.key} />
            </Box>
            <div className="section-name">{sec.name}</div>
          </Box>
        ))}
    </NavigationWrapper>
  );
};
