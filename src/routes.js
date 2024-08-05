import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import Drawer from "./Drawer/index";

export default function RoutesMap() {
  const [openDrawer, setOpenDrawer] = React.useState(true);

  return (
    <>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/pacttos"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/videos-to-review"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/shared-links"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/personal-info"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/packages"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/profile"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/library"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/subscription"
          element={<Home drawerController={setOpenDrawer} />}
        />
        <Route
          path="/review-settings"
          element={<Home drawerController={setOpenDrawer} />}
        />
      </Routes>
    </>
  );
}
