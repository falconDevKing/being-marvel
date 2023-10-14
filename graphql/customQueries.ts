export const customFetchPostsByBlog = /* GraphQL */ `
  query customFetchPostsByBlog(
    $blogId: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fetchPostsByBlog(blogId: $blogId, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        title
        description
        descriptionImage
        status
        publishedAt
        expireAt
        blogId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const customFetchPostsStatsByBlog = /* GraphQL */ `
  query customFetchPostsStatsByBlog(
    $blogId: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fetchPostsByBlog(blogId: $blogId, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogId
        likes
        views
      }
      nextToken
    }
  }
`;

export const customFetchCommentsStatsByBlog = /* GraphQL */ `
  query customFetchCommentsStatsByBlog(
    $blogId: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fetchCommentsByBlog(blogId: $blogId, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogId
        postId
        likes
      }
      nextToken
    }
  }
`;
