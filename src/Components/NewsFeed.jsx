import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import WorkSpaceList from "../Data/WorkSpaceList";
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
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PlayForWorkRoundedIcon from "@material-ui/icons/PlayForWorkRounded";
import Apptheme from "./AppStylings/Apptheme";
import axios from "axios";

const styles = makeStyles(theme => ({
  card: {
    minWidth: "45vw",
    maxWidth: "45vw"
  },
  newsFeedDiv: {
    // maxHeight: "44vh",
    // minHeight: "15vh",
    minwidth: "45vw",
    maxWidth: "45vw",
    marginTop: "5%",
    display: "column"
    // paddingLeft: "5%",
    // paddingTop: "10%"
    // overflowY: "scroll"
  },
  newsFeedPost: {
    maxHeight: "30vh",
    minHeight: "20vh",
    minWidth: "35vw",
    maxWidth: "35vw"
    // paddingTop: "1%"
    // overflowY: "scroll"
  },
  userAvatar: {
    // float: "left",
    color: Apptheme.avatar.color,
    background: Apptheme.avatar.backgroundColor,
    marginTop: "7%",
    marginLeft: "3%",
    marginRight: "2%"
  },
  newsfeedTextArea: {
    marginTop: "7%",
    minWidth: "35vw",
    maxWidth: "35vw",
    maxHeight: "15vh",
    minHeight: "15vh",
    borderStyle: "none",
    // float:'left',

    marginBottom: "3%"
  },
  listItem: {
    // minWidth: "66vh",
    // maxWidth: "66vh"
  },
  newsFeed: {},
  avatar: {
    color: Apptheme.avatar.color,
    background: Apptheme.avatar.backgroundColor
  },
  Icons: {
    color: Apptheme.color.PrimaryColor
  },
  Secondary: {
    color: Apptheme.color.SecondaryColor
  }
}));

const WorkSpaceConfig = JSON.parse(WorkSpaceList);
const newsFeedConfig = WorkSpaceConfig.WorkSpace.NewsFeed;
const userGroups = Object.keys(newsFeedConfig);

//Ref:http://mythemestore.com/friend-finder/newsfeed.html

const NewsFeed = () => {
  const classes = styles();
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  const [GroupsFeed, setGroupsFeed] = useState([]);
  const [isPostReady, setPostStatus] = useState(false);
  const [newsfeedMessage, setMessage] = useState("");
  let NewsFeedConfig = {
    PostId: "poqqiiewqwqe",
    GroupID: ["H1"],
    UserId: "",
    Message: "",
    PostedOn: "",
    PostedBy: "",
    Likes: 0,
    LikedBy: [],
    CommentsCount: 0,
    Comments: []
  };
  useEffect(() => {
    //let GroupID = {GroupID:store.getState().userReducer.UserInfo.GroupID}
    axios
      .get("http://localhost:5000/NewsFeed/")
      .then(res =>
        res.status == "200"
          ? setGroupsFeed(res.data)
          : console.log(res.status, res.statusText)
      )
      .catch(err => console.log(err));
  },[]);

  const postMessage = async () => {
    NewsFeedConfig = {
      ...NewsFeedConfig,
      UserId: store.getState().userReducer.UserInfo.Username,
      Message: newsfeedMessage,
      PostedBy: store.getState().userReducer.UserInfo.Username
    };
    await axios
      .post("http://localhost:5000/NewsFeed/Post", NewsFeedConfig)
      .then(res => setMessage(""))
      .catch();
  };
  const handleDateConversion = UTCDate => {
    let standardDate = new Date(UTCDate);
    let requiredDateFormat =
      standardDate.getUTCDate() +
      "/" +
      standardDate.getUTCMonth() +
      2 +
      "/" +
      standardDate.getUTCFullYear();
    return requiredDateFormat;
  };
  return (
    <div align="center">
      {isMobile && isMobile ? <Navbar /> : <NavbarDesktop />}
      <p>
        <b>
          <i>Post your thoughts to your BusinessShare Groups</i>
        </b>{" "}
      </p>
      <div style={{ align: "center" }} className={classes.newsFeedDiv}>
        <div style={{ align: "center" }} style={{ display: "flex" }}>
          <Avatar className={classes.userAvatar}>
            {" "}
            {store.getState().userReducer.UserInfo &&
              store.getState().userReducer.UserInfo.Name.charAt(0)}
          </Avatar>
          <TextareaAutosize
            className={classes.newsfeedTextArea}
            value={newsfeedMessage}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type here and Share Your Thoughts to your Groups....!"
          />

          <div
            style={{
              display: "inline-column",
              marginLeft: "2%",
              marginTop: "7%"
            }}
          >
            {newsfeedMessage !== "" ? (
              <IconButton>
                {" "}
                <PlayForWorkRoundedIcon className={classes.Icons} />
              </IconButton>
            ) : null}
            <IconButton>
              <SendOutlinedIcon
                onClick={postMessage}
                className={classes.Icons}
              />
            </IconButton>
          </div>
        </div>
        <div className={classes.newsFeed}>
          {GroupsFeed.map(usersPost => (
            <List className={classes.listItem}>
              <ListItem className={classes.listItem}>
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.Icons}
                    avatar={
                      <Avatar className={classes.avatar}>
                        {" "}
                        {usersPost.GroupID[0].charAt(0)}
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon className={classes.Icons} />
                      </IconButton>
                    }
                    title={usersPost.PostedBy}
                    // subheader={handleDateConversion(usersPost.PostedOn)}
                    subheader={usersPost.PostedOn}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      // color="textSecondary"
                      component="p"
                    >
                      {usersPost.Message}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton>
                      <FavoriteBorderOutlinedIcon
                        className={
                          usersPost.LikedBy &&
                          usersPost.LikedBy.indexOf(
                            store.getState().userReducer.UserInfo.Username
                          ) != -1
                            ? classes.Secondary
                            : classes.Icons
                        }
                        //onClick={}
                      />
                    </IconButton>{" "}
                    <p className={classes.Icons}>{usersPost.Likes} Likes</p>
                    <IconButton>
                      <ChatBubbleOutlineIcon className={classes.Icons} />
                    </IconButton>{" "}
                    <p className={classes.Icons}>
                      {usersPost.CommentsCount} Comments
                    </p>
                  </CardActions>
                </Card>
              </ListItem>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(NewsFeed);
