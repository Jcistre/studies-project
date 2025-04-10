/**
 * CONTROL FLOW:
 * 
 * 0: Control Flow is when booleans take the stage light in controling the flow of which your code
 * flows. This is more or less refrencing your if, else if, else, and switch statements.
 * 
 * 1: If Statements: These are your start to if, else if, else statements, but they are pretty
 * powerful on their own. these represent if X condition is true, do this.
 * 
 * 2: Else If Statements: These are additional statements if the first if statement returns false.
 * They work in a simalar syntax as if.
 * 
 * 3: Else Statements: These are your ending statements if all the other ifs return false. Unlike 
 * the if syntax, you just put the code that needs to happen because else works as a if all else
 * fails, do this.
 * 
 * 4: Switch Statements: Switch statements make for cleaner code compared to if - else statements.
 * The "switch" statement evaluates an input expression, matching the expression's value to a case
 * clause, and executes statements associated with the case. You can assign multiple cases to a
 * desired outcome. "break" statements are needed to stop cases from executing.
 */

// 1. If Statements Example
let x = 'hello'
let y = 'HeLlO'
if (x === y) {// how to write an if statement
    console.log('same') // would never execute
}
if (x !== y) {
    console.log('not same') // this would execute because 'hello' is not equal to 'HeLlO
}

// 2. Else If Statements Example
let num1 = 10
let num2 = "10"
if (num1 === num2) {
    console.log('same datatype') // won't execute because a string !== number
} else if (num1 == num2) { // how you write an else-if statement
    console.log('same number') // will execute because == looks beyond the datatype
}

// 3. Else Statements Example
if (x === y) {
    console.log('same')
} else if (num1 === num2) {
    console.log('same datatype')
} else { // how to write a else statement
    console.log('nothing is the same') // will execute
}

// 4. Switch Statements Example
let weather = "winter"
switch (weather) { // how to write a switch statement
    case "summer":
    case "spring": // example of cases sharing same statement to execute
        console.log("Nice day today")
        break;
    case "fall":
        console.log("Mmm pumpkin spice")
        break;
    case "winter":
        console.log("Brr it is cold") // will execute
        break;
}