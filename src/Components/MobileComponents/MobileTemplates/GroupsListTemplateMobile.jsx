import React, { useEffect, useState } from "react";
import store from "../../../Store/Store";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Apptheme from "../../AppStylings/Apptheme";
//import Logo from "../../Logo/logo3.png"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import NavbarItems from "../../NavbarItems";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import Badge from "@material-ui/core/Badge";
// import FavLeftIcon from "../../Icons/FavLeftIcon";
// import FavRightIcon from "../../Icons/FavRightIcon";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PlayForWorkRoundedIcon from "@material-ui/icons/PlayForWorkRounded";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "70vw",
    maxWidth: "100vw",
    margin: 8,
    borderRadius: 5
  },
  favCard: {
    minWidth: "26vw",
    maxWidth: "26vw",
    margin: 4,
    borderRadius: 15
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
  avatar: {
    color: Apptheme.avatar.color,
    background: Apptheme.avatar.backgroundColor
  },
  FavAvatar: {
    width: "8vw",
    height: "8vw",
    color: Apptheme.avatar.color,
    background: Apptheme.avatar.backgroundColor
  },
  favDiv: {
    maxWidth: "100vw",
    minWidth: "100vw",
    overflowX: "auto",
    minHeight: "25vh",
    maxHeight: "25vh",
    marginLeft: 5,
    marginTop: 15
  },
  favTitle: {
    marginLeft: 10,
    marginBottom: 10
  },
  GroupsList: {
    display: "flex"
  },
  cardFavActions: {
    marginLeft: 15
  },
  cardtopFavIcons: {
    padding: 2
  },
  cardGroupActions: { marginLeft: 45 },
  GroupsListDiv: { minHeight: 700 },
  Groupstitle: { marginLeft: 10, marginBottom: 10 },
  cardGroupsBottomIcons: { padding: 8, marginRight: 5 }
}));
const NavbarMobile = () => {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const cardTopNavIcons = [
    {
      name: "Favourite",
      Icon: <StarBorderIcon />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: true,
      click: async (groups, event) => {
        //   if (
        //     userFavGroups.some(favgroup => favgroup.GroupId == groups.GroupId)
        //   ) {
        //     let resValue = {
        //       _id: currentUserId,
        //       GroupId: groups.GroupId
        //     };
        //     axios
        //       .post("http://localhost:5000/Users/Remove/Fav/", resValue)
        //       .then(res =>
        //         res.status == "200"
        //           ? TriggerUseEffect(prevState => !prevState)
        //           : console.log("Error Occured:", res.status, ":", res.statusText)
        //       )
        //       .catch(err => console.log(err));
        //   } else {
        //     let resValue = {
        //       _id: currentUserId,
        //       GroupConfig: groups
        //     };
        //     axios
        //       .post("http://localhost:5000/Users/Add/Fav/", resValue)
        //       .then(res =>
        //         res.status == "200"
        //           ? TriggerUseEffect(prevState => !prevState)
        //           : console.log("Error Occured:", res.status, ":", res.statusText)
        //       )
        //       .catch(err => console.log(err));
        //   }
      }
    },
    {
      name: "MoreItems",
      Icon: <MoreVertIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        // setmoreItemsAnchorEl(event.target);
        // groups.handlerToUpdateParentState = { updatedGroupsData };
        // setCurrentGroup(groups);
      }
    }
  ];
  const cardBottomNavIcons = [
    {
      name: "Report",
      Icon: <EqualizerOutlinedIcon />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: true,
      click: (groups, event) => {
        // setChartDialog(true);
      }
    },
    {
      name: "Post Transaction Update",
      Icon: <PostAddOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        // setTransactionDialog(true);
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
        // setPopoverAnchorPosition(event.target);
        // setAllGroups(
        //   FindAllchilds(
        //     store.getState().groupsReducer.GroupsInfo,
        //     groups.GroupId
        //   )
        // );
        // setCurrentGroup(groups);
      }
    },
    {
      name: "GroupChat",
      Icon: (
        <Badge badgeContent={0} color="primary">
          <MessageOutlinedIcon style={{ height: 21 }} />
        </Badge>
      ),
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: (groups, event) => {
        // console.log("Groups Info:", groups);
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
        // console.log("Groups Info:", groups);
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
        // setChildGroupsInfoDialog(true);
      }
    },
    {
      name: "Delete Group",
      Icon: <DeleteOutlineOutlinedIcon className={classes.Icons} />,
      groupManagerAccess: true,
      showTooltip: true,
      showOnFav: false,
      click: () => {}
    },
    {
      name: "Exit Group",
      Icon: <DirectionsRunIcon className={classes.Icons} />,
      groupManagerAccess: false,
      showTooltip: true,
      showOnFav: false,
      click: () => {}
    }
  ];
  const [openDrawer, setOpenDrawer] = useState(false);
  const [GroupsInfo, setGroupsInfo] = useState([]);
  const [userFavGroups, setUserFavGroups] = useState([]);
  let currentUsername = store.getState().userReducer.UserInfo.Username;
  useEffect(() => {
    setGroupsInfo(store.getState().groupsReducer.GroupsInfo);
    axios
      .get(`http://localhost:5000/Users/${currentUsername}`)
      .then(res =>
        res.status == "200"
          ? setUserFavGroups(res.data[0].FavGroupsInfo)
          : console.log("Error Occured:", res.status, ":", res.statusText)
      )
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <div className={classes.favDiv}>
        <div>
          <span className={classes.favTitle}>
            <b>
              <i>Favourite Groups</i>
            </b>
          </span>
        </div>
        <div className={classes.GroupsList}>
          {userFavGroups &&
            userFavGroups.map(favGroup => (
              <Card
                className={classes.favCard}
                onClick={console.log("you clicked Card !!")}
              >
                <CardHeader
                  avatar={
                    <Avatar className={classes.FavAvatar}>
                      {favGroup.GroupId.charAt(0)}
                    </Avatar>
                  }
                  title={favGroup.GroupId}
                  subheader={favGroup.GroupConfig.InvestmentStatus}
                />
                <CardActions className={classes.cardFavActions} disableSpacing>
                  {cardTopNavIcons.map(topIcons => (
                    <IconButton className={classes.cardtopFavIcons}>
                      {topIcons.showOnFav && topIcons.Icon}
                    </IconButton>
                  ))}{" "}
                  {cardBottomNavIcons.map(cardBottomNavIcon => (
                    <IconButton>
                      {cardBottomNavIcon.showOnFav && cardBottomNavIcon.Icon}
                    </IconButton>
                  ))}
                </CardActions>
              </Card>
            ))}
        </div>
      </div>
      <div className={classes.GroupsListDiv}>
        <span className={classes.Groupstitle}>
          <b>
            <i>Groups</i>
          </b>
        </span>
        {GroupsInfo &&
          GroupsInfo.map(Groups => (
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    {Groups.GroupName.charAt(0)}
                  </Avatar>
                }
                action={
                  <div>
                    {cardTopNavIcons.map(topIcons => (
                      <IconButton className={classes.cardtopFavIcons}>
                        {topIcons.Icon}
                      </IconButton>
                    ))}
                  </div>
                }
                title={Groups.GroupName}
                subheader={
                  "InvestmentStatus:" + Groups.GroupConfig.InvestmentStatus
                }
              />
              <CardActions className={classes.cardGroupActions} disableSpacing>
                {cardBottomNavIcons.map(Icons => (
                  <IconButton className={classes.cardGroupsBottomIcons}>
                    {Icons.Icon}
                  </IconButton>
                ))}
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default connect(null, null)(withStyles(useStyles)(NavbarMobile));
