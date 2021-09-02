/*
LOOPS
*/

/*
LOOPS after a quick and easy  way to do something  repeatedly 

there are many different kinds of loops all do roughly same things:
for statement 
do while 
while 
labeled
break
continue
for in
for of
.for each
.map
*/

// loops strucute
// a) creation of an indexing variable.
//b) a run condition 
//c) change to the indexing variable 

// count to 10 from 0 and log the numbers:
for (let i =  0; i <= 10; i++){
    console.log(i);
}

// loops can run infinetly 
//  for (let i = 0; ; i ++){
//    console.log(i);
// }

// counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >= 25; i = i -3){
    console.log(i);
}

// display the letters in name individually 
let name = 'kinkade';
 
for (let i = 0; i < name.lengnth; i ++ ){
    console.log(name [i]);
}

// for loops can use lots of variables:
let start = 2;
leet stop = math.floor(math.random()*30);
let increment = 3;

for ( let i = start; i <= stop; i = i + increment){
    console.log(i);
}

// FOR IN LOOPS

// lets write a for-in loop that capitalizes the first letter of a name



let student = {name: 'peter', awesome: true, dgree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log(student[item]);

}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for [cat in catArray] {
    console.log(cat);
    console.log(catArray[cat]);
}

// lets wwrite a for-in loop that capitalizes the first letter of a name

let instructor = 'paul';
let capName;

for (n in instructor);{
    if (n == 0{
        capName = instructor[n]. to UpperCase();
     { else }
     capNname += instructor[n].toLowerCase();
    }
}
console.log(capName);






// FOR OF LOOPS
 

// of rquires that your 'thing' youre looping through be iterable--that means it needs 
// to be numbered

let student = (name: 'peter', awesome: true, degree: 'javascript', week: 1);
for (item of student){
    console.log(item);
}


let catArray = ['tabby', 'british shorthair', 'burrmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');

}
