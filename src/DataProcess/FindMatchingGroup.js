//TODO:
// 1. Dont show the Groups which user has access
export default function FindMatchingGroup(CompleteGroups,GroupName){
    for(let group=0;group<CompleteGroups.length;group++){
        if(CompleteGroups[group].GroupName === GroupName){
            return CompleteGroups[group];
        }
    }
}