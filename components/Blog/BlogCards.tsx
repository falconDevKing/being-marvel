import { Box, Pagination, Stack } from "@mui/material";
import BlogCard from "./BlogCard";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { IPostSummary } from "../../interfaces/blog";

const BlogCards = () => {
  const [page, setPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(12);
  const [postsToShow, setPostsToShow] = useState<IPostSummary[]>([]);

  const postsSummary = useAppSelector((state) => state.blog.postsSummary);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const selectPosts = useCallback(() => {
    setPaginationCount(Math.ceil(postsSummary.length / ItemsPerPage));

    const publishedPosts = postsSummary.filter((postSummary) => postSummary.status);

    const toDisplay = [...publishedPosts]?.slice((page - 1) * ItemsPerPage, page * ItemsPerPage);
    setPostsToShow(toDisplay);
  }, [page, ItemsPerPage, postsSummary]);

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  return (
    <Box width={"85%"} mx="auto" my={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Box fontWeight={700} fontSize={"1.8rem"}>
            MY BLOG POSTS
          </Box>
          <Box color="#D8D6D6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Box>
        </Box>
        <Box display={"flex"} color="#C0C0C0">
          <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"}>
            <SearchIcon />
            <input
              id="searchBlogs"
              placeholder="Search Blogs"
              style={{
                color: "#C0C0C0",
                padding: "4px 8px",
                height: "40px",
                borderRadius: "4px 0px 0px 4px",
                outline: "none",
                border: "none",
                width: "100%",
                fontSize: "1.25rem",
                fontFamily: "Cormorant Garamond",
                backgroundColor: "#f4f7fd",
              }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} my={1} borderRadius={"4px"}>
            <SortIcon />
            <select
              name="sort"
              style={{
                color: "#C0C0C0",
                padding: "4px 8px",
                height: "40px",
                borderRadius: "4px 0px 0px 4px",
                outline: "none",
                border: "none",
                width: "100%",
                fontSize: "1.25rem",
                fontFamily: "Cormorant Garamond",
                backgroundColor: "#f4f7fd",
              }}
            >
              <option style={{ color: "#2C2C2C" }} value="">
                Sort by
              </option>
              <option style={{ color: "#2C2C2C" }} value="recent">
                Recent posts
              </option>
              <option style={{ color: "#2C2C2C" }} value="older">
                Older posts
              </option>
              <option style={{ color: "#2C2C2C" }} value="featured">
                Featured posts
              </option>
              <option style={{ color: "#2C2C2C" }} value="liked">
                Most liked posts
              </option>
            </select>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"row"} py={4} flexWrap="wrap">
        {postsToShow.map((post, index) => {
          return <BlogCard key={index} postData={post} />;
        })}
      </Box>

      <Box justifyContent={"center"} display={"flex"} py={2}>
        <Pagination count={paginationCount} page={page} onChange={handlePageChange} color="primary" showFirstButton showLastButton />
      </Box>
    </Box>
  );
};

export default BlogCards;
