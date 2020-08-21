import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'

const Bar = ({ open, classes, handleDrawerOpen, name, enableDrawer }) => {
  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Toolbar
        classes={{
          gutters: "gutters",
        }}
      >
        <img
          src={"logo.JPG"}
          alt="logo"
          className={clsx(classes.imgLogo)}
          onClick={handleDrawerOpen}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Bar;