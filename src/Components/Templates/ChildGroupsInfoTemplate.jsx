import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import HowToRegOutlinedIcon from "@material-ui/icons/HowToRegOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import axios from "axios";

/// TODO:
//  1. Remove ClonedGroupInfo Dependencies in handlers

const styles = makeStyles(theme => ({
  TextField: {
    margin: 5,
    padding: "1%"
  },
  dialogDiv: {
    display: "flex"
  },
  groupsDiv: {
    minWidth: "23vw",
    maxWidth: "30vw"
  },
  childsDiv: {
    minWidth: "23vw",
    maxWidth: "30vw"
    //display:'flex'
  },
  IndividualChild: {},
  fieldSet: {
    borderColor: "pink",
    margin: "2%"
  }
}));
const ChildGroupsInfoTemplate = groups => {
  const classes = styles();
  const [groupInfo, setGroupInfo] = useState(groups);
  const [usersChipValue, setUsersChipValue] = useState([]);
  const [managersChipValue, setManagersChipValue] = useState([]);
  const [UsersData, setUsersData] = useState([]);
  const noTitle = "No Title";
  useEffect(() => {
    axios
      .get("http://localhost:5000/Users/")
      .then(res => setUsersData(res.data))
      .catch(err => console.log(err));
  });

  const handleChildGroupNameChange = (e, childIndex) => {
    let clonedChildGroup = groupInfo;
    clonedChildGroup.ChildGroup.map((clonedChild, clonedChildIndex) => {
      if (clonedChildIndex == childIndex) {
        clonedChild = { ...clonedChild, GroupName: e.target.value };
      }
      clonedChildGroup.ChildGroup[clonedChildIndex] = clonedChild;
    });
    setGroupInfo(clonedChildGroup);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedChildGroup);
  };

  const handleChildGroupPasswordChange = (e, childIndex) => {
    let clonedChildGroup = groupInfo;
    clonedChildGroup.ChildGroup.map((clonedChild, clonedChildIndex) => {
      if (clonedChildIndex == childIndex) {
        clonedChild = { ...clonedChild, GroupPassword: e.target.value };
      }
      clonedChildGroup.ChildGroup[clonedChildIndex] = clonedChild;
    });
    setGroupInfo(clonedChildGroup);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedChildGroup);
  };

  const handleChildGroupMembersChange = (e, childIndex) => {
    let clonedChildGroup = groupInfo;
    clonedChildGroup.ChildGroup.map((clonedChild, clonedChildIndex) => {
      if (clonedChildIndex == childIndex) {
        clonedChild = {
          ...clonedChild,
          GroupConfig: {
            ...clonedChild.GroupConfig,
            TotalMembers: e.target.value
          }
        };
      }
      clonedChildGroup.ChildGroup[clonedChildIndex] = clonedChild;
    });
    setGroupInfo(clonedChildGroup);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedChildGroup);
  };

  const handleNoOfChildGroupsChange = (e, childIndex) => {
    let clonedChildGroup = groupInfo;
    clonedChildGroup.ChildGroup.map((clonedChild, clonedChildIndex) => {
      if (clonedChildIndex == childIndex) {
        clonedChild = {
          ...clonedChild,
          ChildConfig: {
            ...clonedChild.ChildConfig,
            childGroupsCount: e.target.value
          }
        };
      }
      clonedChildGroup.ChildGroup[clonedChildIndex] = clonedChild;
    });
    setGroupInfo(clonedChildGroup);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedChildGroup);
  };

  const handleGroupNameChange = e => {
    let clonedGroupInfo = { ...groupInfo, GroupName: e.target.value };
    setGroupInfo(clonedGroupInfo);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedGroupInfo);
  };
  const handleGroupPasswordChange = e => {
    let clonedGroupInfo = { ...groupInfo, GroupPassword: e.target.value };
    setGroupInfo(clonedGroupInfo);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedGroupInfo);
  };
  const handleNoOfGroupChilds = e => {
    let clonedGroupInfo = {
      ...groupInfo,
      ChildConfig: {
        ...groupInfo.ChildConfig,
        childGroupsCount: e.target.value
      }
    };
    setGroupInfo(clonedGroupInfo);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedGroupInfo);
  };
  const handleGroupScaleChange = e => {
    let clonedGroupInfo = {
      ...groupInfo,
      GroupConfig: {
        ...groupInfo.GroupConfig,
        GroupScale: e.target.value
      }
    };
    setGroupInfo(clonedGroupInfo);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedGroupInfo);
  };
  const handleGroupBusinessTypeChange = e => {
    let clonedGroupInfo = {
      ...groupInfo,
      GroupConfig: {
        ...groupInfo.GroupConfig,
        BusinessName: e.target.value
      }
    };
    setGroupInfo(clonedGroupInfo);
    groupInfo.handlerToUpdateParentState.updatedGroupsData(clonedGroupInfo);
  };
  const handleGroupUsersChange = () => {};
  const handleGroupManagersChange = () => {};
  return (
    <div className={classes.dialogDiv}>
      <div className={classes.groupsDiv}>
        <TextField
          type="Text"
          value={groupInfo.GroupName}
          className={classes.TextField}
          placeholder="Enter Groupname"
          onChange={e => handleGroupNameChange(e)}
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
          placeholder="Enter Group Password"
          onChange={e => handleGroupPasswordChange(e)}
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
          value={groupInfo.ChildConfig.childGroupsCount}
          placeholder="No of Childs"
          onChange={e => handleNoOfGroupChilds(e)}
          className={classes.TextField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountTreeOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          type="Text"
          value={groupInfo.GroupConfig.GroupScale}
          placeholder="Enter Group Scale"
          onChange={e => handleGroupScaleChange(e)}
          className={classes.TextField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          type="Text"
          value={groupInfo.GroupConfig.BusinessName}
          placeholder="Enter Business Type"
          onChange={e => handleGroupBusinessTypeChange(e)}
          className={classes.TextField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BusinessCenterOutlinedIcon />
              </InputAdornment>
            )
          }}
        />
        <br />
        <HowToRegOutlinedIcon />
        <Autocomplete
          multiple
          options={UsersData.map(option => option.Username)}
          disableOpenOnFocus
          onChange={(e, value) => {
            setUsersChipValue([...usersChipValue, value]);
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={params => (
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                )
              }}
              fullWidth
              {...params}
              placeholder="Assign Manager"
            />
          )}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HowToRegOutlinedIcon />
              </InputAdornment>
            )
          }}
        />

        <br />
        <GroupAddRoundedIcon />
        <Autocomplete
          multiple
          options={UsersData.map(option => option.Username)}
          disableOpenOnFocus
          onChange={(e, value) => {
            setManagersChipValue([...managersChipValue, value]);
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={params => (
            <TextField {...params} placeholder="Add Users" fullWidth />
          )}
        />
        <br />
      </div>
      <div className={classes.childsDiv}>
        Edit Child Groups Information
        {groupInfo.ChildGroup &&
          groupInfo.ChildGroup.map((child, childPosition) => (
            <div>
              <fieldset className={classes.fieldSet}>
                <legend>
                  <b>{child.GroupName === "" ? noTitle : child.GroupName}</b>
                </legend>
                <TextField
                  type="Text"
                  value={child.GroupName === null ? " " : child.GroupName}
                  className={classes.TextField}
                  placeholder="Enter ChildGroupName"
                  onChange={e => handleChildGroupNameChange(e, childPosition)}
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
                  value={
                    child.GroupPassword === null ? " " : child.GroupPassword
                  }
                  placeholder="Enter Group Password"
                  onChange={e =>
                    handleChildGroupPasswordChange(e, childPosition)
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
                  type="Number"
                  placeholder="No of GroupMembers"
                  value={child.TotalMembers === null ? " " : child.TotalMembers}
                  className={classes.TextField}
                  onChange={e =>
                    handleChildGroupMembersChange(e, childPosition)
                  }
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
                  onChange={e => handleNoOfChildGroupsChange(e, childPosition)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountTreeOutlinedIcon />
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

export default ChildGroupsInfoTemplate;
