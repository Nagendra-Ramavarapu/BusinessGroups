import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import UsersList from "../Data/UsersList";
import { setUserDetails } from "../actions/Creators/index";
import store from "../Store/Store";
import WorkSpaceList from "../Data/WorkSpaceList";
import { getUserInfo } from "../Selectors/index";
//import history from '../Store/History'
import { useHistory } from "react-router-dom";
import ProcessGroupData from "../DataProcess/ProcessGroupData";
// import { useHistory } from "react-router-dom";

const Login = ({ setUserDetails, UserDetails }) => {
  const [userName, setUserName] = useState("");
  let userValid, userInfo;
  let usersData = JSON.parse(UsersList);
  let history = useHistory();
  const WorkSpaceConfig = JSON.parse(WorkSpaceList);
  const GroupsList = WorkSpaceConfig.WorkSpace.Groups;

  //Map dosen't have the inbuild break so use for loop or some
  //use this Link for ref: https://www.codexpedia.com/javascript/javascript-loop-through-array-and-object-properties/
  // solution : https://www.codepunker.com/blog/3-javascript-loop-gotchas

  // ---------> Using Native For Loop <--------------------
  //   for (let users = 0; users < usersData["Users"].length; users++) {
  //     if (usersData["Users"][users].UserName === userName) {
  //       userValid = true;
  //
  //       break;
  //     }
  //   }
  // ---------> Using Default 'Some' <----------------------

  const handleSubmit = evt => {
    evt.preventDefault();
    userValid = usersData["Users"].some(user => {
      userInfo = user;
      return user.UserName === userName;
    });
    if (userValid) {
      setUserDetails(userInfo);
      // console.log("Directly from Redux Store",store.getState())
      // console.log(" from Selector:",UserDetails)
      // window.location.href = '/HigherLevelGroupList'
      let ProcessedData = ProcessGroupData(GroupsList, userInfo);
      history.push("/Home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User Name:</label>
      <input
        type="Text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input type="Password" />
      <br />
      <input type="Submit" value="Submit" />
      <br />
    </form>
  );
};

const mapStateToProps = state => ({
  UserDetails: getUserInfo(state)
});
const mapDispatchToProps = dispatch => ({
  setUserDetails: setDetails => {
    dispatch(setUserDetails(setDetails));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
