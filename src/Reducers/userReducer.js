import { userTypes } from "../actions/Types/index";

let initialState = {};
//Array Destructuring
export default (state = initialState, action) => {
  const UserInfo = action.payload;
  switch (action.type) {
    case userTypes.SET_USER_DETAILS: {
      state = { ...state, UserInfo };
      return state;
    }
    case userTypes.ADD_FAV_GROUP: {
      return Object.assign({}, state, {
        FavGroupsInfo: state.UserInfo.FavGroupsInfo.push(action.payload)
      });
    }
    case userTypes.DELETE_FAV_GROUP: {
      // console.log("Entered Delete Fav");
      // let Index = state.UserInfo.FavGroupsInfo.findIndex(
      //   group => group.GroupId == action.payload.GroupId
      // );
      // console.log("Index",Index)
      // console.log("Splice",state.UserInfo.FavGroupsInfo.splice(Index,0))
      // console.log("Filter:",state.UserInfo.FavGroupsInfo.filter(
      //       favGroup => favGroup.GroupId !== action.payload.GroupId
      //     ))
      return Object.assign({}, state, {
        FavGroupsInfo: state.UserInfo.FavGroupsInfo.filter(
          favGroup => favGroup.GroupId == action.payload.GroupId
        )
      });
      // return Object.assign({}, state, {
      //   FavGroupsInfo: state.UserInfo.FavGroupsInfo.pop()
      // });
      // return state;
    }
    default:
      return state;
  }
};
