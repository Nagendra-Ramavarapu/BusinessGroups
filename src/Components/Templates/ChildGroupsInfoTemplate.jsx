import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  TextField: {
    margin: 5,
    padding: "1%"
  },
  dialogDiv:{
      display:"flex"
  },
  groupsDiv:{
      minWidth:'23vw',
      maxWidth:'30vw'
  },
  childsDiv:{
    minWidth:'23vw',
    maxWidth:'30vw',
    //display:'flex'
  },
  IndividualChild:{

  },
  fieldSet:{
      borderColor:"pink",
      margin:'2%'
  }
}));
const ChildGroupsInfoTemplate = groups => {
  const classes = styles();
  const [groupInfo, setGroupInfo] = useState(groups);
    const noTitle="No Title"
  return (
    <div className={classes.dialogDiv}>
      <div className={classes.groupsDiv}>
        <TextField
          type="Text"
          value={groupInfo.GroupName}
          // label="Username"
          className={classes.TextField}
          placeholder="Enter Groupname"
          onChange={e =>
            setGroupInfo({ ...groupInfo, GroupName: e.target.value })
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
          value={groupInfo.GroupPassword}
          // label="Password"
          placeholder="Enter Group Password"
          onChange={e =>
            setGroupInfo({ ...groupInfo, GroupPassword: e.target.value })
          }
          className={classes.TextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
        />
         <TextField
          type="Text"
          value={groupInfo.GroupConfig.GroupScale}
          // label="Password"
          placeholder="Enter Group Scale"
        //   onChange={e =>
        //     setGroupInfo({ ...groupInfo, GroupScale: e.target.value })
        //   }
          className={classes.TextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
        />
          <TextField
          type="Text"
          value={groupInfo.GroupConfig.BusinessName}
          // label="Password"
          placeholder="Enter Business Type"
        //   onChange={e =>
        //     setGroupInfo({ ...groupInfo, GroupScale: e.target.value })
        //   }
          className={classes.TextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
        />

         <TextField
          type="Text"
          value={groupInfo.GroupConfig.GroupManager}
          // label="Username"
          className={classes.TextField}
          placeholder="Enter Group Manager"
        //   onChange={e =>
        //     setGroupInfo({ ...groupInfo, GroupName: e.target.value })
        //   }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
        />
        <br />
      </div>
      <div className={classes.childsDiv}>
        Edit Child Groups Information
        {groupInfo.ChildGroup && groupInfo.ChildGroup.map(child => (
          <div>
              <fieldset className={classes.fieldSet}>
      <legend><b>{child.GroupName === "" ? noTitle : child.GroupName}</b></legend>
            <TextField
              type="Text"
              value={child.GroupName === null ? " " : child.GroupName}
              // label="Username"
              className={classes.TextField}
              placeholder="Enter ChildGroupName"
              onChange={e =>
                setGroupInfo({ ...groupInfo, GroupName: e.target.value })
              }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
            />
              <TextField
          type="Text"
          value={child.GroupPassword === null ? " " : child.GroupPassword}
          // label="Password"
          placeholder="Enter Group Password"
        //   onChange={e =>
        //     setGroupInfo({ ...groupInfo, GroupPassword: e.target.value })
        //   }
          className={classes.TextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
        />
            <TextField
              type="Number"
              placeholder="No of GroupMembers"
              value={
                child.TotalMembers === null
                  ? " "
                  : child.TotalMembers
              }
              className={classes.TextField}
              // onChange={e => handleChilds(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SupervisedUserCircleOutlinedIcon />
                    </InputAdornment>
                  )
                }}
            />
            <TextField
              type="Number"
              placeholder="No of Child Groups"
              value={
                child.ChildConfig.childGroupsCount === null
                  ? " "
                  : child.ChildConfig.childGroupsCount
              }
              className={classes.TextField}
              // onChange={e => handleChilds(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SupervisedUserCircleOutlinedIcon />
                    </InputAdornment>
                  )
                }}
            />
             </fieldset>
          </div>
        ))}
      </div>
    </div>
  );
};

//export default withStyles(styles)(ChildGroupsInfoTemplate);
export default ChildGroupsInfoTemplate 
