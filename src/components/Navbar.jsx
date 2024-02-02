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
      {homeIcon}
      {bellIcon}
      {clockIcon}
      {userGroupIcon}
      {walletIcon}
      {settingsIcon}
    </div>
    <div className={classes.logout}>
      {logoutIcon}
    </div>
  </div>;
}

export default Navbar;
