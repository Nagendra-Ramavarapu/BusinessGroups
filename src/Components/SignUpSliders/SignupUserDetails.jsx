import React, { useState, useReducer } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

const styles = makeStyles(theme => ({
  detailsDiv: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  TextField: {
    margin: 5,
    padding: "1%"
  }
}));
const GeneralDetails = () => {
  const classes = styles();
  return (
    <div align="center">
      <TextField
        type="Text"
        //   value={userName}
        // label="Username"
        className={classes.TextField}
        placeholder="Enter Name"
        //   onChange={e => setUserName(e.target.value)}
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
        //   value={userName}
        // label="Username"
        className={classes.TextField}
        placeholder="Enter Email"
        //   onChange={e => setUserName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        type="Text"
        //   value={userName}
        // label="Username"
        className={classes.TextField}
        placeholder="Set Username"
        //   onChange={e => setUserName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ContactMailOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default withStyles(styles)(GeneralDetails);
