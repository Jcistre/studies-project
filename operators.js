/**
 * OPERATORS:
 * 
 * 0: Operators act on our data to either change it, compare it, and even assigning it. There are six
 * types of operators.
 * 
 * 1: Assignment Operators: These kind of operaters assign data to variables. The simple one is "=" 
 * which should be known to even start manipulating data. The compound ones are "+=", "-=", "*=",
 * "/=", "%=", "<<=", ">>=", "&=", "|=", and "^=".
 * 
 * 2: Arithmetic Operators: These kind of operators change you numerical data. They include "+", "-",
 * "/", "*", "%", "**", "++", and "--".
 * 
 * 3: Comparison Operators: These kind of operators compare data and return a true or false value.
 * These include "<", ">", "<=", ">=", "<==", ">==", "==", "===", "!=", and "!==".
 * 
 * 4: Logical Operators: These kind of operators are used to change the logic of either the value or
 * if statement. "&&" makes it so that both statements will have to equal true in an if statement
 * or return false. "||" makes it so that either statement can equal true for the if statement to 
 * return true. "!" makes it so the truthiness of a value is flipped. "!!" coercess a value to a
 * boolean, if it was falsey (0, null, undefined, etc), it will false, otherwise, true.
 * 
 * 5: Unary Operators: These kind of operators only effect one thing. "!", "++", "--" are examples
 * of this. "typeOf" checks the type of value and returns its datatype, except for Date, object, array,
 * and null because these all return object. "+" attempts to covert opperand into number and "-" does
 * the same thing but then negates it.
 * 
 * 6: Ternary Operator: This opererator is the same as an if ... else statement. It is formated as 
 * a ? b : c. "a" is the condition statment to determine true or false, "b" is if true do this, and
 * "c" is if false do this. This cannot handle complex conditional logic involving multiple conditions
 * or side effects.
 */

// 1. Assignment Operators Examples:
// simple assignment
var I = "igloo"; // "=" assigns string igloo to I
// compound assignment
I += " ice"; // adds AND assigns I to "igloo ice"

// 2. Arithemetic Operators Examples:
let num1 = 20;
let num2 = 40;
sum = num1 + num2 // the "+" add both values to have sum = 60
let num3 = 30
sum = sum - num3 // using "-" subtracts from sum to get 30, get same result from "-="

// 3. Comparison Operators Examples:
// comparison operators
num1 > num2 // returns false because 20 is not greater than 40
num3 < num2 // returns true beacuse 30 is less than 40
// strictly equal operators
let Num1 = "20"
num1 === Num1 // returns false becasuea number is not equal to a string, even if the same number

// 4. Logical Operarors Examples:
// logical and operator
if (num3 > num1 && num3 > num2) {
    return true;
} else {
    return false;
} // returns false because even tho 30 is greater than 20, 30 is not greater than 40
// logical or operator
if (num3 < num1 || num3 < num2) {
    return true;
} else {
    return false;
} // returns true becasue even tho 30 is not less than 20, 30 is less than 40
// bang operator
let F = false
let T = true
let output = []
if (!num1) {
  output.push(T)
} else {
  output.push(F)
}
console.log(output) // output = [false]

// 5. Unary operators Examples:
// increment/decrement
var i = 0
i++ // increments by 1
i-- // decrements by 1
// typeof
console.log(typeof num1) // prints 'number'

// 6. Ternary Operators Example:
let a = 10
let b = '10'
a == b ? true : false // returns true, "==" checks to see if number is loosely equal to string