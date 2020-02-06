// This Function will return required GroupInfo for Search (i.e from All Available groups in MongoDB)
// Inputs: All Groups from MongoDB 
// Output: slicing all groups in required format
// Helpful in search Groups Component
// TODO:
// 1. Check some Sub Groups are not coming in search 
// 2. Dont show the Groups which user has access

function ProcessGroups(Group, ProcessedInfo) {
    let requiredInfo = {
      GroupName: Group.GroupName,
      GroupId: Group.GroupId,
      InvestmentStatus: Group.GroupConfig.InvestmentStatus,
      GroupScale: Group.GroupConfig.GroupScale,
      BusinessName: Group.GroupConfig.BusinessName,
      TotalMembers: Group.GroupConfig.TotalMembers
    };
    ProcessedInfo.push(requiredInfo);
    if (Group.ChildConfig.hasChildGroup === "Yes") {
      Group.ChildGroup.map(child => {
        ProcessGroups(child, ProcessedInfo);
      });
    }
  }
  
  function CompleteGroups(GroupsList) {
    let ProcessedInfo = [];
    GroupsList.map(Group => {
      ProcessGroups(Group, ProcessedInfo);
    });
    return ProcessedInfo;
  }
  
  export default CompleteGroups;