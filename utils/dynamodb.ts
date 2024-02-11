import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
// import { v4 as uuidv4 } from 'uuid'

const REGION = process.env.NEXT_PUBLIC_REGION as string;

const CREDENTIALS = {
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY as string,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY as string,
};

// Create the DynamoDB service client module using ES6 syntax.
const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: CREDENTIALS,
});

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions,
  unmarshallOptions,
});

export const putInTable = async (TableName: string, item: any) => {
  try {
    const params = {
      TableName,
      Item: item,
    };

    await ddbDocClient.send(new PutCommand(params));
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
