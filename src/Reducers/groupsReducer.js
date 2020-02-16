import { groupsTypes } from "../actions/Types/index";

let initialState = {
  GroupsInfo: []
};
//Array Destructuring
export default (state = initialState, action) => {
  const payloadInfo = action.payload;

  switch (action.type) {
    case groupsTypes.SET_GROUP_DETAILS: {
      state = { GroupsInfo: action.payload };
      return state;
    }
    case groupsTypes.ADD_NEW_GROUP_DETAILS: {
      return Object.assign({}, state, {
        GroupsInfo: state.GroupsInfo.concat(action.payload)
      });
    }
    case groupsTypes.UPDATE_GROUP_INFO: {
      console.log("From Reducer:", state.GroupsInfo);
      return state;
    }

    default:
      return state;
  }
};
