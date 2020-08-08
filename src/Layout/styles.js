import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const drawerWidth = 250;

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundColor: 'white',
      maxHeight: 64,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(0.5),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: 'rgb(242 242 242)',
      marginTop: 64,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#fefefe',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginTop: 64,
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginTop: 64,
      marginLeft: 0,
    },
    textSelected: {
      color: 'white',
    },
    textColor: {
      color: 'black',
      fontSize: ' 0.688rem',
      '&:hover': {
        color: 'white',
        transition: '0.3s',
      },
    },
    imgLogo: {
      width: '60px',
      height: '60px',
      fontSize: '8px',
      cursor: 'pointer',
    },
    square: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      position: 'relative',
      right: 0,
    },
    title: {
      display: 'block',
      color: '#D3D3D3',
      fontSize: '0.75rem',
      textTransform: 'none',
    },
    avatar: {
      verticalAlign: 'top',
      display: 'inline-block',
      textAlign: 'center',
      marginTop: 4,
      cursor: 'pointer',
    },
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
    }
  }),
);