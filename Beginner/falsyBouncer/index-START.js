/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/
//P function takes in array
//R returns array without falsy values
//E falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
//P create function that takes in array and checks index IF it has any falsy values then remove
function falsyBouncer(array) {
    let result =[]
    
    for (value of array){
        if(value){
            result.push(value)
        }
    }
    
    return result
}
module.exports = falsyBouncer