import React from "react";
import clsx from "clsx";
import store from "../Store/Store";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { getUserInfo } from "../Selectors/index";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import BusinessCenterTwoToneIcon from "@material-ui/icons/BusinessCenterTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import FeedbackTwoToneIcon from "@material-ui/icons/FeedbackTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { useHistory } from "react-router-dom";
import CreateGroup from "./CreateGroup";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(1, 7),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbarItems:{
    float:'left'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const generalItems = [
    {
      name: "Home",
      click: history => {
        if (!(history.location && history.location.pathname === "/Home"))
          history.push("/Home");
      },
      icon: <HomeRoundedIcon />
    },
    {
      name: "NewsFeed",
      click: history => {
        if (!(history.location && history.location.pathname === "/NewsFeed"))
          history.push("/NewsFeed");
      },
      icon: <PostAddIcon />
    },


    
    {
      name: "Create group",
      click: history => {
        if (!(history.location && history.location.pathname === "/CreateGroup"))
          history.push("/CreateGroup");
      },
      icon: <GroupAddRoundedIcon />
    },
    {
      name: "Join Group",
      click: history => {
        if (!(history.location && history.location.pathname === "/JoinGroup"))
          history.push("/JoinGroup");
      },
      icon: <GroupRoundedIcon />
    },
    {
      name: "Predict Business",
      click: () => {},
      icon: <BusinessCenterTwoToneIcon />
    }
  ];

  const appItems = [
    {
      name: "About",
      click: () => {},
      icon: <InfoTwoToneIcon />
    },
    {
      name: "Help",
      click: () => {},
      icon: <HelpTwoToneIcon />
    },
    {
      name: "Feedback",
      click: () => {},
      icon: <FeedbackTwoToneIcon />
    },
    {
      name: "Settings",
      click: () => {},
      icon: <SettingsTwoToneIcon />
    }
  ];

  const toolbarItems = [
    {
      name:"Profile",
      click: ()=>{},
      icon:<Avatar> { store.getState().userReducer.UserInfo &&
        store.getState().userReducer.UserInfo.Name.charAt(0)}</Avatar>
    },
    {
      name:"Wallets",
      click: ()=>{},
      icon:<AccountBalanceWalletOutlinedIcon/>
    },
    {
      name:"Notifications",
      click: ()=>{},
      icon:<NotificationsNoneRoundedIcon/>
    }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome to Application @{" "}
            {store.getState().userReducer.UserInfo &&
              store.getState().userReducer.UserInfo.Name}
          </Typography>
          {/* <div className={classes.toolbarItems}>
          {toolbarItems.map(toolbarItem =>
          <ListItemIcon>{toolbarItem.icon}</ListItemIcon>
          )}
          </div> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        {/* <Divider /> */}
        <List>
          {generalItems.map(items => (
            <ListItem
              button
              onClick={() => {
                items.click(history);
              }}
              key={items.name}
            >
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText
                onClick={() => {
                  items.click(history);
                }}
              >
                {items.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" />
        <List>
          {appItems.map(items => (
            <ListItem button key={items.name}>
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText> {items.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  UserDetails: getUserInfo(state)
});

export default connect(mapStateToProps, null)(withStyles(useStyles)(Navbar));
