import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  PutCommand,
  QueryCommand,
  DeleteCommand,
  GetCommandInput,
  BatchGetCommand,
} from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

const REGION = (process.env.REGION || process.env.NEXT_PUBLIC_REGION) as string;
const CREDENTIALS = {
  accessKeyId: (process.env.ACCESS_KEY || process.env.NEXT_PUBLIC_ACCESS_KEY) as string,
  secretAccessKey: (process.env.SECRET_ACCESS_KEY || process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY) as string,
};

// Create the DynamoDB service client module using ES6 syntax.
const ddbClient = new DynamoDBClient({ region: REGION, credentials: CREDENTIALS });

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

export const putInTable = async (table: string, item: any) => {
  try {
    const params = {
      TableName: table,
      Item: item,
    };

    const data = await ddbDocClient.send(new PutCommand(params));
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const getFromTable = async (table: string, id: string) => {
  try {
    const params = {
      TableName: table,
      Key: {
        id: id,
      },
    };
    const data = await ddbDocClient.send(new GetCommand(params));
    return data.Item;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const getMultipleFromTable = async (TableName: string, Keys: { id: string }[]) => {
  try {
    const params = {
      RequestItems: {
        [TableName]: {
          Keys: Keys,
        },
      },
    };
    const data = await ddbDocClient.send(new BatchGetCommand(params));
    const responses = data?.Responses;

    if (responses) {
      const items = responses[TableName];
      return items;
    } else {
      return [];
    }
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const fetchFromTable = async (params: any) => {
  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const queryTable = async (params: any) => {
  try {
    const data = await ddbDocClient.send(new QueryCommand(params));
    return (data.Items as any[]) ?? [];
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const deleteFromTable = async (table: string, id: string) => {
  try {
    const params = {
      TableName: table,
      Key: {
        id: id,
      },
    };
    const data = await ddbDocClient.send(new DeleteCommand(params));
    return data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
