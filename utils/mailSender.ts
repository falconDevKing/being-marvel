import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

const REGION = (process.env.REGION || process.env.NEXT_PUBLIC_REGION) as string;
const CREDENTIALS = {
  accessKeyId: (process.env.ACCESS_KEY || process.env.NEXT_PUBLIC_ACCESS_KEY) as string,
  secretAccessKey: (process.env.SECRET_ACCESS_KEY || process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY) as string,
};

const sesClient = new SESClient({ region: REGION, credentials: CREDENTIALS });

const senderMail = "emmanueloyekan33@gmail.com";
const recipientMail = "emisbehave@gmail.com";

const MailSender = async (mailSubject: string, mailBody: string) => {
  try {
    const params = {
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
      Source: senderMail,
    };

    await sesClient.send(new SendEmailCommand(params));
  } catch (err: any) {
    console.log(err);
    throw new Error(err?.message);
  }
};

export default MailSender;
