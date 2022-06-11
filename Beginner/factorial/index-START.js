/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/
//P PARAM TAKES IN INTEGER
//R returns the factorial of the integer 
//E  factorial(5) // should return 120 :: 5*4*3*2*1
//P create a function that takes in a number and from that number to 1, multiplies the sum until it is done ('loop')

//all parametera are optional, memo are optional, memo is gonna be undefined
// function factorial(n, memo) {
//     //if memo is not declared as a parameter, it is an object
//     memo = memo || {}
//     if(memo[n]){
//         return memo[n]
//     } 
//     if (n === 0) {
//         return 1
//     }
//     return memo[n] = n * factorial(n - 1, memo)
//  }


function factorial (n){ 
    //if memo is not declared as a paramter, it is an object
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

module.exports = factorial