/**
 * STRING MANIPULATION:
 * 
 * 0: Strings represent worded data in our program, so how exactly can we manipulate/change this data
 * to reflect what we need it to do? String Manipulation is the way to go, there are two ways to
 * achieve this.
 * 
 * 1: With Operators: The same operators we use to add to numbers can be used for strings. I am
 * refering to the "+" and "+=" operators. Note when using these you have to include a space if you 
 * want your strings to have spaces.
 * 
 * 2: With String Methods: There are too many String methods to go through so here are some common
 * ones. Two ways to access specific characters in a string are B.N., like an array, and charAt().
 * Also like an array, you can use .length to find the length of a string. You can change the case
 * using either .toUpperCase() or .toLowerCase(). 
 */

// 1. With Operators Examples:
// "+" operator
let firstName = "John";
let lastName = "Kennedy";
let fullName = firstName + " " + lastName; // will equal "John Kennedy"
// "+=" operator
var name = "Joseph";
name += " Istre"; // name now equals "Joseph Istre"

// 2. With String Methods Examples:
// accessing characters
firstName[2] // points to "h"
lastName.charAt(5) // points to "d"
// accessing length
fullName.length // gives 12, includes the space in count
// Case Change
let test = "uppercase"
let test2 = "LOWERCASE"
test = test.toUpperCase()
test2 = test2.toLowerCase()
console.log(test + " " + test2) // prints "UPPERCASE lowercase"