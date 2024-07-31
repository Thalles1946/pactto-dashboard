import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Typography,
} from "@mui/material";
import {
  AccountBox,
  Chat,
  GifTwoTone,
  Home,
  Link,
  Settings,
  VideoCall,
  VideoCameraBack,
} from "@mui/icons-material";
import "./index.css";

export default function Drawer() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const listItems = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "Pacttos (Chats)",
      icon: <Chat />,
    },
    {
      text: "Items to review",
      icon: <VideoCall />,
    },
    {
      text: "Web links you created",
      icon: <Link />,
    },
    {
      text: "Personal information",
      icon: <AccountBox />,
    },
    {
      text: "Review packages for sale",
      icon: <GifTwoTone />,
    },
    {
      text: "Pactto website",
      icon: <Link />,
    },
    {
      text: "Reference video library",
      icon: <VideoCall />,
    },
    {
      text: "Subscription",
      icon: <VideoCameraBack />,
    },
    {
      text: "Review settings",
      icon: <Settings />,
    },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        backgroundColor: "#2f2f2f",
        height: "100%",
        color: "#b8b8b8",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="header" style={{ padding: "32px 52px 0px" }}>
        <img
          width={140}
          height={45}
          src="https://app.pactto.com/assets/images/pactto-logo.svg"
          alt="pactto-logo"
        />
        <Typography
          color="#545454"
          fontWeight={700}
          fontFamily="Roboto"
          fontSize="14px"
          sx={{ margin: "8px 0px 0px" }}
        >
          YOUR PACTTO PROFILE
        </Typography>
      </div>
      <List>
        {listItems.map((item, index) => (
          <ListItem key={item.text} sx={{ padding: "0px 32px" }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#b8b8b8" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <MuiDrawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </MuiDrawer>
    </>
  );
}
