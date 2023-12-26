import { generateClient } from "aws-amplify/api";
import { getBlog } from "../graphql/queries";
import { Blog } from "../graphql/API";
import { updateBlog } from "../graphql/mutations";
import SubscriptionConfirmedMailTemplate from "../utils/mailTemplates/subscriptionConfirmedMailTemplate";
import { sendMail } from "../utils/mailSender";
import NewSubscriptionMailTemplate from "../utils/mailTemplates/newSubscriptionMailTemplate";
import { DismissHandler, ErrorHandler, SuccessHandler } from "../utils/handlers";
import { successResponseCreator } from "../utils/responseFormat";
import ContactMessageMailTemplate from "../utils/mailTemplates/contactMessageMailTemplate";

const client = generateClient();

const BloggerMail = (process.env.NEXT_PUBLIC_CONTACT_MAIL || process.env.CONTACT_MAIL) as string;

export const handleNewSubscriber = async (subscriberMail: string, blogId: string) => {
  try {
    // get blog
    const blog = await client.graphql({
      query: getBlog,
      variables: { id: blogId },
    });

    const blogData = blog.data?.getBlog as Blog;

    const subscribers = blogData?.subscriber || [];
    const updatedSubscribers = subscribers.includes(subscriberMail) ? subscribers : [...subscribers, subscriberMail];

    const updatedBlog = await client.graphql({
      query: updateBlog,
      variables: { input: { id: blogId, subscriber: updatedSubscribers } },
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

    DismissHandler();
    SuccessHandler({ message: "Subscribed successfully" });
  } catch (error: any) {
    console.log("graphql err registering subscriber", error?.message, error);
    throw error;
  }
};

export const contactFormHandler = async (name: string, email: string, content: string) => {
  try {
    // TODO: Work on getting blogger mail dynamically from user db
    const destinationBlogger = {
      ToAddresses: [BloggerMail],
    };

    const mailSubjectBlogger = "New Contact Message";
    const modifiedContent = content.split("\n").join("<br/>");

    const mailBodyBlogger = ContactMessageMailTemplate(name, email, modifiedContent);

    const sendBloggerMail = await sendMail(destinationBlogger, mailSubjectBlogger, mailBodyBlogger);

    DismissHandler();
    SuccessHandler({ message: "Message Sent Successfully" });
  } catch (err: any) {
    console.log("err contacting blogger", err?.message, err);
    throw err;
  }
};
