export interface IPostData {
  id: string;
  category?: string;
  title?: string;
  description?: string;
  captionText?: string;
  content?: string;
  descriptionImage?: string;
  captionImage?: string;
  likes?: number;
  views?: number;
  status?: boolean;
  publishedAt?: string;
  expireAt?: string;
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
  createdAt?: string;
  updatedAt?: string;
  postAudioId: string;
  [x: string]: any;
}

export interface IPostCommentData {
  id: string;
  name?: string;
  picture?: string;
  content?: string;
  subComment?: boolean;
  parentComment?: string;
  likes?: number;
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
  postId: string;
  // post {
  //   id
  //   category
  //   title
  //   description
  //   captionText
  //   content
  //   descriptionImage
  //   captionImage
  //   likes
  //   views
  //   status
  //   publishedAt
  //   expireAt
  //   blogId
  //   createdAt
  //   updatedAt
  //   postAudioId
  // }
  createdAt?: string;
  updatedAt?: string;
}

export interface IPostCommentRedirect {
  comment: string;
  section: string;
  postId: string;
  blogId: string;
  commentId: string;
}
