/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const genericMailSender = /* GraphQL */ `query GenericMailSender(
  $destination: MailDestination
  $mailSubject: String
  $mailBody: String
  $replyAddresses: [String]
) {
  genericMailSender(
    destination: $destination
    mailSubject: $mailSubject
    mailBody: $mailBody
    replyAddresses: $replyAddresses
  )
}
` as GeneratedQuery<
  APITypes.GenericMailSenderQueryVariables,
  APITypes.GenericMailSenderQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    customId
    name
    firstName
    lastName
    email
    image
    provider
    postLikes
    commentLikes
    blogger
    blog {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    createdAt
    updatedAt
    userBlogId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customId
      name
      firstName
      lastName
      email
      image
      provider
      postLikes
      commentLikes
      blogger
      createdAt
      updatedAt
      userBlogId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    logo
    darkLogo
    subscriber
    userId
    user {
      id
      customId
      name
      firstName
      lastName
      email
      image
      provider
      postLikes
      commentLikes
      blogger
      createdAt
      updatedAt
      userBlogId
      __typename
    }
    about {
      id
      title
      logo
      content
      email
      linkedIn
      instagram
      twitter
      blogId
      createdAt
      updatedAt
      __typename
    }
    posts {
      nextToken
      __typename
    }
    audios {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    interimBloggers
    createdAt
    updatedAt
    blogAboutId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const getAbout = /* GraphQL */ `query GetAbout($id: ID!) {
  getAbout(id: $id) {
    id
    title
    logo
    content
    email
    linkedIn
    instagram
    twitter
    blogId
    blog {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAboutQueryVariables, APITypes.GetAboutQuery>;
export const listAbouts = /* GraphQL */ `query ListAbouts(
  $filter: ModelAboutFilterInput
  $limit: Int
  $nextToken: String
) {
  listAbouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      logo
      content
      email
      linkedIn
      instagram
      twitter
      blogId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAboutsQueryVariables,
  APITypes.ListAboutsQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    category
    title
    description
    captionText
    content
    descriptionImage
    captionImage
    likes
    views
    status
    publishedAt
    expireAt
    blogId
    blog {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    comments {
      nextToken
      __typename
    }
    audio {
      id
      duration
      filePath
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    postAudioId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      title
      description
      captionText
      content
      descriptionImage
      captionImage
      likes
      views
      status
      publishedAt
      expireAt
      blogId
      createdAt
      updatedAt
      postAudioId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    name
    picture
    content
    subComment
    parentComment
    likes
    blogId
    blog {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    postId
    post {
      id
      category
      title
      description
      captionText
      content
      descriptionImage
      captionImage
      likes
      views
      status
      publishedAt
      expireAt
      blogId
      createdAt
      updatedAt
      postAudioId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      picture
      content
      subComment
      parentComment
      likes
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getAudio = /* GraphQL */ `query GetAudio($id: ID!) {
  getAudio(id: $id) {
    id
    duration
    filePath
    blogId
    blog {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    postId
    post {
      id
      category
      title
      description
      captionText
      content
      descriptionImage
      captionImage
      likes
      views
      status
      publishedAt
      expireAt
      blogId
      createdAt
      updatedAt
      postAudioId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAudioQueryVariables, APITypes.GetAudioQuery>;
export const listAudio = /* GraphQL */ `query ListAudio(
  $filter: ModelAudioFilterInput
  $limit: Int
  $nextToken: String
) {
  listAudio(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      duration
      filePath
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListAudioQueryVariables, APITypes.ListAudioQuery>;
export const getUserByEmail = /* GraphQL */ `query GetUserByEmail(
  $email: String!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByEmail(
    email: $email
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      customId
      name
      firstName
      lastName
      email
      image
      provider
      postLikes
      commentLikes
      blogger
      createdAt
      updatedAt
      userBlogId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserByEmailQueryVariables,
  APITypes.GetUserByEmailQuery
>;
export const getBlogByUser = /* GraphQL */ `query GetBlogByUser(
  $userId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  getBlogByUser(
    userId: $userId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      logo
      darkLogo
      subscriber
      userId
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlogByUserQueryVariables,
  APITypes.GetBlogByUserQuery
>;
export const getAboutByBlog = /* GraphQL */ `query GetAboutByBlog(
  $blogId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAboutFilterInput
  $limit: Int
  $nextToken: String
) {
  getAboutByBlog(
    blogId: $blogId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      logo
      content
      email
      linkedIn
      instagram
      twitter
      blogId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAboutByBlogQueryVariables,
  APITypes.GetAboutByBlogQuery
>;
export const fetchPostsByBlog = /* GraphQL */ `query FetchPostsByBlog(
  $blogId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  fetchPostsByBlog(
    blogId: $blogId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      category
      title
      description
      captionText
      content
      descriptionImage
      captionImage
      likes
      views
      status
      publishedAt
      expireAt
      blogId
      createdAt
      updatedAt
      postAudioId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FetchPostsByBlogQueryVariables,
  APITypes.FetchPostsByBlogQuery
>;
export const fetchCommentsByBlog = /* GraphQL */ `query FetchCommentsByBlog(
  $blogId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  fetchCommentsByBlog(
    blogId: $blogId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      picture
      content
      subComment
      parentComment
      likes
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FetchCommentsByBlogQueryVariables,
  APITypes.FetchCommentsByBlogQuery
>;
export const fetchCommentsByPost = /* GraphQL */ `query FetchCommentsByPost(
  $postId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  fetchCommentsByPost(
    postId: $postId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      picture
      content
      subComment
      parentComment
      likes
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FetchCommentsByPostQueryVariables,
  APITypes.FetchCommentsByPostQuery
>;
export const fetchAudiosByBlog = /* GraphQL */ `query FetchAudiosByBlog(
  $blogId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAudioFilterInput
  $limit: Int
  $nextToken: String
) {
  fetchAudiosByBlog(
    blogId: $blogId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      duration
      filePath
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FetchAudiosByBlogQueryVariables,
  APITypes.FetchAudiosByBlogQuery
>;
export const getAudioByPost = /* GraphQL */ `query GetAudioByPost(
  $postId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAudioFilterInput
  $limit: Int
  $nextToken: String
) {
  getAudioByPost(
    postId: $postId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      duration
      filePath
      blogId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAudioByPostQueryVariables,
  APITypes.GetAudioByPostQuery
>;
