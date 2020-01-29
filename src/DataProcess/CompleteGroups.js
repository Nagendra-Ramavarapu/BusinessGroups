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
        return ProcessGroups(child, ProcessedInfo);
      });
    }
  }
  
  function CompleteGroups(GroupsList) {
    console.log("In Complete Groups Function", GroupsList)
    let ProcessedInfo = [];
    GroupsList.map(Group => {
      ProcessGroups(Group, ProcessedInfo);
    });
    return ProcessedInfo;
  }
  
  export default CompleteGroups;