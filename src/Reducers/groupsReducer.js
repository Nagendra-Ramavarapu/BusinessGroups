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
      // state={...state,GroupsInfo:{...state.GroupsInfo,...action.payload}}
      //state={...state,GroupsInfo:{...state.GroupsInfo,...action.payload}}
      return Object.assign({}, state, {
        GroupsInfo: state.GroupsInfo.concat(action.payload)
      });
    }
    default:
      return state;
  }
};
