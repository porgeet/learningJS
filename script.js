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

var johnHeight = 159,
	johnAge = 26;

var craigHeight = 159,
	craigAge = 26;

var cecilHeight = 159,
	cecilAge = 26;

var johnScore = johnHeight + johnAge * 5,
	craigScore = craigHeight + craigAge * 5,
	cecilScore = cecilHeight + cecilAge * 5;

if(johnScore > craigScore && johnScore > cecilScore){
	console.log("John wins with a score of " + johnScore + ".");
} else if (cecilScore > craigScore && cecilScore > johnScore){
	console.log("Cecil wins with a score of " + cecilScore + ".");
} else if (craigScore > cecilScore && craigScore > johnScore){
	console.log("Craig wins with a score of " + craigScore + ".");
} else {
	console.log("Holy shit, it's a draw! John has a score of " + johnScore + " and Cecil has a score of " + cecilScore + " aaaand Craig has a score of " + craigScore + "! What are the odds?");
}

