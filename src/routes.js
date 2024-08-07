import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import Drawer from "./Drawer/index";
import Chats from "./Pages/Chats";
import Review from "./Pages/Review";
import WebLinks from "./Pages/Web_Links";
import Personal from "./Pages/Personal_info";
import Library from "./Pages/Library";
import Subscription from "./Pages/Subscription";
import Settings from "./Pages/Settings";
import Header from "./Header/Header";
import "./App.css";

export default function RoutesMap() {
  const [openDrawer, setOpenDrawer] = React.useState(true);

  return (
    <>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />

      <Header changeDrawerState={setOpenDrawer} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pacttos" element={<Chats />} />
        <Route path="/videos-to-review" element={<Review />} />
        <Route path="/shared-links" element={<WebLinks />} />
        <Route path="/personal-info" element={<Personal />} />
        <Route path="/packages" element={<Library />} />
        <Route path="/profile" element={<Personal />} />
        <Route path="/library" element={<Library />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/review-settings" element={<Settings />} />
      </Routes>
    </>
  );
}
