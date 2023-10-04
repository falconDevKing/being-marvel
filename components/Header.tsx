import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import ProfileAvatar from "./ProfileAvatar";
import { AuthUserData } from "../interfaces/auth";
import { useAppSelector } from "../redux/hooks";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

type HeaderProps = {
  width: string;
};

const Header = ({ width }: HeaderProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { userData, isAuthenticated } = useAppSelector((state) => state.auth);
  const { name, picture, email } = userData as AuthUserData;

  const [openSignin, setOpenSignin] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<string>("Login");

  const closeSignin = () => {
    setOpenSignin(false);
  };

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

  const loginGoogle = async () => {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={width} mx="auto" py={2}>
        <Link href={"/"}>
          <a>
            <Image src="/BeingMarvelLogo.png" alt="being marvel logo" width={100} height={50} style={{ cursor: "pointer" }} />
          </a>
        </Link>

        <Stack spacing={2} direction={"row"}>
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
            name={name}
            src={picture}
            hasImage
            sx={{
              width: "3rem",
              height: "3rem",
              background: "#E77A0C",
            }}
          />
        ) : (
          <Box sx={selectedNav} onClick={loginGoogle}>
            SIGN IN
          </Box>
        )}
      </Box>
      <Modal open={openSignin} handleClose={closeSignin} title={authMode} maxWidth="sm">
        {authMode === "Register" ? (
          <Register setAuthMode={setAuthMode} setOpenSignin={setOpenSignin} />
        ) : (
          <Login setAuthMode={setAuthMode} setOpenSignin={setOpenSignin} />
        )}
      </Modal>
    </>
  );
};

export default Header;
