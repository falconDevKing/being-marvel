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
        darkLogo
        subscriber
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
        darkLogo
        subscriber
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
        darkLogo
        subscriber
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
      darkLogo
      subscriber
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
        blog {
          id
          name
          logo
          darkLogo
          subscriber
          userId
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
      darkLogo
      subscriber
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
        blog {
          id
          name
          logo
          darkLogo
          subscriber
          userId
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
      darkLogo
      subscriber
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
        blog {
          id
          name
          logo
          darkLogo
          subscriber
          userId
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
        createdAt
        updatedAt
        blogAboutId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAbout = /* GraphQL */ `
  subscription OnUpdateAbout($filter: ModelSubscriptionAboutFilterInput) {
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
        createdAt
        updatedAt
        blogAboutId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAbout = /* GraphQL */ `
  subscription OnDeleteAbout($filter: ModelSubscriptionAboutFilterInput) {
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
        createdAt
        updatedAt
        blogAboutId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
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
        createdAt
        updatedAt
        blogAboutId
      }
      comments {
        items {
          id
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
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
        createdAt
        updatedAt
        blogAboutId
      }
      comments {
        items {
          id
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
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
        createdAt
        updatedAt
        blogAboutId
      }
      comments {
        items {
          id
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
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
export const onCreateAudio = /* GraphQL */ `
  subscription OnCreateAudio($filter: ModelSubscriptionAudioFilterInput) {
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
export const onUpdateAudio = /* GraphQL */ `
  subscription OnUpdateAudio($filter: ModelSubscriptionAudioFilterInput) {
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
export const onDeleteAudio = /* GraphQL */ `
  subscription OnDeleteAudio($filter: ModelSubscriptionAudioFilterInput) {
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
