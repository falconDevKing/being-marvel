/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreateAbout = /* GraphQL */ `
  subscription OnCreateAbout($filter: ModelSubscriptionAboutFilterInput) {
    onCreateAbout(filter: $filter) {
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
export const onUpdateAbout = /* GraphQL */ `
  subscription OnUpdateAbout($filter: ModelSubscriptionAboutFilterInput) {
    onUpdateAbout(filter: $filter) {
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
export const onDeleteAbout = /* GraphQL */ `
  subscription OnDeleteAbout($filter: ModelSubscriptionAboutFilterInput) {
    onDeleteAbout(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateAudio = /* GraphQL */ `
  subscription OnCreateAudio($filter: ModelSubscriptionAudioFilterInput) {
    onCreateAudio(filter: $filter) {
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
export const onUpdateAudio = /* GraphQL */ `
  subscription OnUpdateAudio($filter: ModelSubscriptionAudioFilterInput) {
    onUpdateAudio(filter: $filter) {
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
export const onDeleteAudio = /* GraphQL */ `
  subscription OnDeleteAudio($filter: ModelSubscriptionAudioFilterInput) {
    onDeleteAudio(filter: $filter) {
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
