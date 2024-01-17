import { Box } from "@mui/material";

type AgreementIntroContentProps = {
  text: string;
};

const AgreementIntroContent = ({ text }: AgreementIntroContentProps) => {
  return <Box py={2}>{text}</Box>;
};

export default AgreementIntroContent;
