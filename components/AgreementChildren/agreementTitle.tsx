import { Box } from "@mui/material";

type AgreementTitleProps = {
  title: string;
};

const AgreementTitle = ({ title }: AgreementTitleProps) => {
  return (
    <Box fontWeight={700} fontSize={"2rem"} textAlign={"center"}>
      {title}
    </Box>
  );
};

export default AgreementTitle;
