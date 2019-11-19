/* Operators.
Assignment operators
Arithmetic operators
Comparison operators
Logical operators
Unary operators (!, typeOf, -)
Ternary operator (a ? b : c)
 * 
 * 
 * 
 */

/* 0. Aritmetic Operators 
Assigns value to the other side of the operator. It also can change value based on the math that it's being asked to do.
Operators include +, -, /, *, and %
Examples Include
*/
var z = 13 * 2; // assigns z 26 using multiplication assignment
var y = 26 - 1; // assigns y 25 using subtraction assignment
var x = 48 / 2; // assigns x 24 using division assignment
var w = 14 + 9; // assigns w 23 using addition assignment 
var v = 14 % 2; // assigns v 0 becauser using remainder assignment

/* 1. Assignment operstors
 *  Include, +=, -=, *=, /=
 * 
 * 
 * Examples Include
 */
 // += add the values
 w += x; // equals 47 because it takes the sign to the left as the first value and will add the same value to the new value
 // it is read as w = w + x;
 
 
 // -= subtracts the value 
 w = w - x; // -1
 
 // *= multiply the values 
 w = w * x; // 552
 
 // /= divide the values 
 w = w / x; // .958333 
 
/**
 * 2. Comparision Operators
 * Compares two things together on different sides of the sign 
 * 
 * Examples Include
 */ 
 
 w === z; // would be false because 23 is not equal to 26
 w !== x; // would be true becasue w = 23 and is not equal to x which is = to 24
 w >= x; // would be false because w = 23 and x = 24 so 23 is not greater than or equal to x which is 24;
 w <= y; // will be true because w = 23 y = 25 because 23 is less than or equal to y which is 25
 
 // == loosely equal to just value not datatype
 // === strictly equal to value and datatype
 // !== Not equal to value or datatype
 // != loosely not equal to value 
 // > greater than you read it from left to right
 // < less than
 // >= greater than or equal to
 // <= less than or equal to
 // ? ternary operator
 
 /**
  *  3. Logical Operators
  * And, or, not 
  * It's just logical either both of these statements are true, or one of them are true.
  *  or the ! bang operator which negates values
  */
 // && The and operator all statements include with this symbol must be true
 // || The or operator any of the statements can be true
 // ! Negates everything to the to make it not true.
 
 /**
  * Unary Operators
  * 
  * 
  */ 
 // typeOf returns the datatype of the value it's checking
 // instanceOf returns true if that object is the object
 
 
 /**
  *  Ternary Operators take in 3 operands
  * A condition followed by a question mark. Then what will be shown if it's true followed by a colon :
  * Then what will be shown if the condition is false.
  * 
  * This is typically used as a shortcut for the if statement.
  */ 
  

  