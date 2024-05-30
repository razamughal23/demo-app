"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

const Page1 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button onClick={handleOpen} variant="contained">
        Please click me!
      </Button>
      <Modal
        open={open}
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <Box sx={styles.Modal}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Typography>
            Welcome to my Demo Next js app v14.2.3 with App Route Function.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Page1;
