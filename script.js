///////////////////////////////////////////////////
// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/



///////////////////////////////////////////////////
// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

///////////////////////////////////////////////////
// Lecture: operators
// var now = 2016
// var birthYear = now - 26;

// birthYear = now - 26 * 2;
//2016-52
//1964

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

// ageJohn++;
// ageMark *= 2; 

// console.log(ageJohn);
// console.log(ageMark);

///////////////////////////////////////////////////
//Lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes'){
//     console.log(name + ' is married!');
// }else{
//     console.log(name + ' will hopefully get married soon :)');
// }

// isMarried = true;

// if(isMarried){
//     console.log('yes!');
// }else{
//     console.log('no!');
// }

// if (isMarried){
//     console.log('YES!');
// }

// if (23 == "23"){
// 	console.log('Something to print...');
// }

///////////////////////////////////////////////////
//Lecture: boolean logic and switch

// var age = 20;

// if(age < 20){
// 	console.log("John is a teenager");
// } else if (age >= 20 && age < 30){
// 	console.log("John is a young man");
// } else {
// 	console.log("John is a man");
// }

// var job = "teacher";

// job = prompt("what does John do?");

// switch(job){
// 	case "teacher":
// 		console.log("John teaches kids"); break;
// 	case "driver":
// 		console.log("John drives a cab"); break;
// 	case "cop":
// 		console.log("John helps fight crime"); break;
// 	default: 
// 		console.log("John does something else");
// }

///////////////////////////////////////////////////
// CODING CHALLENGE 1

// var johnHeight = 159,
// 	johnAge = 26;

// var craigHeight = 159,
// 	craigAge = 26;

// var cecilHeight = 159,
// 	cecilAge = 26;

// var johnScore = johnHeight + johnAge * 5,
// 	craigScore = craigHeight + craigAge * 5,
// 	cecilScore = cecilHeight + cecilAge * 5;

// if(johnScore > craigScore && johnScore > cecilScore){
// 	console.log("John wins with a score of " + johnScore + ".");
// } else if (cecilScore > craigScore && cecilScore > johnScore){
// 	console.log("Cecil wins with a score of " + cecilScore + ".");
// } else if (craigScore > cecilScore && craigScore > johnScore){
// 	console.log("Craig wins with a score of " + craigScore + ".");
// } else {
// 	console.log("Holy shit, it's a draw! John has a score of " + johnScore + " and Cecil has a score of " + cecilScore + " aaaand Craig has a score of " + craigScore + "! What are the odds?");
// }

///////////////////////////////////////////////////
// Lecture: Functions

// function calculateAge(yearOfBirth) {
// 	var age = 2016 - yearOfBirth;
// 	return age;
// }

// var ageJohn = calculateAge(1986);
// var agePete = calculateAge(1946);
// var ageSarah = calculateAge(2000);

// function yearsUntilRetirement(name, year) {
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;
// 	if (retirement >= 0){
// 		console.log(name + " retires in " + retirement + " years");
// 	}else{
// 		console.log(name + " has already retired.");
// 	}
// }

// yearsUntilRetirement ('John', 1990);
// yearsUntilRetirement ('Mike', 1969);
// yearsUntilRetirement ('Mary', 1948);

///////////////////////////////////////////////////
// Lecture: Statements and expressions

//function statment
// function someFun(par){
// 	//code
// }

// //function expression
// var someFun = function(par){
// 	//code
// }

// //Expressions - produce a value
// 3 + 4;
// var x = 3;

// //Statments - perform and action
// if (x === 5){
// 	//do something
// }


///////////////////////////////////////////////////
// Lecture: Arrays

// var names = ["John", "Jane", "Mark"];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);

// names[1] = "Ben"

// console.log(names);

// var john = ["John", "Smith", 1990, "Designer", false];

// john.push("Blue");
// john.unshift("Mr");
// john.pop();
// john.shift();

// console.log(john);

// /* if indexOf method doesn't find the argument in a 
// given array john in this case, then it will return -1
// */
// if (john.indexOf("Teacher") === -1){
// 	console.log("John is not a teacher");
// }


///////////////////////////////////////////////////
// Lecture: Objects

//object literal
// var john = {
// 	name: "John",
// 	lastName: "Smith",
// 	yearOfBirth: 1990,
// 	job: "Teacher",
// 	isMarried: false
// };

// console.log(john.lastName);
// console.log(john["lastName"]);

// var xyz = "job";
// console.log(john[xyz]);

// john.lastName = "Miller";
// john["job"] = "Programmer";

// console.log(john);




// var jane = new Object();

// //declaring values via mutation
// jane.name = "Jane";
// jane.lastName = "Smith";
// jane["yearOfBirth"] = 1969;
// jane["job"] = "retired";
// jane["isMarried"] = true;

// console.log(jane);

///////////////////////////////////////////////////
// Lecture: Objects and Methods

//v 1.0
// var john = {
// 	name: "John",
// 	lastName: "Smith",
// 	yearOfBirth: 1990,
// 	job: "Teacher",
// 	isMarried: false,
// 	family: ["Jane", "Mark", "Bob"],
// 	calculateAge: function() {
// 		return 2016 - this.yearOfBirth;
// 	}
// };

//v2.0
// var john = {
// 	name: "John",
// 	lastName: "Smith",
// 	yearOfBirth: 1990,
// 	job: "Teacher",
// 	isMarried: false,
// 	family: ["Jane", "Mark", "Bob"],
// 	calculateAge: function() {
// 		//return 2016 - this.yearOfBirth;
// 		this.age = 2016 - this.yearOfBirth;	
// 	}
// };

// QUESTION POSTED ON UDEMY. 
// Not sure why they both log john with age property
// console.log(john);
// john.calculateAge();
// console.log(john);

// var mike = {
// 	name: "Mike",
// 	yearOfBirth: 1950,
// 	calculateAge: function() {
// 		//return 2016 - this.yearOfBirth;
// 		this.age = 2016 - this.yearOfBirth;	
// 	}
// };

// mike.calculateAge();
// console.log(mike);

// console.log(john.calculateAge());
// var age = john.calculateAge();
// john.age = age;

// console.log(john);

///////////////////////////////////////////////////
// Lecture: Loops

// for (var i = 0; i < 10; i++){
// 	console.log(i);
// }


/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop
*/


// var names = ["John", "Jane", "Mary", "Mark", "Bob"];
/*
//for loops
for (var i = 0; i < names.length; i++){
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--){
	console.log(names[i]);
}
*/

//while loops
// var i = 0
// while(i < names.length){
// 	console.log(names[i]);
// 	i++
// }

// for (i = 1; i <= 5; i++){
// 	console.log(i);

// 	if(i === 3){
// 		break;
// 	}
// }

// for (i = 1; i <= 5; i++){

// 	if(i === 3){
// 		continue;
// 	}

// 	console.log(i);
// }

///////////////////////////////////////////////////
// CODING CHALLENGE 2

//1
var years = [1990, 1999, 1986];


//5
function printFullAge(yearsArg){
	var ageArray = [];
	var fullAges = [];

	for(i = 0; i < yearsArg.length; i++){
		ageArray[i] = 2016 - yearsArg[i];
	}

	for (i = 0; i < ageArray.length; i++){
		if (ageArray[i] >= 18){
			fullAges.push(true);
			console.log("Person " + (i + 1) + " is " + ageArray[i] + " years old and is of full age!");

		} else {
			console.log("Person " + (i + 1) + " is " + ageArray[i] + " years old and is NOT of full age!");
			fullAges.push(false);
		}
	}
	return fullAges;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([2000, 1920, 2012, 1915, 1999]);








