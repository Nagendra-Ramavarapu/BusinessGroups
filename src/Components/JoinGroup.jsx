import React, { useEffect } from "react";
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
import CompleteGroups from "../../src/DataProcess/CompleteGroups";
import FindMatchingGroup from "../DataProcess/FindMatchingGroup";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Tooltip } from "@material-ui/core";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";

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
  },
  investmentStatusLoss: {
    color: "Red"
  },
  investmentStatusProfit: {
    color: "Green"
  }
}));

const JoinGroup = () => {
  const classes = styles();
  const [chipValue, setChipValue] = React.useState("");
  const [groupInfo, setGroupInfo] = React.useState({});
  const [GroupsList, setGroupsList] = React.useState([]);
  // let AllGroups=CompleteGroups();
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  const UserGroupRequest = store.getState().userReducer.UserInfo.GroupInvites;
  useEffect(() => {
    axios
      .get("http://localhost:5000/Groups/")
      .then(res => setGroupsList(CompleteGroups(res.data)))
      .catch(err => console.log(err));
  }, [chipValue]);

  const sendGroupInvite = () => {};
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
          <Typography>Search Groups Here:</Typography>
          <div style={{ display: "flex" }}>
            <Autocomplete
              options={GroupsList.map(option => option.GroupName)}
              disableOpenOnFocus
              onChange={(e, value) => {
                setChipValue(value);
                setGroupInfo(FindMatchingGroup(GroupsList, value));
              }}
              renderInput={params => (
                <TextField
                  placeholder="Search with Group Name"
                  {...params}
                  style={{ width: "20vw", marginTop: "6%", marginLeft: "8%" }}
                />
              )}
            />
            <Tooltip title="Send Join Request">
              <IconButton
                style={{ marginTop: "3%", marginLeft: "10%", color: "Black" }}
                onClikc={() => sendGroupInvite()}
              >
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
          {chipValue && chipValue.length !== "" ? (
            <div>
              <List>
                <ListItem>
                  <b>
                    <i> Search Results: </i>
                  </b>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  Group Name:
                  {groupInfo && groupInfo.GroupName}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DnsOutlinedIcon />
                  </ListItemIcon>
                  Group Id:
                  {groupInfo && groupInfo.GroupId}
                </ListItem>
                <ListItem>
                  <ListItemIcon
                    className={
                      groupInfo && groupInfo.InvestmentStatus === "Profit"
                        ? classes.investmentStatusProfit
                        : classes.investmentStatusLoss
                    }
                  >
                    <TrendingUpOutlinedIcon />
                  </ListItemIcon>
                  Group Status: {groupInfo && groupInfo.InvestmentStatus}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  Group Scale: {groupInfo && groupInfo.GroupScale}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterOutlinedIcon />
                  </ListItemIcon>
                  Business Name: {groupInfo && groupInfo.BusinessName}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupervisedUserCircleOutlinedIcon />
                  </ListItemIcon>
                  Total Members:<i> {groupInfo && groupInfo.TotalMembers}</i>
                </ListItem>
              </List>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(JoinGroup);
