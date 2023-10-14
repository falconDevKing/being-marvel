import { Box } from "@mui/material";
import Layout from "../../components/blogger/BloggerLayout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/router";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import { useAppSelector } from "../../redux/hooks";
import { AuthUserData } from "../../interfaces/auth";
import { useEffect, useState } from "react";
import { fetchBlogCommentsStats, fetchBlogPostsStats } from "../../services/post";

// TODO:  Work on comments
// TODO:  Work on dynamic blog content, home page about contact etc

const Dashboard = () => {
  const router = useRouter();

  const { id: blogId } = useAppSelector((state) => state.blog.blog);
  const userData: AuthUserData = useAppSelector((state) => state.auth.userData);
  const { name, picture, email } = userData;

  const navToBlogger = (section: string) => {
    router.push("/blogger/" + section);
  };

  const [numberOfPosts, setNumberOfPosts] = useState<number>(1);
  const [numberOfLikes, setNumberOfLikes] = useState<number>(0);
  const [numberOfViews, setNumberOfViews] = useState<number>(0);
  const [numberOfComments, setNumberOfComments] = useState<number>(0);

  const stats = [
    {
      Icon: TimelineRoundedIcon,
      figure: numberOfPosts,
      metric: "Number of Blog Posts",
    },
    {
      Icon: FavoriteRoundedIcon,
      figure: numberOfLikes / (numberOfPosts || 1),
      metric: "Average like per post",
    },
    {
      Icon: ForumRoundedIcon,
      figure: numberOfComments / (numberOfPosts || 1),
      metric: "Average comment per post",
    },
    {
      Icon: VisibilityRoundedIcon,
      figure: numberOfViews / (numberOfPosts || 1),
      metric: "Average views per post",
    },
  ];

  useEffect(() => {
    const getBlogStats = async (blogId: string) => {
      const blogPostsStats = await fetchBlogPostsStats(blogId);
      const blogPostsCommentsStats = await fetchBlogCommentsStats(blogId);

      setNumberOfPosts(blogPostsStats.length);

      let views = 0;
      let likes = 0;

      blogPostsStats.forEach((blogPost) => {
        views += blogPost?.views || 0;
        likes += blogPost?.likes || 0;
      });

      setNumberOfComments(blogPostsCommentsStats.length);
      blogPostsCommentsStats.forEach((blogPostsComment) => {
        likes += blogPostsComment.likes;
      });

      setNumberOfLikes(likes);
      setNumberOfViews(views);
    };

    getBlogStats(blogId as string);
  }, []);

  return (
    <Layout>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} py={2}>
          <Box>
            <Box fontSize={"1.5rem"} fontWeight={700}>
              Welcome back, {name}!
            </Box>
            <Box fontSize={"1.2rem"} color="#C0C0C0">
              Lorem ipsum dolor sit amet, consecte turcing elit.{" "}
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={1}
            onClick={() => navToBlogger("new-blog")}
            bgcolor={"#fff"}
            width="max-content"
            fontWeight={700}
            sx={{ cursor: "pointer" }}
          >
            <AddCircleOutlineIcon color="primary" />
            <Box component="span" px={1}>
              Create a new Blog
            </Box>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent={"space-between"} flexWrap={"wrap"} my={1}>
          {stats.map((stat, index) => {
            const { Icon, figure, metric } = stat;
            return (
              <Box display="flex" bgcolor={"#fff"} width="48%" my={1} p={2} key={index}>
                <Box width="40%">
                  <Icon color="primary" sx={{ fontSize: "108px", bgcolor: "#F4F7FD", borderRadius: "50%", p: 2 }} />
                </Box>
                <Box textAlign={"center"} width="100%">
                  <Box fontSize="2rem" fontWeight={700}>
                    {figure}
                  </Box>
                  <Box fontSize="1.5rem">{metric}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
