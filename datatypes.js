/**
 * DATATYPES:
 * 
 * 0: The values in a program, these can (true for most of the datatypes) be assigned to variables.
 * There are atleast 10 total datatypes to work with, some are for collections, some are to represent
 * numbers, some for sentences, and some for nothing at all.
 * 
 * 1: Numbers: These are as they say they are, they are numbers. They represent numerical data to be 
 * processed in your code. This is a simple data type
 * 
 * 2: Strings: These represents words or sentences. They represent the word-related data in your code.
 * This is a simple data type.
 * 
 * 3: Boolean: These are your true or false values. They act like an on or off switch for your code.
 * This is a simple data type.
 * 
 * 4: Array: These are your colection type of value. They store values in sequential order from the 0
 * index. This is a complex data type.
 * 
 * 5: Object: These are your character sheet-like values. They make a profile of your values to access
 * or update later. This is a complex data type.
 * 
 * 6: Function: These are your "equations" and data manipulation data type. These make up the
 * "personality" of your code and they manipulate data in "fine-tuned" ways. This is a complex 
 * data type.
 * 
 * 7: undefined: This is what is given to variables without assigned values. It represents no value.
 * This is a simple data type.
 * 
 * 8: null: This is intentionally given to object variables to make it no value. It represents no 
 * value as well. This is a simple data type.
 * 
 * 9: NaN: This represents an undefined or unrepresentable result of a mathematical operation. 
 * It represents absense of a number, while being considered a number (.-.). This is a simple data
 * type. 
 * 
 * 10: Infinity + -Infinity: It is a property of the global object, meaning it's available throughout
 * your code without needing to reference a specific object. Infinity is often the result of
 * calculations that exceed the maximum representable number in JavaScript or division by zero.
 * Negative Infinity is the same as Infinity but is negative. Both are simple datatypes.
 * 
 * 11: Difference between simple + complex DT: Simple Data types are immutable. This means that they
 * cannot be changed easily unless redeclared. Complex Data types are mutable. This means that they 
 * can be easily changed without being redeclared. SDTs copy by value, while CDTs copy by reference.
 * 
 * 12: Copy by Value vs. Copy by Reference: CbV means any changes to the original variable will not
 * affect other variables that copied its value. CbR means any changes to the any variable will
 * affect other variables and the original variable that copied its value.
 */

// 1. Numbers Example:
const num = 10; // number
const num2 = 20; // another number
const sum = num + num2 // operation on both to make sum = 30;

// 2. Strings Example:
let str = "Hello" // String
let str2 = " World!" // Second String
str += str2 // operation should equal "Hello World!"

// 3. Boolean Example:
var yes = true // var now equals to true
var no = false // var now equals to false
if (str === "Hello World") { // if str strictly equals "Hello World"
    return yes // return true // X
} else { // else
    return no // return false // will return this
}

// 4. Array Example:
var arr = [] // empty array
arr.push(str) // one array method to add data
arr.unshift(yes) // another way to add data
arr[0] = sum // use of 0 index to add data
console.log(arr) // prints [30, true, "Hello World!"];

// 5. Object Example:
var obj = {}; // empty object
obj[value] = $ + sum // Bracket notation to add a key/value pair
obj.item = "Eggs" // Dot notation to add a key/value pair
console.log(obj) // prints {value: $30, item: "Eggs"}

// 6. Function Example:
function add(x, y) {
    return x + y      // to call it, add(1, 3) // returns 4
}
function doSome() {
    console.log("Something needs to be done") // to call it, doSome() // prints the string
}
const No = () => {
    return false       // to call it, No()  returns false
}

// 7 + 8. undefined and null Examples:
// undefined
var what   // automatically considered undefined
console.log(what) // prints "undefined"
// null 
var none = null  // have to assign null
console.log(none)  // prints "null"

// 9. Not a Number Example:
console.log(0 / 0); // Output: NaN
console.log(Math.sqrt(-1)); // Output: NaN  // usually present in math operation errors
console.log(Infinity * 0); // Output: NaN

// 10. Infinities Examples:
// Positive
console.log(1 / 0); // Output: Infinity
// Negative
console.log(-1 / 0); // Output: -Infinity

// 11. Difference between SDT and CDT Examples
// Simple Data Types
var hi = "hi yall" // string declared
hi.toUpperCase()   // won't work unless re-declared
hi = hi.toUpperCase()  // will work and give "HI YALL"
// Complex Data Types
var test = [0, 1, 2, 3, 4]; // array declared
test.reverse() // will work without re-declaration and make test = [4, 3, 2, 1, 0]

// 12. CbV vs. CbR Examples
// Copy by Value
var x = 2 // declare x with value of 2
var y = x // declare y with value of x (2)
x = 3 // x now equals 3
console.log(y) // y still equals 2
// Copy by Reference
var mine = ['My Room']; /// declare mine with array
var ours = mine // declare ours with value of mine
ours.push('Our Room!'); // edit ours array
console.log(mine) // will now equal ['My Room', 'Our Room!']