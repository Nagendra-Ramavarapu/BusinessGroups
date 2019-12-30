import React, { useState, useReducer } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

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
  },
  submitButton: {
    color: "#000000",
    margin: 30
  }
}));

const routeToHome = history => {
  history.push("/");
};
const PasswordDetails = () => {
  const classes = styles();
  let history = useHistory();
  return (
    <div align="center">
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
      <TextField
        type="Password"
        // label="Password"
        placeholder="Retype Psssword"
        className={classes.TextField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SettingsBackupRestoreIcon />
            </InputAdornment>
          )
        }}
      />
      <br />
      <Button
        variant="contained"
        className={classes.submitButton}
        // onClick={e => routeToHome(history)}
      >
        Submit
      </Button>
    </div>
  );
};

export default withStyles(styles)(PasswordDetails);
