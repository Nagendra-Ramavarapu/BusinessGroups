import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "../Components/MobileComponents/NavbarMobile";
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
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import Apptheme from "./AppStylings/Apptheme";
import axios from "axios";

// TODO:
// Make MongoDB and Redux in sync with one another
// make use of async calls

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
  },
  Icons: {
    color: Apptheme.color.PrimaryColor
  },
  avatar: {
    color: Apptheme.avatar.color,
    background: Apptheme.avatar.backgroundColor
  }
}));
const CreateGroup = ({ addNewGroupDetails }) => {
  const classes = styles();
  const [isButtonHovered, setButtonHovered] = React.useState(false);
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

  const handleSubmit = () => {
    for (let i = 0; i < groupConfig.ChildConfig.childGroupsCount; i++) {
      groupConfig.ChildGroup.push(SampleGroupConfig);
    }
    axios
      .post("http://localhost:5000/Groups/NewGroup", groupConfig)
      .then(res =>
        res.status === 200 ? alert("Data Added to MongoDB") : alert("Error !!!")
      )
      .catch(err => console.log(err));
    addNewGroupDetails(groupConfig);
    history.push("/Home");
  };
  //FYI: <pre/> tab spaces
  return (
    <div align="center">
      {isMobile && isMobile ? <NavbarMobile /> : <NavbarDesktop />}
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
              <PeopleAltOutlinedIcon className={classes.Icons} />
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
              <LockOutlinedIcon className={classes.Icons} />
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
              <SupervisedUserCircleOutlinedIcon className={classes.Icons} />
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
              <AccountTreeOutlinedIcon className={classes.Icons} />
            </InputAdornment>
          )
        }}
      />
      <br />
      <Button
        variant="contained"
        //className={isButtonHovered? classes.avatar:null}
        onClick={handleSubmit}
        //onMouseOut={() => setButtonHovered(!isButtonHovered)}
        //onMouseEnter ={()=>setButtonHovered(isButtonHovered)}
      >
        Submit
      </Button>
      <div className={classes.botDiv}>
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
