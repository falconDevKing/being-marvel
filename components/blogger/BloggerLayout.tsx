import { Box, Divider } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProfileAvatar from "../ProfileAvatar";
import { AuthUserData } from "../../interfaces/auth";
import { useAppSelector } from "../../redux/hooks";
import { logout } from "../../services/auth";

type BloggerLayoutProps = {
  children: React.ReactNode;
};

const BloggerLayout = ({ children }: BloggerLayoutProps) => {
  const router = useRouter();

  const { userData, isAuthenticated, isInitialized } = useAppSelector((state) => state.auth);
  const { name, picture, email } = userData as AuthUserData;

  const navToBlogger = (section: string) => {
    router.push("/blogger/" + section);
  };

  const activePath: string =
    router.pathname === "/blogger/dashboard"
      ? "dashboard"
      : router.pathname === "/blogger/new-post"
      ? "new-post"
      : router.pathname === "/blogger/posts"
      ? "posts"
      : router.pathname === "/blogger/profile"
      ? "profile"
      : "";

  const selectedNav = {
    color: "#302F2F",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      bgcolor: "#F9FBFE",
    },
  };

  const unSelectedNav = {
    // color: '#D8D6D6',
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      bgcolor: "#F9FBFE",
    },
  };

  useEffect(() => {
    if (isAuthenticated && isInitialized && email !== "emmanueloyekan33@gmail.com") {
      router.push("/blog");
    }
  }, []);

  return (
    <Box display="flex">
      <Box width={"20%"} p={"32px 16px 16px 32px"} height="100vh">
        <Link href={"/"}>
          <a>
            <Image src="/BeingMarvelLogo.png" alt="being marvel logo" width={100} height={50} style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Box pt={2}>
          <Box py={3}>
            <Box
              display={"flex"}
              alignItems={"center"}
              p={1}
              sx={activePath === "dashboard" ? selectedNav : unSelectedNav}
              onClick={() => navToBlogger("dashboard")}
            >
              <SpaceDashboardIcon color="primary" />
              <Box component="span" px={1}>
                Dashboard
              </Box>
            </Box>
          </Box>
          <Box>
            <Box py={2}>
              <Box>Manage Blog Posts</Box>
              <Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  p={1}
                  sx={activePath === "new-post" ? selectedNav : unSelectedNav}
                  onClick={() => navToBlogger("new-post")}
                >
                  <AddCircleOutlineIcon color="primary" />
                  <Box component="span" px={1}>
                    New Post
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  p={1}
                  sx={activePath === "posts" ? selectedNav : unSelectedNav}
                  onClick={() => navToBlogger("posts")}
                >
                  <ListAltIcon color="primary" />
                  <Box component="span" px={1}>
                    Posts
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box py={2}>
              <Box>Manage Account</Box>
              <Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  p={1}
                  sx={activePath === "profile" ? selectedNav : unSelectedNav}
                  onClick={() => navToBlogger("profile")}
                >
                  <PersonOutlineIcon color="primary" />
                  <Box component="span" px={1}>
                    Profile
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} p={1} sx={activePath === "logout" ? selectedNav : unSelectedNav} onClick={logout}>
                  <LogoutIcon color="primary" />
                  <Box component="span" px={1}>
                    Logout
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="100%" borderLeft={"1px solid #CCC"}>
        <Box bgcolor="#F4F7FD" height="100%">
          <Box bgcolor="#fff" display={"flex"} justifyContent={"flex-end"} alignItems={"center"} px={2} py={2} borderBottom={"1px solid #CCC"}>
            <ProfileAvatar
              name={name}
              src={picture}
              hasImage
              sx={{
                width: "60px",
                height: "60px",
                background: "#E77A0C",
              }}
            />
            <Divider orientation="vertical" flexItem />
            <Box px={2} py={1} bgcolor={"#6E87DC88"} mx={2} color="#fff" fontWeight={700} onClick={logout} sx={{ cursor: "pointer" }}>
              Logout
            </Box>
          </Box>
          <Box p={4}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BloggerLayout;
