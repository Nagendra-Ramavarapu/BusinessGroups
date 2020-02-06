// Agenda: should return the updated Config of whatever the group has updated
// Inputs: GroupsAvailble in Reducer, currentGroupConfig( changes occured in this config)
// Output: Should update the changes to the ReducerGroups 
// When complete Groups(Available in reducer) and target GroupConfig are sent to this function
// It will return the Parent Config(i.e even if the current group is child) from Complete Groups
// Primarly used for Updating and Deleting the specfic Groups
// FindCompleteGroupConfig(AllGroups,CurrentGroupId);
// TODO:
// 1. Find ways to update the nested Child Groups
// 2. It will Fail in Nested Groups scenarios


function FindCompleteGroupConfig(ReducerGroupsInfo, modifiedConfig) {
  for (let group = 0; group < ReducerGroupsInfo.length; group++) {
    if (
      ReducerGroupsInfo[group].CompleteGroupChilds.indexOf(
        modifiedConfig.GroupId
      ) !== -1
    ) {
      console.log(searchGroup(ReducerGroupsInfo[group],group, modifiedConfig));
    }
  }
}

function searchGroup(ParentGroupConfig,childIndex,targetGroupConfig) {
  if (ParentGroupConfig.GroupId === targetGroupConfig.GroupId) {
    ParentGroupConfig = { ...ParentGroupConfig,targetGroupConfig };
    return ParentGroupConfig;
  } else {
    if (ParentGroupConfig.ChildConfig.hasChildGroup === "Yes") {
      for (
        let child = 0;
        child < ParentGroupConfig.ChildConfig.childGroupsCount;
        child++
      ) {
          return searchGroup(ParentGroupConfig.ChildGroup[child],targetGroupConfig)
      }
    }
  }
}

export default FindCompleteGroupConfig;
