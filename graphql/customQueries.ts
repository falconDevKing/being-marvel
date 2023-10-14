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
        blogId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
