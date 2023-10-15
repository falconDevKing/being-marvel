import { Box, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import ForumIcon from "@mui/icons-material/Forum";
import Image from "next/image";
import SubCommentsCard from "./SubCommentsCard";
import { useState } from "react";
import { IPostCommentData } from "../../interfaces/post";
import { transformText } from "../../utils/helper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import TextArea from "../TextArea";
import { useAppSelector } from "../../redux/hooks";
import { v4 as uuidv4 } from "uuid";
import { addPostCommentLike, createBlogPostComment, getPostComments, removeBlogPostLike, removePostCommentLike } from "../../services/post";
import { ErrorHandler, SuccessHandler } from "../../utils/handlers";
dayjs.extend(relativeTime);

type CommentsCardProps = {
  comment: IPostCommentData;
  subComments: IPostCommentData[];
  postId: string;
  blogId: string;
};

const CommentsCard = ({ comment, subComments, postId, blogId }: CommentsCardProps) => {
  const { userData, isAuthenticated, userDetails } = useAppSelector((state) => state.auth);
  const { name: replyName, picture: replyPicture, email } = userData;

  const { id, name, picture, content, createdAt, likes } = comment;

  const [toComment, setToComment] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

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

  const replyHandler = async () => {
    if (isAuthenticated) {
      try {
        if (reply) {
          const replyData = {
            id: uuidv4(),
            name: replyName || "anonymous",
            picture: replyPicture || "",
            content: reply,
            likes: 0,
            blogId,
            postId,
            parentComment: comment?.id,
            subComment: true,
          };

          console.log({ replyData });

          await createBlogPostComment(replyData);

          setReply("");
          setToComment(false);
          await getPostComments(postId);
          SuccessHandler({ message: "Reply posted successfully" });
        } else {
          ErrorHandler({ message: "Kindly write a reply" });
        }
      } catch (error: any) {
        console.log("error posting reply", error);
        ErrorHandler({ message: error?.message || "Unable to post reply" });
      }
    } else {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    }
  };

  return (
    <Box py={1}>
      <Box border="1px solid #C0C0C0" p={2} borderRadius={"16px"} display={"flex"} my={1}>
        <Box width="60px" height="60px">
          <Image src={picture as string} alt={`${name} picture`} layout="responsive" width={148} height={148} style={{ borderRadius: "50%" }} />
        </Box>
        <Box px={2} width="100%">
          <Box fontWeight={500}>{name}</Box>
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
                {subComments?.length ? (
                  <Box display="flex" alignItems={"center"} px={1}>
                    <ForumIcon />
                    <Box px={1}>{subComments?.length || 0} replies</Box>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Box>
            <Box display="flex" alignItems={"center"} color={"#C0C0C0"}>
              <Box display="flex" alignItems={"center"} color={"#C0C0C0"} px={1}>
                <Box display="flex" alignItems={"center"}>
                  <Box px={1}>Like</Box>
                  {liked ? (
                    <FavoriteIcon sx={{ color: "red", borderRadius: "50%", p: "2px", cursor: "pointer" }} onClick={unLikeHandler} />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ color: "#6289E0", backgroundColor: "#fff", borderRadius: "50%", p: "2px", cursor: "pointer" }}
                      onClick={likeHandler}
                    />
                  )}
                </Box>
                <Box display="flex" alignItems={"center"} px={1} onClick={() => setToComment((prev) => !prev)} sx={{ cursor: "pointer" }}>
                  <Box px={1}>Reply</Box>
                  <ChatIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
        {(subComments || []).map((element, index) => (
          <SubCommentsCard key={index} subComment={element} />
        ))}
      </Box>
      {toComment && (
        <Box width={"85%"} mx="auto" my={2} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <TextArea
            id="reply"
            name="reply"
            value={reply}
            onChange={(e) => {
              setReply(e?.target?.value);
            }}
            placeholder="Reply to comment"
            rows={6}
            style={{
              color: "#302F2F",
              backgroundColor: "#fff",
              padding: "16px",
              outline: "1px solid",
              borderRadius: "8px",
            }}
          />
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Button
              sx={{
                bgcolor: "#fff",
                color: "#3367DC",
                p: "8px 16px",
                mx: "auto",
                my: 2,
                width: "max-content",
                border: 1,
              }}
              onClick={() => setToComment(false)}
            >
              Cancel
            </Button>

            <Button
              sx={{
                color: "#fff",
                bgcolor: isAuthenticated ? "#3367DC" : "#C3C3C3",
                p: "8px 16px",
                mx: "auto",
                my: 2,
                width: "max-content",
              }}
              onClick={replyHandler}
            >
              {isAuthenticated ? "Submit" : "Login to comment"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CommentsCard;
