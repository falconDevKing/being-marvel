import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IPostSummary } from "../../interfaces/blog";
import Input from "../Input";
import dayjs from "dayjs";
import IDatePicker from "../IDatePicker";
import { ErrorHandler } from "../../utils/handlers";
import { updateBlogPost } from "../../services/post";

interface UpdatePostDetailsProps {
  postsSummary: IPostSummary[];
  blogId: string;
}

const UpdatePostDetails = ({ postsSummary, blogId }: UpdatePostDetailsProps) => {
  const [postId, setPostId] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postLikes, setPostLikes] = useState<number>();
  const [postViews, setPostViews] = useState<number>();

  const handlePostDetailsUpdate = async () => {
    try {
      if (!postId || !blogId || !postDate) {
        ErrorHandler({ message: "Incorrect Params" });
        return;
      }
      const item = { id: postId, publishedAt: postDate, likes: +(postLikes || 0), views: +(postViews || 0), blogId };
      console.log("it", item);

      await updateBlogPost(item);
      resetParams();
    } catch (err: any) {
      console.log("err", err?.message, err);
      ErrorHandler({ message: "Error updating post" });
    }
  };

  const resetParams = () => {
    setPostId("");
    setPostDate("");
    setPostLikes(0);
    setPostViews(0);
  };

  return (
    <Box p={2} border={"1px dashed #ccc"}>
      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <select
          name="postId"
          style={{
            color: "#302F2F",
            padding: "4px 8px",
            height: "40px",
            borderRadius: "4px 0px 0px 4px",
            outline: "none",
            border: "none",
            width: "100%",
            fontSize: "1.25rem",
            fontFamily: "Cormorant Garamond",
            backgroundColor: "#f4f7fd",
          }}
          value={postId}
          onChange={(e) => {
            setPostId(e.target.value);
            setPostDate("");
            setPostLikes(0);
            setPostViews(0);
          }}
        >
          <option style={{ color: "#2C2C2C" }} value="">
            Post Name
          </option>
          {postsSummary.map((postSummary) => {
            return (
              <option style={{ color: "#2C2C2C" }} value={postSummary.id}>
                {postSummary?.title}
              </option>
            );
          })}
        </select>
      </Box>

      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <IDatePicker
          label={
            <Box>
              <Typography>Publish Date</Typography>
            </Box>
          }
          value={postDate ? dayjs(postDate) : null}
          onChange={(value) => {
            setPostDate(dayjs(value).format());
          }}
          name="postDate"
        />
      </Box>

      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <Input
          type="number"
          id="postLikes"
          placeholder="Set Post Likes"
          name="postLikes"
          value={postLikes}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("el", e?.target?.value, typeof e?.target?.value);
            setPostLikes(e?.target?.value as unknown as number);
          }}
        />
      </Box>

      <Box display={"flex"} alignItems={"center"} py={1} px={1} bgcolor={"#f4f7fd"} m={1} borderRadius={"4px"} width="100%">
        <Input
          type="number"
          id="postViews"
          placeholder="Set Post Views"
          name="postViews"
          value={postViews}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("ev", e?.target?.value, typeof e?.target?.value);
            setPostViews(e?.target?.value as unknown as number);
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

export default UpdatePostDetails;
