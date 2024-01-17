/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
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
      }
      createdAt
      updatedAt
      userBlogId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
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
      }
      createdAt
      updatedAt
      userBlogId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
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
      }
      createdAt
      updatedAt
      userBlogId
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
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
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
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
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
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
      interimBloggers
      createdAt
      updatedAt
      blogAboutId
    }
  }
`;
export const createAbout = /* GraphQL */ `
  mutation CreateAbout($input: CreateAboutInput!, $condition: ModelAboutConditionInput) {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAbout = /* GraphQL */ `
  mutation UpdateAbout($input: UpdateAboutInput!, $condition: ModelAboutConditionInput) {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAbout = /* GraphQL */ `
  mutation DeleteAbout($input: DeleteAboutInput!, $condition: ModelAboutConditionInput) {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
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
      customLink
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
      }
      comments {
        nextToken
      }
      audio {
        id
        duration
        filePath
        blogId
        postId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postAudioId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
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
      customLink
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
      }
      comments {
        nextToken
      }
      audio {
        id
        duration
        filePath
        blogId
        postId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postAudioId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
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
      customLink
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
      }
      comments {
        nextToken
      }
      audio {
        id
        duration
        filePath
        blogId
        postId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postAudioId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
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
        customLink
        blogId
        createdAt
        updatedAt
        postAudioId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
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
        customLink
        blogId
        createdAt
        updatedAt
        postAudioId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
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
        customLink
        blogId
        createdAt
        updatedAt
        postAudioId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAudio = /* GraphQL */ `
  mutation CreateAudio($input: CreateAudioInput!, $condition: ModelAudioConditionInput) {
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
        customLink
        blogId
        createdAt
        updatedAt
        postAudioId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAudio = /* GraphQL */ `
  mutation UpdateAudio($input: UpdateAudioInput!, $condition: ModelAudioConditionInput) {
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
        customLink
        blogId
        createdAt
        updatedAt
        postAudioId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAudio = /* GraphQL */ `
  mutation DeleteAudio($input: DeleteAudioInput!, $condition: ModelAudioConditionInput) {
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
        customLink
        blogId
        createdAt
        updatedAt
        postAudioId
      }
      createdAt
      updatedAt
    }
  }
`;
