/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 0. Let 

/* Let variable allows us to declare a block scope local variable
   If used within a block scope it limits that variable scope to that block of code
Containers for reassignable values; they are NOT hoisted to their code block
Let is also a variable that can be re assigned another value after declaration
*/

// 1. declaring let.
 let example;
 console.log(example); // will print un defined becasue it was only declared and not initialized

// 2. initializing let as well as reassigning the value of oit
example = 5;
example = 7;
console.log(example) // will log 7 to the console.

// 3. Hoisting and Block Scope
/* In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Let cannot be hoisted
*/
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x); // expected output: 2 because it's declared inside the block scope of the if statement/
}
console.log(x); // expected output: 1 because it's accessing the let variable outside of the block scope.
// If it wasn't therer it would be a refernce error because x wouldn't be defined it can't be decalered in the block scope.

/* 4. Temporal Dead Zone 
Unlike variables declared with var, which will start with the value undefined, 
let variables are not initialized until their definition is evaluated. 
Accessing the variable before the initialization results in a ReferenceError. 
The variable is in a "temporal dead zone" from the start of the block until the initialization is processed.
*/
function do_something() {

 // console.log(bar); // undefined
 // console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}

/* 0. Constant variable const
Containers whose values can never change; they are block scoped, and not hoisted to the top of their block scope
You have to assign it a value immediately. Meaning you cannot leave a const undefined or unassigned
However the only const you can change is a CONSTANT OBJECT

*/

// 1. initializing and decalaring a constant
 const nameFirst = "James";

// 2.  blocked scoped const.

 x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
 // console.log(x) = 2 because it's in the block scoped and c\an only be accessed here
}
// Here x is 10 becasue the variable is declared with var and is globally avialable.

// 3. Hoisting 
// constant and let variables are not hoisted to the top. They are pinned to their code block
// var keyword variables are hoisted to the top and are only pinned to functions

// console.log(abs); // Will throw a refernce error because abs is not hoisted and so it's as if it doesn't see it. The same for const
let abs = 8;

console.log(ab); // Will log throw undefined because the variable declaration gets hoisted but not the value
var ab = 6;


/* 4. Temporal Dead Zone 
Unlike variables declared with var, which will start with the value undefined, 
let variables are not initialized until their definition is evaluated. 
Accessing the variable before the initialization results in a ReferenceError. 
The variable is in a "temporal dead zone" from the start of the block until the initialization is processed.
*/

// Meaning just like the let variable you cannot access the value before it's written in the program. 
// You have to access it after to declare it
