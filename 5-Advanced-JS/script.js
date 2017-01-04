////////////////////////////////////////////
// OBJECTS & PROTOTYPES

// Every JS object has a PROTOTYPE PROPERTY, which makes inheretance possible in JS

// The proto property of an obj is where we put methods and properties we 
// want other objs to inherit

// The constructor's proto is NOT the proto of the constructor istelf, it is the proto
// of ALL instances that are created through it

// When a method or property is called, the search starts in the obj itself, and if it
// cannot be found, the search moves onto the obj's prototype. This continues until the
// method is found: that is the proto chain! If it reached the end of the chain null 
// is returned

////////////////////////////////////////////
/*
// Object literal
var john = {
	name: "John",
	yearOfBirth: 1990,
	job: "teacher"
}

// Function constructor

var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

// Adding a method to the prototype property of an object 
// rather than the constructor means all instances can call it
// but do not have it attached to them by default

Person.prototype.calculateAge = function(){
		console.log(2016 - this.yearOfBirth);
	};

// Prototype also works for properties, 
// but is not commonly used for this

Person.prototype.lastName = "Smith";

// Instantiating the Person object called 'john'

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
//  Note mark object instance does not have the calculateAge method

console.log(john.lastName);

// Object.create

var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
}

// Object.create inherits directly from the object passed as the first
// argument, whereas the constructor pattern above, instances inherit
// from the prototype property of the constructor

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

// Defining instance properties with a second argument to 
// .the create method

var jane = Object.create(personProto, {
	name: {value: "Jane"},
	yearOfBirth: {value: 1969},
	job: {value: "designer"}
});
*/

/*
// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
	name: "John",
	age: 26
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
	name: "Jonas",
	city: "Lisbon"
};

	console.log("before the function " + age);

function change(a,b) {
	a = 30;
	console.log("inside the function " + a);
	b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

//////////////////////////////////////////////////////
// Lecture: Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

// Function that loops over an array and processes each item
// in that array with a callback function
function arrayCalc(arr, fn) {
	var arrRes = [];
	for(i=0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

// Callback function 1
function calculateAge(el) {
	return 2016 - el;
}

// Callback function 2
function isFullAge(el){
	return el >= 18;
}

// Callback function 3
function maxHeartRate(el) {
	if(el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

// Calling the arrayCalc function with callback functions as arguments
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

// Logging the results to console
console.log(rates);
console.log(fullAges);
console.log(ages);
*/

//////////////////////////////////////////////////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job){
	if(job === "designer"){
		return function(name) {
			console.log(name + ", can you please explain what UX design is?");
		}
	} else if(job === "teacher"){
		return function(name) {
			console.log("What subject to you teach " + name + "?");
		}
	} else {
		console.log("Hello " + name + ", what do you do?");
	}

}

// The below var === the returned result of interviewQuestion() being passed
// teacher as an argument. The returned result is a function
var teacherQuestion = interviewQuestion("teacher");
//  Same for designer
var designerQuestion = interviewQuestion("designer");

// The teacherQuestion var now === a function that accepts a name
// and outputs a console log appropriate to a teacher
teacherQuestion("John");
// Same for designer
designerQuestion("John");
designerQuestion("Craig");
designerQuestion("Pete");
designerQuestion("James");

// The above can be replicated in one single step starting from
// the parent interviewQuestion, as argument blocks are evaluated
// from left to right, the result from the teacher argument is
// a returned function that accepts a name argument, the below
// will also console log appropriate to teacher
interviewQuestion("teacher")("Doreen");
*/

//////////////////////////////////////////////////////
// Lecture: IIFE Immediately Invoked Function Expressions

/*
// Trick the parser into thinking the function is an expression
// rather than a declaration by wrapping it in parenthesis, the scope
// of the score variable is then only accessable to the unnamed IIFE
// Anything wrapped in paranthesis cannot be a statement
(function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// console.log(score); // Score is unavailable to scope outsite the IIFE

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/

//////////////////////////////////////////////////////
// Lecture: Closures

function retirement(retirementAge) {
	var a = " years left until retirement";
	return function(yearOfBirth){
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job){
	return function(name){
		if(job === "designer"){
			console.log(name + ", can you please explain what UX design is?");
		} else if(job === "teacher"){
			console.log("What subject to you teach " + name + "?");
		} else {
			console.log("What Is your job " + name + "?");
		}
	}
}

// Closure means that the anonymous function returned by interviewQuestion()
// has access to the job argument and can then use it in the if logic
interviewQuestion("teacher")("John");

//////////////////////////////////////////////////////
// Lecture: Bind, Call & Apply

var john ={
	name: "John",
	age: 26,
	job: "teacher",
	presentation: function(style, timeOfDay){
		if (style === "formal"){
			console.log("Good " + timeOfDay + " ladies and gentlemen, I'm " + this.name + " I'm a " + this.job + " and I'm " + this.age + " years old.");
		} else if (style === "friendly"){
			console.log("Hey! What's up? I'm " + this.name + " and I'm " + this.age + " years old. Have a nice " + timeOfDay);
		}
	}
}

var emily ={
	name: "emily",
	age: 35,
	job: "designer"
}

john.presentation("friendly", "afternoon");
john.presentation.call

















