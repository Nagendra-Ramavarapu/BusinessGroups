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
import CheckIcon from "@material-ui/icons/Check";
import Logo from "../Logo/logo3.png";
import Button from "@material-ui/core/Button";
import Bot from "../Icons/Bot.png";
import axios from "axios";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import ReactCardFlip from "react-card-flip";
import Apptheme from "./AppStylings/Apptheme";

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
    color: Apptheme.color.SecondaryColor
  },
  submitButton: {
    color: "black",
    background: Apptheme.color.ButtonColor,
    margin: "1%"
  },
  bot: {
    width: 40,
    height: 40,
    position: "absolute",
    float: "right"
  },
  SignupTextField: {
    padding: "0.5%",
    marginRight: 5
  },
  ErrorTextField: {
    color: "Red"
  },
  SignupErrorTextField: {
    padding: "0.5%",
    marginRight: 5
  },
  Icons: {
    color: Apptheme.color.PrimaryColor
  },
  ErrorIcons: {
    color: Apptheme.color.ErrorColor
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
    Wallet: 0,
    GroupId: ["G3", "LG1", "Ey4"],
    ContactNumber: 0,
    Email: "",
    GroupManagerRequests: [],
    GroupRequests: [],
    GroupInvites: [],
    FavGroupsInfo: []
  };
  const [loginInfo, setUserInfo] = useState(userDetailsTemplate);
  const [UserDB, setUserDB] = useState({});
  const [flip, fliptoSignup] = React.useState(false);
  const [GroupsList, setGroupsList] = React.useState([]);
  const [signupInfo, setSignupInfo] = React.useState(signupDetailsTemplate);
  const [retypePassword, setRetypePassword] = React.useState("");
  const [usernameError, setusernameError] = React.useState(false);
  const [passwordError, setpasswordError] = React.useState(false);
  const [signupNameError, setsignupNameError] = React.useState(false);
  const [signupEmailError, setsignupEmailError] = React.useState(false);
  const [signupUsernameError, setsignupUsernameError] = React.useState(false);
  const [signupPasswordError, setsignupPasswordError] = React.useState(false);
  const [
    signupRetypePasswordError,
    setsignupRetpePasswordError
  ] = React.useState(false);
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
  }, [loginInfo.doGroupsAPICall]);

  const handleLoginSubmit = async evt => {
    evt.preventDefault();
    await setUserInfo({
      ...loginInfo,
      doUserAPICall: !loginInfo.doUserAPICall
    });
    if (
      UserDB.Username &&
      UserDB.Username === loginInfo.Username &&
      UserDB.Password &&
      UserDB.Password === loginInfo.Password
    ) {
      // await setUserDetails(UserDB);
      await setUserInfo({ ...loginInfo, doGroupsAPICall: true });
      let ProcessedData = GetUsersGroupData(GroupsList, UserDB.GroupID);
      await setGroupsDetails(ProcessedData);
      setUserInfo(userDetailsTemplate);
      setpasswordError(false);
      setusernameError(false);
      history.push("/Home");
    } else {
      if (UserDB.Username && UserDB.Username !== loginInfo.Username) {
        setusernameError(true);
        setpasswordError(false);
        setUserInfo({ ...loginInfo, Username: "" });
      } else {
        setpasswordError(true);
        setusernameError(false);
        setUserInfo({ ...loginInfo, Password: "" });
      }
    }
  };

  const validatePassword = () => {
    return signupInfo.Password.length >= 8 ? true : false;
  };

  const validateEmail = () => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      signupInfo.Email
    )
      ? true
      : false;
  };

  const validateUsername = () => {
    return signupInfo.Username.length >= 5 ? true : false;
  };

  const handleSignupSubmit = event => {
    event.preventDefault();
    if (signupInfo.Name == "" || signupInfo.Name == " ") {
      setsignupNameError(true);
    } else if (!validateEmail()) {
      setsignupEmailError(true);
      setsignupNameError(false);
      setSignupInfo({ ...signupInfo, Email: "" });
    } else if (!validateUsername()) {
      setsignupUsernameError(true);
      setsignupEmailError(false);
      setsignupNameError(false);
      setSignupInfo({ ...signupInfo, Username: "" });
    } else if (!validatePassword()) {
      setsignupPasswordError(true);
      setsignupUsernameError(false);
      setsignupEmailError(false);
      setsignupNameError(false);
      setSignupInfo({ ...signupInfo, Password: "" });
    } else if (signupInfo.Password !== retypePassword) {
      setsignupRetpePasswordError(true);
      setsignupPasswordError(false);
      setsignupEmailError(false);
      setsignupUsernameError(false);
      setsignupNameError(false);
      setRetypePassword("");
    } else {
      axios
        .post("http://localhost:5000/Users/SignUp", signupInfo)
        .then(res =>
          res.status == "200" ? handleToReturnLoginPage() : handleSignupError()
        )
        .catch(err => console.log(err));
      setsignupRetpePasswordError(false);
    }
  };

  const handleToReturnLoginPage = event => {
    setSignupInfo(signupDetailsTemplate);
    setRetypePassword("");
    fliptoSignup(!flip);
  };

  const handleSignupError = () => {
    alert("Network Error !!! or Bad ReQuest");
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
            placeholder={usernameError ? "Invalid Username" : "Enter Username"}
            onChange={e =>
              setUserInfo({ ...loginInfo, Username: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle
                    className={
                      usernameError ? classes.ErrorIcons : classes.Icons
                    }
                  />
                </InputAdornment>
              )
            }}
          />
          <br />
          <TextField
            type="Password"
            value={loginInfo.Password}
            placeholder={passwordError ? "Invalid Password" : "Enter Password"}
            className={classes.TextField}
            onChange={e =>
              setUserInfo({ ...loginInfo, Password: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    className={
                      passwordError ? classes.ErrorIcons : classes.Icons
                    }
                  />
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
            SIGN IN
          </Button>
          <br />
        </div>
        <div>
          <TextField
            type="Text"
            value={signupInfo.Name}
            className={
              signupNameError
                ? classes.SignupErrorTextField
                : classes.SignupTextField
            }
            placeholder={
              signupNameError ? "Name Should not be Empty" : "Enter Name"
            }
            onChange={e =>
              setSignupInfo({ ...signupInfo, Name: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle
                    className={
                      signupNameError ? classes.ErrorIcons : classes.Icons
                    }
                  />
                </InputAdornment>
              )
            }}
          />
          <br />
          <TextField
            type="Text"
            value={signupInfo.Email}
            className={
              signupEmailError
                ? classes.SignupErrorTextField
                : classes.SignupTextField
            }
            placeholder={signupEmailError ? "Invalid Email " : "Enter Email"}
            onChange={e =>
              setSignupInfo({ ...signupInfo, Email: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon
                    className={
                      signupEmailError ? classes.ErrorIcons : classes.Icons
                    }
                  />
                </InputAdornment>
              )
            }}
          />

          <br />
          <TextField
            type="Text"
            value={signupInfo.Username}
            className={
              signupUsernameError
                ? classes.SignupErrorTextField
                : classes.SignupTextField
            }
            placeholder={
              signupUsernameError ? "Min 5 Characters" : "Set Username"
            }
            onChange={e =>
              setSignupInfo({ ...signupInfo, Username: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailOutlinedIcon
                    className={
                      signupUsernameError ? classes.ErrorIcons : classes.Icons
                    }
                  />
                </InputAdornment>
              )
            }}
          />

          <br />
          <TextField
            type="Password"
            value={signupInfo.Password}
            placeholder={
              signupPasswordError ? "Min 8 characters" : "Enter Password"
            }
            className={
              signupPasswordError
                ? classes.SignupErrorTextField
                : classes.SignupTextField
            }
            onChange={e =>
              setSignupInfo({ ...signupInfo, Password: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    className={
                      signupPasswordError ? classes.ErrorIcons : classes.Icons
                    }
                  />
                </InputAdornment>
              )
            }}
          />

          <br />
          <TextField
            type="Password"
            value={retypePassword}
            placeholder={
              signupRetypePasswordError
                ? "Password not matched"
                : "Retype Password"
            }
            className={
              signupRetypePasswordError
                ? classes.SignupErrorTextField
                : classes.SignupTextField
            }
            onChange={e => setRetypePassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SettingsBackupRestoreIcon
                    className={
                      signupRetypePasswordError
                        ? classes.ErrorIcons
                        : classes.Icons
                    }
                  />
                </InputAdornment>
              )
            }}
          />

          <br />
          <b>Return to </b>
          <Link color="blue" onClick={handleToReturnLoginPage}>
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
