import { GenericMailSenderQuery } from "../graphql/API";
import { genericMailSender } from "../graphql/queries";
import { GraphQLResult, generateClient } from "aws-amplify/api";

const client = generateClient();

type desitinationData = {
  ToAddresses: string[];
  CcAddresses?: string[];
  BccAddresses?: string[];
};

export const sendMail = async (recipients: desitinationData, mailSubject: string, mailBody: string, replyAddresses?: string[]) => {
  try {
    const variables: Record<string, any> = {
      destination: recipients,
      mailSubject: mailSubject,
      mailBody: mailBody,
    };

    if (replyAddresses?.length) {
      variables["replyAddresses"] = replyAddresses;
    }

    const response = (await client.graphql({
      query: genericMailSender,
      variables: variables,
    })) as GraphQLResult<GenericMailSenderQuery>;

    return {
      status: "Success",
      data: response?.data?.genericMailSender as string,
    };
  } catch (err: any) {
    console.log("Unable to send mail", err);
    throw err;
  }
};
