import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import store from "../../Store/Store";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PlayForWorkRoundedIcon from "@material-ui/icons/PlayForWorkRounded";
import ChildGroupsInfoTemplate from "./ChildGroupsInfoTemplate";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { updateGroupInfo } from "../../actions/Creators/index";
import Apptheme from "../AppStylings/Apptheme";

const styles = makeStyles(theme => ({
  GroupsList: {
    minWidth: "25vw",
    marginTop: "3%",
    marginBottom: "3%",
    align: "Center"
  },
  listItems: {
    minWidth: "50vw",
    maxWidth: "53vw",
    maxHeight: "15vh"
  },
  investmentStatusLoss: {
    color: "Red"
  },
  investmentStatusProfit: {
    color: "Green"
  },
  Icons: {
    color: Apptheme.color.PrimaryColor
  },
  avatar:{
    color:Apptheme.avatar.color,
    background:Apptheme.avatar.backgroundColor
  }
}));

const GroupsListTemplate = (props, { updateGroupDetails }) => {
  const classes = styles();
  let history = useHistory();
  const [openChildGroupsInfoDialog, setChildGroupsInfoDialog] = useState(false);
  const [currentGroup, setCurrentGroup] = useState({});
  const [groupInfoFromChild, SetUpdatedGroupInfoFromChild] = useState({});
  const IconButtonItems = [
    {
      name: "ModifyChildGroups",
      Icon: <GroupAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      click: groups => {
        groups.handlerToUpdateParentState = { updatedGroupsData };
        setCurrentGroup(groups);
        setChildGroupsInfoDialog(true);
      }
    },

    {
      name: "Report",
      Icon: <EqualizerOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      click: () => {}
    },
    {
      name: "PostTransactionUpdate",
      Icon: <PostAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      click: () => {}
    },
    {
      name: "BusinessLine",
      Icon: <TrendingUpOutlinedIcon />,
      groupManagerAccess: false,
      showTooltip: true,
      click: () => {}
    },
    {
      name: "Child Groups",
      Icon: <PlayForWorkRoundedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      click: () => {}
    },
    {
      name: "Bookmark",
      Icon: <StarBorderIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      click: () => {}
    },
    {
      name: "Delete",
      Icon: <DeleteOutlineOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      click: () => {}
    },
    {
      name: "MoreItems",
      Icon: <MoreVertOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      click: () => {}
    }
  ];
  let GroupsInfo = props.groupsInfo;
  let currentUserName = store.getState().userReducer.UserInfo.Username;
  const closeChildGroupsInfoDialog = () => {
    setChildGroupsInfoDialog(false);
  };

  const updatedGroupsData = updatedGroupInfo => {
    SetUpdatedGroupInfoFromChild(updatedGroupInfo);
  };

  const handleSaveUpdatedGroupDetails = e => {
    e.preventDefault();
    updateGroupDetails(groupInfoFromChild);
  };
  const handleClear = () => {};
  return (
    <div align="center" className={classes.GroupsList}>
      {GroupsInfo.map(groups => (
        <List className={classes.listItems}>
          <ListItem>
            <Tooltip title={groups.GroupName}>
              <ListItem
                key={groups.GroupId}
                button
                onClick={e => changeGroupChilds(groups, e, history)}
              >
                <ListItemAvatar>
                  <Avatar className={classes.avatar}> {groups.GroupName.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText className={classes.Icons}>
                  {groups.GroupName}
                </ListItemText>
              </ListItem>
            </Tooltip>
            {IconButtonItems.map(buttons =>
              !buttons.groupManagerAccess ? (
                <Tooltip title={buttons.name}>
                  {buttons.name === "BusinessLine" ? (
                    <IconButton
                      className={
                        groups.GroupConfig.InvestmentStatus === "Loss"
                          ? classes.investmentStatusLoss
                          : classes.investmentStatusProfit
                      }
                    >
                      {buttons.Icon}
                    </IconButton>
                  ) : (
                    <IconButton onClick={setGroupChilds(buttons.name, groups)}>
                      {" "}
                      {buttons.Icon}
                    </IconButton>
                  )}
                </Tooltip>
              ) : currentUserName === groups.GroupConfig.GroupManager ? (
                <Tooltip title={buttons.name}>
                  <IconButton
                    onClick={() => {
                      buttons.click(groups);
                    }}
                  >
                    {buttons.Icon}
                  </IconButton>
                </Tooltip>
              ) : null
            )}
          </ListItem>
        </List>
      ))}
      <Dialog
        open={openChildGroupsInfoDialog}
        onClose={closeChildGroupsInfoDialog}
      >
        <DialogTitle id="form-dialog-title">
          Edit {currentGroup.GroupName} Sub Groups Info
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Note: This is Edit Panel,Change details only if required
          </DialogContentText>
          <ChildGroupsInfoTemplate {...currentGroup} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear}>Cancel</Button>
          <Button onClick={handleSaveUpdatedGroupDetails}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const changeGroupChilds = (groups, event, history) => {
  event.target === null
    ? (event.target.value = groups)
    : history.push(`/GroupsInfoTemplate/${groups.GroupId}`, groups);
};

const setGroupChilds = groups => {};

const mapDispatchToProps = dispatch => ({
  updateGroupDetails: groupDetails => {
    dispatch(updateGroupInfo(groupDetails));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(GroupsListTemplate));
