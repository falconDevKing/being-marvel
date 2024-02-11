import { Box } from "@mui/material";
import { IPostCommentData } from "../interfaces/post";
import { getS3Image } from "./s3Utils";
import dayjs from "dayjs";
import { Comment } from "../graphql/API";

const privateBucket = (process.env.PRIVATE_BUCKET || process.env.NEXT_PUBLIC_PRIVATE_BUCKET) as string;

export const getValueFromPath = (object: any, path: string) => {
  return path.split(".").reduce((result, key) => result?.[key], object);
};

export const encodeImageFile = (data: any) => {
  const buf = Buffer.from(data);
  const base64 = buf.toString("base64");
  const imageString = "data:image/jpeg;base64," + base64;

  return imageString;
};

export const handlePrivateImage = async (image: string) => {
  if (image.includes("airdvertise-private")) {
    const key = image.split("https://airdvertise-public.s3.eu-west-1.amazonaws.com/")[1];
    const updatedImage = await getS3Image(privateBucket, key);
    return updatedImage || defaultImage;
  }

  return image || defaultImage;
};

export const defaultImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";

export const promiseAllSettledWrapper = async (paramsArray: any[], asyncFuntionCall: (params: any) => any, maxFails: number) => {
  let collatedResults: any[] = [];
  let failedRuns = 0;

  const promiseAllSettledHelper = async (helperParamsArray: any[], helperAsyncFuntionCall: (params: any) => any) => {
    const apiCallResponses = await Promise.allSettled(
      helperParamsArray.map(async (params) => {
        const apiResponse = await helperAsyncFuntionCall(params);
        return apiResponse;
      }),
    );

    const failedBody: any[] = [];
    const apiCallResponsesValues = apiCallResponses.reduce((accumulator, value, index) => {
      if (value?.status === "rejected") {
        failedBody.push(helperParamsArray[index]);
        return accumulator;
      }
      return [...accumulator, value?.value];
    }, [] as any[]);

    collatedResults = [...collatedResults, ...apiCallResponsesValues];

    if (failedBody.length && failedRuns < maxFails) {
      console.log("fetchedDatahasfails", failedRuns);
      failedRuns++;
      await promiseAllSettledHelper(failedBody, helperAsyncFuntionCall);
    }
  };

  await promiseAllSettledHelper(paramsArray, asyncFuntionCall);

  return collatedResults;
};

export const FAQs = [
  {
    id: "panel1",
    question: "What is Airdvertise?",
    answer:
      "Airdvertise is your go-to platform for adspaces sales and bookings. It was created to ease finding quality adspaces and foster sales between adspace owners and prospective clients.",
  },
  {
    id: "panel2",
    question: "Whats the cost for joining the platform?",
    answer: "Being a member of the Airdvertise community is free. All you need do is sign up and access the benefits.",
  },
  {
    id: "panel3",
    question: "How can I book an adspace?",
    answer:
      "You simply have to find your preferend adspace from the plethora of options available on the platform and make a booking, there is a flow to be able to pass extra informations to the seller and kick off conversations.",
  },
  {
    id: "panel4",
    question: "Can I also list adspaces for sale?",
    answer: "Yes, you can. Every member of the community can become a host, all you need to is agree to the terms and conditions and abide by it.",
  },
];

export const organiseComments = (comments: Comment[]) => {
  const parentComments = [...comments].filter((comment) => !comment?.subComment);
  const subCommentsData = [...comments].filter((comment) => comment?.subComment);

  const groupedSubcomments: Record<string, Comment[]> = subCommentsData?.reduce((accum, curVal) => {
    accum[curVal.parentComment as string] = accum[curVal.parentComment as string] || [];
    accum[curVal.parentComment as string].push(curVal);
    return accum;
  }, Object.create(null));

  const organisedComments = parentComments
    ?.sort((a, b) => (dayjs(a?.createdAt).isAfter(b?.createdAt) ? 1 : -1))
    ?.map((parentComment) => {
      const comment: Comment = { ...parentComment };
      const subComments = groupedSubcomments[parentComment?.id as string]?.sort((a, b) => (dayjs(a?.createdAt).isAfter(b?.createdAt) ? 1 : -1));

      return { comment, subComments };
    });

  return organisedComments;
};

export const transformText = (str: string) => {
  const textLine = str.split("\n").map((text, index) => <Box key={index}> {text}</Box>);

  return <Box>{textLine}</Box>;
};

export const categoryOptions = [
  { name: "Category", value: "" },
  { name: "FAITH", value: "FAITH" },
  { name: "LOVE", value: "LOVE" },
  { name: "LIFESTYLE", value: "LIFESTYLE" },
];
