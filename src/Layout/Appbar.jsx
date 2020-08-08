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
        <Link href="/">
          <img
            src={"logo.JPG"}
            alt="logo"
            className={clsx(classes.imgLogo)}
            onClick={handleDrawerOpen}
          />
        </Link>
        {/* {enableDrawer && (
          <IconButton
            aria-label="open drawer"
            
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        )} */}
        {/* <section className={classes.rightToolbar}>
          <figure className={classes.avatar}>
            <Avatar alt="Name" className={classes.square} />
            <figcaption>
              <Typography variant="subtitle1" className={classes.title}>
                {name}
              </Typography>
            </figcaption>
          </figure>
        </section> */}
      </Toolbar>
    </AppBar>
    );
}

export default Bar;