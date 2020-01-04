import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import WorkSpaceList from "../Data/WorkSpaceList";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import store from "../Store/Store";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SendIcon from "@material-ui/icons/Send";
import PlayForWorkRoundedIcon from "@material-ui/icons/PlayForWorkRounded";

const styles = makeStyles(theme => ({
  card: {
    minWidth: "34vw",
    maxWidth: "34vw"
  },
  newsFeedDiv: {
    // maxHeight: "44vh",
    // minHeight: "15vh",
    minwidth: "60vw",
    maxWidth: "60vw",
    marginTop: "5%",
    display: "column"
    // paddingLeft: "5%",
    // paddingTop: "10%"
    // overflowY: "scroll"
  },
  newsFeedPost: {
    maxHeight: "30vh",
    minHeight: "20vh",
    minWidth: "29vw",
    maxWidth: "29vw"
    // paddingTop: "1%"
    // overflowY: "scroll"
  },
  userAvatar: {
    float: "left",
    marginTop: "1%"
  },
  newsfeedTextArea: {
    marginTop: "2%",
    minWidth: "24vw",
    maxWidth: "24vw",
    maxHeight: "10vh",
    minHeight: "10vh"
    // float:'left',
    // marginLeft:'1%'
  },
  listItem: {
    minWidth: "66vh",
    maxWidth: "66vh"
  },
  newsFeed: {}
}));

const WorkSpaceConfig = JSON.parse(WorkSpaceList);
const newsFeedConfig = WorkSpaceConfig.WorkSpace.NewsFeed;
const userGroups = Object.keys(newsFeedConfig);

//Ref:http://mythemestore.com/friend-finder/newsfeed.html

const NewsFeed = () => {
  const classes = styles();
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  return (
    <div align="center">
      {isMobile && isMobile ? <Navbar /> : <NavbarDesktop />}
      <div className={classes.newsFeedDiv}>
        <div>
          {/* <Avatar className={classes.userAvatar}> { store.getState().userReducer.UserInfo &&
              store.getState().userReducer.UserInfo.Name.charAt(0)}</Avatar> */}
          <TextareaAutosize
            className={classes.newsfeedTextArea}
            placeholder="Type here and Share Your Thoughts to your Groups....!"
          />
          <IconButton>
            {" "}
            <PlayForWorkRoundedIcon   size="small"/>
          </IconButton>
          <IconButton >
            <SendIcon size="small"/>
          </IconButton>
        </div>
        <div className={classes.newsFeed}>
          {userGroups.map(
            userGroup =>
              newsFeedConfig[userGroup].map(usersPost => (
                <List className={classes.listItem}>
                  <ListItem className={classes.listItem}>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={<Avatar> {userGroup.charAt(0)}</Avatar>}
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={usersPost.PostedBy}
                        subheader={usersPost.PostedOn}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {usersPost.Message}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton>
                          <FavoriteBorderOutlinedIcon />
                        </IconButton>{" "}
                        <p>1.2k Likes</p>
                        <IconButton>
                          <ChatBubbleOutlineIcon />
                        </IconButton>{" "}
                        <p>1.7k Comments</p>
                      </CardActions>
                    </Card>
                  </ListItem>
                </List>
              ))
            // <li>{userGroup}</li>
          )}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(NewsFeed);
