/* DataTypes
 * 
 * 0. Number
 * A number is a simple datatype. A number which is self explanitory consists of all numbers including intergers nd negative numbers.

 * Examples include
 */

var numberOne = 14; // assigns 14 to numberOne variable
var numberTwo = 20.14; // assigns 14 to numberTwo variable

console.log(numberOne); // prints 14 to the console
console.log(numberTwo); // prints 20.14 to the console.

/* 1. Strings
A string is also a simple datatype. A string is really what is in between quotation marks '' and "". what is in there is usually words.
However, you can put other dataypes like numbers in there and it will read them as words. So thererfore what you put in the string will be
understood in javascript as words.
Examples include:
*/

var fullName = "James Monroe"; // assigns my name James Monroe to the variable fullName
var fullNameAndAge = "James Monroe and I'll be 27 in a month"; // assigns my name and age to fullNameAndAge variable

console.log(fullName); // prints James Monroe to the console because that's what my fullName variable consists of.
console.log(fullNameAndAge); // prints James Monroe and I'll be 27 in a month to the console. Also, as you can see it reads the number 27 as 
// string because it is it between the quotes on line 23 where I declared the variable.

/* 2. Booleans
 * Booleans are quite simple actually. Which means you can tell that they're a simple datatype.
 * Booleans only consist of true and false. Meaning the only values of a boolean are true and false
 * 
 * Examples include
 */

var booleanOne = true;
var booleanTWo = false;

console.log(booleanOne); // it will print true which is a boolean
console.log(booleanTWo); // it will print false which is also a boolean

/* 3. Arrays
 * Arrays are complex dataypes. Arrays are considered containers for different datatypes. Arrays can hold different dataypes including arrays.
 * Arrays are ordered with a zero-index list, meaning they first array's value is held at the 0 position in the index. 2 value is 1 indexed.
 * The last element of the array will always be .length - 1
 * 
 * Examples include
 */

var arrayOne = []; // this is an array literal which is just an empty array.

arrayOne.push(fullNameAndAge); // this .push method will push my fullName from earlier into my empty array
arrayOne.booleanOne; // this will add the value of true into my array
arrayOne.push(numberOne); // pushes 14 to the end of the array

console.log(arrayOne); // prints the entire aray with everything added.

var arrayTwo = ["Blue", [1, false, "Siberian Husky"]]; // created an array with simple and complex datatypes

console.log(arrayTwo[0]); // prints Blue to the Consolee;

/*4 Objects
Objects are complex datatypes which are also a collection. However they are not zero-indexed and are not ordered.
Objects are considered key-value pairs. Which means the key holds that value.
They are associative arrays because there should be association between the key and the value
Examples Include
*/

var objectOne = {}; // object literal
var objectTwo = { name: "James Monroe", //created an object with different types inside 
                  age: 27,
                  favColor: "Blue",
                  saintsFan: true
                 };
                
console.log(objectTwo); // prints my object ot the console.

/* 5. Functions
A function allows us to encapsulate a block of code and execute that code whenever and however many times we want.
Two steps in writing a function. 
Function Declaration / Definition
Function Call / Invocation / Execution

We can also pass values into funtions called parameters.
Parameters serve as placeholders for the arguments you'll use in the function call
Examples Include
*/

function add(num1, num2) { // function call which consists of function keyword and name of function including parameters.
    // function body actions that have to be performed. Which will add num1 and num2.
    return num1 + num2; // return statement needed to properly run function and give value of function body
} add(14, 7); // called the function with number 14 and 7 as parameters.
                 
/* 6. Undefined
 *  Undefined is a primitive dataype, which means 
 *  All primitives are immutable, i.e., they cannot be altered.
 * 
 * Examples Include
 * 
 */

var exampleUndefined; // declared variable with no value
console.log(exampleUndefined); // prints undefined to the console because we only declared it and not initialized it.

/* 7. Null
 * This is another special data type that can have only one value-the null value. A null value means that there is no value. 
It is not equivalent to an empty string ( "" ) or 0, it is simply nothing. 
A variable can be explicitly emptied of its current contents by assigning it the null value
undefined and null are equal in value but different in type
 * Is also considered an object
Exampled Include
 */

var person = {firstName:"James", lastName:"Monroe", age:27, eyeColor:"brown"};
person = null;    // Now value is null, but type is still an object

/* 8. Nan
 * Checks to see whether the value os a not a number. 
 * 
 * Examples Include
 */ 

isNaN(123); //false
isNaN(-1.23); //false
isNaN(5-2); //false
isNaN(0); //false
isNaN('123'); //false
isNaN('Hello'); //true
isNaN('2005/12/12'); //true
isNaN(''); //false
isNaN(true); //false
isNaN(undefined); //true
isNaN('NaN'); //true
isNaN(NaN); //true
isNaN(0 / 0); //true

/* 9. Infinity and -Infinity
 *  The global Infinity property is a numeric value representing infinity.
 * Infinity is a property of the global object, or in other words, a variable in global scope.

The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number.
 Mathematically, this value behaves the same as infinity; 
for example, any positive number multiplied by Infinity equals Infinity, and any number divided by Infinity equals 0.
 * The value of Number.NEGATIVE_INFINITY is the same as the negative value of the global object's Infinity property.

This value behaves slightly differently than mathematical infinity:

Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
Any negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY.
Any positive value divided by NEGATIVE_INFINITY is negative zero.
Any negative value divided by NEGATIVE_INFINITY is positive zero.
Zero multiplied by NEGATIVE_INFINITY is NaN.
NaN multiplied by NEGATIVE_INFINITY is NaN.
NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY.
NEGATIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
 * 
 */

/* 10. Primitive, Simple, Complex Datatypes
Primitive / Simple Data Types All types except objects define immutable values (values, which are incapable of being changed). 
For example and unlike to C, Strings are immutable. We refer to values of these types as "primitive values".
Primitive Datatypes includes: String, Numbers, Booleans, Null, Undefined, Symbol, BigInt, Object

Complex Dataypes include Objects, Arrays, and Functions
Complex values affregate other values and are indefinte in size
When assigning or passing complex data types are passed by reference
Examples include
*/
 // Primitivites are atomic and immutable
 var favNum = 14; // Atomic: there is only ever a single value in a number
 
 var nameFirst = 'James';
 var fullNameExample = nameFirst + " Monroe";
 
console.log(nameFirst); // prints James
console.log(fullNameExample); // prints James Monroe

/* 11. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 * Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
 * 
 * 
 * 
 * Examples Include
 */
// Primitive values 
var a = 1;
var b = a;

b = 7; // changes the value of b without affecting a
console.log(b); // it will return 7 after we changed it
console.log(a); // it will return 1

// Complex Values
// you can store a function inside a variable.

var subtract = function sub(num1, num2) {
    return num1 - num2;
}; // in this example I stored the function in my subtract variable. so everytime I call the variable it runs the function