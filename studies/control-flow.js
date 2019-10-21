/* 0. Control Flow controls the flow of the program.
 * We make decisions in our code based on asking true and false questions 
 * If the first answer isn't true it will conitnue to the next one until it has an answer that is true or it will print a default value
 * 
 * Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

 * Examples include if statement, else if statement, else statement, and switch statements.
 * 
 */
// 1. If Else Statments

var hour = 14;
 if (hour >= 0 && hour < 12) { // if with parenthesis with the condition that has to be met. In this case it has to be between 0 -12
        console.log("Good Morning!");
    } else if (hour >= 12 && hour < 17) { // else if meaning if this block of code will run if the first if statement if false.
        console.log("Good Afternoon!");
    } else if (hour >= 17 && hour <= 21) { // you can have as many else if statements as you want. We're looking for a true statement
        console.log("Good Evening!");
    } else      // else statement is the default statement. Meaning if all other blocks of code are false this will automatically be true
        console.log("Good Night!");
        
        
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
    case  "bob": // the case should match the val in order to get your answer
 
    answer = "Marley";
      break; // every case must have a break statement to end that case. or the next block with execute unintentionally
    case 42:

    answer = "The Answer"; // the output that will get displayed when the cases match
      break; 
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
      
      default : // default statement will execute when all other cases are false which can be placed anywhere
      answer = "There is no answer";
 
  }

  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);
