import React from "react";
import { Box, Card, Typography, styled, Button, Stack } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material";
import firebase, { auth, db } from "../fireBase/config";
import { lightBlue } from "@mui/material/colors";
import { addDocument } from "../fireBase/service";

export default function Login() {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
      });
    }
  };
  const CardLogin = styled(Card)({
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "350px",
    height: "300px",
  });
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: lightBlue[500],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardLogin>
        <Stack
          direction="column"
          alignItems="center"
          width={"100%"}
          spacing="40px"
          padding={"20px 0 0 0"}
        >
          <Typography fontWeight={900} fontSize={"20px"}>
            CHAT CHIT
          </Typography>
          <Button
            onClick={handleFbLogin}
            variant="outlined"
            startIcon={<Facebook />}
          >
            Login in Facebook
          </Button>
          <Button
            sx={{
              minWidth: "194px",
            }}
            variant="outlined"
            startIcon={<Google />}
          >
            Login in Google
          </Button>
        </Stack>
      </CardLogin>
    </Box>
  );
}
