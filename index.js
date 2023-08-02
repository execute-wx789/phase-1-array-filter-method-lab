// Code your solution here
function findMatching(array, search){
    return array.filter((found)=>{if(found.toLowerCase()===search.toLowerCase()){return found}})
}
function fuzzyMatch(array, search){
    return array.filter((found)=>{
        if(found.includes(search)&&search.includes(found.slice(0,1)))
        {return found}
    })
}
function matchName(array, search){
    return array.filter((found)=>{if(found.name===search){return found}})
}