import { Menu } from "@mui/icons-material";
import "./index.css";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Header({ changeDrawerState }) {
  const [title, setTitle] = useState("");

  const headerTitles = [
    { path: "/home", tittle: "My uploads" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
    { path: "", tittle: "" },
  ];

  useEffect(() => {
    headerTitles.map((paths) => {
      if (paths.path === window.location.pathname) {
        setTitle(paths.tittle);
      }
      return true;
    });
    // eslint-disable-next-line
  }, []);
  return (
    <AppBar className="header-container">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => changeDrawerState(true)}
        >
          <Menu />
        </IconButton>
        <Typography
          fontFamily="Roboto"
          fontSize={"32px"}
          fontWeight="bold"
          sx={{ flexGrow: 1, display: "flex" }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
