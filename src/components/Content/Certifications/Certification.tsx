import { Box, styled, Button } from "@mui/material";
const CertificationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "3rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const InfoWrapper = styled(Box)(() => ({
  "& .name": {
    marginBottom: 15,
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  marginRight: 10,
  "& img": {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
}));
interface certficate {
  name?: string;
  org?: string;
  issued?: string;
  expiry?: string;
  credentialId?: string;
  credentialUrl?: string;
  url?: string;
}
interface Prop {
  certficate: certficate;
}
export const Certification = ({ certficate }: Prop) => {
  const {
    name = "",
    org = "",
    issued = "",
    expiry = "",
    credentialId = "",
    credentialUrl = "",
    url = "",
  } = certficate;
  return (
    <CertificationWrapper>
      <InfoWrapper>
        <div className="name">{name}</div>
        <div>Org: {org}</div>
        <div>Issued: {issued}</div>
        {expiry && <div>Expiry: {expiry}</div>}
        {credentialId && <div>Id: {credentialId}</div>}
        <div>
          <Button>Certificate</Button>
        </div>
      </InfoWrapper>
      <ImageBox>
        <img src={url} />
      </ImageBox>
    </CertificationWrapper>
  );
};
