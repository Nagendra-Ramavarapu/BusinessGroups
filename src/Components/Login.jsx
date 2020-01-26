import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import { setUserDetails, setGroupsDetails } from "../actions/Creators/index";
import WorkSpaceList from "../Data/WorkSpaceList";
import { getUserInfo } from "../Selectors/index";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import GetUsersGroupData from "../DataProcess/ProcessGroupData";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Logo from "../Logo/logo3.png";
import Button from "@material-ui/core/Button";
import Bot from "../Icons/Bot.png";
import axios from "axios";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import ReactCardFlip from "react-card-flip";

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
  },
  SignupTextField: {
    // margin: 2,
    padding: "0.5%"
  }
}));
const Login = ({ setUserDetails, setGroupsDetails, UserDetails }) => {
  const classes = styles();
  let userDetailsTemplate = {
    Username: "",
    Password: "",
    doUserAPICall: false,
    doGroupsAPICall: false
  };
  let signupDetailsTemplate = {
    Username: "",
    Password: "",
    Name: "",
    Gender: "",
    GroupId: [],
    ContactNumber: 0,
    Email: "",
    GroupManagerRequests: [],
    GroupRequests: [],
    GroupInvites: [],
    GroupsInfo: []
  };
  const [loginInfo, setUserInfo] = useState(userDetailsTemplate);
  const [UserDB, setUserDB] = useState({});
  const [flip, fliptoSignup] = React.useState(false);
  const [clear, setClear] = React.useState(false);
  const [GroupsList, setGroupsList] = React.useState([]);
  const [signupInfo, setSignupInfo] = React.useState(signupDetailsTemplate);
  let history = useHistory();
  
  // Use below for Local Data without MongoDB Atlas
  // const WorkSpaceConfig = JSON.parse(WorkSpaceList);
  // const GroupsList = WorkSpaceConfig.WorkSpace.Groups;

  //Map dosen't have the inbuild break so use for loop or some
  //use this Link for ref: https://www.codexpedia.com/javascript/javascript-loop-through-array-and-object-properties/
  // solution : https://www.codepunker.com/blog/3-javascript-loop-gotchas

  // ---------> Using Native For Loop <--------------------
  //   for (let users = 0; users < usersData["Users"].length; users++) {
  //     if (usersData["Users"][users].Username === userDetails.Username) {
  //       userValid = true;
  //
  //       break;
  //     }
  //   }
  // ---------> Using Default 'Some' <----------------------
  // userValid = usersData["Users"].some(user => {
  //   userInfo = user;
  //   return user.Username === userDetails.Username;
  // });${userDetails.Username}

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Users/${loginInfo.Username}`)
      .then(res => setUserDB(res.data[0]))
      .catch(err => console.log(err));
  }, [loginInfo.doUserAPICall]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Groups/")
      .then(res => setGroupsList(res.data))
      .catch(err => console.log(err));
  },[loginInfo.doGroupsAPICall]);

  const handleLoginSubmit = evt => {
    evt.preventDefault();
    setUserInfo({ ...loginInfo, doUserAPICall: true });
    if (UserDB.Username && UserDB.Username === loginInfo.Username) {
      setUserDetails(UserDB);
      setUserInfo({ ...loginInfo, doGroupsAPICall: true });
      let ProcessedData = GetUsersGroupData(GroupsList, UserDB.GroupID);
      setGroupsDetails(ProcessedData);
      history.push("/Home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleSignupSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/Users/SignUp", signupInfo)
      .then(res => setClear(!clear))
      .catch(err => console.log(err));
  };
  return (
    <div align="center" className={classes.loginDiv}>
      <img src={Logo} />
      <ReactCardFlip
        isFlipped={flip}
        flipSpeedBackToFront="1.2"
        flipDirection="horizontal"
      >
        <div>
          <TextField
            type="Text"
            value={loginInfo.Username}
            className={classes.TextField}
            placeholder="Enter Username"
            onChange={e =>
              setUserInfo({ ...loginInfo, Username: e.target.value })
            }
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
            value={loginInfo.Password}
            placeholder="Enter Psssword"
            className={classes.TextField}
            onChange={e =>
              setUserInfo({ ...loginInfo, Password: e.target.value })
            }
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
            <Link color="blue" onClick={() => fliptoSignup(!flip)}>
              <b className={classes.signup}> Sign Up </b>
            </Link>
          </Typography>
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={handleLoginSubmit}
          >
            Submit
          </Button>
          <br />
        </div>
        <div>
          <TextField
            type="Text"
            value={clear ? "" : signupInfo.Name}
            className={classes.SignupTextField}
            placeholder="Enter Name"
            onChange={e =>
              setSignupInfo({ ...signupInfo, Name: e.target.value })
            }
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
            type="Text"
            value={clear ? "" : signupInfo.Email}
            className={classes.SignupTextField}
            placeholder="Enter Email"
            onChange={e =>
              setSignupInfo({ ...signupInfo, Email: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              )
            }}
          />
          <br />
          <TextField
            type="Text"
            value={clear ? "" : signupInfo.Username}
            className={classes.SignupTextField}
            placeholder="Set Username"
            onChange={e =>
              setSignupInfo({ ...signupInfo, Username: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailOutlinedIcon />
                </InputAdornment>
              )
            }}
          />
          <br />
          <TextField
            type="Password"
            value={clear ? "" : signupInfo.Password}
            placeholder="Enter Password"
            className={classes.SignupTextField}
            onChange={e =>
              setSignupInfo({ ...signupInfo, Password: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
          />
          <br />
          <TextField
            type="Password"
            value={clear ? "" : signupInfo.Password}
            placeholder="Retype Password"
            className={classes.SignupTextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SettingsBackupRestoreIcon />
                </InputAdornment>
              )
            }}
          />
          <br />
          <b>Return to </b>
          <Link color="blue" onClick={() => fliptoSignup(!flip)}>
            <b className={classes.signup}>Login Page </b>
          </Link>
          <br />
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={handleSignupSubmit}
          >
            Signup
          </Button>
        </div>
      </ReactCardFlip>
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
  },
  setGroupsDetails: setGroupDetails => {
    dispatch(setGroupsDetails(setGroupDetails));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
