import React from "react";
import {
  Box,
  Button,
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
  ManageAccounts,
  OndemandVideo,
  Redeem,
  Settings,
  Subscriptions,
  VideoCall,
  VideoCameraBack,
  VideoLibrary,
  ViewCarousel,
} from "@mui/icons-material";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Drawer({ open, setOpen }) {
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const listItems = [
    {
      text: "Home",
      icon: <Home />,
      navLink: "/home",
    },
    {
      text: "Pacttos (Chats)",
      icon: <Chat />,
      navLink: "/pacttos",
    },
    {
      text: "Items to review",
      icon: <VideoLibrary />,
      navLink: "/videos-to-review",
    },
    {
      text: "Web links you created",
      icon: <Link />,
      navLink: "/shared-links",
    },
    {
      text: "Personal information",
      icon: <ManageAccounts />,
      navLink: "/personal-info",
    },
    {
      text: "Review packages for sale",
      icon: <Redeem />,
      navLink: "/packages",
    },
    {
      text: "Pactto website",
      icon: <ViewCarousel />,
      navLink: "/profile",
    },
    {
      text: "Reference video library",
      icon: <OndemandVideo />,
      navLink: "/library",
    },
    {
      text: "Subscription",
      icon: <Subscriptions />,
      navLink: "/subscription",
    },
    {
      text: "Review settings",
      icon: <Settings />,
      navLink: "/review-settings",
    },
  ];

  const DrawerList = (
    <Box
      sx={{
        backgroundColor: "#2f2f2f",
        color: "#b8b8b8",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="header">
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

        <div className="user-info">
          <div className="plan-info">
            <img
              className="avatar"
              width={40}
              height={40}
              alt="avatar-placeholder"
              src="https://app.pactto.com/assets/images/avatar-placeholder.png"
            />
            <div className="plan">
              <Typography
                sx={{
                  fontSize: "7px",
                  fontFamily: "Roboto",
                  margin: "0px 0px 3px",
                  fontWeight: 600,
                  opacity: ".7",
                  color: "#CBCBCB",
                }}
                className="trial-time"
              >
                TRIAL: 14 DAYS LEFT
              </Typography>

              <div
                onClick={() => {
                  navigate("/subscription");
                }}
                className="button"
                style={{
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    font: "12px Roboto",
                    backgroundColor: "#1dbba5",
                    padding: "6px",
                    fontWeight: 500,
                    borderRadius: "3px",
                    "&:hover": {
                      backgroundColor: "#1bac98",
                    },
                  }}
                >
                  UPGRADE TO PRO
                </Typography>
              </div>
            </div>
          </div>
          <Typography
            sx={{
              color: "#FFFFFF",
              font: "20px Roboto",
              margin: "28px 0px 0px",
              marginBottom: "5px",
            }}
          >
            Thalles Augusto Drumond Neves
          </Typography>
          <Typography
            sx={{
              color: "#ACACAC",
              font: "14px Roboto",
            }}
          >
            Pactto member since 2024
          </Typography>
        </div>
      </div>
      <List>
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "0px",
              backgroundColor:
                window.location.pathname === item.navLink ? "#3a363f" : "",
              ":hover": {
                backgroundColor:
                  window.location.pathname === item.navLink
                    ? "#49464e"
                    : "#3f3f3f",
              },
            }}
            disablePadding
          >
            <ListItemButton
              sx={{
                padding: "12px 32px",
              }}
              onClick={() => navigate(item.navLink)}
            >
              <ListItemIcon
                sx={{
                  color:
                    window.location.pathname === item.navLink
                      ? "#1dbba5"
                      : "#b8b8b8",
                  minWidth: "24px",
                  margin: "0px 12px 0px 0px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText disableTypography>
                <Typography
                  sx={{
                    font: "14px Roboto,sans-serif",
                    color:
                      window.location.pathname === item.navLink
                        ? "#1dbba5"
                        : "#b8b8b8",
                  }}
                >
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <footer
          style={{
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "80%",
              borderRadius: "40px",
              padding: "16px 32px",
              backgroundColor: "#b8b8b8",
              lineHeight: "48px",
              ":hover": {
                backgroundColor: "#bebebe",
              },
            }}
            onClick={() =>
              alert(
                "Function still doesn't exist!\nTo implement it, hire the developer 😁"
              )
            }
          >
            <Typography
              sx={{
                color: "#181818",
                font: "14px Roboto, sans-serif",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              LOGOUT
            </Typography>
          </Button>
        </footer>
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
