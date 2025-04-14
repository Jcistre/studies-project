/**
 * LOOPS:
 * 
 * 0: Loops allow for repeating code to be created. It allows either for iteration over data values
 * or creation of a countdown/countup variable.
 * 
 * 1: 3 types of for loops: For loops are the easiest to understand, it is also the most common one, 
 * they allow iteration over array-like data types and string variables, plus creation of a count 
 * variable. For - in loops are used for objects, since objects don't have a sequence of values, use
 * this to loop over data in an object. While loops are usesful when you don't know how many times a
 * code block needs to run, "same" as a for loop.
 * 
 * 2: Loop any number of times forward or back: To loop forward, you set your count variable to a
 * starting variable or 0, then you have a statement where as long as count is less then end variable
 * ,execute code, then finally you increase the count variable by "++" or "+=" "number". To loop
 * backward, it's essintially the inverse, set count variable to a starting value (preferably greater
 * than end value), a statement where as long as count is greater than end value, execute code, then
 * decrement your count by "--" or "-=" "number".
 * 
 * 3: Looping over an Array: A for loop is perfect for this, as well as a while loop. You create your
 * for loop as follows: declare and set count variable to 0, represents 0 index of array, then make
 * a statement where as long as count is less then array's length, execute code, then increment your
 * count. To loop backwards, count declared and set to array's length - 1 (last index), statement where
 * as long as count is greater than 0 (first index), execute code, then decrement count by 1.
 * 
 * 4: Looping over an Object: A for-in loop is needed to do this. You create a "key" variable IN your
 * Object that you want to iterate through.
 */

// 1: 3 Loops Examples
// for loop
for (var i = 0;         i < 10;             i++) {
//     ^ count var        ^ statement       ^ increment
    console.log(i); // code to execute
}
// for-in loops
let person = {
    name: "Joseph Istre",
    isBoy: true,
    age: 19
}
for (let key in      person) {
//        ^ key var    ^ obj to iterate over
    console.log(key + " " + person[key]) // code to execute
}
// While loops
let count = 0
// you have to create count outside of loop
while (count < 10) { // condition to stop loop or continue loop till
    console.log(count) // code to execute
    count++ // increment count
}

// 2: loop X amount forward or backward Examples
// loop forward
for (var i = 0;                 i < 10;             i++) {
    //     ^ start from 0        ^ statement       ^ increment
        console.log(i);
    }
// loop backward
for (var i = 10;                i > 0;             i--) {
    //     ^ start form 10       ^ statement       ^ decrement
        console.log(i);
    }
// loop by X (forward)
for (var i = 0;                 i < 10;             i += 2) {
    //     ^ start from 0        ^ statement       ^ increment by 2
        console.log(i);
    }
// loop by X (backward)
for (var i = 10;                i > 0;             i -= 2) {
    //     ^ start form 10       ^ statement       ^ decrement by 2
        console.log(i);
    }

// 3: Loop over arrays examples
let arr = [1, 2, 3, 5, 7, 11, 13];
// forwards
for (var i = 0;                      i < arr.length;             i++) {
    //     ^ start from 0 index       ^ statement                ^ increment
        console.log(i);
    }
// backwards
for (var i = arr.length - 1;             i > 0;             i--) {
    //     ^ start from last index       ^ statement        ^ decrement
        console.log(i);
    }

// 4: Loop over object example
for (let key in      person) {
    //    ^ key var    ^ obj to iterate over
        console.log(key + " " + person[key])
    }