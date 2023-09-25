/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      customId
      name
      email
      password
      image
      provider
      id_token
      access_token
      postLikes
      commentLikes
      blogger
      blog {
        id
        name
        logo
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      createdAt
      updatedAt
      userBlogId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customId
        name
        email
        password
        image
        provider
        id_token
        access_token
        postLikes
        commentLikes
        blogger
        createdAt
        updatedAt
        userBlogId
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      logo
      userId
      user {
        id
        customId
        name
        email
        password
        image
        provider
        id_token
        access_token
        postLikes
        commentLikes
        blogger
        createdAt
        updatedAt
        userBlogId
      }
      about {
        id
        blogId
        title
        logo
        content
        email
        linkedIn
        instagram
        twitter
        createdAt
        updatedAt
      }
      posts {
        nextToken
      }
      audios {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      blogAboutId
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      nextToken
    }
  }
`;
export const getAbout = /* GraphQL */ `
  query GetAbout($id: ID!) {
    getAbout(id: $id) {
      id
      blogId
      blog {
        id
        name
        logo
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      title
      logo
      content
      email
      linkedIn
      instagram
      twitter
      createdAt
      updatedAt
    }
  }
`;
export const listAbouts = /* GraphQL */ `
  query ListAbouts(
    $filter: ModelAboutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogId
        title
        logo
        content
        email
        linkedIn
        instagram
        twitter
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      blogId
      blog {
        id
        name
        logo
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      category
      title
      description
      captionText
      captionImage
      likes
      views
      status
      publishedAt
      expireAt
      comments {
        nextToken
      }
      audio {
        id
        blogId
        postId
        duration
        filePath
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postAudioId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogId
        category
        title
        description
        captionText
        captionImage
        likes
        views
        status
        publishedAt
        expireAt
        createdAt
        updatedAt
        postAudioId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      blogId
      blog {
        id
        name
        logo
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      postId
      post {
        id
        blogId
        category
        title
        description
        captionText
        captionImage
        likes
        views
        status
        publishedAt
        expireAt
        createdAt
        updatedAt
        postAudioId
      }
      content
      subComment
      parentComment
      likes
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogId
        postId
        content
        subComment
        parentComment
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAudio = /* GraphQL */ `
  query GetAudio($id: ID!) {
    getAudio(id: $id) {
      id
      blogId
      blog {
        id
        name
        logo
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      postId
      post {
        id
        blogId
        category
        title
        description
        captionText
        captionImage
        likes
        views
        status
        publishedAt
        expireAt
        createdAt
        updatedAt
        postAudioId
      }
      duration
      filePath
      createdAt
      updatedAt
    }
  }
`;
export const listAudio = /* GraphQL */ `
  query ListAudio(
    $filter: ModelAudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudio(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogId
        postId
        duration
        filePath
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
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
        email
        password
        image
        provider
        id_token
        access_token
        postLikes
        commentLikes
        blogger
        createdAt
        updatedAt
        userBlogId
      }
      nextToken
    }
  }
`;
export const getBlogByUser = /* GraphQL */ `
  query GetBlogByUser(
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
        userId
        createdAt
        updatedAt
        blogAboutId
      }
      nextToken
    }
  }
`;
export const getAboutByBlog = /* GraphQL */ `
  query GetAboutByBlog(
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
        blogId
        title
        logo
        content
        email
        linkedIn
        instagram
        twitter
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const fetchPostsByBlog = /* GraphQL */ `
  query FetchPostsByBlog(
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
        blogId
        category
        title
        description
        captionText
        captionImage
        likes
        views
        status
        publishedAt
        expireAt
        createdAt
        updatedAt
        postAudioId
      }
      nextToken
    }
  }
`;
export const fetchCommentsByBlog = /* GraphQL */ `
  query FetchCommentsByBlog(
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
        blogId
        postId
        content
        subComment
        parentComment
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const fetchCommentsByPost = /* GraphQL */ `
  query FetchCommentsByPost(
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
        blogId
        postId
        content
        subComment
        parentComment
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const fetchAudiosByBlog = /* GraphQL */ `
  query FetchAudiosByBlog(
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
        blogId
        postId
        duration
        filePath
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAudioByPost = /* GraphQL */ `
  query GetAudioByPost(
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
        blogId
        postId
        duration
        filePath
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
