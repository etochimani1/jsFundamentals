// Assignment is the process in which a value is placed inside a variable, as previously discussed in variable declarations.
//  There are many different assignment operators, the most common of which is the "=" operator, like this: let X = 42.
//   Here are some other common operators that you may see and find useful:

//     NAME                               PURPOSE                                             SHORTHAND
// Addition assignment                    x = x + y                                            x += y
// subtraction assignment                 x = x - y                                            x -= y 
// Multiplication assignment              x = x * y                                            x *= y 
// division assignment                    x = x / y                                            x /= y 
// Remainder assignment                   x = x % y                                            x %= y 
// exponential assignment                 x = x ** y                                           x **=y 

/* 
String operators
 Some assignment operators can also be used with strings, such as: let x = 'testing'.
String concatenation is another example of this.
*/






/*
IF CONDITIONSALS
*/

let isOn = true;
if (isOn == true){
    console.log('this light is on!');
}

if (isOn){
    console.log('the light is on, yay!');
}
// IF ELSE 
let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('no jacket neccesary!');
}

// you can blend complex conditionals and if-else statements based upon your 
// need:
if (weather > 70 && typeof weather === 'number'){
    console.log('this weather is amazing!');
 { else }
console.log('either the temperture is cool, the variable is not a string, or both');
}

// ELSE IF 

// If-else statment can be chained 

let age = 30;

if (age >= 25){
    console.log('yay! you can rent a car!');
} else if (age >= 21){
    console.log('yay! you can drink!');
} else if (age >= 18){
    console.log('yay! you can vote!');
} else {
    console.log('sorry, you are too young to do anything fun');
}



