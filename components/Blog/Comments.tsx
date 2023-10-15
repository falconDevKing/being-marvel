import { Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentsCard from "./CommentsCard";
import { IPostCommentData } from "../../interfaces/post";
import { organiseComments } from "../../utils/helper";

interface CommentsProps {
  comments: IPostCommentData[];
  postId: string;
  blogId: string;
}

const Comments = ({ comments, postId, blogId }: CommentsProps) => {
  const organisedComments = organiseComments(comments);

  return (
    <Box width={"100%"} my={8}>
      <Box width={"85%"} mx="auto">
        {organisedComments.map((element, index) => {
          const { comment, subComments } = element;

          return <CommentsCard key={index} comment={comment} subComments={subComments} postId={postId} blogId={blogId} />;
        })}
      </Box>
    </Box>
  );
};

export default Comments;
