/* Loops
 * For Loops, for-in loops, and while loops
 * 
 * Loops
 * Are built in constructs in, which allow us to execute a block of code multiple times, which we can pull data out one by one.
 * 
 * 0. for loops (which are great for iterating over an array multi times)
 * 
 * Its three statements which go into a for loop
 * 
 * var i = 0 which initializes the i to start at 0.
 * i is less than the length of the names of the array 
 * i== which tells it how much to increment do decrement by
 * 
 * Examples Include
 */
// Loop forward over an array
var names = ["James", "Monroe", "Rob", "Mel", "Dev", "Kae", "Andy", "Blake", "Eric", "Bobby"];

for (var i = 0; i < names.length - 1; i++)  // i starts a 0 and as long as i is less than the length of the names array increasing one at a time 
{ 
    console.log(i); // inside the coode block we will tell it to log i to the console everytime the code is ran until it stops
}


// looping backwards over an array

for (var j = names.length - 1; j > -1; j--) // j starts at the end of the names array because of .length - 1 
                                         // j will stop then is reaches ethe beginning of the array which has to be -1 because arrays are zero-index
{
    console.log(j); // logs each name of the names array in backwards order
}

/* 1. While Loops
 * 
 * Uses the keyword While then in parenthesis states a condition that while true will execute a block of code in the body of the while loop.
 *  ** Don't forget to increment the variable used in the while-condition Failing to do so will cause an infinite loop**
 * 
 * Example Include
 */
var count = 1; // initialized count to be 1
while(count < 10) // while (keyword) count is less than 10 
   { //inside code block will log count to the console everytime while the count is less than 10
    console.log(count);
    count++;
}


/* for in loop
 * 
 * designed for looping or iterating over objects
 * The for-in loop  pulls out all the keys of an object one by one. This allows you to use the key to get the value in the object.
 * 
 * You can use array syntax with Objects using the brackets, you pass a string you know to be the key of an object and this
 * will resolve to the value at that key.
 * 
 * Keys are Essentially Strings
 * 
 * Examples Include
 */
// initiales the student variable as an object
 var student = {nameFirst: "James", nameLast: "Monroe"  // puts a key of nameLast with a value of Monroe inside the student object
               };
              
 for (var key in student) // starts a for loop, intitaliazes a key variable to equal the value of the keys in the student object
 {
     console.log(student[key]); // logs the value of the keys in the student variable
 }
 
