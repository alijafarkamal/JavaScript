// class GFG { 
// 	constructor(A, B) { 
//         // "this" refers to the address 
// 		// of the keys "g" and "f" 
// 		this.g = A; 
// 		this.f = B; 
// 	} 
// 	print() { 
// 		console.log(this.g + " " +this.f); 
// 	} 
// } 
// let gg = new GFG("JavaScript", "Java"); 
// gg.print();
// var GFG = {
//     articles: 'computer science',
//     quantity: 3000,
//     subject: 'Physics',
// };
// GFG['subject'] =  'JavaScript';
// GFG.subject=  'JavaScript';

// console.log(GFG)
// creating object using "new" keyword 
// var gf = new Object(); 

// // Assigning properties to the object 
// // by using dot (.) operator	 
// gf.a = "JavaScript"; 
// gf.b = "GeeksforGeeks"; 
// gf.c = "Inata"
// Creating object	 
// var gfg = new Object(); 
// // Assigning properties to the object	 
// gfg.a = "JavaScript"; 
// gfg.b = "GeeksforGeeks"; 
// // Use function() 
// // gfg.c = function () { 
// // 	return (gfg.a +" "+ gfg.b); 
// // }; 
// gfg.c = function(){
//     return gfg.a+" \t\t"+ gfg.b
// }
// console.log("Subject: " + gfg.a); 
// console.log("Author: " + gfg.b); 
// // Call function with object constructor	 
// console.log("Adding the strings: "+ gfg.c() );

// console.log("Subject: " + gf.a); 
// console.log("Author: " + gf.c );
// var onject = {}
// onject['a'] = 'java'
// onject['b'] = 'C#'
// console.log(onject.a, " ",onject.b)
// Creating object using "{ }" bracket 
// var gfg = { }; 

// // Assigning properties to the object	 
// gfg.a = "JavaScript"; 
// gfg.b = "GeeksforGeeks"; 

// // Use function() 
// gfg.c = add; 
// function add(){
//     return gfg.a+gfg.b
// }
// // Declare function add() 
// function add() { 
// 	return (gfg.a +" "+ gfg.b); 
// }; 

// console.log("Subject: " + gfg.a); 
// console.log("Author: " + gfg.b); 

// // Call function with object constructor	 
// console.log("Adding the strings: "+ gfg.c());
// class GeeksforGeeks {  
//     // static keyword is used  
//     // before the function name 
//     static example(){
//         return "static example 1"
//     }
// } 

// // Calls the static function  
// // using className.functionName 
// document.writeln( 
//     GeeksforGeeks.example1());
// let promise = new Promise(function (resolve, reject) {
//     reject('Promise Rejected')
// })
// promise.then(function(successMessage){
//     console.log(successMessage)
// }).catch(function (errorMessage){
//     console.log(errorMessage)
// })
// let details = {
// 	name: "Rajia sabha",
// 	Course: "DSA course",
// }
// const prox = new Proxy(details, {})

// console.log(prox.name);
// console.log(prox.Course);
// const courseDetail = {
// 	name: "DSA",
// 	time: "6 months",
// 	status: "Ongoing",
// }

// const handler = {
// deleteProperty(target, prop) {
// 	if (prop in target) {
// 	delete target[prop];
// 	console.log(`Removed: ${prop}`);
// 	}
// }
// };

// const pro = new Proxy(courseDetail, handler);

// console.log(pro.name);
// delete pro.name
// console.log(pro.name);
// ["sumit","amit","anil","anish"]
// let set1 = new Set(["sumit","sumit","amit","anil","anish"]);
// let set = new Set(["food", "jkldhl","hjdf","jojo","jojo"])
// // console.log(set)
// // it contains 'f', 'o', 'd'
// let set2 = new Set("fooooooood");
// console.log(set.delete('jojo'))
// console.log(set)

// // it contains [10, 20, 30, 40]
// let set3 = new Set([10, 20, 30, 30, 40, 40]);

//  // it is an  empty set
// let set4 = new Set();
// let set1 = new Set();

// // adding element to the set
// set1.add(50);
// set1.add(30);
            
// console.log(set1.has(50));
// console.log(set1.has(10));
// let set1 = new Set();

// // adding element to the set
// set1.add(50);
// set1.add(30);
// set1.add(40);
// set1.add("Geeks");
// set1.add("GFG");

// // getting all the values
// let getValues = set1.values();

// console.log(getValues);

// let getKeys = set1.keys();

// console.log(getKeys);
// let set1 = new Set(["sumit","sumit","amit","anish"]);

// let getit = set1[Symbol.iterator]();
// let kalf = set1[Symbol.iterator]()
// console.log(kalf.next())
// console.log(getit.next());
// console.log(getit.next());
// console.log(getit.next());
// Set.prototype.union = function(otherSet)
// {
//     // creating new set to store union
//     let unionSet = new Set();

//     // iterate over the values and add 
//     // it to unionSet
//     for (let elem of this)
//     {
//         unionSet.add(elem);
//     }

//     // iterate over the values and add it to 
//     // the unionSet
//     for(let elem of otherSet)
//         unionSet.add(elem);

//     // return the values of unionSet
//     return unionSet;
// }

// // using the union function
// // Declaring values for set1 and set2
// let set1 = new Set([10, 20, 30, 40, 50]);
// let set2 = new Set([40, 50, 60, 70, 80]);  

// // performing union operation
// // and storing the resultant set in 
// // unionSet
// let unionSet = set1.union(set2);

// console.log(unionSet.values());

// const square = function (number) {
// 	return number * number;
// };
// const x = square(4); // x gets the value 16
// console.log(x);
// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// const a2 = a.map(function(s){
// 	return s.length
// })
// console.log("Normal way ", a2); // [8, 6, 7, 9]
// const a3 = a.map((s) => s.length)
// console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]
// let callEr = (a,b) =>{
// 	let z = a/b
// 	return z
// }
// console.log("Division : " + callEr(24, 4));
// function that returns product of two numbers 
function product(a, b) {
    return a * b;
}
let result = product.call(this, 20, 5);
console.log(result);