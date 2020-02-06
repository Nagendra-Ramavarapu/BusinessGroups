import { groupsTypes } from "../Types/index";

export const setGroupsDetails = groupsConfig => ({
  type: groupsTypes.SET_GROUP_DETAILS,
  payload: groupsConfig
});

export const addNewGroupDetails = groupConfig => ({
  type: groupsTypes.ADD_NEW_GROUP_DETAILS,
  payload: groupConfig
});

export const updateGroupDetails = groupConfig => ({
  type: groupsTypes.UPDATE_GROUP_INFO,
  payload: groupConfig
})