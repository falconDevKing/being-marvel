import type { NextApiRequest, NextApiResponse } from "next";
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { errorResponseCreator, successResponseCreator } from "./responseFormat";

const REGION = (process.env.REGION || process.env.NEXT_PUBLIC_REGION) as string;
const CREDENTIALS = {
  accessKeyId: (process.env.ACCESS_KEY || process.env.NEXT_PUBLIC_ACCESS_KEY) as string,
  secretAccessKey: (process.env.SECRET_ACCESS_KEY || process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY) as string,
};
const sesClient = new SESClient({ region: REGION, credentials: CREDENTIALS });

const senderMail = (process.env.SENDER_MAIL || process.env.NEXT_PUBLIC_SENDER_MAIL) as string;
const recipientMail = (process.env.SUPPORT_MAIL || process.env.NEXT_PUBLIC_SUPPORT_MAIL) as string;

export const sendMail = async (senderMail: string, recipientMail: string, mailSubject: string, mailBody: string) => {
  try {
    const params = {
      Source: senderMail,
      Destination: {
        ToAddresses: [recipientMail],
      },
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

    return "sent";
  } catch (err: any) {
    console.log("ses error", err);
    throw new Error(err);
  }
};
