/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const createAbout = /* GraphQL */ `mutation CreateAbout(
  $input: CreateAboutInput!
  $condition: ModelAboutConditionInput
) {
  createAbout(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAboutMutationVariables,
  APITypes.CreateAboutMutation
>;
export const updateAbout = /* GraphQL */ `mutation UpdateAbout(
  $input: UpdateAboutInput!
  $condition: ModelAboutConditionInput
) {
  updateAbout(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAboutMutationVariables,
  APITypes.UpdateAboutMutation
>;
export const deleteAbout = /* GraphQL */ `mutation DeleteAbout(
  $input: DeleteAboutInput!
  $condition: ModelAboutConditionInput
) {
  deleteAbout(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAboutMutationVariables,
  APITypes.DeleteAboutMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createAudio = /* GraphQL */ `mutation CreateAudio(
  $input: CreateAudioInput!
  $condition: ModelAudioConditionInput
) {
  createAudio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAudioMutationVariables,
  APITypes.CreateAudioMutation
>;
export const updateAudio = /* GraphQL */ `mutation UpdateAudio(
  $input: UpdateAudioInput!
  $condition: ModelAudioConditionInput
) {
  updateAudio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAudioMutationVariables,
  APITypes.UpdateAudioMutation
>;
export const deleteAudio = /* GraphQL */ `mutation DeleteAudio(
  $input: DeleteAudioInput!
  $condition: ModelAudioConditionInput
) {
  deleteAudio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAudioMutationVariables,
  APITypes.DeleteAudioMutation
>;
