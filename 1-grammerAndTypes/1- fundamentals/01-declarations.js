/* 
FUNCTIONS
*/
//general ideas: at their broadest level, functions do the following:
// 1) they take some input which the function will handle/process
// 2) they process the input given to them
// 3) they usaually, but not always,return some value
// 4) they can be invoked (used) as many times as we want, cutting down on code repetition

// example one:
function newFunc(num){
    return num + 1;
}

console.log(newFunc (7));
console.log(newFunc (10));
console.log(newFunc(11));
console.log(newFunc (-2));

// example two:
function sentence(firstName, lastName){
    return `my first name is ${firstName} and my last namw is ${lastName}`;
}

console.log(sentence('jonathan', 'huer'));
console.log(sentence('elizabeth', 'cuautle'));
let superImportantSentence = sentence('valerie', 'sanchez');
console.log(superImportantSentence);

// lets build a function that takes a complex type--an array in this case, and console.logs each
// item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratoFunc(input)