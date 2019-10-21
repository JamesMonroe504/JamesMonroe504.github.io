/* String Manipulation
 * to.UpperCase, toLowerCase
 * slice, split, concat
 * 
 * Exampes include
 */
var str = "Hello world!";
var res = str.slice(3, 8); // Extract the characters from position 3 to 8:
console.log(res); // will show the characters from position 3 to 8.

// Split 
// The split() method is used to split a string into an array of substrings, and returns the new array.

var string = "How are you doing today?";
var resOne = str.split(""); // Separate each character, including white-space:
console.log(resOne); // will show the characters split including the white space.

// to.UpperCase

var upCase = string.toUpperCase(); // changes the string to complete upper case
console.log(upCase); // logs the entire string in upper case

// to.LowerCase

var lowCase = string.toLowerCase(); // changes the string to lower case
console.log(lowCase); // // logs the entire string lower case

// concat
// The concat() method is used to join two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2); // combines the strings together
console.log(res); // logs Hello world! to the console as one string joined together.
