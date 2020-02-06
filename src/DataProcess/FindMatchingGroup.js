// It will return the sliced Date config (i.e form CompleteGroups.js)
// Input: Group Selected from the Search box 
// Output: Group Config of selected Group

export default function FindMatchingGroup(CompleteGroups,GroupName){
    for(let group=0;group<CompleteGroups.length;group++){
        if(CompleteGroups[group].GroupName === GroupName){
            return CompleteGroups[group];
        }
    }
}