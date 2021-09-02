/*
TYPES

1-grammerAndTypes
 05-types.js
 */

 //BOOLEAN
 var on = true;
 console.log(on); //true

 let off = false;
 console.log(off); //false

 // boolean can represent: true/false, yes/no, on/off, 0/1

 //************************************************************************************************************************* 
 //*************************************************************************************************************************

// UNDEFINED
  /*
  Undefined usually means a variable has been declared, but its not been assigned a value
  */

 let grass;
 console.log(grass); //UNDEFINED

 var undef = undefined;
 console.log(undef); //UNDEFINED= something was not assined to the variable

 //************************************************************************************************************************
 //***********************************************************************************************************************

 //NULL
 /*
 Null means a variable has been declared and assigned a value of null
 */
var empty = null;
console.log(empty); // null
/* 
Null  and undefined both represent varibales with no value inside. Think of it this way--null values are for gag that gifts 
that are boxes intentionally given with nothing inside (because thats the gag).
Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!).
*/
//********************************************************************************************************************* 
//*********************************************************************************************************************

//NUMBERS
let myLiteralAge = 90;
console.log(myLiteralAge); //90

let precise = 9999999999999;
console.log(precise); //99999999999999

let rounded = 9999999999999999
console.log(rounded);// 1000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); //0.30000000000000004 ---js is not great with numbers

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); //0.3------moral of the story if your going to be working with numbers in js pull out a open source 

//****************************************************************************************************************************** 
//****************************************************************************************************************************** 

//STRINGS
// string is any value within quotes; JS spits out the value within the quotes
let stringeOne = "double quotes";
let stringTwo = 'single quote';
console.log(stringOne, stringTwo); //double quotes single quotes

//string concatention vs addition 
let first = 1050 + 100;
let second = '1050 + 100';

console.log(first); //1150--- when it sees a + sign with numbers next to it, it adds them
console.log(second); //1050100----when the + sign sees 'string' it doesnt add them, it COMBINES them.

let third = 1050 + 'abcde';
console.log(third);
console.log(typeof third); //1050abcde---- it treats the number as a string
console.log(typeof third);// string----- typeof tells you what youre working with string,boolean,etc

//********************************************************************************************************************************
//********************************************************************************************************************************

//INTERPOLATION
//lets you use strings with dynamic content (they require backticks)

//example 1:
let age = 32;
let string = `my age is: ${age}`
console.log(string); //my age is: 32

//*********************************************************************************************************************************
//********************************************************************************************************************************* 

// OBJECTS
/*
What is an object?

An object is a container that stores property names and their values 
(it can hold mutiple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value), seprated with a colon, each
 key-value pair is spreated with a comma
*/

let hulk = {
    color: 'green', // (string) think of it as a proerty on hulk
    age: 42, //number
    isStrong: true //boolean
}

console.log(hulk);//{color: 'green', age:42, isStrong:true}
console.log(hulk.age); //42-- if i changed .age to .color i would get 'green'
console.log(typeof hulk); //object

//*****************************************************************************************************************************************
//*****************************************************************************************************************************************

//ARRAYS
/* 
arrays stores mutiple values in an ordered way. They, too, hold mutiple data types.

Denoted by []
has values ('blue', 'green', 'yellow'), separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste','rinse brush', 'brush', 'clean toothbrush']
//array indexing                0                1                  2           3             4
//consle.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]); // uncap toothpaste
console.log(typeof stepsToBrushTeeth); //object----array inherites from an object. An object stores things. Arrays can store numbers of things
//objects is the parents of arrays

//********************************************************************************************************************************************** 
//***********************************************************************************************************************************************


// BOOLEAN
//The first data-type is 'boolean'. Booleans are pretty simple.
// They can represent true/false, yes/no, on/off, etc. 
// We reccognize a boolean because of the reserved keywords: 'true or 'false.

/* 
An easy example would be if the light is on in a room.
 In the future you will see how this data-type can help dispaly
  input fields is a a user is creating an account or display fewer fields if they alreasy have an account and are logging in. 
*/

let x = true;
console.log(x); //true

//********************************************************************************************************************************************* 

//UNDEFINED
// The next data-type is 'undefined'. 
//This value is automatically assigned to variables when they have been been declared but not 
// initialized or assigned a value.
// We can also explicity assign it as a values to a variable.
// We can do this by setting the value as undefined. This is not an error. This is an indicator that we forgot or incorrectly assigned the value to this varible.

let x;
console.log(x); //undefined - no value assigned

let y = undefined;
console.log(y); //undefined

//**********************************************************************************************************************************************************

// NULL 
//NULL is an empty value that is assigned to a varible. JavaScript looks for the 'null' keyword as a variable value.
let x = null;
console.log(x); //null = no value;

//**************************************************************************************************************************************************************** 

//NUMBER
let x = 17;
console.log(x); //17

//*************************************************************************************************************************************************************

//STRING
let x = 'Hello World!';
console.log(x); // Hello World!

let x = 19;
console.log(x); //x
x = 'tree';
console.log(x); //'tree'
x = false;
console.log(x); //false

//************************************************************************************************************************************************************ 
