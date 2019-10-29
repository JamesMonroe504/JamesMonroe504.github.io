/* Functions
 * A function allows us to encapsulate a block of code and run than code whenever and how often we want
 * Functions prevents us from constantly rewriting blocks of code over and over when we want to use them
 * 
 * In creating a function there are two stages
 * 
 * Function Declaration or Defintion
 * Function Call/Invocation/Exection
 * 
 * 
 * A JavaScript function is defined with the function keyword, followed by a name of the function, 
 * parenthesis if it takes parameters () followed by curly braces {}.
 * 
 * 
 * The parentheses may include parameter names separated by commas (parameter1, parameter2)
 * Parameters are placeholders for values until values or arguments gets passed through
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

function cougar(age) {
    // the code block of my function body
            if (age < 21) { 
        return ("Girl get out of here"); // will return this statement if this code block is true
    } else if (age >= 21 && age <= 27) { 
        return ("Still a lil young over there"); // will return this statement if this code block is true
    } else if (age >= 28 && age <= 40) { 
        return ("Oh yea we in a nice ballpark"); // will return this statement if this code block is true
    } else      
        return ("You know I love my Cougars ^_^"); // if no other statements above are true then it will print this out by default

} cougar(41);
// Putting a function into a variable is as simple as just writing the function equal inside the variable.

var hello = function cougar(age) {
    // the code block of my function body
            if (age < 21) { 
        return ("Girl get out of here"); // will return this statement if this code block is true
    } else if (age >= 21 && age <= 27) { 
        return ("Still a lil young over there"); // will return this statement if this code block is true
    } else if (age >= 28 && age <= 40) { 
        return ("Oh yea we in a nice ballpark"); // will return this statement if this code block is true
    } else      
        return ("You know I love my Cougars ^_^"); // if no other statements above are true then it will print this out by default

}


// FUnctions inside of Functions
/*
 * Closure gives you access to an outer function's scope from an inner function. 
 * Closures are created every time a function is created, at function creation time. 
 * To use a closure, define a function inside another function and expose it.
 * 
 */

/*
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
  
    
    // return my function that test the string 
    return function stringStarts(string) {
       //
       if (string[0].toUpperCase() === startsWith.toUpperCase()) {    
        return true;
    }else {
        return false;
            }
    }
}