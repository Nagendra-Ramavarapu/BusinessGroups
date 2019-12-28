import  {userTypes}  from "../Types/index";

export const setUserDetails = userInfo => ({
  type: userTypes.SET_USER_DETAILS,
  payload: userInfo
});


