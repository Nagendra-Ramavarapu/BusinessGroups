// Rules:
// 1. If user have permission for parent ---> access should be granted for all childs of that parent
// 2. Process Considering the hierachy of the Groups UI
// 3. #TODO: Check the possibility of processing of Data in MongoDB
// 4. #Note: MongoDB can only return the document but not the internal document.
// 5. Parent Document will be returned by the MongoDB,Processing should be done in frontend 
let ProcessedGroupsList = []

function checkGroups(GroupIdToCheck,UsersGroupId){
  for(let groupId=0;groupId<UsersGroupId.length;groupId++){
    if(GroupIdToCheck == UsersGroupId[groupId]){
      return true
    }
  }
}

function ProcessGroupData(GroupsList, UsersGroupsInfo) {
  GroupsList.map( groups =>{
    if(checkGroups(groups.GroupId,UsersGroupsInfo)){
       ProcessedGroupsList.push(groups)
      }else{
        if(groups.ChildConfig.hasChildGroup){
          ProcessGroupData(groups.ChildGroup,UsersGroupsInfo)
        }
      }
    }
    )
    
}
function GetUsersGroupData(GroupsList, UsersGroupsInfo) {
  console.log(GroupsList)
  console.log(UsersGroupsInfo)
  ProcessGroupData(GroupsList, UsersGroupsInfo)
  console.log(ProcessedGroupsList)
  return ProcessedGroupsList
}

export default GetUsersGroupData