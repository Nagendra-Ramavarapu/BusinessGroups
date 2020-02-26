import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Apptheme from "../AppStylings/Apptheme";
import InputAdornment from "@material-ui/core/InputAdornment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import store from "../../Store/Store";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";

const styles = makeStyles(theme => ({
  TextField: {
    margin: 5,
    padding: "1%",
    minWidth: 240,
    maxWidth: 240
  },
  Icons: {
    color: Apptheme.color.PrimaryColor
  },
  submitButton: {
    marginRight: 15
  }
}));
const TransactionsTemplate = () => {
  const classes = styles();
  let currentUser = store.getState().userReducer.UserInfo.Username;
  let TransactionState = {
    TransactionId: "q112212343gfgf#2334weeqqweqweeqwe",
    GroupId: "G1",
    UserId: "",
    Purpouse: "",
    TransactionAmount: "",
    AccessType: "General",
    WalletAmountBefore: "",
    WalletAmountAfter: "",
    Status: "",
    Returns: ""
  };
  const [TransactionObj, setTransactionObj] = useState(TransactionState);
  const [triggerUseEffect, setUseEffect] = useState(false);

  const handleSubmitTransaction = async () => {
    TransactionObj.TransactionAmount < TransactionObj.Returns
      ? await setTransactionObj({
          ...TransactionObj,
          Status: "Profit"
        })
      : await setTransactionObj({
          ...TransactionObj,
          Status: "Loss"
        });
    setTransactionObj({ ...TransactionObj, UserId: currentUser });
    setUseEffect(true);
  };

  useEffect(() => {
    let resValue = { ...TransactionObj };
    console.log("Before Post:", resValue);
    axios
      .post("http://localhost:5000/Transactions/NewTransaction/", resValue)
      .then(res =>
        res.status == "200"
          ? setTransactionObj({ ...TransactionObj })
          : console.log("Error Occured:", res.status)
      )
      .catch(err => console.log("Error Occured:", err));
  }, [triggerUseEffect]);
  return (
    <div align="center" style={{ width: 350, minHeight: 350 }}>
      <IconButton style={{ float: "right", padding: 0 }}>
        <CloseIcon />
      </IconButton>
      <div style={{ height: 40 }}></div>
      <h3 style={{ marginTop: 30 }}>Submit Expense Details here</h3>
      <TextField
        type="Number"
        value={TransactionObj.TransactionAmount}
        placeholder="Enter Transaction Amount"
        className={classes.TextField}
        onChange={event =>
          setTransactionObj({
            ...TransactionObj,
            TransactionAmount: parseInt(event.target.value)
          })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MonetizationOnIcon className={classes.Icons} />
            </InputAdornment>
          )
        }}
      />
      <br />
      <TextField
        type="Text"
        value={TransactionObj.Purpouse}
        placeholder="Enter Purpouse"
        className={classes.TextField}
        onChange={event =>
          setTransactionObj({ ...TransactionObj, Purpouse: event.target.value })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HelpOutlineIcon className={classes.Icons} />
            </InputAdornment>
          )
        }}
      />
      <br />
      <TextField
        type="Number"
        value={TransactionObj.Returns}
        placeholder="Enter Returns"
        className={classes.TextField}
        onChange={event =>
          setTransactionObj({
            ...TransactionObj,
            Returns: parseInt(event.target.value)
          })
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BusinessCenterOutlinedIcon className={classes.Icons} />
            </InputAdornment>
          )
        }}
      />
      <br />
      <div align="center" style={{ marginTop: 15 }}>
        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={handleSubmitTransaction}
        >
          Submit
        </Button>
        {/* <Button
        variant="contained"
        className={classes.submitButton}
        // onClick={handleSignupSubmit}
      >
        Close
      </Button> */}
      </div>
    </div>
  );
};

export default connect(null, null)(withStyles(styles)(TransactionsTemplate));
