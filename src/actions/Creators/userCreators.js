import  {userTypes}  from "../Types/index";

export const setUserDetails = userInfo => ({
  type: userTypes.SET_USER_DETAILS,
  payload: userInfo
});

export const deleteFavGroup = favGroup => ({
  type: userTypes.DELETE_FAV_GROUP,
  payload: favGroup
})
export const addFavGroup = favGroup => ({
  type: userTypes.ADD_FAV_GROUP,
  payload:favGroup
})


