import { groupsTypes } from "../actions/Types/index";

let initialState = {};
//Array Destructuring
export default (state = initialState, action) => {
  const GroupsConfig = action.payload;
  switch (action.type) {
    case userTypes.SET_GROUP_DETAILS: {
      state = {};
      return state;
    }
    default:
      return state;
  }
};
