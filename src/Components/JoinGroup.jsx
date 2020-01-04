import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import store from "../Store/Store";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import { green, red } from "@material-ui/core/colors";

const styles = makeStyles(theme => ({
  joinGroupDiv: {
    display: "flex",
    width: "60vw",
    minWidth: "60vw"
  },
  joinGroupDivMobile: {
    display: "column",
    width: "60vw",
    minWidth: "60vw"
  },
  reqDiv: {
    margin: 5,
    minWidth: "30vw",
    boxSizing: "border-box",
    backgroundColor: "#4e464605"
  }
}));

const JoinGroup = () => {
  const classes = styles();
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  const UserGroupRequest = store.getState().userReducer.UserInfo.GroupInvites;

  return (
    <div align="center">
      {isMobile && isMobile ? <Navbar /> : <NavbarDesktop />}
      <h3>
        <i> Check your Bspace Group Requests & Suggestions</i>
      </h3>
      <div
        align="center"
        className={
          !isMobile ? classes.joinGroupDiv : classes.joinGroupDivMobile
        }
      >
        <div className={classes.reqDiv}>
          <p>Join Requests</p>

          {console.log(UserGroupRequest)}
          {UserGroupRequest &&
            UserGroupRequest.map(Group => (
              //<h1></h1>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{Group.GroupId.charAt(0)}</Avatar>
                  </ListItemAvatar>
                  <ListItem>{Group.GroupName}</ListItem>
                  <IconButton style={{ color: green[500] }}>
                    <CheckCircleOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton style={{ color: red[500] }}>
                    <CancelOutlinedIcon />
                  </IconButton>
                </ListItem>
              </List>
            ))}
        </div>
        <div className={classes.reqDiv}>
          <p>Search Options</p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(JoinGroup);
