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

dayjs.extend(relativeTime);

type SubCommentsCardProps = {
  subComment: IPostCommentData;
};

const SubCommentsCard = ({ subComment }: SubCommentsCardProps) => {
  const { userData, isAuthenticated, userDetails } = useAppSelector((state) => state.auth);
  const { id, name, picture, content, createdAt, likes } = subComment;

  const userId = userDetails?.id;
  const commentLikes = userDetails?.commentLikes;
  const [liked, setLiked] = useState(commentLikes?.includes(id) || false);

  const likeHandler = async () => {
    SuccessHandler({ message: "Liking" });
    await addPostCommentLike(id, +(likes as number) + 1, userId as string, commentLikes as string[]);
    setLiked((prev) => !prev);
  };

  const unLikeHandler = async () => {
    const removedLike = [...(commentLikes || [])].filter((commentLike) => commentLike !== id);

    await removePostCommentLike(userId as string, removedLike as string[]);

    setLiked(false);
  };

  return (
    <Box border="1px solid #C0C0C0" p={2} borderRadius={"16px"} display={"flex"} my={"2px"} width="95%">
      <Box width="60px" height="60px">
        <Image src={picture as string} alt={`${name as string} picture`} layout="responsive" width={148} height={148} style={{ borderRadius: "50%" }} />
      </Box>
      <Box px={2} width="100%">
        <Box>{name}</Box>
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
