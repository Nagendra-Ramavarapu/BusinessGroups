import React, { useEffect, useState } from "react";
import store from "../../Store/Store";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Apptheme from "../AppStylings/Apptheme";
import HigherLevelGroupListMobile from "./HigherLevelGroupListMobile";
import Logo from "../../Logo/logo3.png";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import NavbarItems from "../NavbarItems";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles(theme => ({
  mobileNav: {
    background: "#c1f5bd",
    fontSize: 24,
    fontWeight: 700,
    color: "#061227",
    height: 40,
    textAlign: "center"
  },
  mobileDivBackground: {
    background: "#9c96962b"
  },
  MenuButton: {
    float: "right",
    color: "#233d58",
    marginRight: 10,
    padding: 8
  },
  closeButton: {
    padding: 0,
    size: "small",
    float: "right",
    marginRight: 15
  },
  appTitleDrawer: {
    marginTop: 15,
    marginLeft: 10
  },
  divider: {
    marginBottom: 10,
    marginTop: 5
  },
  SwipeableDrawer: {
    width: 500
  }
}));
const NavbarMobile = () => {
  const classes = useStyles();
  let history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);
  //  let currentUsername = store.getState().userReducer.UserInfo.Username;

  return (
    <div className={classes.mobileDivBackground}>
      <div className={classes.mobileNav}>
        <b>
          <i>Business Share</i>
        </b>
        <IconButton
          edge="end"
          className={classes.MenuButton}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          className={classes.SwipeableDrawer}
          anchor="right"
          open={openDrawer}
        >
          <span className={classes.appTitleDrawer}>
            <b>
              <i>Business Share</i>
            </b>
            <IconButton className={classes.closeButton}>
              <CloseIcon onClick={() => setOpenDrawer(false)} />
            </IconButton>
          </span>
          <Divider className={classes.divider} />
          <List>
            {NavbarItems.generalItems.map(generalItem => (
              <ListItem
                onClick={() => {
                  generalItem.click(history);
                }}
              >
                <ListItemIcon> {generalItem.icon} </ListItemIcon>
                <ListItemText>{generalItem.name} </ListItemText>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default connect(null, null)(withStyles(useStyles)(NavbarMobile));
