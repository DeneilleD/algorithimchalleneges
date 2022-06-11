/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
//P create a function that takes 2+ arrays
//R return combined array with no repeats
//E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
//P create a function that takes in two arrays and combine the two into new array variable but account for doubles of the same. return combined array :: A value in the Set may only occur once








function mergeArrays(...arrays) {
    //elipses:: allows us to take any number of arrays
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]

    
}


module.exports = mergeArrays