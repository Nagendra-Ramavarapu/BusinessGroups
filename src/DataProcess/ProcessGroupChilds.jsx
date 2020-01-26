// TODO:
// 1. For a Particular Group fetch all its childs and sub childs ID's and GroupName
// 2. Return Array of Results

function CheckGroupChilds(GroupConfig, CompleteChildsList) {
  if (GroupConfig.ChildConfig.hasChildGroup) {
    let res = {
      GroupId: GroupConfig.GroupId,
      GroupName: GroupConfig.GroupName
    };
    CompleteChildsList.push(res);

    for (
      let childs = 0;
      childs < GroupConfig.ChildConfig.childGroupsCount;
      childs++
    ) {
      CheckGroupChilds(GroupConfig.ChildGroup[childs], CompleteChildsList);
    }
  }
}

function ProcessGroupChilds(GroupConfig) {
  let CompleteChildsList = [];
  CheckGroupChilds(GroupConfig, CompleteChildsList);
  return CompleteChildsList;
}

export default ProcessGroupChilds;
