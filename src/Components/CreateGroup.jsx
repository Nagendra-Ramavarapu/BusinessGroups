import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import Bot from "../Icons/Bot.png";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import TextField from "@material-ui/core/TextField";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addNewGroupDetails } from "../actions/Creators/index";
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

const styles = makeStyles(theme => ({
  bot: {
    width: 40,
    height: 40,
    position: "absolute"
  },
  botDiv: {
    float: "right"
  },
  TextField: {
    margin: 5
    //padding: "1%"
  }
}));
const CreateGroup = ({ addNewGroupDetails }) => {
  const classes = styles();
  let history = useHistory();
  let initGroupConfig = {
    GroupId: "",
    GroupName: "",
    GroupPassword: "",
    CompleteGroupChilds: [],
    GroupConfig: {
      GroupMembers: [],
      EditAccess: ["NagendraProj"],
      GroupScale: "",
      BusinessName: "",
      DefaultAdmin: "",
      Admin: "",
      GroupManager: "NagendraProj",
      TotalInvestments: 0,
      Returns: 0,
      InvestmentStatus: "",
      GroupWallet: 0,
      GroupCreatedOn: "",
      TotalMembers: 0,
      GeneralSecurity: [],
      MandatorySecurity: [],
      CurrentgroupChilds: []
    },
    ChildConfig: {
      hasChildGroup: "",
      childGroupsCount: 0
    },
    ChildGroup: []
  };
  let SampleGroupConfig = {
    GroupId: "",
    GroupName: "",
    GroupPassword: "",
    CompleteGroupChilds: [],
    GroupConfig: {
      GroupMembers: [],
      EditAccess: ["NagendraProj"],
      GroupScale: "",
      BusinessName: "",
      DefaultAdmin: "",
      Admin: "",
      GroupManager: "NagendraProj",
      TotalInvestments: 0,
      Returns: 0,
      InvestmentStatus: "",
      GroupWallet: 0,
      GroupCreatedOn: "",
      TotalMembers: 0,
      GeneralSecurity: [],
      MandatorySecurity: [],
      CurrentgroupChilds: []
    },
    ChildConfig: {
      hasChildGroup: "",
      childGroupsCount: 0,
      childGroups: []
    },
    ChildGroup: []
  };
  const [groupConfig, setGroupConfig] = React.useState(initGroupConfig);
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  //const [isAllGroupsCreated, setGroupsCreationStatus] = React.useState(false);

  const handleSubmit = () => {
    for (let i = 0; i < groupConfig.ChildConfig.childGroupsCount; i++) {
      groupConfig.ChildGroup.push(SampleGroupConfig);
    }
    console.log(groupConfig)
    addNewGroupDetails(groupConfig);
    history.push("/Home");
  };
  //<pre/> tab spaces
  return (
    <div align="center">
      {isMobile && isMobile ? <Navbar /> : <NavbarDesktop />}
      <h3>
        <i>Create your Bspace Groups </i>{" "}
      </h3>
      <TextField
        type="Text"
        value={groupConfig.GroupName}
        className={classes.TextField}
        placeholder="Enter GroupName"
        onChange={e =>
          setGroupConfig({
            ...groupConfig,
            GroupName: e.target.value,
            GroupId: groupConfig.GroupName.charAt(0)
          })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PeopleAltOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
      <br />
      <TextField
        type="Password"
        placeholder="Set Group Password"
        value={groupConfig.GroupPassword}
        className={classes.TextField}
        onChange={e =>
          setGroupConfig({ ...groupConfig, GroupPassword: e.target.value })
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
        type="Number"
        placeholder="No of GroupMembers"
        value={groupConfig.TotalMembers}
        className={classes.TextField}
        onChange={e =>
          setGroupConfig({
            ...groupConfig,
            GroupConfig: {
              ...groupConfig.GroupConfig,
              TotalMembers: e.target.value
            }
          })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SupervisedUserCircleOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
      <br />
      <TextField
        type="Number"
        placeholder="No of Child Groups"
        value={groupConfig.childGroupsCount}
        className={classes.TextField}
        onChange={e =>
          setGroupConfig({
            ...groupConfig,
            ChildConfig: {
              ...groupConfig.ChildConfig,
              childGroupsCount: e.target.value
            }
          })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountTreeOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
      <br />
      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <div className={classes.botDiv}>
        {/* <p><i><b>Any queries,Tap me ....!</b></i></p> */}
        <Tooltip title={"I'm not configured yet...!"}>
          <Fab className={classes.botDiv}>
            <img className={classes.bot} src={Bot} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewGroupDetails: groupInfo => {
    dispatch(addNewGroupDetails(groupInfo));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(CreateGroup));
