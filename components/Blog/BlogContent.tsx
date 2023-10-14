import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { addBlogPostLike } from "../../services/post";
import { SuccessHandler } from "../../utils/handlers";

interface BlogPostProps {
  postId: string;
  content: string;
  postLikes: number;
}

const BlogPost = ({ postId, postLikes, content }: BlogPostProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (!liked) {
      await addBlogPostLike(postId, +postLikes + 1);
    }
    setLiked((prev) => !prev);
  };

  return (
    <Box bgcolor={"#F4F7FD"} p={4} borderRadius={"16px"} fontSize={"24px"}>
      <div dangerouslySetInnerHTML={{ __html: content as string }}></div>

      <Box borderTop={1} borderColor={"#B6B9C0"} display={"flex"} alignItems={"center"} mt={2} p={1} justifyContent={"flex-end"}>
        <Box px={2} color="#C0C0C0">
          Like this Post
        </Box>
        {liked ? (
          <FavoriteIcon sx={{ color: "red", borderRadius: "50%", p: "2px" }} onClick={handleLike} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "#6289E0", backgroundColor: "#fff", borderRadius: "50%", p: "2px" }} onClick={handleLike} />
        )}
      </Box>
    </Box>
  );
};

export default BlogPost;
