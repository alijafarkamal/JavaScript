// function myFunction(g1, g2) {
//     inam = 77
//    console.log(inam)
//     return (g1+4) / g2;
// }
// console.log(myFunction(8, 2))
// { 
// var name = "alisa"
// name = "ali"
// console.log(name)
// }
// function Func1() {
//     console.log('one');
//     return 'one';
// }
// function Func2() {
//     console.log('two');
//     return 'two';
// }
// function Func3() {
//     console.log('three');
//     return 'three';
// }
// let a = (Func1(), Func2(), Func3())
// Three expressions are
// given at one place
// let x = (Func1(), Func2(), Func3());
// console.log(x);
// const fruit = "Apple";
// switch (fruit) {
//     case "value":
//         console.log("Apple is healthy for our body")
//         break;
//     case "Apple":
//         console.log("Mango is National fruit of India")
//         break;
//     default:
//         console.log("I don't like fruits")
// }

// for(let i = 0; i<6; i++){
//     if(i==5) break;
//     console.log(i+5, '\t',i+5);
// }
// Using break in a while loop
// let i = 1;
// while (i <= 5) {
// 	console.log(i);
// 	if (i === 3) {
// 		break;
// 	}
// 	i++;
// }
// try {
//     let i = 1
//     console.log("Welcome Fellow Geek!");
//     throw i;
// // }
// try {
//     console.log('try');
// } catch (e) {
//     console.log('catch');
// }
//  finally {
//     console.log('finally');
// }  
// const array = [1, 2, 3, 4, 5];
// const array = [1,2,3,4,5];
// for(let variable of array){
//     console.log(variable);
// }
// const str = 'Hello';
// for (const vari of str) {
// console.log(vari);
// }
// const map = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3'],
// ]);
// let name = {
//     firstName: "Ramaaa",
//     SUrName: "",
// };

// //console.log(name.SUrName);

// // Changing the value using logical 
// // AND assignment operator 
// name.firstName &&= "Rama krishan";

// // Here the value changed because 
// // name.firstName is truthy 
// console.log(name.firstName);

// console.log(name.lastName);

// // Changing the value using logical 
//  // AND assignment operator 
// name.lastName &&= "Kumar";

// // Here the value remains unchanged 
// // because name.lastName is falsy 
// console.log(name.lastName); 

// let yoo = 5;
// let yoo = 5;
// console.log(yoo ^= 2);
// let num = 6;
// let num1 = num*3
// console.log(num1)
// console.log(yoo^=2)
// // Expected output 20(In Binary 10100)
// console.log(yoo <<= 2);
// let yoo = 5;
// console.log(yoo<<=3);
// let yoo = 4;

// // Expected output 3
// console.log( insan = yoo - 1); 
// let a = 2;
// const b = 3;

// // Expected output: 2
// console.log(a);
// // Expected output: 4
// console.log(a = b + 1);


// for (const [key, value] of map) {
//     console.log(`Key : ${key}, Value: ${value}`);
// // console.log('Key: ${key}, Value: ${value}');
// }
    
// for (const item of array) {
// console.log(item);
// }
// let sum = 0, a = 1;
// blockOfCode: {
// 	console.log('This part will be executed');
// 	break blockOfCode;
// 	console.log('this part will not be executed');
// }
// console.log('out of the block')

// Label for outerloop
// outerloop: 
// while (sum < 12) {
// 	a = 1;
// 	innerloop:
//     while (a < 3) {
// 		sum += a;
//         if(a===2 && sum<12){
//             continue outerloop;
//         }
// 		console.log("sum = " + sum + " a = " + a);
// 		a++;
//     }
// }

// let sum = 0, a = 1;

// // Label for outer loop
// Label:
// while (true) {
//     while (true) {
//         a = 1;
//         console.log("SUM IS : "+sum+"\n");
//         // Label for inner loop
//         innerloop:
//          while (a < 3) {
//             sum += a;
//             if (sum > 12) {
//                 // Break outer loop from inner loop
//                  break Label;
//             }
//             console.log("sum = " + sum);
//             a++;
//         }
//         // if (sum > 12) {
//         //     // Break outer loop from inner loop
//         //     break;
//         // }
//     }
// }
 
// let age = 21;
// const result = (age>=22) ? "You are a nerd \n" : "You are a simple man \n";
// console.log(result);
// const result =
//     (age >= 18) ? "You are eligible to vote."
//         : "You are not eligible to vote.";
// console.log(result);

// const marks = 85;
// let Branch;
// switch (true) {
//     case marks >= 90:
//         Branch = "Computer science engineering";
//         break;
//     case marks >= 80:
//         Branch = "Mechanical engineering";
//         break;
//     case marks >= 70:
//         Branch = "Chemical engineering";
//         break;
//     case marks >= 60:
//         Branch = "Electronics and communication";
//         break;
//     case marks >= 50:
//         Branch = "Civil engineering";
//         break;
//     default:
//         Branch = "Bio technology";
//         break;
// }
// console.log(`Student Branch name is : ${Branch}`);

// catch (errr) {
//     console.log(errr);
// }
// function geekFunc() {
//     let a = 10;
//     try {
//         console.log("Value of variable a is : " + a);
//     }
//     catch (e) {
//         console.log("Error: " + e.description);
//     }
// }
// try {

//     throw new Error('Yeah... Sorry');
// }
// catch (e) {
//     console.log(e);
// }

// geekFunc();
// function geekFuncPro(){
//      let a = 10;
// //     try{
// //         throw a;
// console.log("value of var is : "+a)
          
//     }
//     catch(e){
//         console.log("Error : "+e.description)
//     }
// }
// try {
//     dadalert("Welcome Fellow Geek!");
// }
// catch (err) {
//     console.log(err);
// }

// for (let i = 0; i < 11; i++) {
// 	if (i % 2 == 0) continue;
// 	console.log(i);
// }

// let i = 1;
// while(i<=5){
//     console.log(i);
//     if(i==3) break;
//     i++;
// }
// // Using break in a do-while loop
// let j = 1;
// do {
// 	console.log(j);
// 	if (j === 3) {
// 		break;
// 	}
// 	j++;
// } while (j <= 5);


// function FUNC(){
    
// }

// function Language(){
//     let first = 'name', second = 'ali', Third = 'insan'
//     return {first, second,Third};
//     // let first = 'HTML', second = 'CSS', Third = 'Javasript'
//     // return {first, second,Third};
// }
// let {first, second, Third} = Language();
// console.log(first, second, Third)
// function Language() {
//     let first = 'HTML',
//         second = 'CSS',
//         Third = 'Javascript'
//     return {
//         first,
//         second,
//         Third
//     };
// }
// let { first, second, Third } = Language();
// console.log(first);
// console.log(second);
// console.log(Third);  

// let x = 77;

// {
//     let x = 23; // legal
//     console.log(x);
// }
// console.log(x);

// let num = 10;
// console.log(num);
// function fun() {
//     console.log(num);
// }

// fun(); // Calling the function


// console.log(inam)




// let value = myFunction(8, 2); // Calling the function
// console.log("insan"+"krl o bhalia \t\t "+"unshfsf\n\n\n");

// console.log(8+9-7*2-1/4)

// let a = 1, b = 2, c = 3;

// console.log("Initial values:");
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);

// // Using comma operator to update multiple variables
// // (a *= 2), (b *= 3), (c *= 4);
// a *= 2, b*= 3, c*= 4
// console.log("Updated values:");
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// let var1 = true; 
// let result1 = !var1; 
// console.log(result1); 
// let val2 = true; 
// let rsss = !val2;
// console.log(rsss)
// let result2 = !val2; 
// console.log(result2);
// let num = 10; 

// // Bitwise NOT, inverts all bits of 'num' 
// let result = ~num; 

// console.log(result);
// let num = 18; 
// let str = "GeeksforGeeks"; 
// let isTrue = true; 
// let obj = { name: "Aman", age: 21 }; 
// let undefinedVar; 

// console.log(typeof num); 
// console.log(typeof str); 
// console.log(typeof isTrue); 
// console.log(typeof obj); 
// console.log(typeof undefinedVar);
let person = { 
	name: "Ankit", 
	age: 27, 
	city: "Noida"
}; 
console.log(person); 
delete person.age; 
console.log(person);

// let languages = ["HTML", "CSS", "JavaScript"]; 
let languages = ["HTML", "CSS", "Javascript"]
// true (index 1 exists in the array) 
console.log(1 in languages); 

// false (index 3 doesn't exist in the array) 
console.log(3 in languages);

