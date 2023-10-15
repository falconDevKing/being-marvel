const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, ScanCommand, PutCommand, QueryCommand, DeleteCommand, BatchGetCommand } = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require("uuid");

const REGION = process.env.REGION;

// Create the DynamoDB service client module using ES6 syntax.
const ddbClient = new DynamoDBClient({ region: REGION });

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

const putInTable = async (table, item) => {
  try {
    const params = {
      TableName: table,
      Item: item,
    };

    const data = await ddbDocClient.send(new PutCommand(params));
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getFromTable = async (table, id) => {
  try {
    const params = {
      TableName: table,
      Key: {
        id: id,
      },
    };
    const data = await ddbDocClient.send(new GetCommand(params));
    return data.Item;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getMultipleFromTable = async (TableName, Keys) => {
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
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const fetchFromTable = async (params) => {
  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const queryTable = async (params) => {
  try {
    const data = await ddbDocClient.send(new QueryCommand(params));
    console.log("query called");
    return data.Items ?? [];
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const deleteFromTable = async (table, id) => {
  try {
    const params = {
      TableName: table,
      Key: {
        id: id,
      },
    };
    const data = await ddbDocClient.send(new DeleteCommand(params));
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = {
  putInTable,
  getFromTable,
  getMultipleFromTable,
  fetchFromTable,
  queryTable,
  deleteFromTable,
};
