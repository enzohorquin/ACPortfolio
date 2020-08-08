import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Link from 'next/link';
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
      <List>
        {drawerConfig.map((item, index) => (
          <Link
            href={item.to}
            key={item.text}
          >
            <ListItem
              /* selected={location?.pathname === item.to} */
              button
              key={item.text}
              classes={{ selected: classes.textSelected }}
            >
              {/* <img src={item.icon} alt={item.text} className={clsx(classes.drawerIcon, item.className && item.className, 'icon')} /> */}
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
