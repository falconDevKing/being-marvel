import { Box } from "@mui/material";

type AgreementSectionContentProps = {
  text: string;
};

const AgreementSectionContent = ({ text }: AgreementSectionContentProps) => {
  return (
    <>
      <Box fontSize={"0.9rem"} py={1}>
        {text}
      </Box>
    </>
  );
};

export default AgreementSectionContent;
