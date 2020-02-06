// Agenda: Should return all sub-groups of particular group (for Navigating to DownLine Childs)
// Inputs: ReducerGroups,CurrentGroupId
// Output: Return sub-Groups of  CurrentGroupId
// When current groupId along with GroupConfig is sent 
// It will return all childs that users have access (with respect to current GroupConfig)
// TODO in Room: bring full users groups from axios/MongoDB and check the CompleteGroupChilds in it

function FindAllChilds(ReducerGroups, currentGroupId) {
    let NavigationGroupsList = [];
    let clonedNavigationGroupsList = [];
    for (let group = 0; group < ReducerGroups.length; group++) {
      if (
        ReducerGroups[group].CompleteGroupChilds.indexOf(currentGroupId) !== -1
      ) {
        fetchChild(ReducerGroups[group], NavigationGroupsList);
        clonedNavigationGroupsList = { ...NavigationGroupsList };
        NavigationGroupsList = [];
        return clonedNavigationGroupsList;
      }
    }
    function fetchChild(Group, NavigationGroupsList) {
      let res = {
        GroupId: Group.GroupId,
        GroupName: Group.GroupName,
        GroupConfig: { ...Group }
      };
      NavigationGroupsList.push(res);
      if (Group.ChildConfig.hasChildGroup == "Yes") {
        for (let child = 0; child < Group.ChildConfig.childGroupsCount; child++) {
          fetchChild(Group.ChildGroup[child], NavigationGroupsList);
        }
      }
    }
  }
  export default FindAllChilds;