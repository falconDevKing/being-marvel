import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog } from "../graphql/mutations";
import { API } from "aws-amplify";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import { getAboutByBlog, getBlog } from "../graphql/queries";
import { setAbout, setBlog, setPostSummary } from "../redux/blogSlice";
import { customFetchPostsByBlog } from "../graphql/customQueries";

const createPost = () => {};
