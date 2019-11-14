/* 0. Control Flow controls the flow of the program.
 * We make decisions in our code based on asking true and false questions 
 * If the first answer isn't true it will continue to the next one until it has an answer that is true or it will print a default value
 * 
 * Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if none of the other condition are true
Use else if to specify a new condition to test, if the first condition is false which is an if statement, or an else-if statement because of the chain
Use switch to specify many alternative blocks of code to be executed

 * Examples include if statement, else if statement, else statement, and switch statements.
 * 
 */
// 1. If Else Statments

var degrees = 31;
 if (degrees >= 95) { // if with parenthesis with the condition that has to be met. In this case it has to be between greater than 95
        console.log("We getting real hot!!");
        
    } else if (degrees >= 80  && degrees <= 94) { // else if meaning if this block of code will run if the first if statement if false.
        console.log("A lil warm but I'm not mad");
      
    } else if (degrees > 65 && degrees <= 79 ) { // you can have as many else if statements as you want. We're looking for a true statement
        console.log("This is like the perfect weather for me");
      
    } else      // else statement is the default statement. Meaning if all other blocks of code are false this will automatically be true
        console.log("This is way too cold for me!!!");
        
        
/* 2. Switch Statements
The switch statement is used to perform different actions based on different conditions.
Use the switch statement to select one of many code blocks to be executed.

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
The default keyword specifies the code to run if there is no case match. The default case does not have to be the last case in a switch block:
*/
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) { // the switch statement name followed by the expression in quotes then curly braces
    case  "James": // the case should match the val in order to get your answer
 
    answer = "Monroe";
      break; // every case must have a break statement to end that case. or the next block with execute unintentionally
    case 14:

    answer = "Favorite number"; // the output that will get displayed when the cases match
      break;
      
    case 20:
      answer = "My brother's favorite number";
      break;
    case "Arthur":
      answer = "Monroe, R.I.P bro";
      break;
    case 7:
      answer = "7th ward HardHeads all day!!!";
      break;
      
      default : // default statement will execute when all other cases are false which can be placed anywhere
      answer = "There is no answer";
 
  }

  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);


// 3. Regular if statements
// if the first condition is met the the first block will run 
// if not then the second bloc of ode will automatically run
let favNum = 14;

  if (favNum >= 14 && favNum <= 20) {
    console.log(`This is between the range of my favorite numbers`);  
  
} else {
    console.log(`This is not between the range of my favorite numbers`);
}