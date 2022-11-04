import { Box } from "@mui/material";
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
      {sections.map(({ key, name }) =>
        key === selectedSection ? sectionsInfo[key]?.component : <></>
      )}
    </>
  );
};
