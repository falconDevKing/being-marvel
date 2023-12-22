import { Box } from "@mui/material";
import Layout from "../../components/blogger/BloggerLayout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/router";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Profile = () => {
  return (
    <Layout>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} py={2}>
          <Box>
            <Box fontSize={"1.5rem"} fontWeight={700}>
              My Profile
            </Box>
            <Box fontSize={"1.2rem"} color="#C0C0C0">
              Lorem ipsum dolor sit amet, consecte turcing elit.{" "}
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent={"space-between"} flexDirection={{ xs: "column", md: "row" }}>
          <Box bgcolor="#fff" p={4} width={{ xs: "100%", md: "35%" }} height="100%">
            <Box fontSize="1.4rem" fontWeight={700}>
              Lorem ip
            </Box>
            <Box fontSize="0.8rem">Lorem ipsum dolor sit</Box>
            <Box px={4} py={4} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"#F4F7FD"} my={2}>
              <PersonOutlineRoundedIcon sx={{ fontSize: "240px" }} />
            </Box>
            <Box bgcolor="#6E87DC88" p={1} display="flex" color="#fff" justifyContent={"center"} alignItems={"center"} fontWeight={700} fontSize="1.2rem">
              <CloudUploadOutlinedIcon />
              <Box component={"span"} px={2}>
                Upload Profile Image
              </Box>
            </Box>
          </Box>

          <Box width={{ xs: "100%", md: "63%" }}>
            <Box bgcolor="#fff" p={4} pb={2} mb={2}>
              <Box fontWeight={700} fontSize="1.5rem">
                Lorem ipsum dolor sit
              </Box>
              <Box py={1}>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <input
                    id="name"
                    placeholder="User Name"
                    style={{
                      color: "#302F2F",
                      backgroundColor: "#F4F7FD",
                      padding: "8px",
                      height: "52px",
                      borderRadius: "4px 0px 0px 4px",
                      outline: "none",
                      border: "none",
                      width: "100%",
                      fontSize: "1.25rem",
                      fontFamily: "Cormorant Garamond",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <input
                    id="email"
                    placeholder="Email"
                    style={{
                      color: "#302F2F",
                      backgroundColor: "#F4F7FD",
                      padding: "8px",
                      height: "52px",
                      borderRadius: "4px 0px 0px 4px",
                      outline: "none",
                      border: "none",
                      width: "100%",
                      fontSize: "1.25rem",
                      fontFamily: "Cormorant Garamond",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box bgcolor="#fff" p={4} pb={2} mb={2}>
              <Box fontWeight={700} fontSize="1.5rem">
                Lorem ipsum dolor sit
              </Box>
              <Box py={1}>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <input
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Old Password"
                    style={{
                      color: "#302F2F",
                      backgroundColor: "#F4F7FD",
                      padding: "8px",
                      height: "52px",
                      borderRadius: "4px 0px 0px 4px",
                      outline: "none",
                      border: "none",
                      width: "100%",
                      fontSize: "1.25rem",
                      fontFamily: "Cormorant Garamond",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <input
                    id="newPassword"
                    name="newPassword"
                    placeholder="New Password"
                    style={{
                      color: "#302F2F",
                      backgroundColor: "#F4F7FD",
                      padding: "8px",
                      height: "52px",
                      borderRadius: "4px 0px 0px 4px",
                      outline: "none",
                      border: "none",
                      width: "100%",
                      fontSize: "1.25rem",
                      fontFamily: "Cormorant Garamond",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={"flex"} pb={1}>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    style={{
                      color: "#302F2F",
                      backgroundColor: "#F4F7FD",
                      padding: "8px",
                      height: "52px",
                      borderRadius: "4px 0px 0px 4px",
                      outline: "none",
                      border: "none",
                      width: "100%",
                      fontSize: "1.25rem",
                      fontFamily: "Cormorant Garamond",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} fontWeight={700}>
              <Box bgcolor="#fff" p={2} width="max-content">
                Delete Profile
              </Box>
              <Box bgcolor="#6E87DC88" color="#fff" p={2} width="max-content" ml={2}>
                Update Profile
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Profile;
