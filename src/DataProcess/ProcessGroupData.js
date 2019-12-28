// Rules:
// 1.If user have permission for parent ---> access should be granted for all childs of that parent
// 2.Process Considering the hierachy of the Groups UI
// 3.#TODO: Check the possibility of processing of Data in MongoDB

export default function(GroupsList, userInfo) {
  console.log(GroupsList);
  console.log(userInfo.GroupId);
}
