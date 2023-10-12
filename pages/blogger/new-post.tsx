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
import { ConfigurationSetAlreadyExistsException } from "@aws-sdk/client-ses";
import { StorageApi } from "../../services/storage";
import { createBlogPost } from "../../services/post";

const s3baseurl = process.env.NEXT_PUBLIC_S3_BASE_URL || "";

const NewBlog = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [descriptionFile, setdescriptionFile] = useState<File>();
  const [captionFile, setCaptionFile] = useState<File>();

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
      setLoading(true);
      if (!value) {
        return;
      }

      const { category, title, description, captionText } = values;

      // save file to s3 and return link
      const descriptionFileLink = await StorageApi.putItem(`${blogId}/${descriptionFile?.name}`, descriptionFile as File);
      const captionFileLink = await StorageApi.putItem(`${blogId}/${captionFile?.name}`, captionFile as File);

      LoadingHandler({ message: "Posting..." });
      try {
        const postData = {
          id: uuidV4(),
          category,
          title,
          description,
          content: value,
          captionText,
          descriptionImage: s3baseurl + descriptionFileLink,
          captionImage: s3baseurl + captionFileLink,
          likes: 0,
          views: 0,
          status: false,
          blogId: blogId,
        };

        await createBlogPost(postData);

        DismissHandler();
        SuccessHandler({ message: "Post created successfully" });
        setLoading(false);
        // navToPosts();
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

  const hiddendescriptionFileInput = useRef<HTMLInputElement>(null);
  const hiddenCaptionFileInput = useRef<HTMLInputElement>(null);
  const handledescriptionClick = () => {
    hiddendescriptionFileInput?.current?.click();
  };
  const handleCaptionClick = () => {
    hiddenCaptionFileInput?.current?.click();
  };

  const handledescriptionFilesAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const filesArray = Array.from(files as FileList);

    if (!filesArray.length) {
      DismissHandler();
      ErrorHandler({ message: "Kindly select a file" });
      return;
    }

    const fileContent = filesArray[0];

    const fileName = fileContent.name;
    const fileSize = fileContent.size;
    const fileFormat = fileContent.type;
    const fileType = fileFormat.split("image/")[1];

    const maxFileSize = 1024 * 1024 * 20;

    if (fileSize > maxFileSize) {
      ErrorHandler({ message: fileName + " size too large" });
      return;
    }

    if (!fileFormat.includes("image/")) {
      ErrorHandler({ message: "Wrong File Format for " + fileName });
      return;
    }

    console.log({ sumaryFile: fileContent });

    setdescriptionFile(fileContent);
  };

  const handleCaptionFilesAdd = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const filesArray = Array.from(files as FileList);

    if (!filesArray.length) {
      DismissHandler();
      ErrorHandler({ message: "Kindly select a file" });
      return;
    }

    const fileContent = filesArray[0];

    const fileName = fileContent.name;
    const fileSize = fileContent.size;
    const fileFormat = fileContent.type;
    const fileType = fileFormat.split("image/")[1];

    const maxFileSize = 1024 * 1024 * 20;

    if (fileSize > maxFileSize) {
      ErrorHandler({ message: fileName + " size too large" });
      return;
    }

    if (!fileFormat.includes("image/")) {
      ErrorHandler({ message: "Wrong File Format for " + fileName });
      return;
    }

    setCaptionFile(fileContent);
  };

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
                Post Content
              </Box>
              <Box>
                <Box>Title</Box>
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
                <Box>Description</Box>
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
                <Box>Caption Text</Box>
                <Box display={"flex"} pb={1}>
                  <Input
                    id="captionText"
                    name="captionText"
                    type="text"
                    placeholder="Caption Text"
                    value={values?.captionText}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
              </Box>
              <Box>
                <Box>Category</Box>
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
                Post Images
              </Box>
              <Box fontStyle={"italic"} fontWeight={700}>
                description Image (portrait)
              </Box>

              <Box
                px={4}
                py={2}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#F4F7FD"}
                my={1}
                onClick={() => {
                  handledescriptionClick();
                }}
                sx={{ cursor: "pointer" }}
              >
                <input type="file" ref={hiddendescriptionFileInput} onChange={handledescriptionFilesAdd} style={{ display: "none" }} accept="image/*" />
                <CloudUploadOutlinedIcon sx={{ fontSize: "80px" }} />
                {descriptionFile ? (
                  <>{`${descriptionFile?.name} (${(descriptionFile?.size / 1000).toFixed(2)} kb)`}</>
                ) : (
                  <>
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
                      Browse Files
                    </Box>
                    <Box fontSize="0.9rem" textAlign={"center"} py={1}>
                      Photos must be JPEG or PNG format and should be portrait orientation
                    </Box>
                  </>
                )}
              </Box>
              <Box fontStyle={"italic"} fontWeight={700}>
                Caption Image (landscape)
              </Box>
              <Box
                px={4}
                py={2}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#F4F7FD"}
                my={1}
                onClick={() => {
                  handleCaptionClick();
                }}
                sx={{ cursor: "pointer" }}
              >
                <input type="file" ref={hiddenCaptionFileInput} onChange={handleCaptionFilesAdd} style={{ display: "none" }} accept="image/*" />
                <CloudUploadOutlinedIcon sx={{ fontSize: "80px" }} />
                {captionFile ? (
                  <>{`${captionFile?.name} (${(captionFile?.size / 1000).toFixed(2)} kb)`}</>
                ) : (
                  <>
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
                      Browse Files
                    </Box>

                    <Box fontSize="0.9rem" textAlign={"center"} py={1}>
                      Photos must be JPEG or PNG format and should be landscape orientation
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontWeight={700}>
              <Box
                bgcolor={loading ? "#ccc" : "#6E87DC88"}
                color="#fff"
                p={2}
                width="max-content"
                my={2}
                onClick={() => {
                  handleSubmit();
                }}
                sx={{ cursor: "pointer" }}
              >
                {loading ? "Submitting Post" : "Submit Post"}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BloggerLayout>
  );
};

export default NewBlog;
