import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface CustomAppBarProps {
  title: string;
}

export const CustomAppBar = ({ title }: CustomAppBarProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // position: "fixed",
        // top: "0px",
        // left: "0px",
        // right: "0px",
        // zIndex: "1",
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            sx={{ marginLeft: "20px" }}
          >
            {title}
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Typography variant="overline">by HACK × FAMILY</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
