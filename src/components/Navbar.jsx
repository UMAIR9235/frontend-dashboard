import React from "react";
import classes from "./Navbar.module.css";
import { homeIcon, bellIcon, clockIcon, userGroupIcon, walletIcon, settingsIcon, logoutIcon, messageIcon } from "../assets/icons";

function Navbar() {
  return <div className={classes.navbar}>
    <div className={classes.userNameInitial}>
      <h1>S.</h1>
      {messageIcon}
    </div>
    <div className={classes.navicons}>
      <a href="#">{homeIcon}</a>
      <a href="#">{bellIcon}</a>
      <a href="#">{clockIcon}</a>
      <a href="#">{userGroupIcon}</a>
      <a href="#">{walletIcon}</a>
      <a href="#">{settingsIcon}</a>
    </div>
    <div className={classes.logout}>
      <a href="#">{logoutIcon}</a>
    </div>
  </div>;
}

export default Navbar;
