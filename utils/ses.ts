import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

type desitinationData = {
  ToAddresses: string[];
  CcAddresses?: string[];
  BccAddresses?: string[];
};

export const sendMail = async (recipients: desitinationData, mailSubject: string, mailBody: string, replyTo?: string[]) => {
  try {
    // const;

    return "sent";
  } catch (err: any) {
    console.log("ses error", err);
    throw new Error(err);
  }
};
