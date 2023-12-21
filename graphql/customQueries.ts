import * as APITypes from "./API";

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

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
        likes
        publishedAt
        expireAt
        blogId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
` as GeneratedQuery<APITypes.FetchPostsByBlogQueryVariables, APITypes.FetchPostsByBlogQuery>;

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
` as GeneratedQuery<APITypes.FetchPostsByBlogQueryVariables, APITypes.FetchPostsByBlogQuery>;

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
` as GeneratedQuery<APITypes.FetchCommentsByBlogQueryVariables, APITypes.FetchCommentsByBlogQuery>;
