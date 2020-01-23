import React from "react";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import store from '../Store/Store'
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

const ShowGroups = () => {
  const Groups=store.getState().groupsReducer.GroupsInfo
  return (
      <GroupsListTemplate groupsInfo={Groups} />
  );
};

const mapStateToProps = state => ({
  UserDetails: getUserInfo(state)
});


export default connect(mapStateToProps, null)(withStyles(styles)(ShowGroups));
