import React from "react";
import {
  Box,
  Container,
  Stack,
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Fab,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ExpandMore, Edit, Add } from "@mui/icons-material";
export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  return (
    <Box
      flex={1}
      sx={{
        width: "360px",
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
        <Stack direction={"row"} spacing="20px" alignItems="center">
          <Avatar
            alt={"John"}
            src={"https://material-ui.com/static/images/avatar/1.jpg"}
          />
          <Typography fontWeight={800} fontSize={"20px"}>
            John
          </Typography>
        </Stack>
        <Accordion
          sx={{ margin: "30px 0", width: "300px", backgroundColor: "#b3e5fc" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Danh Sách Phòng</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box>
          <Stack
            onClick={handleOpen}
            direction={"row"}
            alignItems="center"
            spacing={"20px"}
          >
            <Fab color="secondary" aria-label="edit">
              <Edit />
            </Fab>
            <Typography color={"secondary"}>Thêm Phòng</Typography>
          </Stack>
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
              <Typography>Thêm Phòng</Typography>
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
                  Thêm
                </Button>
              </Box>
            </StyledModel>
          </Modal>
        </Box>
      </Container>
    </Box>
  );
}
