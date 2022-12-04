import { Box, styled, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { StyleConstants } from "../../../styles/StyleConstants";
import { Key, useEffect } from "react";
import { logo } from "../../../data/constants";
interface IExperience {
  span?: string;
  company?: string;
  location?: string;
  twitter?: string;
  linkedIn?: string;
  progress?: any;
}
interface Prop {
  experience: IExperience;
}

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  "& .span": {
    padding: "0 0 6px",
  },
  "& .description-wrapper": {
    paddingBottom: 10,
  },
  "& .description": {
    padding: "0 0 6px 12px",
    display: "flex",
    alignItems: "center",
    "& .bullet": {
      height: 10,
      minWidth: 10,
      backgroundColor: "black",
      borderRadius: "50%",
      marginRight: 10,
    },
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
const CompanyWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  "& .logo": {
    marginRight: 10,
    height: 85,
    width: 85,
    "& img": {
      height: 85,
      width: 85,
    },
  },
  "& .employment-info": {
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
    width: 250,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    "& .employment-info": {
      alignItems: "flex-start",
    },
  },
}));
const DescriptionWrapper = styled(Box)(({ theme }) => ({
  width: 450,
  [theme.breakpoints.down("md")]: {
    paddingTop: 12,
  },
  [theme.breakpoints.down("sm")]: {
    width: 370,
  },
}));
const Experience = ({ experience }: Prop) => {
  const {
    company = "",
    span,
    location,
    twitter = "",
    linkedIn = "",
    progress = [],
  } = experience;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <CompanyWrapper>
        <div className="logo">
          <img src={logo[company.toLowerCase()]} alt="logo" />
        </div>
        <div className="employment-info">
          <div className="name bold">{company}</div>
          <div>{location}</div>
          <div>{span}</div>
          <div>
            {linkedIn && (
              <Link
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <LinkedInIcon style={{ marginRight: 6 }} />
              </Link>
            )}
            {twitter && (
              <Link
                href={twitter}
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <TwitterIcon />
              </Link>
            )}
          </div>
        </div>
      </CompanyWrapper>
      <DescriptionWrapper>
        {progress.map((prog: any) => {
          return (
            <div key={prog.company}>
              <div className="role bold">{prog.role}</div>
              <div className="span">{prog.span}</div>
              <div className="description-wrapper">
                {prog.descriptions.map(
                  (desc: string, ind: Key | null | undefined) => (
                    <div className="description" key={ind}>
                      <div className="bullet" />
                      {desc}
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </DescriptionWrapper>
    </Wrapper>
  );
};
export default Experience;
