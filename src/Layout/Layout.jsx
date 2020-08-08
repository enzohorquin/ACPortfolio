import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Appbar';
import Drawer from './Drawer';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';


const PersistentDrawerLeft = ({ children, enableDrawer = true }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        open={open}
        classes={classes}
        handleDrawerOpen={handleDrawer}
        name={'Name'}
        enableDrawer={enableDrawer}
      />
      {enableDrawer && 
      <Drawer
        open={open}
        classes={classes}
        theme={theme}
        handleDrawerClose={handleDrawer}
      />
      }
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  );
}

export default PersistentDrawerLeft;