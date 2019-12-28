import WorkSpaceList from "../Data/WorkSpaceList";
import React from "react";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { getUserInfo } from "../Selectors/index";
import { useHistory } from "react-router-dom";
import GroupsListTemplate from "./Templates/GroupsListTemplate";
const styles = makeStyles(theme => ({
  GroupsList: {
    maxHeight: "32vh",
    minHeight: "15vh",
    width: "35vw",
    paddingTop: "10%",
    float: "right"
  }
}));

const WorkSpaceConfig = JSON.parse(WorkSpaceList);
const Groups = WorkSpaceConfig.WorkSpace.Groups;

const ShowGroups = () => {
  const classes = styles();

  // const currentUserInfo = UserDetails.UserInfo;
  // const currentUserName = currentUserInfo && currentUserInfo.UserName;

  return (
    // <div className={classes.GroupsList}>
      <GroupsListTemplate groupsInfo={Groups} />
    // </div>
  );
};

const mapStateToProps = state => ({
  UserDetails: getUserInfo(state)
});

export default connect(mapStateToProps, null)(withStyles(styles)(ShowGroups));
