import React, { useState, useEffect } from "react";
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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Apptheme from "../AppStylings/Apptheme";
import {
  updateGroupDetails,
  addFavGroup,
  deleteFavGroup,
  setUserDetails
} from "../../actions/Creators/index";
import FindCompleteGroupConfig from "../../DataProcess/FindCompleteGroupConfig";
import FindAllchilds from "../../DataProcess/FindAllChilds";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import axios from "axios";

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
  favIcon: {
    color: Apptheme.color.SecondaryColor
  },
  avatar: {
    color: Apptheme.avatar.color,
    background: Apptheme.avatar.backgroundColor
  },
  favDiv: {
    marginTop: "4%",
    marginLeft: "4%",
    marginBottom: "1%",
    display: "flex",
    maxWidth: "50vw",
    minWidth: "50vw",
    overflowX: "auto"
  },
  IndividualFavDiv: {
    borderStyle: "groove",
    borderRadius: "15px",
    marginRight: "1%",
    minWidth: "10vw",
    maxWidth: "10vw",
    height: "23vh"
  },
  favDivButtons: {
    display: "flex"
  },
  BusinessLineProfitFavButton: {
    marginLeft: 2,
    marginRight: 5,
    marginTop: 25,
    color: "Green"
  },
  BusinessLineLossFavButton: {
    marginLeft: 2,
    marginRight: 5,
    marginTop: 25,
    color: "Red"
  },
  favDivButton: {
    marginLeft: 2,
    marginRight: 5,
    marginTop: 25,
    color: Apptheme.color.SecondaryColor
  },
  favNavButtons: {
    marginLeft: 2,
    marginRight: 5,
    marginTop: 25,
    color: Apptheme.color.PrimaryColor
  }
}));

const GroupsListTemplate = props => {
  const classes = styles();
  let history = useHistory();
  const [openChildGroupsInfoDialog, setChildGroupsInfoDialog] = useState(false);
  const [currentGroup, setCurrentGroup] = useState({});
  const [favButtonClicked, TriggerUseEffect] = useState(false);
  const [popoverAnchor, setPopoverAnchorPosition] = React.useState(null);
  const [AllGroups, setAllGroups] = React.useState({});
  const [popoverTemplate, setPopoverTemplate] = useState();
  const [groupInfoFromChild, SetUpdatedGroupInfoFromChild] = useState(null);
  const [sample, setSample] = useState(0);
  const [userFavGroups, setUserFavGroups] = useState([]);
  const IconButtonItems = [
    {
      name: "ModifyChildGroups",
      Icon: <GroupAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
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
      showOnFav: true,
      click: () => {}
    },
    {
      name: "PostTransactionUpdate",
      Icon: <PostAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: () => {}
    },
    {
      name: "BusinessLine",
      Icon: <TrendingUpOutlinedIcon />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: true,
      click: () => {}
    },
    {
      name: "Child Groups",
      Icon: <PlayForWorkRoundedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        setPopoverAnchorPosition(event.target);
        setAllGroups(
          FindAllchilds(
            store.getState().groupsReducer.GroupsInfo,
            groups.GroupId
          )
        );
        setCurrentGroup(groups);
      }
    },
    {
      name: "Favourite",
      Icon: <StarBorderIcon />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: true,
      click: async (groups, event) => {
        console.log("Entered fav button click");
        console.log("Before Updating Store:", userFavGroups);
        if (
          userFavGroups.some(favgroup => favgroup.GroupId == groups.GroupId)
        ) {
          // setSample(sample+1)
          // await
          // props.deleteFavGroup(groups);
          // let clonedFavGroups = store.getState().userReducer.UserInfo
          //   .FavGroupsInfo;
          // setUserFavGroups([
          //   ...store.getState().userReducer.UserInfo.FavGroupsInfo
          // ]);
          // console.log(
          //   "Fav Groups After Updating FavGroups State:",
          //   store.getState().userReducer.UserInfo.FavGroupsInfoserFavGroups
          // );
          // TriggerUseEffect(true);
          //setUserFavGroups(store.getState().userReducer.UserInfo.FavGroupsInfo);
          // console.log("Axios Object:",groups)
          // axios
          //   .post("http://localhost:5000/Users/Remove/Fav/", groups)
          //   .then(res =>
          //     res.status == "200"
          //       ? console.log("Success")
          //       : console.log("Error Occured:", res.status, ":", res.statusText)
          //   )
          //   .catch(err => console.log(err));
          // await
          // props.deleteFavGroup(groups);
          //TriggerUseEffect(true);
        } else {
          // setSample(sample+1)
          // props.addFavGroup(groups);
          // let clonedFavGroups = store.getState().userReducer.UserInfo
          //   .FavGroupsInfo;
          // setUserFavGroups([
          //   ...store.getState().userReducer.UserInfo.FavGroupsInfo
          // ]);
          // console.log(
          //   "Fav Groups After Updating FavGroups State:",
          //   store.getState().userReducer.UserInfo.FavGroupsInfo
          // );
          // console.log("Axios Object:",groups)
          // axios
          //   .post("http://localhost:5000/Users/Add/Fav/", groups )
          //   .then(res =>
          //     res.status == "200"
          //       ? console.log("Success")
          //       : console.log("Error Occured:", res.status, ":", res.statusText)
          //   )
          //   .catch(err => console.log(err));
          // await props.addFavGroup(groups);
          //TriggerUseEffect(true);
          //setUserFavGroups(store.getState().userReducer.UserInfo.FavGroupsInfo);
        }
      }
    },
    {
      name: "Delete",
      Icon: <DeleteOutlineOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: () => {}
    },
    {
      name: "MoreItems",
      Icon: <MoreVertOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: () => {}
    }
  ];
  let GroupsInfo = props.groupsInfo;
  let currentUserName = store.getState().userReducer.UserInfo.Username;
  //let userFavGroups = store.getState().userReducer.UserInfo.FavGroupsInfo;
  const closeChildGroupsInfoDialog = () => {
    setChildGroupsInfoDialog(false);
  };
  const closepopover = () => {
    setPopoverAnchorPosition(null);
  };
  const updatedGroupsData = updatedGroupInfo => {
    SetUpdatedGroupInfoFromChild(updatedGroupInfo);
  };

  const handleSaveUpdatedGroupDetails = () => {
    //console.log("State Object after on submit:",groupInfoFromChild)
    //console.log(props)

    console.log(
      FindCompleteGroupConfig(
        store.getState().groupsReducer.GroupsInfo,
        groupInfoFromChild
      )
    );
    //props.updateGroupDetails(groupInfoFromChild)

    setChildGroupsInfoDialog(false);
  };
  const handleClear = () => {
    setChildGroupsInfoDialog(false);
  };

  useEffect(() => {
    let clonedTemplate = [];
    for (let group in AllGroups) {
      clonedTemplate.push(AllGroups[group]);
    }
    setPopoverTemplate(clonedTemplate);
  }, [AllGroups]);

  useEffect(() => {
    setUserFavGroups(...store.getState().userReducer.UserInfo.FavGroupsInfo);
  }, [favButtonClicked]);
  useEffect(() => {
    setUserFavGroups([...store.getState().userReducer.UserInfo.FavGroupsInfo]);
  }, []);
  // useEffect(async () => {
  //   await axios
  //     .get(
  //       `http://localhost:5000/Users/${store.getState().userReducer.Username}`
  //     )
  //     .then(res =>
  //       res.status == "200"
  //         ? props.setUserFavGroups(res.data.FavGroupsInfo)
  //         : console.log("Error Occured:", res.status, ":", res.statusText)
  //     )
  //     .catch(err => console.log(err));

  //   //setUserFavGroups(store.getState().userReducer.UserInfo.FavGroupsInfo);
  // }, [favButtonClicked]);
  return (
    <div align="center">
      <div align="center" className={classes.favDiv}>
        {userFavGroups &&
          userFavGroups.map(group => (
            <div className={classes.IndividualFavDiv}>
              <p>{group.GroupName}</p>
              <Tooltip title={group.GroupName}>
                <Avatar
                  className={classes.avatar}
                  style={{ align: "center" }}
                  key={group.GroupId}
                  variant="rounded"
                >
                  {group.GroupName.charAt(0)}
                </Avatar>
              </Tooltip>
              <div className={classes.favDivButtons}>
                {IconButtonItems.map(favIcons =>
                  favIcons.showOnFav === true ? (
                    <IconButton
                      size="small"
                      className={
                        favIcons.name === "BusinessLine"
                          ? group.GroupConfig.InvestmentStatus === "Loss"
                            ? classes.BusinessLineLossFavButton
                            : classes.BusinessLineProfitFavButton
                          : favIcons.name !== "Favourite"
                          ? classes.favNavButtons
                          : classes.favDivButton
                      }
                    >
                      {favIcons.Icon}
                    </IconButton>
                  ) : null
                )}
              </div>
            </div>
          ))}
      </div>
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
                    <Avatar className={classes.avatar}>
                      {groups.GroupName.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className={classes.Icons}>
                    {groups.GroupName}
                  </ListItemText>
                </ListItem>
              </Tooltip>
              {IconButtonItems.map(buttons =>
                !buttons.groupManagerAccess ? (
                  <Tooltip title={buttons.name}>
                    <IconButton
                      className={
                        buttons.name === "BusinessLine"
                          ? groups.GroupConfig.InvestmentStatus === "Loss"
                            ? classes.investmentStatusLoss
                            : classes.investmentStatusProfit
                          : buttons.name === "Favourite"
                          ? userFavGroups.some(
                              Favgroup => Favgroup.GroupId === groups.GroupId
                            )
                            ? classes.favIcon
                            : classes.Icons
                          : classes.Icons
                      }
                      onClick={event => {
                        buttons.click(groups, event);
                      }}
                    >
                      {buttons.Icon}
                    </IconButton>
                  </Tooltip>
                ) : currentUserName === groups.GroupConfig.GroupManager ? (
                  <Tooltip title={buttons.name}>
                    <IconButton
                      onClick={event => {
                        buttons.click(groups, event);
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
        <Popover
          open={Boolean(popoverAnchor)}
          anchorEl={popoverAnchor}
          onClose={closepopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          {popoverTemplate &&
            popoverTemplate.map(list =>
              list.GroupId !== currentGroup.GroupId ? (
                <MenuItem
                  onClick={event =>
                    changeGroupChilds(list.GroupConfig, event, history)
                  }
                >
                  <ListItemIcon>{list.GroupId}</ListItemIcon>
                  <ListItemText>{list.GroupName}</ListItemText>
                </MenuItem>
              ) : null
            )}
        </Popover>
      </div>
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
  updateGroupDetails: setGroupDetails => {
    dispatch(updateGroupDetails(setGroupDetails));
  },
  addFavGroup: FavGroupInfo => {
    dispatch(addFavGroup(FavGroupInfo));
  },
  deleteFavGroup: FavGroupInfo => {
    dispatch(deleteFavGroup(FavGroupInfo));
  },
  setUserDetails: setDetails => {
    dispatch(setUserDetails(setDetails));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(GroupsListTemplate));
