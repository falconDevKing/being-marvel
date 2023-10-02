import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

const REGION = (process.env.REGION || process.env.NEXT_PUBLIC_REGION) as string;
const CREDENTIALS = {
  accessKeyId: (process.env.ACCESS_KEY || process.env.NEXT_PUBLIC_ACCESS_KEY) as string,
  secretAccessKey: (process.env.SECRET_ACCESS_KEY || process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY) as string,
};
const sesClient = new SESClient({ region: REGION, credentials: CREDENTIALS });

type desitinationData = {
  ToAddresses: string[];
  CcAddresses?: string[];
  BccAddresses?: string[];
};

export const sendMail = async (senderMail: string, recipients: desitinationData, mailSubject: string, mailBody: string) => {
  try {
    const params = {
      Source: senderMail,
      Destination: recipients,
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: mailBody,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: mailSubject,
        },
      },
    };

    await sesClient.send(new SendEmailCommand(params));
    console.log("Mail sent for", mailSubject);
    return "sent";
  } catch (err: any) {
    console.log("ses error", err);
    throw new Error(err);
  }
};
