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
import SampleChart from "../Graphs/SampleChart";
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
import TransactionsTemplate from "./TransactionsTemplate";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import Badge from "@material-ui/core/Badge";
import FavLeftIcon from "../../Icons/FavLeftIcon";
import FavRightIcon from "../../Icons/FavRightIcon";
import Skeleton from "@material-ui/lab/Skeleton";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { useRef } from "react";

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
  disableFavNav: {
    visibility: "hidden"
  },
  ShowFavNav: {
    visibility: "visible"
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
    maxWidth: "52vw",
    minWidth: "52vw",
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
  },
  skeltonListItems: {
    minWidth: "50vw",
    maxWidth: "53vw",
    height: "35vh"
  }
}));

const GroupsListTemplate = props => {
  const classes = styles();
  let history = useHistory();
  let currentUsername = store.getState().userReducer.UserInfo.Username;
  let currentUserId = store.getState().userReducer.UserInfo._id;
  const [openChildGroupsInfoDialog, setChildGroupsInfoDialog] = useState(false);
  const [currentGroup, setCurrentGroup] = useState({});
  const [favButtonClicked, TriggerUseEffect] = useState(false);
  const [popoverAnchor, setPopoverAnchorPosition] = React.useState(null);
  const [AllGroups, setAllGroups] = React.useState({});
  const [popoverTemplate, setPopoverTemplate] = useState();
  const [openTransactionDialog, setTransactionDialog] = useState(false);
  const [openChartDialog, setChartDialog] = useState(false);
  const [groupInfoFromChild, SetUpdatedGroupInfoFromChild] = useState(null);
  const [showLeftFav, setLeftFavAction] = useState(false);
  const [showRighFav, setRightFavAction] = useState(true);
  const [userFavGroups, setUserFavGroups] = useState([]);
  const [userFavStartIndex, setUserFavStartIndex] = useState(0);
  const [userFavEndIndex, setUserFavEndIndex] = useState(4);
  const [currentSlideFav, setCurrentSlideFav] = useState([]);
  const [moreItemsAnchorEl, setmoreItemsAnchorEl] = React.useState(null);
  const [growAnimation, setgrowAnimation] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const favRef = useRef(null)

  const IconButtonItems = [
    {
      name: "Report",
      Icon: <EqualizerOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: true,
      click: (groups, event) => {
        setChartDialog(true);
      }
    },
    {
      name: "Post Transaction Update",
      Icon: <PostAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        setTransactionDialog(true);
      }
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
        if (
          userFavGroups.some(favgroup => favgroup.GroupId == groups.GroupId)
        ) {
          let resValue = {
            _id: currentUserId,
            GroupId: groups.GroupId
          };
          axios
            .post("http://localhost:5000/Users/Remove/Fav/", resValue)
            .then(res =>
              res.status == "200"
                ? TriggerUseEffect(prevState => !prevState)
                : console.log("Error Occured:", res.status, ":", res.statusText)
            )
            .catch(err => console.log(err));
        } else {
          let resValue = {
            _id: currentUserId,
            GroupConfig: groups
          };
          axios
            .post("http://localhost:5000/Users/Add/Fav/", resValue)
            .then(res =>
              res.status == "200"
                ? TriggerUseEffect(prevState => !prevState)
                : console.log("Error Occured:", res.status, ":", res.statusText)
            )
            .catch(err => console.log(err));
        }
      }
    },
    {
      name: "GroupChat",
      Icon: (
        <Badge badgeContent={0} color="primary">
          <MessageOutlinedIcon />
        </Badge>
      ),
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        console.log("Groups Info:", groups);
      }
    },
    {
      name: "Notifications",
      Icon: (
        <Badge badgeContent={0} color="Secondary">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      ),
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        console.log("Groups Info:", groups);
      }
    },
    {
      name: "MoreItems",
      Icon: <MoreVertOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        setmoreItemsAnchorEl(event.target);
        groups.handlerToUpdateParentState = { updatedGroupsData };
        setCurrentGroup(groups);
      }
    }
  ];
  const MoreItems = [
    {
      name: "Modify Groups Info",
      Icon: <GroupAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: () => {
        setChildGroupsInfoDialog(true);
      }
    },
    {
      name: "Delete Group",
      Icon: <DeleteOutlineOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: () => {}
    }
  ];
  let GroupsInfo = props.groupsInfo;
  let currentUserName = store.getState().userReducer.UserInfo.Username;

  const closeChildGroupsInfoDialog = () => {
    setChildGroupsInfoDialog(false);
  };
  const closepopover = () => {
    setPopoverAnchorPosition(null);
  };
  const updatedGroupsData = updatedGroupInfo => {
    SetUpdatedGroupInfoFromChild(updatedGroupInfo);
  };

  const onFavRight = () => {
    //TODO: check the possibilites on adding fav groups
    //TODO: check the possibilites on Removing fav groups on GroupsList Div and Fav Div
    // TODO: Check the possibility when we last index equals to userFavGroups.lenght
    // Add right-circle and left-circle icon
    if (userFavEndIndex + 4 >= userFavGroups.length) {
      setLeftFavAction(true);
      setCurrentSlideFav(
        userFavGroups.slice(userFavStartIndex + 4, userFavGroups.length)
      );
      setUserFavStartIndex(userFavStartIndex + 4);
      setUserFavEndIndex(userFavGroups.length - 1);
      setRightFavAction(false);
    } else {
      setLeftFavAction(true);
      setCurrentSlideFav(
        userFavGroups.slice(userFavStartIndex + 4, userFavEndIndex + 4)
      );
      setUserFavStartIndex(userFavStartIndex + 4);
      setUserFavEndIndex(userFavEndIndex + 4);
      setRightFavAction(true);
    }
  };
  const onFavLeft = () => {
    //TODO: check the possibilites on adding fav groups
    //setgrowAnimation(true)
    if (userFavEndIndex == userFavGroups.length - 1) {
      setCurrentSlideFav(
        userFavGroups.slice(userFavStartIndex - 4, userFavStartIndex)
      );
      setUserFavStartIndex(userFavStartIndex - 4);
      setUserFavEndIndex(userFavStartIndex);
      setRightFavAction(true);
    } else {
      setCurrentSlideFav(
        userFavGroups.slice(userFavStartIndex - 4, userFavEndIndex - 4)
      );
      setUserFavStartIndex(userFavStartIndex - 4);
      setUserFavEndIndex(userFavEndIndex - 4);
      setRightFavAction(true);
    }
  };
  const handlemoreItemsAchorClose = () => {
    setmoreItemsAnchorEl(null);
  };
  const handleSaveUpdatedGroupDetails = () => {
    console.log(
      FindCompleteGroupConfig(
        store.getState().groupsReducer.GroupsInfo,
        groupInfoFromChild
      )
    );
    setChildGroupsInfoDialog(false);
  };
  const handleClear = () => {
    setChildGroupsInfoDialog(false);
  };
  const handleFavDivAction = (ActionName, group) => {
    if (ActionName == "Favourite") {
      let resValue = {
        _id: currentUserId,
        GroupId: group.GroupId
      };
      axios
        .post("http://localhost:5000/Users/Remove/Fav/", resValue)
        .then(res =>
          res.status == "200"
            ? TriggerUseEffect(prevState => !prevState)
            : console.log("Error Occured:", res.status, ":", res.statusText)
        )
        .catch(err => console.log(err));
    } else if (ActionName == "Report") {
      setChartDialog(true);
    }
  };
  const closeTransactionDialog = () => {
    setTransactionDialog(false);
  };

  const closeChartDialog = () => {
    setChartDialog(false);
  };
  useEffect(() => {
    let clonedTemplate = [];
    for (let group in AllGroups) {
      clonedTemplate.push(AllGroups[group]);
    }
    setPopoverTemplate(clonedTemplate);
  }, [AllGroups]);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0,favRef.current)
    axios
      .get(`http://localhost:5000/Users/${currentUsername}`)
      .then(res =>
        res.status == "200"
          ? setUserFavGroups(res.data[0].FavGroupsInfo)
          : console.log("Error Occured:", res.status, ":", res.statusText)
      )
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentSlideFav(userFavGroups.slice(userFavStartIndex, userFavEndIndex));
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, [userFavGroups]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Users/${currentUsername}`)
      .then(res =>
        res.status == "200"
          ? setUserFavGroups(res.data[0].FavGroupsInfo)
          : console.log("Error Occured:", res.status, ":", res.statusText)
      )
      .catch(err => console.log(err));
  }, [favButtonClicked]);

  return (
    <div align="center">
      <div align="center" ref= {favRef} className={classes.favDiv}>
        <div
          className={
            showLeftFav && userFavStartIndex != 0
              ? classes.ShowFavNav
              : classes.disableFavNav
          }
        >
          {!isLoading && (
            <IconButton
              onClick={onFavLeft}
              className={userFavGroups.length < 5 && classes.disableFavNav}
              style={{
                marginTop: 60,
                marginRight: 7,
                padding: 0,
                color: Apptheme.color.SecondaryColor
              }}
            >
              <FavLeftIcon />
            </IconButton>
          )}
        </div>
        {isLoading
          ? [0, 1, 2, 3].map(index => (
              <Skeleton
                animation="wave"
                width={160}
                height={180}
                style={{marginRight:5, borderRadius:10}}
                variant="rect"
              />
            ))
          : currentSlideFav &&
            currentSlideFav.map(group => (
              <div className={classes.IndividualFavDiv}>
                <p>{group.GroupId}</p>
                <Tooltip title={group.GroupName}>
                  <Avatar
                    className={classes.avatar}
                    style={{ align: "center" }}
                    key={group.GroupId}
                    variant="rounded"
                    onClick={event => changeGroupChilds(group, event, history)}
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
                        onClick={() => handleFavDivAction(favIcons.name, group)}
                      >
                        {favIcons.Icon}
                      </IconButton>
                    ) : null
                  )}
                </div>
              </div>
            ))}
        <div
          className={
            userFavGroups.length > 4 && showRighFav
              ? classes.ShowFavNav
              : classes.disableFavNav
          }
        >
          {!isLoading && (
            <IconButton
              onClick={onFavRight}
              style={{
                marginTop: 60,
                padding: 0,
                color: Apptheme.color.SecondaryColor
              }}
            >
              <FavRightIcon />
            </IconButton>
          )}
        </div>
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
                  {isLoading ? (
                    <Skeleton
                      animation="wave"
                      variant="circle"
                      width={80}
                      height={50}
                    />
                  ) : (
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        {groups.GroupName.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                  )}
                  {isLoading ? (
                    <Skeleton
                      style={{ marginLeft: 5 }}
                      animation="wave"
                      variant="rect"
                      width={900}
                      height={40}
                    />
                  ) : (
                    <ListItemText className={classes.Icons}>
                      {groups.GroupName}
                    </ListItemText>
                  )}
                </ListItem>
              </Tooltip>
              {!isLoading &&
                IconButtonItems.map(buttons =>
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
                        style={{ padding: 5, marginRight: 7 }}
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
                        style={{ padding: 5, marginRight: 7 }}
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
        <Dialog open={openTransactionDialog} onClose={closeTransactionDialog}>
          <DialogContent>
            <TransactionsTemplate />
          </DialogContent>
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
        <Popover
          id="simple-popover"
          open={Boolean(moreItemsAnchorEl)}
          anchorEl={moreItemsAnchorEl}
          onClose={handlemoreItemsAchorClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <List>
            {MoreItems.map(moreItem => (
              <MenuItem onClick={event => moreItem.click(currentGroup, event)}>
                <ListItemIcon> {moreItem.Icon}</ListItemIcon>
                <ListItemText>{moreItem.name}</ListItemText>
              </MenuItem>
            ))}
          </List>
        </Popover>
        <Dialog open={openChartDialog} onClose={closeChartDialog}>
          <DialogTitle id="form-dialog-title">
            Sample chart showing the Chart View of the Transactions
          </DialogTitle>
          <DialogContent style={{ width: "40vw", height: "70vh" }}>
            <SampleChart />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const changeGroupChilds = (groups, event, history) => {
  event.target === null
    ? (event.target.value = groups)
    : history.push(`/GroupsInfoTemplate/${groups.GroupId}`, groups);
};

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
