import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import UsersList from "../Data/UsersList";
import { setUserDetails } from "../actions/Creators/index";
import store from "../Store/Store";
import WorkSpaceList from "../Data/WorkSpaceList";
import { getUserInfo } from "../Selectors/index";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
//import history from '../Store/History'
import Fab from "@material-ui/core/Fab";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import ProcessGroupData from "../DataProcess/ProcessGroupData";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Logo from "../Logo/logo3.png";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SignUp from "./SignUp";
import Bot from "../Icons/Bot.png";

// import { useHistory } from "react-router-dom";
const styles = makeStyles(theme => ({
  loginDiv: {
    paddingTop: "2%",
    align: "center"
  },
  TextField: {
    margin: 5,
    padding: "1%"
  },
  signup: {
    color: "#00cc00"
  },
  submitButton: {
    color: "#000000",
    margin: "1%"
  },
  bot: {
    width: 40,
    height: 40,
    position: "absolute",
    float: "right"
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
  }
}));
const Login = ({ setUserDetails, UserDetails }) => {
  const classes = styles();
  const [userName, setUserName] = useState("");
  const [open, setOpen] = React.useState(false);
  let userValid, userInfo;
  let usersData = JSON.parse(UsersList);
  let history = useHistory();
  const WorkSpaceConfig = JSON.parse(WorkSpaceList);
  const GroupsList = WorkSpaceConfig.WorkSpace.Groups;

  //Map dosen't have the inbuild break so use for loop or some
  //use this Link for ref: https://www.codexpedia.com/javascript/javascript-loop-through-array-and-object-properties/
  // solution : https://www.codepunker.com/blog/3-javascript-loop-gotchas

  // ---------> Using Native For Loop <--------------------
  //   for (let users = 0; users < usersData["Users"].length; users++) {
  //     if (usersData["Users"][users].UserName === userName) {
  //       userValid = true;
  //
  //       break;
  //     }
  //   }
  // ---------> Using Default 'Some' <----------------------

  const handleSubmit = evt => {
    evt.preventDefault();
    userValid = usersData["Users"].some(user => {
      userInfo = user;
      return user.UserName === userName;
    });
    if (userValid) {
      setUserDetails(userInfo);
      // console.log("Directly from Redux Store",store.getState())
      // console.log(" from Selector:",UserDetails)
      // window.location.href = '/HigherLevelGroupList'
      let ProcessedData = ProcessGroupData(GroupsList, userInfo);
      history.push("/Home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div align="center" className={classes.loginDiv}>
      <img src={Logo} />
      <form>
        <TextField
          type="Text"
          value={userName}
          // label="Username"
          className={classes.TextField}
          placeholder="Enter Username"
          onChange={e => setUserName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
        <br />
        <TextField
          type="Password"
          // label="Password"
          placeholder="Enter Psssword"
          className={classes.TextField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
        <br />
        <Typography>
          {" "}
          <b>New User ?</b>
          <Link color="blue" onClick={handleClickOpen}>
            <b className={classes.signup}> Sign Up </b>
          </Link>
        </Typography>
        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <SignUp />
          </DialogContent>
        </Dialog>
      </form>
      <br />
      <Fab>
        <img className={classes.bot} src={Bot} />
      </Fab>
      <p>Hi I'm Business Bot, Coming soon .......!</p>
    </div>
  );
};

const mapStateToProps = state => ({
  UserDetails: getUserInfo(state)
});
const mapDispatchToProps = dispatch => ({
  setUserDetails: setDetails => {
    dispatch(setUserDetails(setDetails));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
