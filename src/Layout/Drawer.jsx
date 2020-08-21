import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from './MenuItem';
import { drawerConfig } from './config';
import clsx from 'clsx';

const DrawerComponent = ({
  open,
  classes,
  theme,
  handleDrawerClose,
}) => {
  /* let location = useLocation(); */

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper + " paper",
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List component="nav" disablePadding>
        {drawerConfig.map((item, index) => (
          <MenuItem key={index} {...item} classes={classes} />
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
