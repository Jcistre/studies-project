/**
 * VARIABLES:
 * 
 * 0: Variables are able hold data in your code during the life-cycle of a program.
 *    They are named identifiers to refrence certain types of data like: strings, numbers,
 *    arrays, objects, etc. We can also change the value, or type of value in a variable.
 * 
 * 1: Declaration + Initializing: To declare a variable is simply creating a named base to initialize
 *    later. To initialize is to use the assignment opperator "=" to assign a value. These two steps
 *    can be done on the same line.
 * 
 * 2: Var, let, const: There are three ways to declare a variable. Var is the most basic and easiest
 *    to use, it is what you will first learn and it gets the job done (in small scale programs). Let
 *    is used to declare variables that are block-scoped, only accessable in the block they are
 *    declared in. Const is the declaration method to use if you DON'T want a variable to be redefined,
 *    this is also block-scoped.
 * 
 * 3: Hoisting: This simply a behavior where variable and function declarations are moved to the top
 *    of their scope before the code executes, meaning you can use them before declaration. When a
 *    variable is declared with var, its declaration is hoisted to the top of its scope, but its
 *    initialization (assignment of a value) is not, returns undefined. With let and const, variable
 *    declarations are also hoisted, but they are not initialized, returns a Refrence error.
 */

// 1. Declaration + Initialize Example
// The variable named name, starts out undefiend because it has not been initialized yet
var name; // Declaration
console.log(name); // prints "undefined"
// to Initialize you simply use the assignment operator
name = "Joseph I."; // Initializing
console.log(name); // prints "Joseph I."

// 2. Var, let, const Example
// var declaration is simple and can be used as previously shown above for any data type ^
var job = "student"; // var declaring for string
var age = 19; // var declaring for number
var male = true; // var declaring for boolean
console.log(name + ", " + job + ", " + age + ", " + male) // prints "Joseph I.", "student", 19, true
// let is most commonly used when changing variables in functions
function exampleFunction() {
    if (true) {
      let x = 10;
      console.log(x); // Output: 10
    }
    console.log(x);// console.log(x); // Error: x is not defined outside the block
  }
exampleFunction();
// const is also used in functions for variables that shouldn't be redefined.
const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
numbers = [4, 5, 6]; // This will cause an error

// 3. Hoisting Example
// This is more or less a concept to know (to be changed later)
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10
// will not work with let or const
console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20