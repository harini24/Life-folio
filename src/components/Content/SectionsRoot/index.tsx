import { Box, Fade } from "@mui/material";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/types";
import { sectionsInfo } from "../utils";

export const SectionsRoot = () => {
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  const selectedSection =
    useSelector((state: IRootState) => state.sections?.currentSection) || "";
  return (
    <>
      {sections.map(({ key, name }) => (
        <Fade
          key={key}
          in={key === selectedSection}
          {...(key === selectedSection ? { timeout: 1500 } : {})}
          easing={{
            enter: "linear",
            exit: "linear",
          }}
        >
          <div>{key === selectedSection && sectionsInfo[key]?.component}</div>
        </Fade>
      ))}
    </>
  );
};
