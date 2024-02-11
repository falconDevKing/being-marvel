import { Box } from "@mui/material";
import { title } from "process";
import { date } from "yup";
import AgreementIntroContent from "../components/AgreementChildren/agreementIntro";
import AgreementSection from "../components/AgreementChildren/agreementSection";
import AgreementTitle from "../components/AgreementChildren/agreementTitle";
import AgreementDate from "../components/AgreementChildren/agrrementDate";
import { termsAndConditionsData } from "../data/termsAndConditions";
import Head from "next/head";

const TermsAndConditions = () => {
  const { title, date, intro, footer, sections } = termsAndConditionsData;

  return (
    <>
      <Head>
        <title>Terms and Conditions | Being Marvel</title>
        <meta property="og:title" content="Terms and Conditions | Being Marvel" />
        <meta
          name="description"
          content="A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
        />
        <meta
          property="og:description"
          content="A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
        />
        <meta name="image" content="/HomePicture.png" />
        <meta property="og:image" content="/HomePicture.png" />
      </Head>
      <Box width="70%" mx="auto" my={4} py={6} px={4} border={1} borderRadius={"48px"} boxShadow={"2px 1px 4px 1px"} fontSize={"1.2rem"}>
        {title && <AgreementTitle title={title} />}

        {date && <AgreementDate text={date} />}

        {intro && <AgreementIntroContent text={intro} />}

        {sections.map((section, index) => {
          const { title: sectionTitle, content } = section;
          return content ? <AgreementSection key={index} groupId={index + 1} title={sectionTitle} content={content} /> : "";
        })}

        {footer && <AgreementIntroContent text={footer} />}
      </Box>
    </>
  );
};

export default TermsAndConditions;
