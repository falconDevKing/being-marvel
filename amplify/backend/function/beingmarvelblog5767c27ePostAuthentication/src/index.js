/* Amplify Params - DO NOT EDIT
	API_BEINGMARVELBLOG_GRAPHQLAPIIDOUTPUT
	API_BEINGMARVELBLOG_USERTABLE_ARN
	API_BEINGMARVELBLOG_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */

/**
 * The names of modules to load are stored as a comma-delimited string in the
 * `MODULES` env var.
 */
const moduleNames = process.env.MODULES.split(",");
/**
 * The array of imported modules.
 */
const modules = moduleNames.map((name) => require(`./${name}`));

/**
 * This async handler iterates over the given modules and awaits them.
 *
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 *
 */

const dayjs = require("dayjs");
const { v4: uuidv4 } = require("uuid");

const { queryTable, putInTable } = require("./helpers/utils");

const userTable = process.env.API_BEINGMARVELBLOG_USERTABLE_NAME;

exports.handler = async (event, context) => {
  try {

    console.log('main event', event);

    const eventData = JSON.parse(JSON.stringify(event));

    const { userName, request } = eventData;
    const { name, given_name, family_name, picture, email } = request?.userAttributes || {};

    const queryParams = {
      TableName: userTable,
      KeyConditionExpression: "#email = :email",
      IndexName: "byEmail",
      ExpressionAttributeNames: { "#email": "email" },
      ExpressionAttributeValues: {
        ":email": email,
      },
    };

    const usersWithEmail = await queryTable(queryParams);
    console.log({ usersWithEmail });

    if (usersWithEmail.length) {
      const user = usersWithEmail[0];
      const updateUser = {
        ...user,
        name,
        email,
        firstName: given_name,
        lastName: family_name,
        image: picture,
        updatedAt: dayjs().format(),
      };

      const updatedUser = await putInTable(userTable, updateUser);
      console.log("update user", updateUser);
    } else {
      const userData = {
        id: uuidv4(),
        name,
        email,
        firstName: given_name,
        lastName: family_name,
        image: picture,
        customId: userName,
        provider: "Google",
        blogger: false,
        postLikes: [],
        commentLikes: [],
        updatedAt: dayjs().format(),
        createdAt: dayjs().format(),
      };

      const createdUser = await putInTable(userTable, userData);
      console.log("create user", userData);
    }

    console.log("updated user");

    return event;
  } catch (error) {
    console.log("error with auth update", error);
  }
};
