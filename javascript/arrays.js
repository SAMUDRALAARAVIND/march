
// forEach(iterates on the array)
// map(returns another array)
// filter(returns another array)
// let func = (element, index, list) => {
//     return element + index; 
// }
// 1 + 0 => 1
// 4 + 1 => 5
// 2 + 2 => 4
// 3 + 3 => 6
// [1, 5, 4, 6]
// how many times func will be called inside the map function ? 4, [true, true, true, true]
// let result = arr.forEach(func)
// console.log(result)
// function func(e, i, list){
//     console.log(e, i, list)
//     return (i % 2 == 0); // [true, false, true, false]
//     // i = 0 (true), i = 1 (false) , i = 2 (true),  i = 3 (false)
//     //     1                *          2              *
//     // [1, 2]    
// }
// let result = arr.filter((e, i, list) =>{
//     console.log(e, i, list)
//     return (i % 2 == 0); // [true, false, true, false]
//     // i = 0 (true), i = 1 (false) , i = 2 (true),  i = 3 (false)
//     //     1                *          2              *
//     // [1, 2]    
// }) // what filter returns an array 
// console.log(result)// reduce


// callback => (prev, element, index)
// [1, 4, 2, 3]
// let intialValue = 10
// function func(prev, element, index) {
//     // iteration = 4 (17)
//     // prev = 17
//     console.log(prev , element,  index) ;
//     return prev + element ; // 17 + 3 = 20 
// }
// let result = arr.reduce(func , intialValue) // 20
// // reduce(func, 10)
// console.log(result); 

// let result = arr.reduce((prev, currentElement, index) => {
//     console.log(prev, index === 0)
//     return prev + currentElement
// })

// console.log(result)

// const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// function hasKey(key) {
// 	for(let i in sampleObject){
//         if(i === key) return true 
//     }
//     return false ;
// }

// // Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));


// let arr = [3, 1, 4, 10, 2, 12, 34, 18]
// function compare(a, b) {
//     return a - b ;
// }
// 
// []
//  [3, 4, 8, 4, 6]
//        i      j
// [3, 4, 4, 6, 8]
// arr.sort(compare)
// console.log(arr)

function compare(a, b) {
    // compare a and b return true if a > b else return false 
}


// let arr = ["an abm a mno", "a cm", "the harry", "a the abn"]
// // ["abm", "cm" , "harry", "abn"]
// // ["an abm", "a the abn", "a cm", "the harry"]
// // "an abm a mno" => abm mno ? abmmno ? abm  mno

// let str = "abc$mn$o" // ["abc",  "mn",  "o"]
// let result = str.split("$") // " " => delimeter
// console.log(result)

// let bandName = "The Band Something" ;
// let words = bandName.split(" ") // ["The", "Band", "Something"]

// let updatedString = words.reduce( (prev, current) => {
//     // current = 'The'
//     if(current != 'The' && current != 'an' && current && 'a'){
//         return prev + " "+current ;
//     }
//     return prev ;
// }, "")

//  {
//     "Band Something" : "The Band Something",

//  }

// console.log(updatedString)
// let arr = ["a some one", "mno The abc", "abc an kh"]
// // updatedList = ["some one", "mon abc", "abc kh" ]
// // sortedUpdatedList = ["abc kh", "mon abc" , "some one"]
// // finalList = ["abc an kh" , "mno The abc", "a some one" ]
// /*
//     {
//         "some one" : "a some one",
//         "mon abc"  : "mno The abc" ,
//         "abc kh"   : "abc an kh"
//     }
// */
// let updatedList = arr.map((element) => {
// 	// ["a", "some", "one"]
// 	let words = element.split(" ") ;
// 	let updatedString = words.reduce((prev, current, index) => {
// 		if(current != "The" && current != "an" && current != "a"){
// 			return prev + " " + current ;
// 		}
// 		return prev ;
// 	}, "")

// 	return updatedString ;
// }) ;
// let mp = {} ; // {"some one" : "a some one"}
// updatedList.forEach( (element, index) => {
// 	mp[element] = arr[i] ;
// });
// // ["some one" , "mno abc" , "abc kh"]

// updatedList.sort(); 

// let finalAns = updatedList.map((element) => {
//     return mp[element] ;
// })

// console.log(finalAns); 


let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
let updatedList = arr.map((element) => {
	// ["a", "some", "one"]
	let words = element.split(" ") ;
	let updatedString = words.reduce((prev, current, index) => {
		if(current != "The" && current != "an" && current != "a"){
			return prev + " " + current ;
		}
		return prev ;
	}, "")

	return updatedString ;
}) ;
let mp = {} ; // {"some one" : "a some one"}
updatedList.forEach( (element, index) => {
	mp[element] = arr[index] ;
});
updatedList.sort(); 

let finalAns = updatedList.map((element) => {
    return mp[element] ;
})

console.log(finalAns); 