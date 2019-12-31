import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import Bot from "../Icons/Bot.png";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import React, { useState, useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import Chip from '@material-ui/core/Chip';
import { Autocomplete } from '@material-ui/lab'
import UsersList from "../Data/UsersList";
import WorkSpaceList from "../Data/WorkSpaceList";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const styles = makeStyles(theme => ({
  bot: {
    width: 40,
    height: 40,
    position: "absolute"
  },
  botDiv: {
    float: "right"
  }
}));
const CreateGroup = () => {
  const classes = styles();
  let usersData = JSON.parse(UsersList)["Users"];
  const WorkSpaceConfig = JSON.parse(WorkSpaceList);
  let GroupsList = WorkSpaceConfig.WorkSpace.Groups;
  let history = useHistory();
  // console.log(usersData)
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
      GroupManager: "",
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
  const handleSubmit = () =>{
    console.log(groupConfig)
    // history.push('/Home',groupConfig)
  }
  //<pre/> tab spaces
  return (
    <div align="center">
      {isMobile && isMobile ? <Navbar /> : <NavbarDesktop />}
      <h1>
        <i>Create your Bspace Groups </i>{" "}
      </h1>
      <TextField
        type="Text"
        value={groupConfig.GroupName}
        // label="Username"
        // className={classes.TextField}
        placeholder="Enter GroupName"
        onChange={e =>
          setGroupConfig({ ...groupConfig, GroupName: e.target.value,GroupId:groupConfig.GroupName.charAt(0) })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PeopleAltOutlinedIcon />
            </InputAdornment>
          )
        }}
      /><br/>
      <TextField
        type="Password"
        placeholder="Set Group Password"
        value={groupConfig.GroupPassword}
        className={classes.TextField}
        onChange={e=> setGroupConfig({...groupConfig,GroupPassword:e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon />
            </InputAdornment>
          )
        }}
      /><br/>
         <TextField
        type="Number"
        placeholder="No of GroupMembers"
        value={groupConfig.TotalMembers}
        className={classes.TextField}
        onChange={e=> setGroupConfig({...groupConfig,TotalMembers:e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SupervisedUserCircleOutlinedIcon />
            </InputAdornment>
          )
        }}
      /><br/>
        {/* <TextField
        type="Text"
        placeholder="Add Group Members"
        value={groupConfig.TotalMembers}
        className={classes.TextField}
        onChange={e=> setGroupConfig({...groupConfig,TotalMembers:e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SupervisedUserCircleOutlinedIcon />
            </InputAdornment>
          )
        }}
      /><br/> */}
      {/* <Autocomplete
        multiple
        // id="tags-standard"
        options={usersData}
        getOptionLabel={option => option.UserName}
        // defaultValue={[top100Films[13]]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Add Group Members"
            fullWidth
          />)}
          /> */}
           <TextField
        type="Number"
        placeholder="No of Child Groups"
        value={groupConfig.childGroupsCount}
        className={classes.TextField}
        onChange={e=> setGroupConfig({...groupConfig,childGroupsCount:e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SupervisedUserCircleOutlinedIcon />
            </InputAdornment>
          )
        }}
      /><br/>
      <Button
          variant="contained"
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      <p>{groupConfig.childGroupsCount}</p>
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

export default CreateGroup;
