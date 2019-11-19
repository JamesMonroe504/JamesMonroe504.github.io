/* Functions
 * A function allows us to close up a block of code and run than code whenever and how often we want
 * Functions prevents us from constantly rewriting blocks of code over and over when we want to use them
 * 
 * Two Steps in making a function
 * 
 * Function Declaration 
 * Function Call
 * 
 * In order to create a function you have to write the javascript keyword Function then you have to name your function
 * Sometimes functions take parameters and if they do then you have to place () with , seperating each parameter
 * Then after the () you place {} which are the curly braces and inside of your {} is your code block
 * 
 * 
 * The parentheses may include parameter names separated by commas (parameter1, parameter2)
 * Parameters are placeholders for values until values or arguments gets passed through
 *
 * Like I stated earlier inside of your {is your code block for your function} 
 * 
 * Function arguments take the place of the parameters which are place holders of the argument.
 * When we call our function we place values instead of the parameters name. Those values are arguments

 * 
 * Function Return
 * The return statement is the end of the code of the function. It will stop the function from running once it reaches this value.
 * All functions require a return statement or your code or function will not probably work or run.
 * The return statement or the value is give back to us when call that we can keep, store, or see, and also us it in another function.
 * 
 * Examples Include
 */

function weather(degrees) {
    // the code block of my function body
 if (degrees >= 95) { // if with parenthesis with the condition that has to be met. In this case it has to be between greater than 95
       return console.log("We getting real hot!!");
        
    } else if (degrees >= 80  && degrees <= 94) { // else if meaning if this block of code will run if the first if statement if false.
       return console.log("A lil warm but I'm not mad");
      
    } else if (degrees > 65 && degrees <= 79 ) { // you can have as many else if statements as you want. We're looking for a true statement
       return console.log("This is like the perfect weather for me");
      
    } else      // else statement is the default statement. Meaning if all other blocks of code are false this will automatically be true
       return console.log("This is way too cold for me!!!");

} weather(41); // Will console log "This is way too cold for me!!!"
// Putting a function into a variable is as simple as just writing the function equal inside the variable.

var hello = function weather(degrees) {
    // the code block of my function body
           
 if (degrees >= 95) { // if with parenthesis with the condition that has to be met. In this case it has to be between greater than 95
        return console.log("We getting real hot!!");
        
    } else if (degrees >= 80  && degrees <= 94) { // else if meaning if this block of code will run if the first if statement if false.
        return console.log("A lil warm but I'm not mad");
      
    } else if (degrees > 65 && degrees <= 79 ) { // you can have as many else if statements as you want. We're looking for a true statement
        return console.log("This is like the perfect weather for me");
      
    } else      // else statement is the default statement. Meaning if all other blocks of code are false this will automatically be true
        return console.log("This is way too cold for me!!!");
        
}; hello(77); // will console log "This is like the perfect weather for me"


// Functions inside of Functions
/*
 * Closure gives you access to an outer function's scope from an inner function. 
 * Everytime a function is created a closure is created. 
 * To use a closure, put a function inside another function. 
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