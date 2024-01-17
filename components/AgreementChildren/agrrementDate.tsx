import { Box } from "@mui/material";

type AgreementDateProps = {
  text: string;
};

const AgreementDate = ({ text }: AgreementDateProps) => {
  return (
    <Box py={1} fontStyle={"italic"}>
      {" "}
      Effective Date: {text}
    </Box>
  );
};

export default AgreementDate;
