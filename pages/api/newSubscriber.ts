import { NextApiRequest, NextApiResponse } from "next";
import { errorResponseCreator, successResponseCreator } from "../../utils/responseFormat";
import SubscriptionConfirmedMailTemplate from "../../utils/mailTemplates/subscriptionConfirmedMailTemplate";
import { sendMail } from "../../utils/mailSender";
import NewSubscriptionMailTemplate from "../../utils/mailTemplates/newSubscriptionMailTemplate";
import { runWithAmplifyServerContext, reqResBasedClient } from "../../utils/amplifyServerUtils";
import { updateBlog } from "../../graphql/mutations";
import { getBlog } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Blog } from "../../graphql/API";

const BloggerMail = (process.env.NEXT_PUBLIC_CONTACT_MAIL || process.env.CONTACT_MAIL) as string;

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  // get details
  // store details in db
  //send notifcation to marvel
  //send notifcation to subscriber

  if (request.method !== "POST") {
    const errorResponse = errorResponseCreator(500, "", {});
    return response.status(errorResponse.statusCode).json(errorResponse);
  }

  try {
    const { subscriberMail, blogId } = request.body;

    // get blog

    const blogData = (await runWithAmplifyServerContext({
      nextServerContext: { request, response },
      operation: async (contextSpec) => {
        const request = await reqResBasedClient.graphql(contextSpec, {
          query: getBlog,
          variables: { id: blogId },
        });

        return request.data?.getBlog;
      },
    })) as Blog;

    const updatedBlog = await runWithAmplifyServerContext({
      nextServerContext: { request, response },
      operation: async (contextSpec) => {
        const subscribers = blogData?.subscriber || [];
        const updatedSubscribers = subscribers.includes(subscriberMail) ? subscribers : [...subscribers, subscriberMail];

        const request = await reqResBasedClient.graphql(contextSpec, {
          query: updateBlog,
          variables: { input: { id: blogId, subscriber: updatedSubscribers } },
        });

        return request.data?.updateBlog;
      },
    });

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
    return response.status(successResponse.statusCode).json(successResponse);
  } catch (err) {
    console.log("err from api", err);
    const errorResponse = errorResponseCreator(500, "Error Subscribing", err);
    return response.status(errorResponse.statusCode).json(errorResponse);
  }
}
