import { genericMailSender } from "../graphql/queries";
import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";

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

    const response = (await API.graphql({
      query: genericMailSender,
      variables: variables,
    })) as GraphQLResult<any>;

    return {
      status: "Success",
      data: response?.data?.customGenericMailSender as string,
    };
  } catch (err: any) {
    console.log("Unable to send mail", err);
    throw err;
  }
};
