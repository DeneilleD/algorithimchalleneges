/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/
//P parameter the taking in an array which is checking for an indexes place :: account for 0
//R return the nth element of an array
//E  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
//P create a function that will return the nth element of a given array.


// function fibonacci(n) {
//     // Code goes here
//     let sequence = []
//     for(let i = 1; i <= sequence.length; i++){
//         return sequence.indexOf(n)
//     } 

// }


// A RECURSIVE SOLUTION

function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = fibonacci