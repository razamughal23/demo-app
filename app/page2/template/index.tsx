"use client";
import { Box } from "@mui/material";
import React from "react";

const Page2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="ball-container">
        <div className="ball"></div>
      </div>
    </Box>
  );
};

export default Page2;
