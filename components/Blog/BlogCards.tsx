import { Box, Pagination, Stack } from "@mui/material";
import BlogCard from "./BlogCard";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { IPostSummary } from "../../interfaces/blog";
import Input from "../Input";
import dayjs from "dayjs";
import ISelect from "../ISelect";

const BlogCards = () => {
  const [page, setPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(12);
  const [postsToShow, setPostsToShow] = useState<IPostSummary[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const postsSummary = useAppSelector((state) => state.blog.postsSummary);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e", event?.target?.value, event?.target, event);
    setCategory(event.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const selectPosts = useCallback(() => {
    const searchedPublishedPosts = [...postsSummary]
      .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()) && post.status)
      .sort((a, b) => {
        const atime = a.publishedAt;
        const btime = b.publishedAt;
        const alikes = a.likes;
        const blikes = b.likes;

        if (category === "older") {
          return dayjs(atime).isAfter(btime) ? 1 : -1;
        }

        if (category === "liked") {
          return blikes - alikes;
        }

        return dayjs(atime).isAfter(btime) ? -1 : 1;
      });
    setPaginationCount(Math.ceil(searchedPublishedPosts.length / ItemsPerPage));

    const toDisplay = [...searchedPublishedPosts]?.slice((page - 1) * ItemsPerPage, page * ItemsPerPage);
    setPostsToShow(toDisplay);
  }, [page, ItemsPerPage, postsSummary, search, category]);

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  return (
    <Box width={"85%"} mx="auto" my={2}>
      <Box display={"flex"} justifyContent={"space-between"} flexDirection={{ xs: "column", md: "row" }} alignItems={"center"}>
        <Box>
          <Box fontWeight={700} fontSize={"1.8rem"}>
            MY BLOG POSTS
          </Box>
          {/* <Box color="#D8D6D6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Box> */}
        </Box>

        <Box display={"flex"} color="#C0C0C0" flexDirection={{ xs: "column-reverse", sm: "row" }} width={{ xs: "100%", md: "50%" }}>
          <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
            <SearchIcon />
            <Input
              type="text"
              id="searchBlogs"
              placeholder="Search Blogs"
              name="searchBlogs"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e?.target?.value);
              }}
            />
          </Box>

          <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
            <SortIcon />
            <ISelect
              id="sort"
              name="sort"
              value={category}
              onChange={handleCategoryChange}
              options={[
                { name: "Sort by", value: "" },
                { name: "Recent posts", value: "recent" },
                { name: "Older posts", value: "older" },
                { name: "Most liked posts", value: "liked" },
              ]}
            />
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
