
// let person = {
// 	first_name: 'Mukul',
// 	last_name: 'Latiyan',
// 	//method
// 	getFunction: function () {
// 		return (`The name of the person is 
// 		${person.first_name} ${person.last_name}`)
// 	},
// 	//object within object
// 	phone_number: {
// 		mobile: '12345',
// 		landline: '6789'
// 	}
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);


// let man = {
//     name : "ali",
//     age : '15',
//     getFunction: function (){
//         return (`name of man is ${man.name} ${man.age}`)
//     },
//     phone_number:{
//         mobile_phone: '03067024733',
//         land_phone: '676767'
//     }
// }
// console.log(man.getFunction())
// console.log(man.phone_number.mobile_phone)


// Object.create() example a
// simple object with some properties
// const coder = {
// 	isStudying: false,
// 	printIntroduction: function () {
// 		console.log(`My name is ${this.name}. Am I 
// 			studying?: ${this.isStudying}.`)
// 	}
// }
// // Object.create() method
// const man = Object.create(coder)
// man.name = "ali Allah ka wali"
// // Inherited properties can be overwritten
// man.isStudying = true;
// man.printIntroduction();




// Defining class in a Traditional Way.
// function Car(name, maker, engine) {
// 	this.name = name,
// 		this.maker = maker,
// 		this.engine = engine
// };
// Car.prototype.ManPower = function(){
//     console.log('The name of man is '+this.name)
// }
// let suzuki_mehran = new Car('Mehran', 'Suzuki', '800cc')
// let bike1 = new Car('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Car('Ninja', 'Kawasaki', '998cc');
// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(suzuki_mehran.ManPower());



// Encapsulation example
// class person {
// 	constructor(name, id) {
// 		this.name = name;
// 		this.id = id;
// 	}
// 	add_Address(add) {
// 		this.add = add;
// 	}
// 	getDetails() {
// 		console.log(`Name is ${this.name},
// 		Address is: ${this.add}`);
// 	}
// }

// let person1 = new person('Mukul', 21);
// person1.add_Address('Delhi');
// person1.getDetails();



// Abstraction example
// function person(fname, lname) {
// 	let firstname = fname;
// 	let lastname = lname;

// 	let getDetails_noaccess = function () {
// 		return (`First name is: ${firstname} Last 
// 			name is: ${lastname}`);
// 	}
// 	this.getDetails_access = function () {
// 		return (`First name is: ${firstname}, Last 
// 			name is: ${lastname}`);
// 	}
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

// Inheritance example

// class person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	// method to return the string
// 	toString() {
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person {
// 	constructor(name, id) {
// 		// super keyword for calling the above 
// 		// class constructor
// 		super(name);
// 		this.id = id;
// 	}
// 	toString() {
// 		return (`${super.toString()},
// 		Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());
// Generate Function generates three 
// different numbers in three calls
// function* fun(){
//     yield 10
//     yield 20
//     yield 30
// }
// let gen = fun()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);




// Generate Function generates an 
// infinite series of Natural Numbers 
// function* nextNatural() {
//     let naturalNumber = 1
//     while (true) {
//         yield ((naturalNumber++)*(naturalNumber-1))/2;
//     }
// }
// // Calling the Generate Function
// let gen = nextNatural();
// for (let i = 0; i < 10; i++) {
//     console.log(gen.next().value);
// }



// let array = ['a', 'b', 'c']
// function* generator(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         yield arr[i++]
//     }
// }
// const it = generator(array);
// // We can do it.return() to finish the generator


// const arr = ['a', 'b', 'c'];
// function* generator() {
//     yield 1
//     yield* arr
//     yield 2
// }
// for (let value of generator())
//     console.log(value);

// let Iter = {
//     *[Symbol.iterator](){
//         yield 'abchff';
//         yield 'b';
//         yield 'c';
//     }
// }
// for (let value of Iter)
//     console.log(value);



// function* generator() {
//     throw new Error('Error Occurred');
// }
// const it = generator();
// it.next();

// const firstPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(1), 5000)
//     })
// }

// const secondPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(2), 3000)
//     })
// }

// async function* generator() {
//     const firstPromiseResult = await firstPromise();
//     yield firstPromiseResult;
//     const secondPromiseResult = await secondPromise();
//     yield secondPromiseResult;
// }

// let it = generator();
// for await(let value of it) {
//     console.log(value);
// }
// function Person(name, job, yearOfBirth){   
//     this.name= name;
//     this.job= job;
//     this.yearOfBirth= yearOfBirth;
// }
// console.log(Person.prototype);




// function Person(name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }
// Person.prototype.calculateAge = function(){
//     console.log('The current age is: ' + (2024 - this.yearOfBirth));
// }
// console.log(Person.prototype);




// function constructor
function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

// adding calculateAge() method to the Prototype property
// Person.prototype.calculateAge = function () {
//     console.log('The current age is: ' + (2019 - this.yearOfBirth));
// }
// console.log(Person.prototype);

// creating Object Person1
let Person1 = new Person('Jenni', 'clerk', 1986);
console.log(Person1)
let Person2 = new Person('Madhu', 'Developer', 1997);
console.log(Person2)

// Person1.calculateAge();
// Person2.calculateAge();
