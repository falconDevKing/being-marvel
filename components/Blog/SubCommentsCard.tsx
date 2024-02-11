import { Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ForumIcon from "@mui/icons-material/Forum";
import Image from "next/image";
import { transformText } from "../../utils/helper";
import { IPostCommentData } from "../../interfaces/post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { SuccessHandler } from "../../utils/handlers";
import { addPostCommentLike, removePostCommentLike } from "../../services/post";
import { Comment } from "../../graphql/API";
import DefaultProfileImage from "../../assets/defaultProfileImage.png";
dayjs.extend(relativeTime);

type SubCommentsCardProps = {
  subComment: Comment;
};

const SubCommentsCard = ({ subComment }: SubCommentsCardProps) => {
  const { userData, isAuthenticated, userDetails } = useAppSelector((state) => state.auth);
  const { id, name, picture, content, createdAt, likes, postId } = subComment;

  const userId = userDetails?.id;
  const userEmail = userDetails?.email as string;
  const commentLikes = userDetails?.commentLikes;
  const [liked, setLiked] = useState(commentLikes?.includes(id) || false);

  const likeHandler = async () => {
    SuccessHandler({ message: "Liking" });
    await addPostCommentLike(id, +(likes as number) + 1, postId, userId as string, commentLikes as string[], userEmail);
    setLiked((prev) => !prev);
  };

  const unLikeHandler = async () => {
    const removedLike = [...(commentLikes || [])].filter((commentLike) => commentLike !== id);

    await removePostCommentLike(userEmail, userId as string, removedLike as string[]);

    setLiked(false);
  };

  return (
    <Box border="1px solid #C0C0C0" p={2} borderRadius={"16px"} display={"flex"} my={"2px"} width="95%" flexDirection={{ xs: "column", sm: "row" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Box width={{ xs: "40px", sm: "60px" }} height={{ xs: "40px", sm: "60px" }}>
          <Image
            src={(picture as string) || DefaultProfileImage}
            alt={`${name} picture`}
            layout="responsive"
            width={148}
            height={148}
            style={{ borderRadius: "50%" }}
          />
        </Box>

        <Box fontWeight={500} display={{ xs: "block", sm: "none" }} px={2} fontSize={"1.2rem"}>
          {name}
        </Box>
      </Box>

      <Box px={{ xs: 0, sm: 2 }} width="100%">
        <Box fontWeight={500} display={{ xs: "none", sm: "block" }}>
          {name}
        </Box>

        <Box py={1}>{transformText(content as string)}</Box>

        <Box display={"flex"} justifyContent={"space-between"} width="100%">
          <Box display="flex" alignItems={"center"} color={"#C0C0C0"}>
            <Box display="flex" alignItems={"center"} px={1}>
              <AccessTimeIcon />
              <Box px={1}>{dayjs(createdAt).fromNow()}</Box>
            </Box>

            <Box display="flex" alignItems={"center"} color={"#C0C0C0"} px={1}>
              {likes ? (
                <Box display="flex" alignItems={"center"}>
                  <FavoriteIcon />
                  <Box px={1}>{likes} likes</Box>
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box display="flex" alignItems={"center"} color={"#C0C0C0"}>
            <Box px={1}>Like</Box>
            {liked ? (
              <FavoriteIcon sx={{ color: "red", borderRadius: "50%", p: "2px", cursor: "pointer" }} onClick={unLikeHandler} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#6289E0", backgroundColor: "#fff", borderRadius: "50%", p: "2px", cursor: "pointer" }} onClick={likeHandler} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubCommentsCard;
