import { Box } from '@mui/material';
import React from 'react'
import Page2 from './template';

const page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Page2 />
    </Box>
  );
}

export default page
