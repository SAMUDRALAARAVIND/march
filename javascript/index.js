// let a = 10 ;

// function someFunction() {
//     let a = 29;
//     console.log(a +b ) ;
// }
// console.log("before calling function")
// let b = 40 ;
// someFunction() ; // function invocation
// console.log("after calling function")
// console.log(a + b) ;
// during creation phase variables will be assigned with some value 
// this process is called hoisting
// let, const => udefined
// functoion => will get the actual value
// var => undefined
// temporal dead zone.

// call by reference and call by value 
// propertyName, proertyValue

// class Test {
//     public String name ; 
//     public Integer age ;
// }
// let t = new Test():
// t.name = "Aravind"
// t.age = 22
// log(t.name + "  "+ t.age) // Aravind 22
// Object is non-primitive  | remaining all are primitive data types 

// let t = {
//     name: 'Aravind',
//     age : 22
// } ;
// console.log(t.name , t['age']) ;
// // t.age 
// // t['age']
// console.log( typeof (t) )

// let a = {
//     name: 'Aravind',
//     age: 22
// }
// let b = a ; // {name: 'Aravind', age: 22}
// a.name = "Samudrala Aravind" //a =  {name : 'Samudrala Aravind' , age: 22}
// console.log(a.name , b.name) ; // {name: 'Aravind', age: 22}

// let a = 20 ;
// function changeA() {
//     a = 90;
// }
// console.log(a) // 
// changeA();
// console.log(a) // 

// let a = {
//     x: 10,
//     y: 20
// }
// let b = a ;
// function changeB(ref){
//     console.log(b.x + b.y);
//     ref.x = 109 ;
// }
// changeB(b);
// console.log(a.x , b.x) ;
// arrays in js are objects 

// let arr = [10, 20, 30] ;
// // console.log(arr[0] + arr[1] + arr[2])
// let sum = 0;
// for(let i = 0 ; i < arr.length; i++) {
//     sum += arr[i] ;  
// }
// console.log(sum)
// let b = 100;
// let a = 200; 
// if(true){
//     // block
//     let a = 20;
//     console.log(a + b)

// }
// console.log(a)


// let arr = [1, 4, 3, 5, 6, 7, 10];
// function callme(x) {
//    // x = [1, 4, 3, 5, 6, 7, 10]
//     let n = x.length; // 7
//     let sum = 0; 
//     for(let i = 0 ; i < n; i++) {
//         sum += x[i] ;
//     }
//     // sum = 36
//     return sum;// return 36
// }

// let result = callme(arr) ; // 36
// console.log(result); // 36

// callme = #400
// function callme(x) {
//     x(); 
// }
// abc = #600
// function abc(){ 
//     console.log("Inside the abc"); 
// }
// callme(abc)
// passing a function as an argument to another function


// function callme() {
//     let a = 20 ; // primitive
//     let b = {name: 'aravind'} // b = #400
//     let c = b ;// c = #400
//     c.name = "something" ; // 
//     console.log(c.name, b.name)
// }
// callme();

// let arr = [10, 23, 34] ;
// let result = arr.push(55); // [10, 23, 34, 55]
// console.log(arr, result); // [10, 23, 34, 55]
// let poppedElement = arr.pop(); // 55 , arr = [10, 23, 34]
// console.log(poppedElement)
// method == function
// attribute == property

// you will be given an array , write a function which takes an array and index
// your function should remove the element at that index and returns it

// function remove(arr, index) {
//   let n = arr.length; 
//   for(let i = index; i <= n-2; i++){
//     let firstElement = arr[i] ;
//     arr[i] = arr[i+1] 
//     arr[i+1] = firstElement; 
//   }
//   let deletedElement = arr.pop(); 
//   return deletedElement;
// }

// let a = [2, 3, 4, 5, 9, 8] // a = #400
// let removedElement = remove(a, 2) ; // remove(#400, 3)
// console.log(a, removedElement) // [2, 3, 4,9, 8]  5

// [2, 3, 3, 4, 5, 5, 6, 7, 7]
//                          i
// [2, 3, 4, 5, 6, 7]

// let obj = {
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//     7: 0,
// } 

// let obj = {
//     "3" : 0,
//     "5" : 4
// }
// // indices
// for(let i in obj) {}

// let arr = [3, 4, 5]
/*
    0: 3,
    1: 4,
    2: 5

*/
// for(let i = 0 ; i < arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr["1"])
// for(let i in arr){
//     console.log( typeof(i), arr[i])
// }






 // [2, 3, 4, 5, 3, 4, 5]  => [2, 3, 4, 5, something]
    //        i           j


    //  count = 4