import { NextApiRequest, NextApiResponse } from "next";
import { errorResponseCreator, successResponseCreator } from "../../utils/responseFormat";
import SubscriptionConfirmedMailTemplate from "../../utils/mailTemplates/subscriptionConfirmed";
import { sendMail } from "../../utils/ses";
import NewSubscriptionMailTemplate from "../../utils/mailTemplates/newSubscription";

const BloggerMail = (process.env.NEXT_PUBLIC_CONTACT_MAIL || process.env.NEXT_PUBLIC_CONTACT_MAIL) as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.statusCode = 200;

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
    const { subscriberMail } = req.body;

    const destinationUser = {
      ToAddresses: [subscriberMail],
    };
    const mailSubjectUser = "Subscription Confirmed";
    const mailBodyUser = SubscriptionConfirmedMailTemplate();
    const sendUserMail = await sendMail(destinationUser, mailSubjectUser, mailBodyUser);

    const destinationBlogger = {
      ToAddresses: [BloggerMail],
    };
    const mailSubjectBlogger = "New Subscription ";
    const mailBodyBlogger = NewSubscriptionMailTemplate(subscriberMail);
    const sendBloggerMail = await sendMail(destinationBlogger, mailSubjectBlogger, mailBodyBlogger);

    const successResponse = successResponseCreator(200, "Subscribed successfully", { subscriberMail });
    return res.status(successResponse.statusCode).json(successResponse);
  } catch (err) {
    const errorResponse = errorResponseCreator(500, "Error fetching bookings details", err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  }
}
