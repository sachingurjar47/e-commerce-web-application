import React from "react";
import "./App.css";
import AppBar, { NavItem } from "./components/AppBar";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import Notifications from "./components/Notifications";
import Root from "./Routes/Root";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const navItems: NavItem[] = [
  { component: WishList, key: "wishlist" },
  { component: Cart, key: "cart" },
  { component: Profile, key: "profile" },
];
const moreItems: NavItem[] = [
  {
    component: Notifications,
    key: "notifications",
    title: "Notifications",
  },
];
function App() {
  return (
    <div className="App">
      <AppBar navItems={navItems} moreItems={moreItems} />
      <Box mt={10}>
        <Outlet />
      </Box>
      <Root />
    </div>
  );
}

export default App;
