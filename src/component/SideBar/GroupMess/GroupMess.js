import React from "react";
import {
  Box,
  Container,
  Stack,
  Avatar,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  InputBase,
  styled,
  Button,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
export default function GroupMess() {
  const StyledInputBase = styled(InputBase)({
    width: "550px",
    border: "1px solid",
    borderColor: lightBlue[500],
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    paddingLeft: "10px",
    height: "36.5px",
    flex: 1,
  });
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      flex={2}
      sx={{
        padding: "20px 0 20px 20px",
        height: "100vh",
      }}
      spacing="100px"
    >
      <Container>
        <List
          sx={{
            width: "100%",
            overflowY: "auto",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Hi
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Xin Chao
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                    component="span"
                  >
                    John
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px", color: "gray" }}
                    component="span"
                  >
                    1/2/1208
                  </Typography>
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ngu
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
      <Box>
        <StyledInputBase placeholder="What's do you want to talk?" />
        <Button
          sx={{
            height: "36.5px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          }}
          variant="contained"
          endIcon={<Send />}
        >
          Send
        </Button>
      </Box>
    </Stack>
  );
}
