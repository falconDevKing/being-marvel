/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    SES_EMAIL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { SendEmailCommand, SESClient } = require("@aws-sdk/client-ses");
const senderMail = process.env.SES_EMAIL;

const sesClient = new SESClient();


exports.handler = async (event) => {
  try {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const destination = event.destination || event.arguments.destination || [];
    const mailSubject = event.mailSubject || event.arguments.mailSubject || "";
    const mailBody = event.mailBody || event.arguments.mailBody || "";
    const replyAddresses = event.replyAddresses || event.arguments.replyAddresses || [];

    const sendMail = async () => {
      try {
        const params = {
          Source: senderMail,
          Destination: destination,
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

        if (replyAddresses.length) {
          params["ReplyToAddresses"] = replyAddresses;
        }

        await sesClient.send(new SendEmailCommand(params));
        console.log("Mail sent for", mailSubject);
        return "sent";
      } catch (err) {
        console.log("ses error", err);
        throw err
      }
    };

    await sendMail();

    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify("Hello from Lambda!"),
    };
  } catch (error) {
    console.log("ses2 error", err);
        throw err
  }
};
