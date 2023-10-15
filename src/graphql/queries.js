/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const genericMailSender = /* GraphQL */ `
  query GenericMailSender(
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
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
      posts {
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
        }
        nextToken
      }
      audios {
        items {
          id
          duration
          filePath
          blogId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
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
        }
        nextToken
      }
      interimBloggers
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
      nextToken
    }
  }
`;
export const getAbout = /* GraphQL */ `
  query GetAbout($id: ID!) {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
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
      comments {
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
        }
        nextToken
      }
      audio {
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
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
          blogId
          createdAt
          updatedAt
          postAudioId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
