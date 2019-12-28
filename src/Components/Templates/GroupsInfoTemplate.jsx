import React from "react";
import Navbar from "../Navbar";
import GroupsListTemplate from './GroupsListTemplate'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SampleChart from '../Graphs/SampleChart'

const styles = makeStyles(theme => ({
  GroupsList: {
    maxHeight: "32vh",
    minHeight: "15vh",
    width: "35vw",
    paddingTop: "15%",
    float: "right"
  }
}));

const GroupsInfoTemplate = props => {
  const classes = styles();
  let currentGroupInfo = props.location.state
  return (
    <div>
      <Navbar />
      Your Came to Group :{currentGroupInfo.GroupId}
      {/* {console.log(currentGroupInfo.GroupId)} */}
      {(Object.keys(currentGroupInfo.ChildGroup).length !== 0) ? <GroupsListTemplate groupsInfo ={currentGroupInfo.ChildGroup}/>: null}
      <SampleChart/>
    </div>
  );
};

export default GroupsInfoTemplate;
