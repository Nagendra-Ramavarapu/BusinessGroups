import  {groupsTypes}  from "../Types/index";

export const setGroupsDetails = groupsConfig => ({
  type: groupsTypes.SET_GROUP_DETAILS,
  payload: groupsConfig
});


