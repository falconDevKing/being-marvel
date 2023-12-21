import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import ProfileAvatar from "./ProfileAvatar";
import { AuthUserData } from "../interfaces/auth";
import { useAppSelector } from "../redux/hooks";
import { signInWithRedirect } from "aws-amplify/auth";
import { getBlogDetails } from "../services/blog";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const marvelBlogId = process.env.NEXT_PUBLIC_MARVEL_BLOG_ID as string;

type HeaderProps = {
  width: string;
};

const Header = ({ width }: HeaderProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { name: blogName, logo, darkLogo } = useAppSelector((state) => state.blog.blog);
  const { userData, isAuthenticated, userDetails } = useAppSelector((state) => state.auth);
  const { name, picture, email } = userData as AuthUserData;

  const userDetailsName = userDetails?.name || "";
  const userDetailsImage = userDetails?.image || "";

  const activePath: string =
    router.pathname === "/contact"
      ? "contact"
      : router.pathname === "/blog"
      ? "blog"
      : router.pathname.includes("/blog/")
      ? "blog"
      : router.pathname === "/about"
      ? "about"
      : router.pathname === "/"
      ? "home"
      : "";

  const selectedNav = {
    color: "#302F2F",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    cursor: "pointer",
  };
  const unSelectedNav = {
    color: "#D8D6D6",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    cursor: "pointer",
  };

  const selectedNavMobile = {
    color: "#FFF",
    py: 2,
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    cursor: "pointer",
  };
  const unSelectedNavMobile = {
    color: "#302F2F",
    py: 2,
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    cursor: "pointer",
  };

  const loginGoogle = async () => {
    signInWithRedirect({ provider: "Google" });
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} bgcolor={"#C6D0E6"} px={8}>
      <List>
        {[
          { nav: "HOME", navLink: "/", selector: "home" },
          { nav: "ABOUT", navLink: "/about", selector: "about" },
          { nav: "BLOG", navLink: "/blog", selector: "blog" },
          { nav: "CONTACT", navLink: "/contact", selector: "contact" },
          { nav: "SIGNIN", navLink: "/" },
        ].map((navOptions, index) => (
          <ListItem key={navOptions.nav} disablePadding>
            {navOptions.nav === "SIGNIN" ? (
              <Box my={2}>
                {isAuthenticated ? (
                  <ProfileAvatar
                    name={name || userDetailsName}
                    src={picture || userDetailsImage}
                    hasImage
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "#E77A0C",
                    }}
                  />
                ) : (
                  <Box sx={{ ...selectedNav, py: 2, px: 4, bgcolor: "#fff", borderRadius: "24px" }} onClick={loginGoogle}>
                    SIGN IN
                  </Box>
                )}
              </Box>
            ) : (
              <Link href={navOptions.navLink}>
                <a>
                  <Box sx={activePath === navOptions.selector ? selectedNavMobile : unSelectedNavMobile}>{navOptions?.nav}</Box>
                </a>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    getBlogDetails(marvelBlogId);
  }, []);

  return (
    <>
      {/* Larger Screens */}
      <Box display={{ xs: "none", md: "flex" }} justifyContent={"space-between"} alignItems={"center"} width={width} mx="auto" py={2}>
        <Link href={"/"} style={{ flexBasis: "30%", backgroundColor: "purple" }}>
          <a>
            <Image src={logo as string} alt={`${blogName} logo`} width={100} height={50} style={{ cursor: "pointer" }} />
          </a>
        </Link>

        <Box display={"flex"} flexBasis={"63%"} justifyContent={"space-between"} alignItems={"center"}>
          <Stack spacing={2} direction={"row"} sx={{ mr: 2 }}>
            <Link href={"/"}>
              <a>
                <Box sx={activePath === "home" ? selectedNav : unSelectedNav}>HOME</Box>
              </a>
            </Link>
            <Link href={"/about"}>
              <a>
                <Box sx={activePath === "about" ? selectedNav : unSelectedNav}>ABOUT</Box>
              </a>
            </Link>
            <Link href={"/blog"}>
              <a>
                <Box sx={activePath === "blog" ? selectedNav : unSelectedNav}>BLOG</Box>
              </a>
            </Link>
            <Link href={"/contact"}>
              <a>
                <Box sx={activePath === "contact" ? selectedNav : unSelectedNav}>CONTACT</Box>
              </a>
            </Link>
          </Stack>

          {isAuthenticated ? (
            <ProfileAvatar
              name={name || userDetailsName}
              src={picture || userDetailsImage}
              hasImage
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                background: "#E77A0C",
              }}
            />
          ) : (
            <Box sx={selectedNav} onClick={loginGoogle}>
              SIGN IN
            </Box>
          )}
        </Box>
      </Box>

      {/* Tablets and below Screens */}
      <Box display={{ xs: "flex", md: "none" }} justifyContent={"space-between"} alignItems={"center"} width={"100%"} mx="auto" py={2} px={6}>
        <Link href={"/"} style={{ backgroundColor: "purple" }}>
          <a>
            <Image src={logo as string} alt={`${blogName} logo`} width={100} height={50} style={{ cursor: "pointer" }} />
          </a>
        </Link>

        <Box justifyContent={"space-between"} alignItems={"center"} onClick={toggleDrawer(openDrawer ? false : true)}>
          {openDrawer ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </Box>
      </Box>

      <Drawer anchor={"top"} open={openDrawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>

      {/* <Modal open={openSignin} handleClose={closeSignin} title={authMode} maxWidth="sm">
        {authMode === "Register" ? (
          <Register setAuthMode={setAuthMode} setOpenSignin={setOpenSignin} />
        ) : (
          <Login setAuthMode={setAuthMode} setOpenSignin={setOpenSignin} />
        )}
      </Modal> */}
    </>
  );
};

export default Header;
