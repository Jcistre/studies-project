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
