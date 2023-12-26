/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  captionText?: ModelStringInput | null,
  content?: ModelStringInput | null,
  descriptionImage?: ModelStringInput | null,
  captionImage?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  views?: ModelIntInput | null,
  status?: ModelBooleanInput | null,
  publishedAt?: ModelStringInput | null,
  expireAt?: ModelIntInput | null,
  blogId?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  postAudioId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  category?: string | null,
  title?: string | null,
  description?: string | null,
  captionText?: string | null,
  content?: string | null,
  descriptionImage?: string | null,
  captionImage?: string | null,
  likes?: number | null,
  views?: number | null,
  status?: boolean | null,
  publishedAt?: string | null,
  expireAt?: number | null,
  blogId: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  audio?: Audio | null,
  createdAt: string,
  updatedAt: string,
  postAudioId?: string | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  logo?: string | null,
  darkLogo?: string | null,
  subscriber?: Array< string | null > | null,
  userId: string,
  user?: User | null,
  about?: About | null,
  posts?: ModelPostConnection | null,
  audios?: ModelAudioConnection | null,
  comments?: ModelCommentConnection | null,
  interimBloggers?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  blogAboutId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  customId?: string | null,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  image?: string | null,
  provider?: string | null,
  postLikes?: Array< string | null > | null,
  commentLikes?: Array< string | null > | null,
  blogger?: boolean | null,
  blog?: Blog | null,
  createdAt: string,
  updatedAt: string,
  userBlogId?: string | null,
};

export type About = {
  __typename: "About",
  id: string,
  title?: string | null,
  logo?: string | null,
  content?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  blogId: string,
  blog?: Blog | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAudioConnection = {
  __typename: "ModelAudioConnection",
  items:  Array<Audio | null >,
  nextToken?: string | null,
};

export type Audio = {
  __typename: "Audio",
  id: string,
  duration?: string | null,
  filePath?: string | null,
  blogId: string,
  blog?: Blog | null,
  postId: string,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  name?: string | null,
  picture?: string | null,
  content?: string | null,
  subComment?: boolean | null,
  parentComment?: string | null,
  likes?: number | null,
  blogId: string,
  blog?: Blog | null,
  postId: string,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  content?: ModelStringInput | null,
  subComment?: ModelBooleanInput | null,
  parentComment?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  blogId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateUserInput = {
  id?: string | null,
  customId?: string | null,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  image?: string | null,
  provider?: string | null,
  postLikes?: Array< string | null > | null,
  commentLikes?: Array< string | null > | null,
  blogger?: boolean | null,
  userBlogId?: string | null,
};

export type ModelUserConditionInput = {
  customId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  postLikes?: ModelStringInput | null,
  commentLikes?: ModelStringInput | null,
  blogger?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userBlogId?: ModelIDInput | null,
};

export type UpdateUserInput = {
  id: string,
  customId?: string | null,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  image?: string | null,
  provider?: string | null,
  postLikes?: Array< string | null > | null,
  commentLikes?: Array< string | null > | null,
  blogger?: boolean | null,
  userBlogId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  name: string,
  logo?: string | null,
  darkLogo?: string | null,
  subscriber?: Array< string | null > | null,
  userId: string,
  interimBloggers?: Array< string | null > | null,
  blogAboutId?: string | null,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  darkLogo?: ModelStringInput | null,
  subscriber?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  interimBloggers?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
  blogAboutId?: ModelIDInput | null,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
  logo?: string | null,
  darkLogo?: string | null,
  subscriber?: Array< string | null > | null,
  userId?: string | null,
  interimBloggers?: Array< string | null > | null,
  blogAboutId?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreateAboutInput = {
  id?: string | null,
  title?: string | null,
  logo?: string | null,
  content?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  blogId: string,
};

export type ModelAboutConditionInput = {
  title?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  content?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  and?: Array< ModelAboutConditionInput | null > | null,
  or?: Array< ModelAboutConditionInput | null > | null,
  not?: ModelAboutConditionInput | null,
};

export type UpdateAboutInput = {
  id: string,
  title?: string | null,
  logo?: string | null,
  content?: string | null,
  email?: string | null,
  linkedIn?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  blogId?: string | null,
};

export type DeleteAboutInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  category?: string | null,
  title?: string | null,
  description?: string | null,
  captionText?: string | null,
  content?: string | null,
  descriptionImage?: string | null,
  captionImage?: string | null,
  likes?: number | null,
  views?: number | null,
  status?: boolean | null,
  publishedAt?: string | null,
  expireAt?: number | null,
  blogId: string,
  postAudioId?: string | null,
};

export type ModelPostConditionInput = {
  category?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  captionText?: ModelStringInput | null,
  content?: ModelStringInput | null,
  descriptionImage?: ModelStringInput | null,
  captionImage?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  views?: ModelIntInput | null,
  status?: ModelBooleanInput | null,
  publishedAt?: ModelStringInput | null,
  expireAt?: ModelIntInput | null,
  blogId?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  postAudioId?: ModelIDInput | null,
};

export type UpdatePostInput = {
  id: string,
  category?: string | null,
  title?: string | null,
  description?: string | null,
  captionText?: string | null,
  content?: string | null,
  descriptionImage?: string | null,
  captionImage?: string | null,
  likes?: number | null,
  views?: number | null,
  status?: boolean | null,
  publishedAt?: string | null,
  expireAt?: number | null,
  blogId?: string | null,
  postAudioId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  name?: string | null,
  picture?: string | null,
  content?: string | null,
  subComment?: boolean | null,
  parentComment?: string | null,
  likes?: number | null,
  blogId: string,
  postId: string,
};

export type ModelCommentConditionInput = {
  name?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  content?: ModelStringInput | null,
  subComment?: ModelBooleanInput | null,
  parentComment?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  blogId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  name?: string | null,
  picture?: string | null,
  content?: string | null,
  subComment?: boolean | null,
  parentComment?: string | null,
  likes?: number | null,
  blogId?: string | null,
  postId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateAudioInput = {
  id?: string | null,
  duration?: string | null,
  filePath?: string | null,
  blogId: string,
  postId: string,
};

export type ModelAudioConditionInput = {
  duration?: ModelStringInput | null,
  filePath?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelAudioConditionInput | null > | null,
  or?: Array< ModelAudioConditionInput | null > | null,
  not?: ModelAudioConditionInput | null,
};

export type UpdateAudioInput = {
  id: string,
  duration?: string | null,
  filePath?: string | null,
  blogId?: string | null,
  postId?: string | null,
};

export type DeleteAudioInput = {
  id: string,
};

export type MailDestination = {
  ToAddresses?: Array< string | null > | null,
  CcAddresses?: Array< string | null > | null,
  BccAddresses?: Array< string | null > | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  customId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  postLikes?: ModelStringInput | null,
  commentLikes?: ModelStringInput | null,
  blogger?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userBlogId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  darkLogo?: ModelStringInput | null,
  subscriber?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  interimBloggers?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
  blogAboutId?: ModelIDInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelAboutFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  content?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  and?: Array< ModelAboutFilterInput | null > | null,
  or?: Array< ModelAboutFilterInput | null > | null,
  not?: ModelAboutFilterInput | null,
};

export type ModelAboutConnection = {
  __typename: "ModelAboutConnection",
  items:  Array<About | null >,
  nextToken?: string | null,
};

export type ModelAudioFilterInput = {
  id?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  filePath?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelAudioFilterInput | null > | null,
  or?: Array< ModelAudioFilterInput | null > | null,
  not?: ModelAudioFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  provider?: ModelSubscriptionStringInput | null,
  postLikes?: ModelSubscriptionStringInput | null,
  commentLikes?: ModelSubscriptionStringInput | null,
  blogger?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  darkLogo?: ModelSubscriptionStringInput | null,
  subscriber?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  interimBloggers?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionAboutFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  linkedIn?: ModelSubscriptionStringInput | null,
  instagram?: ModelSubscriptionStringInput | null,
  twitter?: ModelSubscriptionStringInput | null,
  blogId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAboutFilterInput | null > | null,
  or?: Array< ModelSubscriptionAboutFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  captionText?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  descriptionImage?: ModelSubscriptionStringInput | null,
  captionImage?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  views?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  publishedAt?: ModelSubscriptionStringInput | null,
  expireAt?: ModelSubscriptionIntInput | null,
  blogId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  subComment?: ModelSubscriptionBooleanInput | null,
  parentComment?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  blogId?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionAudioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionStringInput | null,
  filePath?: ModelSubscriptionStringInput | null,
  blogId?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAudioFilterInput | null > | null,
  or?: Array< ModelSubscriptionAudioFilterInput | null > | null,
};

export type customFetchPostsByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type customFetchPostsByBlogQuery = {
  fetchPostsByBlog?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      descriptionImage?: string | null,
      status?: boolean | null,
      likes?: number | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type customFetchPostsStatsByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type customFetchPostsStatsByBlogQuery = {
  fetchPostsByBlog?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      blogId: string,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type customFetchCommentsStatsByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type customFetchCommentsStatsByBlogQuery = {
  fetchCommentsByBlog?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      blogId: string,
      postId: string,
      likes?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type CreateAboutMutationVariables = {
  input: CreateAboutInput,
  condition?: ModelAboutConditionInput | null,
};

export type CreateAboutMutation = {
  createAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAboutMutationVariables = {
  input: UpdateAboutInput,
  condition?: ModelAboutConditionInput | null,
};

export type UpdateAboutMutation = {
  updateAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAboutMutationVariables = {
  input: DeleteAboutInput,
  condition?: ModelAboutConditionInput | null,
};

export type DeleteAboutMutation = {
  deleteAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAudioMutationVariables = {
  input: CreateAudioInput,
  condition?: ModelAudioConditionInput | null,
};

export type CreateAudioMutation = {
  createAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAudioMutationVariables = {
  input: UpdateAudioInput,
  condition?: ModelAudioConditionInput | null,
};

export type UpdateAudioMutation = {
  updateAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAudioMutationVariables = {
  input: DeleteAudioInput,
  condition?: ModelAudioConditionInput | null,
};

export type DeleteAudioMutation = {
  deleteAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenericMailSenderQueryVariables = {
  destination?: MailDestination | null,
  mailSubject?: string | null,
  mailBody?: string | null,
  replyAddresses?: Array< string | null > | null,
};

export type GenericMailSenderQuery = {
  genericMailSender?: string | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAboutQueryVariables = {
  id: string,
};

export type GetAboutQuery = {
  getAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAboutsQueryVariables = {
  filter?: ModelAboutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAboutsQuery = {
  listAbouts?:  {
    __typename: "ModelAboutConnection",
    items:  Array< {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      name?: string | null,
      picture?: string | null,
      content?: string | null,
      subComment?: boolean | null,
      parentComment?: string | null,
      likes?: number | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAudioQueryVariables = {
  id: string,
};

export type GetAudioQuery = {
  getAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAudioQueryVariables = {
  filter?: ModelAudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAudioQuery = {
  listAudio?:  {
    __typename: "ModelAudioConnection",
    items:  Array< {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByEmailQueryVariables = {
  email: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByEmailQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogByUserQueryVariables = {
  userId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetBlogByUserQuery = {
  getBlogByUser?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAboutByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAboutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAboutByBlogQuery = {
  getAboutByBlog?:  {
    __typename: "ModelAboutConnection",
    items:  Array< {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FetchPostsByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FetchPostsByBlogQuery = {
  fetchPostsByBlog?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FetchCommentsByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FetchCommentsByBlogQuery = {
  fetchCommentsByBlog?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      name?: string | null,
      picture?: string | null,
      content?: string | null,
      subComment?: boolean | null,
      parentComment?: string | null,
      likes?: number | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FetchCommentsByPostQueryVariables = {
  postId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FetchCommentsByPostQuery = {
  fetchCommentsByPost?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      name?: string | null,
      picture?: string | null,
      content?: string | null,
      subComment?: boolean | null,
      parentComment?: string | null,
      likes?: number | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FetchAudiosByBlogQueryVariables = {
  blogId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FetchAudiosByBlogQuery = {
  fetchAudiosByBlog?:  {
    __typename: "ModelAudioConnection",
    items:  Array< {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAudioByPostQueryVariables = {
  postId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAudioByPostQuery = {
  getAudioByPost?:  {
    __typename: "ModelAudioConnection",
    items:  Array< {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    customId?: string | null,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    postLikes?: Array< string | null > | null,
    commentLikes?: Array< string | null > | null,
    blogger?: boolean | null,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBlogId?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    logo?: string | null,
    darkLogo?: string | null,
    subscriber?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      customId?: string | null,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      image?: string | null,
      provider?: string | null,
      postLikes?: Array< string | null > | null,
      commentLikes?: Array< string | null > | null,
      blogger?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBlogId?: string | null,
    } | null,
    about?:  {
      __typename: "About",
      id: string,
      title?: string | null,
      logo?: string | null,
      content?: string | null,
      email?: string | null,
      linkedIn?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    audios?:  {
      __typename: "ModelAudioConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    interimBloggers?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    blogAboutId?: string | null,
  } | null,
};

export type OnCreateAboutSubscriptionVariables = {
  filter?: ModelSubscriptionAboutFilterInput | null,
};

export type OnCreateAboutSubscription = {
  onCreateAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAboutSubscriptionVariables = {
  filter?: ModelSubscriptionAboutFilterInput | null,
};

export type OnUpdateAboutSubscription = {
  onUpdateAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAboutSubscriptionVariables = {
  filter?: ModelSubscriptionAboutFilterInput | null,
};

export type OnDeleteAboutSubscription = {
  onDeleteAbout?:  {
    __typename: "About",
    id: string,
    title?: string | null,
    logo?: string | null,
    content?: string | null,
    email?: string | null,
    linkedIn?: string | null,
    instagram?: string | null,
    twitter?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    category?: string | null,
    title?: string | null,
    description?: string | null,
    captionText?: string | null,
    content?: string | null,
    descriptionImage?: string | null,
    captionImage?: string | null,
    likes?: number | null,
    views?: number | null,
    status?: boolean | null,
    publishedAt?: string | null,
    expireAt?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    audio?:  {
      __typename: "Audio",
      id: string,
      duration?: string | null,
      filePath?: string | null,
      blogId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postAudioId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    name?: string | null,
    picture?: string | null,
    content?: string | null,
    subComment?: boolean | null,
    parentComment?: string | null,
    likes?: number | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAudioSubscriptionVariables = {
  filter?: ModelSubscriptionAudioFilterInput | null,
};

export type OnCreateAudioSubscription = {
  onCreateAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAudioSubscriptionVariables = {
  filter?: ModelSubscriptionAudioFilterInput | null,
};

export type OnUpdateAudioSubscription = {
  onUpdateAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAudioSubscriptionVariables = {
  filter?: ModelSubscriptionAudioFilterInput | null,
};

export type OnDeleteAudioSubscription = {
  onDeleteAudio?:  {
    __typename: "Audio",
    id: string,
    duration?: string | null,
    filePath?: string | null,
    blogId: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      logo?: string | null,
      darkLogo?: string | null,
      subscriber?: Array< string | null > | null,
      userId: string,
      interimBloggers?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      blogAboutId?: string | null,
    } | null,
    postId: string,
    post?:  {
      __typename: "Post",
      id: string,
      category?: string | null,
      title?: string | null,
      description?: string | null,
      captionText?: string | null,
      content?: string | null,
      descriptionImage?: string | null,
      captionImage?: string | null,
      likes?: number | null,
      views?: number | null,
      status?: boolean | null,
      publishedAt?: string | null,
      expireAt?: number | null,
      blogId: string,
      createdAt: string,
      updatedAt: string,
      postAudioId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
