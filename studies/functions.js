/* Functions
 * A function allows us to encapsulate a block of code and run than code whenever and how often we want
 * This allows us not to have to be constantly rewriting blocks of code 
 * 
 * In creating a function there are two stages
 * 
 * Function Declaration or Defintion
 * Function Call/Invocation/Exection
 * 
 * 
 * A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
 * 
 * 
 * The parentheses may include parameter names separated by commas (parameter1, parameter2)
 * 
 * The code to be executed, by the function, is placed inside curly brackets: {}
 * 
 * Function arguments are the values received by the function when it is invoked.

 * Inside the function, the arguments (the parameters) behave as local variables.
 * 
 * 
 * Function Innovocation
 * When it is invoked (called) 
 * Automatically (self invoked)
 * 
 * Function Return
 * When JavaScript reaches a return statement, the function will stop executing.
 * Functions often compute a return value. The return value is "returned" back to the "caller":
 * 
 * Examples Include
 */

function greeter(hour) // creates a function names greeter with an parameter of hour than the user will later call/invoke the function
{ // curly braces to open function
    // YOUR CODE BELOW HERE //
    
    // this function is a if else statment that will log differnt statement based upon the hour or number thats passed thru the aruments 
    if (hour >= 0 && hour < 12) {
        console.log("Good Morning!");
    } else if (hour >= 12 && hour < 17) {
        console.log("Good Afternoon!");
    } else if (hour >= 17 && hour <= 21) {
        console.log("Good Evening!");
    } else 
        console.log("Good Night!");
    
    
    // YOUR CODE ABOVE HERE //
}
greeter(14); // call or invocates the function passing 14 through the argument **This is the argument** Logs Good Afternoon!


// Putting a function into a variable is as simple as just writing the function equal inside the variable.

var hello = function greeter(hour) // creates a function names greeter with an parameter of hour than the user will later call/invoke the function
{ // curly braces to open function
    // YOUR CODE BELOW HERE //
    
    // this function is a if else statment that will log differnt statement based upon the hour or number thats passed thru the aruments 
    if (hour >= 0 && hour < 12) {
        console.log("Good Morning!");
    } else if (hour >= 12 && hour < 17) {
        console.log("Good Afternoon!");
    } else if (hour >= 17 && hour <= 21) {
        console.log("Good Evening!");
    } else 
        console.log("Good Night!");
    
    
    // YOUR CODE ABOVE HERE //
};


// FUnctions inside of Functions
/*
 * In other words, a closure gives you access to an outer function's scope from an inner function. 
 * In JavaScript, closures are created every time a function is created, at function creation time. 
 * To use a closure, define a function inside another function and expose it.
 * 
 */

/*
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // return my function that test the string 
    return function stringStarts(string) {
       
       if (string[0].toUpperCase() === startsWith.toUpperCase()) {    
        return true;
    }else {
        return false;
            }
    }
    
    
    // YOUR CODE ABOVE HERE //
}