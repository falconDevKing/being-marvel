import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

const region = (process.env.REGION || process.env.NEXT_PUBLIC_REGION) as string;
const CREDENTIALS = {
  accessKeyId: (process.env.ACCESS_KEY || process.env.NEXT_PUBLIC_ACCESS_KEY) as string,
  secretAccessKey: (process.env.SECRET_ACCESS_KEY || process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY) as string,
};

// Create the DynamoDB service client module using ES6 syntax.
const s3Client = new S3Client({ region, credentials: CREDENTIALS });

export const saveFileSettled = async ({ Bucket, Key, Body }: { Bucket: string; Key: string; Body: File }) => {
  try {
    const bucketParams: { Bucket: string; Key: string; Body: File } = { Bucket, Key, Body };
    const s3Data = await s3Client.send(new PutObjectCommand(bucketParams));

    const url = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`;

    return url;
  } catch (err: any) {
    console.log("s3 upload error", err);
    throw new Error(err);
  }
};
export const saveFile = async (Bucket: string, Key: string, Body: File) => {
  try {
    const bucketParams: { Bucket: string; Key: string; Body: File } = { Bucket, Key, Body };
    const s3Data = await s3Client.send(new PutObjectCommand(bucketParams));

    const url = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`;

    return url;
  } catch (err: any) {
    console.log("s3 upload error", err);
    throw new Error(err);
  }
};

const streamToString = (stream: any) =>
  new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on("data", (chunk: any) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

export const getFile = async (bucket: string, fileName: string) => {
  const bucketParams = {
    Bucket: bucket,
    Key: fileName,
  };

  try {
    // Get the object from the Amazon S3 bucket. It is returned as a ReadableStream.
    const data = await s3Client.send(new GetObjectCommand(bucketParams));
    // Convert the ReadableStream to a string.
    const dataString = (await data?.Body?.transformToString()) as string;
    console.log("s3 data gotten");
    // convert stram to json
    const result = JSON.parse(dataString);
    return result;
  } catch (err) {
    console.log("Error geting", err);
  }
};

export const getS3Image = async (bucket: string, fileName: string) => {
  const bucketParams = {
    Bucket: bucket,
    Key: fileName,
  };

  try {
    const data = await s3Client.send(new GetObjectCommand(bucketParams));
    const dataString = await data?.Body?.transformToByteArray();

    const encode = (data: any) => {
      const buf = Buffer.from(data);
      const base64 = buf.toString("base64");
      const imageString = "data:image/jpeg;base64," + base64;

      return imageString;
    };

    const result = encode(dataString);
    return result;
  } catch (err) {
    console.log("Error geting", err);
  }
};
