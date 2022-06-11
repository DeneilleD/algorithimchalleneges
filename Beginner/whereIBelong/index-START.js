/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


//P take an array and number as parameters
//R return the index at which the number argument best fits into the array
//E /* whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater than 1(index 0), but less than 2(index 1)*/
//P create a function that gives an array of numbers and a solo number provided as an arguments. Sort list, from least to greatest. create a loop to iterate through array to account for the index values and where number can lie.

function whereIBelong(arr, num) {
   arr.push(num)
//push argument into arrray
   arr.sort((a, b) => a - b)
//sort from ascending order
   return arr.indexOf(num)
//return the index of the array
}



module.exports = whereIBelong