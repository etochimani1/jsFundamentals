/* 
VARIABLES

1-grammerAndTypes
02-delclarations.js
*/

// what is a variable?
var a = 1;
var b = 2;
console.log(a + b);

// notes on naming variables:
// 1) a variable must begin with a letter, underscore, or dollar sign
// 2) numbers may follow the above characters, but cannot come first
// 3) javascript is case sensitive--- 'hello' and 'Hello' are diffrent variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when 'declare' a variable

Initializations refer to when a variable is assigned a value

Assigment refers to giving a variable a value. This can be after initialzation.
*/

var x;
// console.log('Declaration 1:', x); //undefined

x = 10; 
console.log('initialization 1:', x) //10

x = 33;
console.log('assigment 1:', x); //33
//********************************** *

var y; //----> declaring 
console.log(y); //undefined 

y = 'hello'; //--->initilizing 
console.log(y); //hello

y = 'you are my fren'; //assigning 
console.log(y); //you are my fren

/*
Var, let, and const:

Var = 'old' keyword for variables 
Let = 'new' keyword for variables (introduce with ES6)
const = also 'new' , declares unchangeable variables
*/

let tonight = 'great!';
const elevenfifty = 'Amazing!';
console.log(tonight, elevenfifty); // gret! amazing!

tonight = 'lovely!';
console.log(tonight, elevenfifty); // lovely! amazing!    ----> you can change the meaning of a variable using "var" and "let"
 
// elevenfifty = 'super!';// will not work cus of the variable 'const'

//**************************************************************************************************************************************
//************************************************************************************************************************************** 


// a variable is a conatainer of memory or a bucket that holds a value. Declaring a varibale is as simple as writing 'let myVaribale;.
// a variable can be decalred in this way,but does not have a value until it is initialized by assiging it to one:
// my Variable = 0; 
// in JavaScript we can declare a varible and initialize it at the same time: 
// let myVAriable = o;

/*
it can contain anything, but it has certain naming conventions that must be followed:
1. A variable MUST begin with a letter 'a-z', an underscore '_', or a dollar sign '$'
2. Numbers '0-9' may follow any of these characters  h3110
3. JavaScript is a case-senseitive language: HELLO and Hello are two diffrent variables
*/

// DECALRING, INITIALOIZING, and ASSIGNING VARIBLES
//there are three variable kewwords used to decalre variables in javascript.

/*
1) 'var' decalres a variable
2) 'let' decalres a variable that is blocked-scoped 'let' was introduced with ES6, but more on this later).
3) 'const' declares a block-scoped variable, that is a constant.
*/

// lets deconstruct the following variable:
//  "let myVAriable" = 0;
//   ^^^^^^^^^^^^^
/* everything to the left of the equal sign (=) is the 'declaration' of a variable.
This contains a varible keyword ('var', 'let', or 'const') and the name of the varible (myVariable). 
When a variable is declared, we are "announcing the variables presence and giving it a name"
If we 'console.log' just the 'declartion' of a variable, the output will produce 'undefined'.
 This is because the value of the varible is unknown or 'undefined'
 but what about the right hand side?
 let myVariable "= 0;"
                 ^^^^
The right hand side consits of the assignment operator or equal sign (=) and the value.
If we are doing this for the first time, we are 'initializing' the variable.
If we are changing the initial or an already excisting value, we are 're-initiallizing' or assigning the variable.
We can easily 're-initalize' or 'assign' new values to variables utilizing 
the variable keywords of 'var'or 'let'several times over.
A variable that is a 'const' cannot be "re-initialized"
*/
const needCoffee = true;
needCoffee = false;
// this will produce an error in our output:


