import { userTypes } from "../actions/Types/index";

let initialState = {};
//Array Destructuring
export default (state = initialState, action) => {
  const UserInfo = action.payload;
  switch (action.type) {
    case userTypes.SET_USER_DETAILS: {
      state = { ...state, UserInfo };
      return state;
    }
    default:
      return state;
  }
};
