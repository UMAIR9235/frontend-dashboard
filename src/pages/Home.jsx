import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import classes from './Home.module.css'
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className={classes.home}>
      <Navbar />
      <Dashboard />
      <Sidebar />
    </div>
  );
}

export default Home;
