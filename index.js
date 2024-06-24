// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(num1 , num2){
    return num1 + num2;
}
console.log(calculateSum(10 , 20)) // output sum = 30

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(a){
    if(a % 2 === 0){
        return true
    }
    else {
        return false
    }
}

console.log(isEven(20)) // even number is true
console.log(isEven(21)) // even number is false

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

const maxArr = [1,3,4,2,7,8,6,9,10,20,50,101,11,-1] 
    function findMax(number){
        const maxNum = Math.max(...number)
        return maxNum
    }
console.log(findMax(maxArr)) // the largest number in the array = 101


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

const string = "Hello World"
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString(string)) // string reversed (Output : dlroW olleH)

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
const oddArr = [1,3,4,2,7,8,6,9,10,20,50,101,11]
function filterOddNumbers(arr){
    return arr.filter( value =>{
        return value % 2 !== 0
    })
}
console.log(filterOddNumbers(oddArr)) // Output odd numbers and new array [ 1, 3, 7, 9, 101, 11 ]

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

const totalArray = [10, 20, 10, 30, 40]
function sumArray(number){
    let total = 0
    for (var i = 0; i < number.length; i++){
        total = total + number[i]
    }   
    return total
}
console.log(sumArray(totalArray)) // Output sum of all elements = 110


// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
const arrNumber = [10, 20, 1, 30, 40, 0, 50 , 55]
function sortArray(arr){
    return arr.sort()
}
console.log(sortArray(arrNumber)) // Output [ 0,  1, 10, 20,30, 40, 50, 55 ]
   

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

const strCapit = "hello"
function capitalizeFirstLetter(str){
   return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizeFirstLetter(strCapit)) //Output:  "Hello"