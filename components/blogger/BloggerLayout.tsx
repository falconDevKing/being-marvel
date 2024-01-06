import { Box, Divider, Drawer } from "@mui/material";
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
import { getBlogDetails } from "../../services/blog";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const marvelBlogId = process.env.NEXT_PUBLIC_MARVEL_BLOG_ID as string;

type BloggerLayoutProps = {
  children: React.ReactNode;
};

const BloggerLayout = ({ children }: BloggerLayoutProps) => {
  const router = useRouter();

  const { userData, isAuthenticated, isInitialized } = useAppSelector((state) => state.auth);
  const { interimBloggers } = useAppSelector((state) => state.blog.blog);
  const { name, picture, email } = userData as AuthUserData;

  const navToBlogger = (section: string) => {
    router.push("/blogger/" + section);
  };

  const activePath: string =
    router.pathname === "/blogger"
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

  const selectedNavMobile = {
    color: "#FFF",
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

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setOpenDrawer(open);
  };

  useEffect(() => {
    if (isAuthenticated && isInitialized && !interimBloggers?.includes(email as string)) {
      router.push("/blog");
    }
  }, []);

  useEffect(() => {
    getBlogDetails(marvelBlogId);
  }, []);

  return (
    <Box display="flex">
      <Box width={"20%"} p={"32px 16px 16px 32px"} height="100vh" display={{ xs: "none", md: "block" }}>
        <Link href={"/"}>
          <a>
            <Image src="/BeingMarvelLogo.png" alt="being marvel logo" width={100} height={50} style={{ cursor: "pointer" }} />
          </a>
        </Link>

        <Box pt={2}>
          <Box py={3}>
            <Box display={"flex"} alignItems={"center"} p={1} sx={activePath === "dashboard" ? selectedNav : unSelectedNav} onClick={() => navToBlogger("")}>
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

      <Box width="100%" borderLeft={"1px solid #CCC"} height={"100%"} minHeight="100vh" bgcolor="#F4F7FD">
        <Box height="100%">
          <Box
            bgcolor="#fff"
            display={{ xs: "none", md: "flex" }}
            justifyContent={"flex-end"}
            alignItems={"center"}
            px={2}
            py={2}
            borderBottom={"1px solid #CCC"}
          >
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

          <Box
            bgcolor="#fff"
            display={{ xs: "flex", md: "none" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            px={1}
            py={2}
            borderBottom={"1px solid #CCC"}
          >
            <Box px={1} py={1} fontWeight={700} onClick={toggleDrawer(openDrawer ? false : true)} sx={{ cursor: "pointer" }}>
              {openDrawer ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </Box>

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
          </Box>

          <Box p={{ xs: 2, md: 4 }} height={"100%"}>
            {children}
          </Box>
        </Box>
      </Box>

      <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawer(false)}>
        <Box sx={{ width: "auto" }} role="presentation" p={"32px 16px 16px 32px"} height="100vh" minHeight={"100%"} bgcolor="#6A85DB">
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
                sx={activePath === "dashboard" ? selectedNavMobile : unSelectedNav}
                onClick={() => navToBlogger("")}
              >
                <SpaceDashboardIcon sx={{ color: activePath === "dashboard" ? "#fff" : "#302F2F" }} />
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
                    sx={activePath === "new-post" ? selectedNavMobile : unSelectedNav}
                    onClick={() => navToBlogger("new-post")}
                  >
                    <AddCircleOutlineIcon sx={{ color: activePath === "new-post" ? "#fff" : "#302F2F" }} />
                    <Box component="span" px={1}>
                      New Post
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    p={1}
                    sx={activePath === "posts" ? selectedNavMobile : unSelectedNav}
                    onClick={() => navToBlogger("posts")}
                  >
                    <ListAltIcon sx={{ color: activePath === "posts" ? "#fff" : "#302F2F" }} />
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
                    sx={activePath === "profile" ? selectedNavMobile : unSelectedNav}
                    onClick={() => navToBlogger("profile")}
                  >
                    <PersonOutlineIcon sx={{ color: activePath === "profile" ? "#fff" : "#302F2F" }} />
                    <Box component="span" px={1}>
                      Profile
                    </Box>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} p={1} sx={activePath === "logout" ? selectedNavMobile : unSelectedNav} onClick={logout}>
                    <LogoutIcon sx={{ color: activePath === "logout" ? "#fff" : "#302F2F" }} />
                    <Box component="span" px={1}>
                      Logout
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default BloggerLayout;
