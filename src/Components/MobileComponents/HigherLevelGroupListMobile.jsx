import React from "react";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import store from '../../Store/Store'
import { useHistory } from "react-router-dom";
import GroupsListTemplateMobile from "./MobileTemplates/GroupsListTemplateMobile"
const styles = makeStyles(theme => ({
}));

const ShowGroupsMobile = () => {
  const Groups=store.getState().groupsReducer.GroupsInfo
  return (
      <GroupsListTemplateMobile groupsInfo={Groups} />
  );
};

export default connect(null, null)(withStyles(styles)(ShowGroupsMobile));
