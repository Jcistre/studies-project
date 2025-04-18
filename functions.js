/**
 * FUNCTIONS:
 * 
 * 0: Functions create the behavior of our code. It determines what the code can do and it can
 * modify values outside of itself or inside of itself. There are many ways functions can be used from
 * simply adding two values together to iterating and filtering out data you need in an array and
 * modifying that data as needed.
 * 
 * 1: Two phases of functions: Unlike variables, there are two distinct phases of creating and
 * intiation of functions. The first phase is creating a function, odviously. The second is calling
 * the function with either values to be used in the function with () around them or using () to call
 * it if it doesn't have parameters.
 * 
 * 2: Parameters vs Arguments: Parameters are the AMOUNT of VALUES a function CAN take when doing
 * it's code. Arguments are the VALUES PASSED into a function for the code to ACCESS.
 * 
 * 3: Named Function: To create a named function, first use the "function" keyword and then after
 * that the name of the function, should relate to what the function is doing like adding values or 
 * finding a certain value. Second is (parameters, ...), the amount of parameters depends on you,
 * could be 0 or 20 (unlikely, hopefully). Finally is your code following after and encapsulated in
 * {}.
 * 
 * 4: Variable Assigned Functions: To create this, create your variable, which will be your name of 
 * the function, then after the "=" put keyword "function" and your parameters then code block
 * encapsulated in {}.
 * 
 * 5: Optional Inputs and Outputs: As previously stated, a function can take inputs, but it also can
 * not depending on how it was coded, empty () or default parameters. A function can also give more 
 * than one output or return value, you just have to code it that way.
 * 
 * 6: Scope: Function can access variables outside of it's own scope, they should or shouldn't 
 * depending on how you code your varibales. But, anything outside the function can not access
 * variables inside the function's scope.
 * 
 * 7: Closures: Functions can keep variables alive when they house or use them, even after being
 * returned form a function. These variables are referenced in the memory of the returned function.
 * This is what allows closures to work as intended.
 */

// 1. Two Phases of Functions Example:
function add(x, y) {
    return x + y;      // creation or declaration of function phase
}

add(1, 2) // calling or initialization of function phase // should give 3

// 2. Parameters vs. Arguments Example
function subtract(x, y) {   // x and y on this line are parameters, max they can use is two
    return x - y;
}

subtract(1, 2, 3)   // 1 and 2 will be used, but 3 will be ignored since function wasn't coded so

// 3. Named Functions Example
//                          v parameters
function          multiply(x, y) {
// ^ func keyword    ^ name to call
return x * y;  // code to execute
}

// 4. Variable Assigned Functions
//      v name to call    v parameters
const divide = function(x, y) {
//               ^ func keyword
    return x/y; // code to execute
}

// 5. Optional Inputs and Outputs Examples
// optional inputs
function doSomething() {
    return "Hello"
}
doSomething() // will return "Hello"
// or 
const doSomething2 = function(str = "Hello, again") {
    return str;
}
doSomething2() // will return "Hello, again"

// optional outputs
function doSomething3(str1, str2 = "Hi, for the third time") {
    console.log(str1)
    console.log(str2)
}
doSomething3("Hi") // will print "Hi" and "Hi, for the third time" 

// 6. Scope Example
var age = 20;
function xYearsOlder() {
    var num = 1
    return age += num
}
xYearsOlder()
console.log(age) // age will be accessed and incremented by 1 to be 21
console.log(num) // will not be accessed and print undefined

// 7. Closures Example
function countBy(x) {
    let c = 0
    return function() {
        return c += x
    }
}
const countBy2 = countBy(2)
countBy2()
countBy2()
let result = countBy2()
console.log(result) // despite never having access to the c value, it will still increment by 2