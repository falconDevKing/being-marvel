/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Amplify } from "aws-amplify";
import { getUrl, uploadData, downloadData } from "aws-amplify/storage";
import amplifyConfig from "../amplifyconfiguration.json";
Amplify.configure(amplifyConfig);

export class StorageApi {
  static putItem = async (key: string, data: File | Blob, options?: Record<string, string>) => {
    try {
      const result = await uploadData({
        key,
        data,
        options,
      }).result;
      console.log("Put Succeeded: ", result);

      return result.key;
    } catch (error) {
      console.log("Put Error : ", error);
      throw error;
    }
  };

  static getItem = async (key: string, options?: Record<string, string>) => {
    try {
      const getUrlResult = await getUrl({
        key,
        options,
      });

      console.log("signed URL: ", getUrlResult.url);
      console.log("URL expires at: ", getUrlResult.expiresAt);

      return getUrlResult.url;
    } catch (error) {
      console.log("Get Error : ", error);
      throw error;
    }
  };

  static downloadItem = async (key: string, options?: Record<string, string>) => {
    try {
      const { body, eTag } = await downloadData({
        key,
        options,
      }).result;

      return body;
    } catch (error) {
      console.log("Put Error : ", error);
      throw error;
    }
  };
}
