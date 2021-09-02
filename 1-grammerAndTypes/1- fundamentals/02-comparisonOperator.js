4 == //true;

2 != 4 //true;

//COMPARISION OPERATORS 
// equality comparsion operator
console.log('3' ==3);
console.log(4 == 4);
console.log(3 == '4');

// strict equality comparision operator 
console.log(3 ===3);
console.log('3' ===3);

// not equal comparsion operator 
console.log('3' != 4);
console.log('3' != 3);

// strict not equal comparision operator 
console.log('3' !== 3);
console.log(3 !== 3);

// greater than
console.log(3 > 2);
console.log(2 > 3);

// less than
console.log(2 < 3);
console.log(3 < 2);

// greater than or equal to 
console.log(3 >= 2);
console.log(3 >= 3);

// less than or equal too 
console.log( 2 <= 3);
console.log( 3 <= 2 );

// And (both expressions on either side of the operator mmust be true for "AND "  to return true)
console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

// OR (either expression on the one side of the operator mudt be true for the 'or' to return true)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);


let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj);

let arr = (1,2,3,4);
console.log(arr == arr);