import { NextApiRequest, NextApiResponse } from "next";
import { errorResponseCreator, successResponseCreator } from "../../utils/responseFormat";
import { sendMail } from "../../utils/mailSender";
import ContactMessageMailTemplate from "../../utils/mailTemplates/contactMessageMailTemplate";

const BloggerMail = (process.env.NEXT_PUBLIC_CONTACT_MAIL || process.env.CONTACT_MAIL) as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // vet method
  //get details
  // store details in db
  //send notifcation to marvel
  //send notifcation to subscriber

  if (req.method !== "POST") {
    const errorResponse = errorResponseCreator(500, "", {});
    return res.status(errorResponse.statusCode).json(errorResponse);
  }

  try {
    const { name, email, content } = req.body;

    // TODO: Work on getting blogger mail dynamically from user db
    const destinationBlogger = {
      ToAddresses: [BloggerMail],
    };
    const mailSubjectBlogger = "New Contact Message";
    const modifiedContent = content.split("\n").join("<br/>");
    console.log({ modifiedContent });
    const mailBodyBlogger = ContactMessageMailTemplate(name, email, modifiedContent);
    const sendBloggerMail = await sendMail(destinationBlogger, mailSubjectBlogger, mailBodyBlogger);

    const successResponse = successResponseCreator(200, "Message Sent Successfully", {});
    return res.status(successResponse.statusCode).json(successResponse);
  } catch (err) {
    console.log("err from api", err);
    const errorResponse = errorResponseCreator(500, "Error Subscribing", err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  }
}
