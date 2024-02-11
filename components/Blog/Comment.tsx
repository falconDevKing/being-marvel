import { Box, Button } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { signInWithRedirect } from "aws-amplify/auth";
import TextArea from "../TextArea";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { clearNavToCommentData, createBlogPostComment, getPostComments } from "../../services/post";
import { ErrorHandler, SuccessHandler } from "../../utils/handlers";

interface CommentProps {
  postId: string;
  blogId: string;
}

const Comment = ({ postId, blogId }: CommentProps) => {
  const { userData, isAuthenticated, userDetails } = useAppSelector((state) => state.auth);
  const { navToComment } = useAppSelector((state) => state.post);
  const { name, picture, email } = userData;
  const { name: fallBackName, image } = userDetails;

  const [comment, setComment] = useState<string>("");

  const commentHandler = async () => {
    if (isAuthenticated) {
      try {
        if (comment) {
          const commentData = {
            id: uuidv4(),
            name: name || fallBackName || "Guest",
            picture: picture || image || "",
            content: comment,
            subComment: false,
            likes: 0,
            blogId,
            postId,
          };

          console.log({ commentData });

          await createBlogPostComment(commentData);
          clearNavToCommentData();
          setComment("");
          await getPostComments(postId);
          SuccessHandler({ message: "Comment posted successfully" });
        } else {
          ErrorHandler({ message: "Kindly write a comment" });
        }
      } catch (error: any) {
        console.log("error posting comment", error);
        ErrorHandler({ message: error?.message || "Unable to post comment" });
      }
    } else {
      console.log({ dataToPass: JSON.stringify({ comment, section: "comment", postId, blogId }) });
      signInWithRedirect({ provider: "Google", customState: JSON.stringify({ comment, section: "comment", postId, blogId }) });
    }
  };

  const scrollToComment = (targetId: string) => {
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log({ navToComment });
    const { comment, commentId, section } = navToComment;

    if (comment && !commentId && section === "comment") {
      console.log("entered comment");
      setComment(comment);
      scrollToComment("comment");
    }
  }, [navToComment]);

  return (
    <Box bgcolor="#F4F7FD" width={"100%"} py={4} my={4}>
      <Box width={"85%"} mx="auto" my={2} display={"flex"} flexDirection={"column"} justifyContent={"center"} id={"comment"}>
        <TextArea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e?.target?.value);
          }}
          placeholder="Write a comment"
          rows={6}
          style={{
            color: "#302F2F",
            backgroundColor: "#fff",
            padding: "16px",
          }}
        />
        <Button
          sx={{
            color: "#fff",
            bgcolor: isAuthenticated ? "#3367DC" : "#C3C3C3",
            p: "8px 16px",
            mx: "auto",
            my: 2,
            width: "max-content",
          }}
          onClick={() => {
            commentHandler();
          }}
        >
          {isAuthenticated ? "Submit" : "Login to comment"}
        </Button>
      </Box>
    </Box>
  );
};

export default Comment;
