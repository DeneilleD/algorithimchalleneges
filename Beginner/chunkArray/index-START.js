/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
//P:: Paramater taking in 2+ arrays
//R:: return combined array of both
//E:: no repetition

  /* E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]  */
//P:: 1. create a function  2.takes in 2+ arrays 3.return a newarray of two arrays combined **no repeats 




function chunkArray(array, size) {
  let result = []

  for (value of array){

      let lastArray = result[result.length -1 ]
      if(!lastArray || lastArray.length == size){
          result.push([value])
      }else{
          lastArray.push(value)
      }
  }

  return result
}


module.exports = chunkArray