import { Box, Button } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import TextArea from "../TextArea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createBlogPostComment } from "../../services/post";
import { ErrorHandler, SuccessHandler } from "../../utils/handlers";

interface CommentProps {
  postId: string;
  blogId: string;
}

const Comment = ({ postId, blogId }: CommentProps) => {
  const { userData, isAuthenticated } = useAppSelector((state) => state.auth);
  const { name, picture, email } = userData;

  const [comment, setComment] = useState<string>("");

  const commentHandler = async () => {
    if (isAuthenticated) {
      try {
        if (comment) {
          const commentData = {
            id: uuidv4(),
            name: name || "anonymous",
            picture: picture || "",
            content: comment,
            subComment: false,
            likes: 0,
            blogId,
            postId,
          };

          console.log({ commentData });

          await createBlogPostComment(commentData);
          setComment("");
          SuccessHandler({ message: "Comment posted successfully" });
        } else {
          ErrorHandler({ message: "Kindly write a comment" });
        }
      } catch (error: any) {
        console.log("error posting comment", error);
        ErrorHandler({ message: error?.message || "Unable to post comment" });
      }
    } else {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    }
  };

  return (
    <Box bgcolor="#F4F7FD" width={"100%"} py={4} my={4}>
      <Box width={"85%"} mx="auto" my={2} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
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
