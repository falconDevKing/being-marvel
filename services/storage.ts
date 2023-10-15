/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Amplify, Storage } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

export class StorageApi {
  static putItem = async (key: string, file: File | Blob, options?: Record<string, string>) => {
    return await Storage.put(key, file, options)
      .then((res) => res.key)
      .catch((err) => err);
  };

  static getItem = async (key: string, options?: Record<string, string>) => {
    return await Storage.get(key, { download: false, ...options })
      .then((url) => url)
      .catch((err) => err);
  };

  static downloadItem = async (key: string, options?: Record<string, string>) => {
    return await Storage.get(key, { download: true, ...options })
      .then((url) => url)
      .catch((err) => err);
  };
}
