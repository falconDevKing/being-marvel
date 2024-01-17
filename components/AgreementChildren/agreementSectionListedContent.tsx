import { Box } from "@mui/material";

export type AgreementSectionListedContentProps = {
  listHeader: string;
  listContent: string[];
};

const AgreementSectionListedContent = ({ listHeader, listContent }: AgreementSectionListedContentProps) => {
  return (
    <>
      <Box fontSize={"0.9rem"} py={1}>
        {listHeader}:
      </Box>
      <Box pl={4}>
        <ol type="a">
          {listContent.map((content, index) => {
            return (
              <li key={index} style={{ fontSize: "0.9rem" }}>
                {content}
              </li>
            );
          })}
        </ol>
      </Box>
    </>
  );
};

export default AgreementSectionListedContent;
