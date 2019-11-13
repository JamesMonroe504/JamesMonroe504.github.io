/* String Manipulation
 * to.UpperCase, toLowerCase
 * slice, split, concat
 * 
 * Exampes include
 */
var str = "Hello world!";
var res = str.slice(3, 8); // Extract the characters from position 3 to 8:
console.log(res); // will show the characters from position 3 to 8. logs lo wo

// Split 
// The split() method is used to split a string into an array of substrings, and returns the new array.
// The datatype that be returned is no longer a string but a string of arrays

var string = "How are you doing today?";
var resOne = str.split(""); // Separate each character, including white-space:
console.log(resOne); // will show the characters split at the spaces into an array 
// [ 'How', 'are', 'you', 'doing', 'today?' ] is what will show to the console

// to.UpperCase

var upCase = string.toUpperCase(); // changes the string to complete upper case
console.log(upCase); // logs the entire string in upper case HOW ARE YOU DOING TODAY?

// to.LowerCase

var lowCase = string.toLowerCase(); // changes the string to lower case
console.log(lowCase); // // logs the entire string lower case how are you doing today?

// concat
// The concat() method is used to join two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2); // combines the strings together
console.log(res); // logs Hello world! to the console as one string joined together.


// Using + +=
// The plus sign is acting as a concatenation 

var str3 = str1 + str2 + " " + "I hope all is well!"; 
console.log(str3); // Prints Hello World! I hope all is well! to the console.


str3 += " All is well with me."
console.log(str3); // Prints Hello World! I hope all is well! All is well with me. to the console.