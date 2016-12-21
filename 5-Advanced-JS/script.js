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

// Function constructor

var john = {
	name: "John",
	yearOfBirth: 1990,
	job: "teacher"
}

var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

var Car = function(make, model, topSpeed){
	this.make = make;
	this.model = model;
	this.topSpeed = topSpeed;
}

Person.prototype.calculateAge = function(){
	console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith";


Person.prototype.car = new Car;



Car.prototype.accelerate = function(){
	console.log("vroom " + john.lastName);
}


var empty = new Person();
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var ford = new Car("Ford", "Mustang", 170);

console.log(ford.model);
ford.accelerate();













