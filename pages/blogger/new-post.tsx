import { Box } from "@mui/material";
import BloggerLayout from "../../components/blogger/BloggerLayout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/router";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar } from '@ckeditor/ckeditor5-image'
import { useEffect, useRef, useState } from "react";
import { buttonList } from "suneditor-react";
import Editor, { editorOptions } from "../../components/Editor";
import { useFormik } from "formik";
import { DismissHandler, ErrorHandler, LoadingHandler, SuccessHandler } from "../../utils/handlers";
import { isAxiosError } from "axios";
import Input from "../../components/Input";
import { useAppSelector } from "../../redux/hooks";
import { v4 as uuidV4 } from "uuid";

const NewBlog = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [seePassword, SetSeePassword] = useState(false);

  const navToPosts = () => {
    router.push("/blogger/posts");
  };

  const { id: blogId } = useAppSelector((state) => state.blog.blog);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      captionText: "",
      status: false,
    },
    // validationSchema: LoginValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      if (!value) {
        return;
      }

      const { category, title, description, captionText } = values;

      LoadingHandler({ message: "Posting..." });
      setLoading(true);
      try {
        const postData = {
          id: uuidV4(),
          category,
          title,
          description,
          content: value,
          captionText,
          // captionImage: "String",
          likes: 0,
          views: 0,
          status: false,
          blogId: blogId,
        };

        DismissHandler();
        SuccessHandler({ message: "Logged in successfully" });
        setLoading(false);
        navToPosts();
      } catch (error: any) {
        DismissHandler();
        if (isAxiosError(error)) {
          const message = error?.response?.data?.message;
          ErrorHandler({ message });
        } else {
          ErrorHandler({ message: error?.message || "Something went wrong" });
        }
        setLoading(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <BloggerLayout>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} py={2}>
          <Box>
            <Box fontSize={"1.5rem"} fontWeight={700}>
              New Blog Post
            </Box>
            <Box fontSize={"1.2rem"} color="#C0C0C0">
              Lorem ipsum dolor sit amet, consecte turcing elit.{" "}
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent={"space-between"}>
          <Box width="63%">
            <Box bgcolor="#fff" p={4} pb={2} mb={2}>
              <Box fontWeight={700} fontSize="1.5rem" pb={2}>
                Blog Content
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={values?.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <Input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={values?.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <Input
                    id="category"
                    name="category"
                    type="text"
                    placeholder="Category"
                    value={values?.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              </Box>

              <Box>
                <Editor
                  name="content"
                  defaultValue={value}
                  setOptions={editorOptions as any}
                  height="250px"
                  onChange={setValue}
                  placeholder={"Create your blog post here..."}
                />
              </Box>
            </Box>
          </Box>

          <Box width="35%" height="100%">
            <Box bgcolor="#fff" p={4}>
              <Box fontSize="1.4rem" fontWeight={700}>
                Blog Caption Image
              </Box>
              <Box fontSize="0.8rem">Lorem ipsum dolor sit</Box>

              <Box pt={1}>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <Input
                    type="text"
                    id="captionText"
                    name="captionText"
                    placeholder="Caption Text"
                    value={values?.captionText}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              </Box>
              <Box px={4} py={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} bgcolor={"#F4F7FD"} my={2}>
                <CloudUploadOutlinedIcon sx={{ fontSize: "120px" }} />
                <Box
                  bgcolor="#6E87DC88"
                  my={1}
                  p={1}
                  display="flex"
                  color="#fff"
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={700}
                  fontSize="1.2rem"
                >
                  Browse File
                </Box>
                <Box fontSize="0.9rem" textAlign={"center"} py={2}>
                  Photos must be JPEG or PNG format and should be landscape orientation
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontWeight={700}>
              <Box bgcolor="#6E87DC88" color="#fff" p={2} width="max-content" my={2}>
                Submit Post
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BloggerLayout>
  );
};

export default NewBlog;
