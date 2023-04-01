/*
    Unary operators 

    ++ (increment the value)
    -- (decrement the value)
*/

// let a = 1 ;
// console.log(++a) // a = 2 , [2]
// console.log(a++) // [2] , a = 3
// console.log(++a) // a = 4, [4]
// 2, 2

// TypeCasting: 
// Number => String
// let a = 20; 
// // '20'
// console.log(typeof a)
// let b = String(a)
// console.log(typeof b,a, b)

// // Number => Boolean
// let c = Boolean(a);
// console.log(typeof c, c);

// String => Number, Boolean 

// let a = "1e4" ;

// let b = Number(a);

// console.log(typeof b, b); 

// Boolean => Number, String

// let a  = true ;
// // 'false'
// // 'true'
// let b = String(a); 
// console.log(b, typeof b)


// & (AND), | (OR) , ^ (XOR) , ~(not)
// << , >> , <<< , >>>


// let a  = 2 , b = 12 ;
// 0000000010
//      01100

// AND:  00

// Conditional statements 
// if , else , else if , switch case statements


// let a = "female" ;
// switch(a) {
//    case "male" : 
//     console.log("a is male")
//     continue;
//    case "female" : 
//     console.log("a is female ")
//     console.log("Second statement")
//     break;
//    case "other" : 
//     console.log("a is other ")
//     break;
// default : {
//     // code
// }
// }

// for( ; condition ; updation){
//     //code 
// }

// let a =  1 ; 
// do{
//     console.log("inside the do loop")
//     a++;
// }
// while(a < 3);


// intialisation => condition => block of code => updation => condition

// let a = 0; 
// for( console.log("Intial") ; console.log("condition") || a < 1 ; console.log("updation")) {
//     console.log("Inside the body ") ;
//     a++;
// }
// console.log("outside the for loop");

/*
a = 0
Intial
condition
Inside the body 
a = 1
updation
condition
outside the for loop
*/

// for(intialisation; condition ; updation) {
//     body
// }


// Hoisting 
// console.log(a)
// let a = 20 


// did i declare variable a or not ? Yes
// did i declare variable a or not ? no

// index.js:112 Uncaught ReferenceError: Cannot access 'a' before initialization

// a is not defined

// three keywords to declare variable 



// console.log(a)
// var a = 100 ;
// let b = 200 ;
// console.log(x , x + a + b);
// var x = 900; 
// b = undefined ;

/*
1. During creation phase all the variables in a context will get assigned with undefined values i.e what hoisting is.
2. Variables which are declared with let keyword will be hoisted inside the temporal deadzone.
3. variable declared with var keyword will be hoisted normally.
*/
console.log(a + b) ;
let x = 20 ;
console.log(a , b , x)
console.log(y) ;
var a = 200 ;
var b = 400 ; 
let y = 900; 


/*

+ => arithmatic non string operator involved 
+ => Concat operator when string operand is involved


*/
// String(1) + "2" => 12

console.log( 1 + 2, 1 + "2"  )

