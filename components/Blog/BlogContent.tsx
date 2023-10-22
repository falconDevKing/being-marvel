import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { addBlogPostLike, removeBlogPostLike } from "../../services/post";
import { ErrorHandler, SuccessHandler } from "../../utils/handlers";
import { useAppSelector } from "../../redux/hooks";

interface BlogContentProps {
  postId: string;
  content: string;
  postLikes: number;
  preview: boolean;
}

const BlogContent = ({ postId, postLikes, content, preview }: BlogContentProps) => {
  const { userData, isAuthenticated, userDetails } = useAppSelector((state) => state.auth);

  const userId = userDetails?.id;
  const userEmail = userDetails?.email;
  const userPostLikes = userDetails?.postLikes;

  const [liked, setLiked] = useState(userPostLikes?.includes(postId) || false);

  const handleLike = async () => {
    if (preview) {
      ErrorHandler({ message: "Preview Mode, Action Disabled" });
      return;
    }
    await addBlogPostLike(userEmail as string, postId, +postLikes + 1, userId as string, userPostLikes as string[]);

    setLiked(true);
  };

  const handleUnLike = async () => {
    if (preview) {
      ErrorHandler({ message: "Preview Mode, Action Disabled" });
      return;
    }
    const removedLike = [...(userPostLikes || [])].filter((postLike) => postLike !== postId);

    await removeBlogPostLike(userEmail as string, userId as string, removedLike as string[]);

    setLiked(false);
  };

  useEffect(() => {
    const userPostLikes = userDetails?.postLikes;
    setLiked(userPostLikes?.includes(postId) || false);
  }, [userDetails, postId]);

  return (
    <Box bgcolor={"#F4F7FD"} p={4} borderRadius={"16px"} fontSize={"24px"}>
      <div dangerouslySetInnerHTML={{ __html: content as string }}></div>

      <Box borderTop={1} borderColor={"#B6B9C0"} display={"flex"} alignItems={"center"} mt={2} p={1} justifyContent={"flex-end"}>
        <Box px={2} color="#C0C0C0">
          Like this Post
        </Box>
        {liked ? (
          <FavoriteIcon sx={{ color: "red", borderRadius: "50%", p: "2px", cursor: "pointer" }} onClick={handleUnLike} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "#6289E0", backgroundColor: "#fff", borderRadius: "50%", p: "2px", cursor: "pointer" }} onClick={handleLike} />
        )}
      </Box>
    </Box>
  );
};

export default BlogContent;
