import { Box } from "@mui/material";
import Page1 from "./template";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Page1 />
    </Box>
  );
}
