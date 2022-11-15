import { Box, styled, Button } from "@mui/material";
const CertificationWrapper = styled(Box)(() => ({
  display: "flex",
  marginBottom: "3rem",
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
export const Certification = ({ certficate }:Prop) => {
  return <CertificationWrapper></CertificationWrapper>;
};
