import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import { matchPath } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import CallSplitOutlinedIcon from "@material-ui/icons/CallSplitOutlined";
// import Divider from "@material-ui/core/Divider";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import Grid from "@material-ui/core/Grid";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import store from "../../Store/Store";
import Tooltip from "@material-ui/core/Tooltip";
import PlayForWorkRoundedIcon from "@material-ui/icons/PlayForWorkRounded";
import { withRouter } from "react-router";

const styles = makeStyles(theme => ({
  GroupsList: {
    // maxHeight: "32vh",
    // minHeight: "15vh",
    minWidth: "25vw",
    marginTop: "3%",
    marginBottom: "3%",
    align: "Center",
    //backgroundColor: "#4e464605"
    // float: "right"
    // paddingRight:"20%"
  },
  listItems: {
    minWidth: "50vw",
    maxWidth: "53vw",
    maxHeight: "15vh"
    // overflowX: "auto",
    // overflowy: "auto"
  }
}));
const IconButtonItems = [
  {
    name: "AddGroupMember",
    Icon: <GroupAddOutlinedIcon />,
    groupManagerAccess: true,
    showTooltip: true
  },

  {
    name: "Report",
    Icon: <EqualizerOutlinedIcon />,
    groupManagerAccess: false,
    showTooltip: true
  },
  {
    name: "PostTransactionUpdate",
    Icon: <PostAddOutlinedIcon />,
    groupManagerAccess: true,
    showTooltip: true
  },
  {
    name: "BusinessLine",
    Icon: <TrendingUpOutlinedIcon />,
    groupManagerAccess: false,
    showTooltip: true
  },
  {
    name: "Child Groups",
    Icon: <PlayForWorkRoundedIcon />,
    groupManagerAccess: false,
    showTooltip: true
  },
  {
    name: "Bookmark",
    Icon: <StarBorderIcon />,
    groupManagerAccess: false,
    showTooltip: true
  },
  {
    name: "MoreItems",
    Icon: <MoreVertOutlinedIcon />,
    groupManagerAccess: false,
    showTooltip: true
  }
];
const GroupsListTemplate = props => {
  const classes = styles();
  let history = useHistory();
  // console.log(history)
  let GroupsInfo = props.groupsInfo;
  let currentUserName = store.getState().userReducer.UserInfo.UserName;
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
                  <Avatar> {groups.GroupName.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText>{groups.GroupName}</ListItemText>
              </ListItem>
            </Tooltip>
            {IconButtonItems.map(buttons =>
              !buttons.groupManagerAccess ? (
                <Tooltip title={buttons.name}>
                  <IconButton> {buttons.Icon}</IconButton>
                </Tooltip>
              ) : currentUserName === groups.GroupConfig.GroupManager ? (
                <Tooltip title={buttons.name}>
                  <IconButton>{buttons.Icon}</IconButton>
                </Tooltip>
              ) : null
            )}
          </ListItem>
        </List>
      ))}
    </div>
  );
};
// const extraIcons = (groups, currentUserName) => {
//   return (
//     <div>
//     {/* // <Grid */}
//     {/* //   container
//     //   direction="row"
//     //   justify="flex-start"
//     //   alignItems="flex-start"
//     // > */}
//       {IconButtonItems.map(buttons =>
//         !buttons.groupManagerAccess ? (
//           <Tooltip title={buttons.name}>
//             <IconButton> {buttons.Icon}</IconButton>
//           </Tooltip>
//         ) : currentUserName === groups.GroupConfig.GroupManager ? (
//           <Tooltip title={buttons.name}>
//             <IconButton>{buttons.Icon}</IconButton>
//           </Tooltip>
//         ) : null
//       )}
//       </div>
//     // {/* // </Grid> */}
//   );
// };

const changeGroupChilds = (groups, event, history) => {
  event.target === null
    ? (event.target.value = groups)
    : history.push(`/GroupsInfoTemplate/${groups.GroupId}`, groups);
};

export default withStyles(styles)(GroupsListTemplate);
