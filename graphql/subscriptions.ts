/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreateAbout = /* GraphQL */ `subscription OnCreateAbout($filter: ModelSubscriptionAboutFilterInput) {
  onCreateAbout(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAboutSubscriptionVariables,
  APITypes.OnCreateAboutSubscription
>;
export const onUpdateAbout = /* GraphQL */ `subscription OnUpdateAbout($filter: ModelSubscriptionAboutFilterInput) {
  onUpdateAbout(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAboutSubscriptionVariables,
  APITypes.OnUpdateAboutSubscription
>;
export const onDeleteAbout = /* GraphQL */ `subscription OnDeleteAbout($filter: ModelSubscriptionAboutFilterInput) {
  onDeleteAbout(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAboutSubscriptionVariables,
  APITypes.OnDeleteAboutSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateAudio = /* GraphQL */ `subscription OnCreateAudio($filter: ModelSubscriptionAudioFilterInput) {
  onCreateAudio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAudioSubscriptionVariables,
  APITypes.OnCreateAudioSubscription
>;
export const onUpdateAudio = /* GraphQL */ `subscription OnUpdateAudio($filter: ModelSubscriptionAudioFilterInput) {
  onUpdateAudio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAudioSubscriptionVariables,
  APITypes.OnUpdateAudioSubscription
>;
export const onDeleteAudio = /* GraphQL */ `subscription OnDeleteAudio($filter: ModelSubscriptionAudioFilterInput) {
  onDeleteAudio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAudioSubscriptionVariables,
  APITypes.OnDeleteAudioSubscription
>;
