// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arr,query){
    return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
})
};
findMatching(drivers,'Bobby')

function fuzzyMatch(arr,query) {
    return arr.filter((el) => el.startsWith(query)) 
};
fuzzyMatch(drivers,'sa')


function matchName(arr,qu){
    const drivers = [
        {
              name: 'Bobby',
              hometown: 'Pittsburgh' },
            {
              name: 'Sammy',
              hometown: 'New York' } ,
            {
              name: 'Sally',
              hometown: 'Cleveland' },
            {
              name: 'Annette',
              hometown: 'Los Angeles' },
            {
              name: 'Bobby',
              hometown: 'Tampa Bay' }
    ];
 return arr.filter(function (el) {
   if(qu ===el.name){
    return el.name
    }
});
};
matchName(drivers,'Bobby')