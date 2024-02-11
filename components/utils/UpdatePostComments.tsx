import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IPostSummary } from "../../interfaces/blog";
import Input from "../Input";
import { ErrorHandler } from "../../utils/handlers";
import { createBlogPostComment, getPostComments, updateBlogPost } from "../../services/post";
import { v4 as uuidV4 } from "uuid";
import IDatePicker from "../IDatePicker";
import dayjs from "dayjs";
import TextArea from "../TextArea";
import { IPostCommentData } from "../../interfaces/post";
import { putInTable } from "../../utils/dynamodb";
import ISelect from "../ISelect";

interface UpdatePostCommentsProps {
  postsSummary: IPostSummary[];
  blogId: string;
}

console.log("dd", process.env.NEXT_PUBLIC_COMMENTS_TABLE, process.env.NEXT_PUBLIC_REGION);

const UpdatePostComments = ({ postsSummary, blogId }: UpdatePostCommentsProps) => {
  const [postId, setPostId] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [commentLikes, setCommentLikes] = useState<number>();
  const [commentParentId, setCommentParentId] = useState("");
  const [commentDate, setCommentDate] = useState("");
  const [loadingParentComments, setLoadingParentComments] = useState(false);
  const [parentComments, setParentComments] = useState<IPostCommentData[]>([]);

  const handlePostDetailsUpdate = async () => {
    try {
      if (!postId || !blogId || !commentContent) {
        ErrorHandler({ message: "Incorrect Params" });
        return;
      }
      const item = {
        id: uuidV4(),
        picture: "",
        blogId,
        postId,
        name: commentName || "Guest",
        content: commentContent,
        subComment: !!commentParentId,
        parentComment: commentParentId,
        likes: +(commentLikes || 0),
        createdAt: commentDate,
        updatedAt: commentDate,
      };
      console.log("it", item);

      await putInTable(process.env.NEXT_PUBLIC_COMMENTS_TABLE as string, item);
      resetParams();
    } catch (err: any) {
      console.log("err", err?.message, err);
      ErrorHandler({ message: "Error creating  comment" });
    }
  };

  const resetParams = () => {
    setPostId("");
    setCommentName("");
    setCommentContent("");
    setCommentParentId("");
    setCommentLikes(0);
    setCommentDate("");
  };
  const fetchParentComments = useCallback(async () => {
    setLoadingParentComments(true);
    if (postId) {
      const parentComments = await getPostComments(postId, true);
      setParentComments(parentComments || []);
    }
    setLoadingParentComments(false);
  }, [postId]);

  useEffect(() => {
    fetchParentComments();
  }, [fetchParentComments]);

  return (
    <Box p={2} border={"1px dashed #ccc"}>
      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <ISelect
          id="postId"
          name="postId"
          value={postId}
          onChange={(e) => {
            setPostId(e.target.value);
            setCommentName("");
            setCommentContent("");
            setCommentParentId("");
            setCommentLikes(0);
            setCommentDate("");
          }}
          options={[{ name: "Post Name", value: "" }, ...postsSummary.map((postSummary) => ({ name: postSummary?.title, value: postSummary.id }))]}
        />
      </Box>

      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <ISelect
          id="commentParentId"
          name="commentParentId"
          value={commentParentId}
          onChange={(e) => {
            setCommentParentId(e.target.value);
          }}
          options={[
            { name: loadingParentComments ? "Loading Parent Comments..." : "Parent Comment", value: "" },
            ...parentComments.map((parentComment) => ({ name: parentComment.content as string, value: parentComment.id })),
          ]}
        />
      </Box>

      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <Input
          type="text"
          id="commentName"
          placeholder="Commenter's Name"
          name="commentName"
          value={commentName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCommentName(e?.target?.value);
          }}
        />
      </Box>

      <Box display={"flex"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
          <IDatePicker
            label={
              <Box>
                <Typography>Comment Date</Typography>
              </Box>
            }
            value={commentDate ? dayjs(commentDate) : null}
            onChange={(value) => {
              setCommentDate(dayjs(value).format());
            }}
            name="commentDate"
          />
        </Box>
        <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
          <Input
            type="number"
            id="commentLikes"
            placeholder="Comment Likes"
            name="commentLikes"
            value={commentLikes}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCommentLikes(e?.target?.value as unknown as number);
            }}
          />
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <TextArea
          id="commentContent"
          name="commentContent"
          value={commentContent}
          onChange={(e) => {
            setCommentContent(e?.target?.value);
          }}
          placeholder="Content to comment"
          rows={6}
          style={{
            color: "#302F2F",
            backgroundColor: "#fff",
            padding: "16px",
            outline: "1px solid",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Box display={"flex"} justifyContent={"flex-end"}>
        <Button onClick={handlePostDetailsUpdate} variant={"contained"}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UpdatePostComments;
