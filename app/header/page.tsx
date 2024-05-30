"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={6}
            sm={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Page 1</Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              href={"/page2"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography>Page 2</Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
