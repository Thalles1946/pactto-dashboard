import { Menu } from "@mui/icons-material";
import "./index.css";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Header({ changeDrawerState }) {
  const [title, setTitle] = useState("");

  const headerTitles = [
    { path: "/home", tittle: "My uploads" },
    { path: "/pacttos", tittle: "Pacttos (Chats)" },
    { path: "/videos-to-review", tittle: "Items to review" },
    { path: "/shared-links", tittle: "Web links you created" },
    { path: "/personal-info", tittle: "Personal information" },
    { path: "/packages", tittle: "Review packages for sale" },
    { path: "/profile", tittle: "Pactto website" },
    { path: "/library", tittle: "Reference video library" },
    { path: "/subscription", tittle: "Subscribe to Pactto" },
    { path: "/review-settings", tittle: "Review settings" },
  ];

  useEffect(() => {
    headerTitles.map((paths) => {
      if (paths.path === window.location.pathname) {
        setTitle(paths.tittle);
      }
      return true;
    });
    // eslint-disable-next-line
  }, [window.location.pathname]);
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
