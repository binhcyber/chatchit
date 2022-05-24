import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Stack,
  styled,
  Container,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { Forum, Add } from "@mui/icons-material";
import GroupMess from "../SideBar/GroupMess/GroupMess";
import SideBar from "../SideBar/SideBar";
import Infor from "../Infor/Infor";
import { auth } from "../fireBase/config";
export default function ChatRoom() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Forum />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CHAT CHIT
          </Typography>
          <Button
            onClick={() => {
              auth.signOut();
            }}
            variant="outlined"
            color="inherit"
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Stack direction={"row"}>
        <SideBar />
        <GroupMess />
        <Infor />
      </Stack>
    </Box>
  );
}
