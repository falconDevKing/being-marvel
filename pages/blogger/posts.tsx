import { Box, Pagination, Stack, Tooltip } from "@mui/material";
import Layout from "../../components/blogger/BloggerLayout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/router";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SearchIcon from "@mui/icons-material/Search";
import PreviewIcon from "@mui/icons-material/Preview";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import ReplayIcon from "@mui/icons-material/Replay";
import Image from "next/image";
import { AuthUserData } from "../../interfaces/auth";
import { useAppSelector } from "../../redux/hooks";
import { IPostSummary } from "../../interfaces/blog";
import dayjs from "dayjs";
import { deletePost, publishPost, unPublishPost } from "../../services/post";
import { useCallback, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "../../components/Input";

const Posts = () => {
  const router = useRouter();

  const userData: AuthUserData = useAppSelector((state) => state.auth.userData);
  const postsSummary: IPostSummary[] = useAppSelector((state) => state.blog.postsSummary);
  const { name, picture, email } = userData;

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(12);
  const [postsToShow, setPostsToShow] = useState<IPostSummary[]>([]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const previewPostHandler = (id: string) => {
    router.push("/blogger/preview/" + id);
  };

  const editPostHandler = (id: string) => {
    router.push("/blogger/edit-post/" + id);
  };

  const publishPostHandler = async (id: string, blogId: string) => {
    setLoading(true);
    await publishPost(id, blogId);
    setLoading(false);
  };

  const unPublishPostHandler = async (id: string, blogId: string) => {
    setLoading(true);
    await unPublishPost(id, blogId);
    setLoading(false);
  };

  const recoverPostHandler = async (id: string, blogId: string) => {
    setLoading(true);
    await unPublishPost(id, blogId);
    setLoading(false);
  };

  const deletePostHandler = async (id: string, blogId: string) => {
    setLoading(true);
    await deletePost(id, blogId);
    setLoading(false);
  };

  const selectPosts = useCallback(() => {
    const searchedPosts = [...postsSummary].filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

    setPaginationCount(Math.ceil(searchedPosts.length / ItemsPerPage));

    const toDisplay = [...searchedPosts]?.slice((page - 1) * ItemsPerPage, page * ItemsPerPage);
    setPostsToShow(toDisplay);
  }, [page, ItemsPerPage, postsSummary, search]);

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  return (
    <Layout>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} py={2} flexDirection={{ xs: "column", sm: "row" }}>
          <Box>
            <Box fontSize={"1.5rem"} fontWeight={700}>
              Welcome back, {name}!
            </Box>
            <Box fontSize={"1.2rem"} color="#C0C0C0">
              Lorem ipsum dolor sit amet, consecte turcing elit.{" "}
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#fff"} m={1} borderRadius={"4px"}>
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
              style={{
                backgroundColor: "#fff",
              }}
            />
          </Box>
        </Box>

        <Box width="100%" my={1}>
          <Box px={2} py={1} width="100%" display={{ xs: "none", md: "flex" }} justifyContent={"space-around"} alignItems={"center"} bgcolor="#fff" my={"2px"}>
            <Box width="50%">Blog Post </Box>
            <Box width="15%" textAlign={"center"}>
              Date Published
            </Box>
            <Box width="15%" textAlign={"center"}>
              Status
            </Box>
            <Box width="15%" textAlign={"center"}>
              Action
            </Box>
          </Box>

          {postsToShow
            .sort((a, b) => (dayjs(a?.createdAt).isAfter(b.createdAt) ? -1 : 1))
            .map((postSummary) => {
              const { id, title, publishedAt, description, status, descriptionImage, expireAt, blogId } = postSummary;

              return (
                <Box
                  key={id}
                  px={2}
                  py={1}
                  width="100%"
                  display="flex"
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  bgcolor="#fff"
                  my={"2px"}
                  flexDirection={{ xs: "column", md: "row" }}
                >
                  <Box width={{ xs: "100%", md: "50%" }} display={"flex"} p={1} alignItems={"center"} height="100%">
                    <Box width={{ xs: "35%", sm: "25%", md: "20%" }}>
                      <Image
                        src={descriptionImage}
                        alt={`${title} image`}
                        layout="responsive"
                        width={60}
                        height={60}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </Box>

                    <Box px={2} width={{ xs: "65%", md: "70%" }}>
                      <Box fontSize={"1.5rem"} fontWeight={700}>
                        {title}
                      </Box>
                      <Box>{description}</Box>
                    </Box>
                  </Box>

                  <Box display="flex" width={{ xs: "100%", md: "50%" }} flexDirection={{ xs: "column", sm: "row" }} justifyContent={{ xs: "space-between" }}>
                    <Box
                      display="flex"
                      justifyContent={{ xs: "space-between", md: "space-around" }}
                      flexDirection={{ xs: "row-reverse", md: "row" }}
                      alignItems={"center"}
                      width={{ xs: "100%", sm: "60%" }}
                      ml={{ xs: 0, md: 3 }}
                    >
                      <Box width={{ xs: "30%" }} textAlign={"center"}>
                        {status ? dayjs(publishedAt).format("DD MMM, YYYY") : ""}
                      </Box>

                      <Box width={{ xs: "30%" }} display="flex" justifyContent={"center"}>
                        <Box bgcolor={"#F4F7FD"} p={1} width={"max-content"}>
                          {status ? "Published" : expireAt && expireAt != 1171734022 ? "Expiring" : "Draft"}
                        </Box>
                      </Box>
                    </Box>

                    <Stack width={{ xs: "100%", sm: "30%" }} direction={"row"} justifyContent={"center"} spacing={1} my={{ xs: 2, md: 0 }}>
                      {loading ? (
                        <CircularProgress />
                      ) : (
                        <>
                          {status ? (
                            <Tooltip title="Unpublish">
                              <DoDisturbOnIcon
                                fontSize="large"
                                sx={{ color: "#FCD436FF", cursor: "pointer" }}
                                onClick={() => {
                                  unPublishPostHandler(id, blogId);
                                }}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Publish">
                              <LibraryAddCheckIcon
                                fontSize="large"
                                sx={{ color: "green", cursor: "pointer" }}
                                onClick={() => {
                                  publishPostHandler(id, blogId);
                                }}
                              />
                            </Tooltip>
                          )}

                          <Tooltip title="Preview">
                            <PreviewIcon
                              fontSize="large"
                              sx={{ color: "#95A8D3", cursor: "pointer" }}
                              onClick={() => {
                                previewPostHandler(id);
                              }}
                            />
                          </Tooltip>
                          <Tooltip title="Edit">
                            <EditNoteRoundedIcon
                              fontSize="large"
                              sx={{ color: "#6E87DC", cursor: "pointer" }}
                              onClick={() => {
                                editPostHandler(id);
                              }}
                            />
                          </Tooltip>

                          {expireAt && expireAt != 1171734022 ? (
                            <Tooltip title="Recover">
                              <ReplayIcon
                                fontSize="large"
                                sx={{ color: "#FF000077", cursor: "pointer" }}
                                onClick={() => {
                                  recoverPostHandler(id, blogId);
                                }}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Delete">
                              <DeleteForeverRoundedIcon
                                fontSize="large"
                                sx={{ color: "#FF000077", cursor: "pointer" }}
                                onClick={() => {
                                  deletePostHandler(id, blogId);
                                }}
                              />
                            </Tooltip>
                          )}
                        </>
                      )}
                    </Stack>
                  </Box>
                </Box>
              );
            })}
          <Box justifyContent={"center"} display={"flex"} py={2}>
            <Pagination count={paginationCount} page={page} onChange={handlePageChange} color="primary" showFirstButton showLastButton />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Posts;
