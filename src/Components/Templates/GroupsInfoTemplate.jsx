import React from "react";
import Navbar from "../Navbar";
import GroupsListTemplate from "./GroupsListTemplate";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SampleChart from "../Graphs/SampleChart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "../NavbarDesktop";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import Divider from "@material-ui/core/Divider";
import TransactionsTable from "../../Components/TransactionsTable"

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
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  let currentGroupInfo = props.location.state;
  let GroupActivity = [
    {
      ActivityType: "Expense",
      ActivityStatus: "New",
      Activity: "General Purpouse Expsense of $250 Invested !!"
    },
    {
      ActivityType: "Group Member",
      ActivityStatus: "New",
      Activity: "Nagendra is added !!"
    },
    {
      ActivityType: "Expense",
      ActivityStatus: "Update",
      Activity: "General Purpouse Expsense of Updated to $350 !!"
    },
    {
      ActivityType: "Group Member",
      ActivityStatus: "Update",
      Activity: "Nagendra changed to Nag !!"
    },
    {
      ActivityType: "Group Member",
      ActivityStatus: "Delete",
      Activity: "Nagendra Removed from Group"
    },
    {
      ActivityType: "Expense",
      ActivityStatus: "Delete",
      Activity: "General Purpouse Expsense of $350 is deleted !!"
    }
  ];
  return (
    <div align="center">
      {isMobile && isMobile ? <Navbar /> : <NavbarDesktop />}
      <p>
        {" "}
        Your Came to Group :{" "}
        <b>
          <i>{currentGroupInfo.GroupName}</i>
        </b>
      </p>
      {Object.keys(currentGroupInfo.ChildGroup).length !== 0 ? (
        <GroupsListTemplate groupsInfo={currentGroupInfo.ChildGroup} />
      ) : null}
      <div style={{ align: "center", display: "inline-flex" }}>
        <div style={{ width: "28vw",height:'50vh', minHeight:"50vh",maxHeight: "50vh", overflowY: "auto" }}>
          <List style={{ background: "aliceblue" }}>
            {" "}
            <b>Group Activity </b>
          </List>
          {GroupActivity.map(activity => (
            <List>
              <ListItem>
                <ListItemIcon>
                  {activity.ActivityType == "Expense" ? (
                    activity.ActivityStatus != "Update" ? (
                      <AttachMoneyIcon
                        style={
                          activity.ActivityStatus == "New"
                            ? { color: "Yellow" }
                            : { color: "Red" }
                        }
                      />
                    ) : (
                      <LoyaltyIcon style={{ color: "Blue" }} />
                    )
                  ) : activity.ActivityStatus != "Update" ? (
                    <GroupAddIcon
                      style={
                        activity.ActivityStatus == "New"
                          ? { color: "Green" }
                          : { color: "Red" }
                      }
                    />
                  ) : (
                    <LoyaltyIcon style={{ color: "Blue" }} />
                  )}
                </ListItemIcon>
                <ListItemText>{activity.Activity}</ListItemText>
              </ListItem>
              <Divider />
            </List>
          ))}
        </div>
        <SampleChart />
      </div>
      <div align ="center" style={{width:"55vw",height:120,marginTop:40,marginBottom:20}}>
        <p><b><i>{currentGroupInfo.GroupName}</i> Transactions History </b></p>
        {/* <TransactionsTable /> */}
        <TransactionsTable/>
      </div>
    </div>
  );
};

export default GroupsInfoTemplate;
