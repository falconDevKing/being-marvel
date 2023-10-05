import { NextApiRequest, NextApiResponse } from "next";
import { errorResponseCreator, successResponseCreator } from "../../utils/responseFormat";
import SubscriptionConfirmedMailTemplate from "../../utils/mailTemplates/subscriptionConfirmedMailTemplate";
import { sendMail } from "../../utils/mailSender";
import NewSubscriptionMailTemplate from "../../utils/mailTemplates/newSubscriptionMailTemplate";
import { API } from "aws-amplify";
import { updateBlog } from "../../graphql/mutations";
import { getBlog } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

const BloggerMail = (process.env.NEXT_PUBLIC_CONTACT_MAIL || process.env.CONTACT_MAIL) as string;

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
    const { subscriberMail, blogId } = req.body;

    // get blog
    const blog = (await API.graphql({
      query: getBlog,
      variables: { id: blogId },
    })) as GraphQLResult<any>;

    const blogData = blog.data?.getBlog;

    // update blog
    const updatedBlog = (await API.graphql({
      query: updateBlog,
      variables: { input: { id: blogId, subscriber: [...blogData?.subscriber, subscriberMail] } },
    })) as GraphQLResult<any>;

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
    console.log("err from api", err);
    const errorResponse = errorResponseCreator(500, "Error Subscribing", err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  }
}
