import { Box, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/types";
import { sectionImages } from "../utils";
import { setCurrentSection } from "./slice";
import Arrow from "../../../assets/arrow.png";
import { useNavigationSize } from "../../../hooks/useNavigationSize";

const NavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "aliceblue",
  padding: "0 20px",
  position: "sticky",
  top: 84,
  "& .nav-section": {
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
  "& .arrow": {
    margin: "10px 0 0 ",
    height: 70,
    width: 70,
    padding: 5,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: 58,
      width: 58,
    },
  },
  "& .before": {
    transform: "rotate(180deg)",
  },
  "& .disabled": {
    opacity: "0.1",
    pointerEvents: "none",
  },
  "& .active .nav-item": {
    backgroundColor: "#6489a7",
  },
  "& .active .section-name": {
    backgroundColor: "#6489a7",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 8px",
    zIndex: 1,
    flexDirection: "row",
    width: "100%",
    "& .nav-section": {
      padding: "0 3px",
    },
    "& .before": {
      transform: "rotate(90deg)",
    },
    "& .after": {
      transform: "rotate(271deg)",
    },
  },
}));
export const NavigationList = () => {
  const dispatch = useDispatch();
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  const selectedSection =
    useSelector((state: IRootState) => state.sections?.currentSection) || "";
  const filteredSections = sections.filter((sec) => !sec?.hide);
  const [start, setStart] = useState(0);
  const limit = useNavigationSize();
  console.log(limit);
  return (
    <NavigationWrapper>
      {limit < filteredSections.length && (
        <Box
          className={`arrow before ${start === 0 && "disabled"}`}
          onClick={() => setStart((val) => val - 1)}
        >
          <img src={Arrow} />
        </Box>
      )}
      {filteredSections
        .slice(start, start + limit)
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
      {limit < filteredSections.length && (
        <Box
          className={`arrow after ${
            start === filteredSections.length - limit && "disabled"
          }`}
          onClick={() => setStart((val) => val + 1)}
        >
          <img src={Arrow} />
        </Box>
      )}
    </NavigationWrapper>
  );
};
