import { Box } from "@mui/material";
import AgreementSectionContent from "./agreementSectionContent";
import AgreementSectionListedContent from "./agreementSectionListedContent";

type AgreementSectionProps = {
  groupId?: number;
  title?: string;
  content: (
    | string
    | {
        listHeader: string;
        list: string[];
      }
  )[];
};

const AgreementSection = ({ groupId, title, content }: AgreementSectionProps) => {
  return (
    <Box py={1}>
      {groupId && title && <Box fontWeight={700} fontSize={"1rem"}>{`${groupId}. ${title}`}</Box>}
      <Box>
        {content.map((item, index) => {
          const modifiedContent = typeof item === "string" ? (groupId && title ? `${groupId}.${index + 1}. ${item}` : item) : "";
          return typeof item === "string" ? (
            <AgreementSectionContent key={`${groupId}.${index}.`} text={modifiedContent} />
          ) : (
            <AgreementSectionListedContent key={`${groupId}.${index}.`} listHeader={`${groupId}.${index + 1}. ${item.listHeader}`} listContent={item.list} />
          );
        })}
      </Box>
    </Box>
  );
};

export default AgreementSection;
