import React from "react";
import {
  Box,
  Container,
  Stack,
  Avatar,
  Typography,
  AvatarGroup,
  Button,
  InputBase,
  Modal,
  styled,
  Tooltip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
export default function Infor() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const StyledInputBase = styled(InputBase)({
    width: "150px",
    border: "1px solid",
    borderColor: lightBlue[500],
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    paddingLeft: "10px",
    height: "36.5px",
    marginTop: "20px",
  });
  const StyledModel = styled(Box)({
    display: "flex",
    width: "300px",
    height: "250px",
    borderRadius: "20px",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "20px",
  });
  return (
    <Box
      flex={1}
      sx={{
        height: "100vh",
        padding: "20px 0 0 0",
        backgroundColor: lightBlue[100],
      }}
    >
      <Container
        sx={{
          position: "fixed",
          height: "100vh",
          backgroundColor: lightBlue[100],
          width: "330px",
        }}
      >
        <Box>
          <Typography fontSize={"20px"}>Số lượng thành viên</Typography>
          <AvatarGroup
            sx={{ justifyContent: "start", margin: "30px 0" }}
            max={5}
          >
            <Tooltip title={"Remy"}>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </Tooltip>
            <Tooltip title={"John"}>
              <Avatar
                alt="John"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </Tooltip>
            <Tooltip title={"Ann"}>
              <Avatar
                alt="Ann"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </Tooltip>
            <Tooltip title={"Binh"}>
              <Avatar
                alt="Binh"
                src="https://material-ui.com/static/images/avatar/4.jpg"
              />
            </Tooltip>
          </AvatarGroup>
          <Button onClick={handleOpen} variant="outlined" startIcon={<Add />}>
            Mời thành viên
          </Button>
          <Modal
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <StyledModel>
              <Typography>Thêm Thành viên</Typography>
              <Box>
                <StyledInputBase />
                <Button
                  sx={{
                    height: "36.5px",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                  }}
                  variant="contained"
                  endIcon={<Add />}
                >
                  Mời
                </Button>
              </Box>
            </StyledModel>
          </Modal>
        </Box>
      </Container>
    </Box>
  );
}
