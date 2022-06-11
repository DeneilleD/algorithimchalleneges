/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/
//P function takes in numbers 
//R prints'fizz buzz' || 'fizz'|| 'buzz" if %15, %5, or %3 else prints number
//E 7 will print 7 // 30 will print 'fizz buzz'
//P function with conditionals will return a string to check for number paramaters divisibility. if/else if:: else return number


function fizzBuzz(n) {
    // Code goes here
    for (let i = 1; i <= n; i++) {
    if(n % 3 === 0 || n % 5 === 0 ){
        return 'fizzbuzz'
    }else if(n % 5 === 0){
        return 'buzz'
    }else if(n %3 === 0){
        return 'fizz'
    }else{
        return n
    }
  }
}


module.exports = fizzBuzz