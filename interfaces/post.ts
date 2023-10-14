export interface IPostData {
  id: string;
  category: string;
  title: string;
  description: string;
  captionText: string;
  content: string;
  descriptionImage: string;
  captionImage: string;
  likes: number;
  views: number;
  status: boolean;
  publishedAt: string;
  expireAt: string;
  blogId: string;
  // blog {
  //   id
  //   name
  //   logo
  //   darkLogo
  //   subscriber
  //   userId
  //   createdAt
  //   updatedAt
  //   blogAboutId
  // }
  // comments {
  //   nextToken
  // }
  // audio {
  //   id
  //   duration
  //   filePath
  //   blogId
  //   postId
  //   createdAt
  //   updatedAt
  // }
  createdAt: string;
  updatedAt: string;
  postAudioId: string;
  [x: string]: any;
}
