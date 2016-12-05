///////////////////////////////////////
// Lecture: Hoisting

// //functions
// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// //retirement(1965);
// var retirement = function(year){
//     console.log(65 - (2016 - year));
// }

// //variables
// console.log(age);
// var age = 23;

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

//execution stack has no influence in scoping. 
// so even though the stack calls function third()
// third() has no access to variables b and c
// only a and d

// function third() {
//     var d = 'John';
//     console.log(a + d);
// }




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1985);

// //calculateAge function is attached to the global(window)object so this === window
// function calculateAge(year){
//     console.log(2016 - year);
//     console.log(this);
// }


// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     calculateAge: function(){
//         console.log(this);
//         console.log(2016 - this.yearOfBirth);

//         // function innerFunction(){
//         //     console.log(this);
//         // }
//         // innerFunction();
//     }
// };

// john.calculateAge();

// var mike = {
//     name: "Mike",
//     yearOfBirth: 1984
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();









//TESTING EXECUTION STACK ORDER
// var a = "John";
// var b = "Hello";
// var c = "Pete";

// //4
// function one (){
//     two();
//     console.log(a)
// }

// //1,3
// function two () {
//     console.log(b);
//     three();
//     console.log(c);
// }

// one();

// //5
// console.log(c);

// //2
// function three(){
//     console.log(c);
// }

// OUTPUT: "Hello Pete Pete John Pete"








//TESTING VARIABLE SCOPE
// var age = 19;

// function foo(){
//     var age = 23;
//     console.log(age + age);//46
// }
// foo();

// if a var is not defined in the variable object of the
// execution context object/function it will look up the scope
// chain for a var of that name, so in the example above
// if 'age' is not defined in 'foo' then 'foo' will
// console log 19 as 'foo' is lexically nested in the global scope









//TESTING FUNCTION SCOPING
function one(){
    var a = 1;
    two();

    function two(){
        var b = 2;
        console.log(a + b);
        three();
    }
}

function four(){
    function three(){
        console.log("Hello");
    }
}
one();

// scoping also applies to function calls
// if a function is defined locally within a function that
// does not sit lexicially within the avaiable scope
// that function cannot be called
// the example above will say three() is not defined
// as it is not available to function two which is calling it